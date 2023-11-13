import BecomeMemberBanner from "@/components/page-parts/Shared/BecomeMemberBanner/BecomeMemberBanner";
import { SponsorsList } from "@/components/page-parts/Shared/SponsorsList/SponsorsList";
import { IComponentWithChildren } from "@/types/types";

const RootLayout = ({ children }: IComponentWithChildren) => {
  return (
    <div className=" mt-[100px] lg:mt-[150px] mb-[60px] container-wide  ">
      {" "}
      {children}
      <section className="section-mb">
        <BecomeMemberBanner />
      </section>
      <section className="section-mb">
        <SponsorsList />
      </section>
    </div>
  );
};

export default RootLayout;