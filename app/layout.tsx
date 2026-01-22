import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import FormProviderWrapper from "./components/FormProviderWrapper";
import ToastProvider from "./components/ToastProvider";
import { getMetadataForPath } from "./pages/utils/metadata";
import Header from "./pages/components/Header/Header";
import Footer from "./pages/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Default metadata (can be overridden by individual pages)
export const metadata: Metadata = getMetadataForPath('/');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <FormProviderWrapper>
          <Header />
          {children}
          <Footer />
          <ToastProvider />
        </FormProviderWrapper>
      </body>
    </html>
  );
}
