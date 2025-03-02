import type { Metadata } from "next";
import "./globals.css";
import DashboardWrapper  from "./DashboardWrapper";


export const metadata: Metadata = {
  title: "Inventory System",
  description: "An inventory system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <DashboardWrapper>
        {children}
        </DashboardWrapper>
      
      </body>
    </html>
  );
}
