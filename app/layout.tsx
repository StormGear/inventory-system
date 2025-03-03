import type { Metadata } from "next";
import "./globals.css";
import DashboardWrapper  from "./DashboardWrapper";
import { Theme } from "@radix-ui/themes";


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
        	<Theme>
        <DashboardWrapper>
           {children}
        </DashboardWrapper>
        </Theme>
      </body>
    </html>
  );
}
