import Footer from "@/components/Layout/Footer/Footer";
import { Navigation } from "@/components/Layout/Navigation/Navigation";
import { IComponentWithChildren } from "@/types/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IFMA Hrvatska",
  description:
    "Cilj Udruge je poboljšati, unaprijediti i proširiti znanja upravitelja resursima i uslugama (Facility Management) na tržištu, s posebnim naglaskom na članove IFMA-e u Hrvatskoj",
};

const RootLayout = ({ children }: IComponentWithChildren) => {
  return (
    <>
      <Navigation />
      <main className=""> {children}</main>
      <Footer />
    </>
  );
};

export default RootLayout;
