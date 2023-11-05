import { IComponentWithChildren } from "@/types/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IFMA Studio",
  description: "Studio Page for adding and editing content",
};

export default function RootLayout({ children }: IComponentWithChildren) {
  return <>{children}</>;
}
