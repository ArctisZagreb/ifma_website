import { HeroText } from "@/components/page-parts/Homepage/HeroText";
import IntroVideo from "@/components/page-parts/Homepage/IntroVideo";
import { WhyIfma } from "@/components/page-parts/Homepage/WhyIfma";
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
      <section>
        <WhyIfma />
      </section>

      <section>
        <LatestNews />
      </section>
      <div>ifma u brojkama</div>
      <div>postani clan</div>
      <div>pokrovitelji</div>
      <div>newsletter</div>
      <div>footer</div>
    </main>
  );
}
