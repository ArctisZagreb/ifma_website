import { HeroText } from "@/components/page-parts/Homepage/HeroText";
import IntroVideo from "@/components/page-parts/Homepage/IntroVideo";

import { WhyIfma } from "@/components/page-parts/Homepage/WhyIfma";
import BecomeMemberBanner from "@/components/page-parts/Shared/BecomeMemberBanner/BecomeMemberBanner";
import IfmaNumbers from "@/components/page-parts/Shared/IfmaNumbers/IfmaNumbers";
import { LatestNews } from "@/components/page-parts/Shared/LatestNews/LatestNews";
import { SponsorsList } from "@/components/page-parts/Shared/SponsorsList/SponsorsList";

export default function Home() {
  return (
    <main className="container-wide">
      <section>
        <div className=" section-mb">
          <IntroVideo />
        </div>

        <div className="section-mb">
          <HeroText />
        </div>
      </section>
      <section className="section-mb">
        <WhyIfma />
      </section>

      <section className="section-mb">
        <LatestNews />
      </section>
      <section className="section-mb">
        <IfmaNumbers />
        <BecomeMemberBanner />
      </section>
      <section className="section-mb">
        <SponsorsList sponsorsType="all" />
      </section>
    </main>
  );
}
