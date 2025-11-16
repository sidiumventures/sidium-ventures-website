import type { Metadata } from "next";
import { Manrope, Roboto } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sidium Ventures | Strategic Finance & Technology Solutions",
  description: "Strategic finance and technology solutions for growing home services businesses in the UK.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script src="https://assets.calendly.com/assets/external/widget.js" async></script>
      </head>
      <body
        className={`${manrope.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
