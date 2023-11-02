import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const monteserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-monteserrat",
});
export const metadata: Metadata = {
  title: "IFMA Hrvatska",
  description:
    "Cilj Udruge je poboljšati, unaprijediti i proširiti znanja upravitelja resursima i uslugama (Facility Management) na tržištu, s posebnim naglaskom na članove IFMA-e u Hrvatskoj",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
