import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KikiX - ARIA ONE Universe",
  description: "Experience the Future of Innovation",
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
