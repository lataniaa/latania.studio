import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/header";

export const metadata: Metadata = {
  title: "Latania Studio",
  description: "Portfolio de Latania",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body className="bg-[#151515] text-[#F8F5F0]">
        <Header />
        {children}
      </body>
    </html>
  );
}