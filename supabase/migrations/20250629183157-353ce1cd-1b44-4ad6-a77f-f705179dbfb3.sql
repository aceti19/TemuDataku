
-- Create products table
CREATE TABLE public.products (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL,
  price TEXT NOT NULL,
  duration TEXT,
  features TEXT[],
  status TEXT DEFAULT 'available',
  button_text TEXT DEFAULT 'Ambil Praktek Ini',
  is_available BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Insert sample products based on the images
INSERT INTO public.products (name, description, category, price, duration, features, status, button_text, is_available) VALUES
('Bootcamp Data Analyst', 'Cocok untuk kamu yang tertarik analisis data', 'Data Analysis', 'Rp 1.199K', '3 bulan', ARRAY['Analisis data mendalam', 'Visualisasi data', 'SQL dan Python', 'Proyek real-world'], 'available', 'Daftar Sekarang', true),
('Bootcamp Data Scientist', 'Cocok untuk kamu yang mau leveling up', 'Data Science', 'Rp 1.199K', '4 bulan', ARRAY['Machine Learning', 'Deep Learning', 'Statistics', 'Portfolio projects'], 'available', 'Daftar Sekarang', true),
('Bootcamp Data Science for Beginner', 'Cocok untuk kamu yang baru mulai', 'Data Science', 'Rp 449K', '2 bulan', ARRAY['Dasar-dasar data science', 'Python fundamentals', 'Basic statistics', 'Hands-on projects'], 'available', 'Daftar Sekarang', true),
('Data Analysis - Customer Analysis', 'Kamu akan belajar cara menganalisis pelanggan, mencari trend yang tersembunyi, dan bagaimana prospek pelanggan kedepannya', 'Data Analysis', 'Rp 299K', '6 minggu', ARRAY['Customer segmentation', 'Behavioral analysis', 'Trend analysis', 'Business insights'], 'available', 'Ambil Praktek Ini', true),
('Machine Learning - Classification', 'Kamu akan belajar mulai dari pemrosesan data seperti feature engineering, encoding, dan labelling. Kamu juga akan menggunakan package untuk melakukan pemodelan klasifikasi', 'Machine Learning', 'Rp 399K', '8 minggu', ARRAY['Feature engineering', 'Model training', 'Classification algorithms', 'Model evaluation'], 'available', 'Ambil Praktek Ini', true),
('Machine Learning - NLP', 'Kamu akan belajar bagaimana cara mengolah teks, menganalisis sentiment, dan juga klasifikasi teks seperti spam detection dan sejenisnya', 'Machine Learning', 'Rp 499K', '10 minggu', ARRAY['Text processing', 'Sentiment analysis', 'Spam detection', 'Language models'], 'Coming soon', 'Coming Soon', false),
('Data Scientist - Churn Prediction', 'Kamu akan belajar mulai dari membersihkan data dan membuat model untuk memprediksi kemungkinan pelanggan melakukan churn', 'Data Science', 'Rp 599K', '12 minggu', ARRAY['Data cleaning', 'Predictive modeling', 'Customer retention', 'Business strategy'], 'Coming soon', 'Coming Soon', false),
('Machine Learning - Computer Vision', 'Kamu akan belajar bagaimana mengolah gambar dan membuat klasifikasi dari dataset yang disediakan', 'Machine Learning', 'Rp 699K', '14 minggu', ARRAY['Image processing', 'CNN', 'Object detection', 'Computer vision'], 'Coming soon', 'Coming Soon', false),
('Machine Learning - Time Series', 'Kamu akan belajar pemrosesan data untuk tipe data time series serta pembuatan model model time series dari klasik hingga penggunaan neural network untuk time series', 'Machine Learning', 'Rp 799K', '16 minggu', ARRAY['Time series analysis', 'Forecasting', 'ARIMA models', 'Neural networks'], 'Coming soon', 'Coming Soon', false),
('Mentoring 1 on 1', 'Mentoring 45 menit dengan berbagai topik seputar data science', 'Mentoring', 'Rp 49.000', '45 menit', ARRAY['Personal guidance', 'Career advice', 'Technical support', 'Portfolio review'], 'available', 'Choose Plan', true),
('Mentoring Group', 'Mentoring 90 menit dengan grup untuk pembelajaran bersama', 'Mentoring', 'Rp 159.000', '90 menit', ARRAY['Group learning', 'Peer interaction', 'Collaborative projects', 'Networking'], 'available', 'Choose Plan', true);

-- Enable RLS for products (make it public readable)
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Create policy to allow everyone to read products
CREATE POLICY "Everyone can view products" 
  ON public.products 
  FOR SELECT 
  TO PUBLIC
  USING (true);
