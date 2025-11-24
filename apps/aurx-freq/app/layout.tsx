import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AURX FreQ - ARIA ONE Universe",
  description: "Tune into the Frequency of Tomorrow",
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
