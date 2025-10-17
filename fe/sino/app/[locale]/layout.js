import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
// import { Providers } from '@/components/Providers';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SCENORIA - Strategic Business Consulting",
  description: "Transform your business with our strategic consulting services. Technology, investment, and global market expertise.",
};

export default async function RootLayout({ children, params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams || { locale: 'en' };
  
  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Providers> */}
          {children}
        {/* </Providers> */}
      </body>
    </html>
  );
}

