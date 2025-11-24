import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ARIA ONE - ARIA ONE Universe",
  description: "Welcome to the ARIA ONE Universe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
