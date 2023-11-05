import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Layout/Navigation/Navigation";
import { IComponentWithChildren } from "@/types/types";

const monteserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-monteserrat",
});

export default function RootLayout({ children }: IComponentWithChildren) {
  return (
    <html lang="en">
      <body
        className={`${monteserrat.variable} bg-base-100 text-base-content font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
