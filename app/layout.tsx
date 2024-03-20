import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tik Tok Clone",
  description: "Tik Tok Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
