import './globals.css';

export const metadata = {
  title: 'বলাকা | শিক্ষার সহজ পথ',
  description: 'বাংলাদেশের চতুর্থ থেকে দ্বাদশ শ্রেণির শিক্ষার্থীদের জন্য পাঠ্যক্রমভিত্তিক শিক্ষাসামগ্রী।',
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body>{children}</body>
    </html>
  );
}
