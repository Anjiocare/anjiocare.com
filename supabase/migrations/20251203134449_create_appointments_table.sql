/*
  # Create appointments table for Anjio Care Hospital

  1. New Tables
    - `appointments`
      - `id` (uuid, primary key) - Unique identifier for each appointment
      - `patient_name` (text) - Full name of the patient
      - `phone` (text) - Contact phone number
      - `email` (text, optional) - Patient email address
      - `preferred_doctor` (text) - Doctor preference (default: Dr. Anjith Vupputuri)
      - `medical_concern` (text) - Reason for appointment
      - `preferred_date` (date, optional) - Preferred appointment date
      - `preferred_time` (text, optional) - Preferred time slot
      - `status` (text) - Appointment status (pending/confirmed/cancelled)
      - `sms_sent` (boolean) - Track if confirmation SMS was sent
      - `created_at` (timestamptz) - Timestamp of booking
      - `updated_at` (timestamptz) - Last update timestamp

  2. Security
    - Enable RLS on `appointments` table
    - Add policy for public insert (anyone can book)
    - Add policy for authenticated staff to view all appointments
*/

CREATE TABLE IF NOT EXISTS appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_name text NOT NULL,
  phone text NOT NULL,
  email text,
  preferred_doctor text DEFAULT 'Dr. Anjith Vupputuri',
  medical_concern text NOT NULL,
  preferred_date date,
  preferred_time text,
  status text DEFAULT 'pending',
  sms_sent boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create appointments"
  ON appointments
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view appointments"
  ON appointments
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update appointments"
  ON appointments
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);