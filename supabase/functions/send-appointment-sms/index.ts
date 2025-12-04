import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { patientName, phone } = await req.json();

    if (!patientName || !phone) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: patientName and phone" }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const message = `Dear ${patientName}, your appointment request at Anjio Care Heart & Vascular Hospital has been received. Our team will contact you shortly to confirm. For emergencies, call 7036449444.`;

    console.log(`[SMS] Preparing message for ${phone}: ${message}`);

    const TWILIO_ACCOUNT_SID = Deno.env.get("TWILIO_ACCOUNT_SID");
    const TWILIO_AUTH_TOKEN = Deno.env.get("TWILIO_AUTH_TOKEN");
    const TWILIO_PHONE = Deno.env.get("TWILIO_PHONE");

    if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN || !TWILIO_PHONE) {
      console.warn(
        "SMS provider not configured. To enable SMS, set TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, and TWILIO_PHONE environment variables."
      );
      return new Response(
        JSON.stringify({
          success: true,
          message: "Appointment confirmed. SMS provider not yet configured.",
          note: "To enable SMS notifications, configure Twilio credentials in Edge Function secrets.",
        }),
        {
          status: 200,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const auth = btoa(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`);

    try {
      const smsResponse = await fetch(
        `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`,
        {
          method: "POST",
          headers: {
            "Authorization": `Basic ${auth}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            "To": phone.startsWith("+") ? phone : `+91${phone}`,
            "From": TWILIO_PHONE,
            "Body": message,
          }).toString(),
        }
      );

      if (!smsResponse.ok) {
        const errorData = await smsResponse.json();
        console.error("Twilio API error:", errorData);
        return new Response(
          JSON.stringify({
            success: false,
            error: "Failed to send SMS via Twilio",
            details: errorData,
          }),
          {
            status: smsResponse.status,
            headers: {
              ...corsHeaders,
              "Content-Type": "application/json",
            },
          }
        );
      }

      const smsData = await smsResponse.json();
      console.log(`SMS sent successfully. SID: ${smsData.sid}`);

      return new Response(
        JSON.stringify({
          success: true,
          message: "Appointment confirmation SMS sent",
          messageSid: smsData.sid,
        }),
        {
          status: 200,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (twilioError) {
      console.error("Error calling Twilio API:", twilioError);
      throw twilioError;
    }
  } catch (error) {
    console.error("Error processing SMS request:", error);
    return new Response(
      JSON.stringify({
        error: "Internal server error",
        details: error instanceof Error ? error.message : String(error),
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});