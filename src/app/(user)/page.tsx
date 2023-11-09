import { HeroText } from "@/components/page-parts/Homepage/HeroText";
import IntroVideo from "@/components/page-parts/Homepage/IntroVideo";
import { WhyIfma } from "@/components/page-parts/Homepage/WhyIfma";
import BecomeMemberBanner from "@/components/page-parts/Shared/BecomeMemberBanner/BecomeMemberBanner";
import IfmaNumbers from "@/components/page-parts/Shared/IfmaNumbers/IfmaNumbers";
import { LatestNews } from "@/components/page-parts/Shared/LatestNews/LatestNews";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container-wide">
      <section>
        <div className=" mb-[70px]">
          <IntroVideo />
        </div>

        <div className="mb-[70px]">
          <HeroText />
        </div>
      </section>
      <section className="mb-[70px]">
        <WhyIfma />
      </section>

      <section className="mb-[70px]">
        <LatestNews />
      </section>
      <section className="mb-[70px]">
        <IfmaNumbers />
        <BecomeMemberBanner />
      </section>
      <section>
        <div>pokrovitelji</div>
      </section>
      <section>
        <div>newsletter</div>
        <div>footer</div>
      </section>
    </main>
  );
}
