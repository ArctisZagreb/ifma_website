import React from "react";
import { getPosts } from "../../../../../sanity/lib/queries";
import NewsCard from "@/components/cards/NewsCard/NewsCard";
import BecomeMemberBanner from "@/components/page-parts/Shared/BecomeMemberBanner/BecomeMemberBanner";
import { SponsorsList } from "@/components/page-parts/Shared/SponsorsList/SponsorsList";
const NovostiPage = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | undefined };
}) => {
  const queryParams = searchParams?.category ? searchParams.category : "all";

  const posts = await getPosts("all", queryParams);

  return (
    <>
      <section className="section-mb">
        <div className="flex flex-col items-center mx-auto section-mb">
          <h1 className="text-headingMMobile lg:text-headingM">Novosti</h1>
          <span className="small-divider"></span>
        </div>
        {posts && (
          <section className="grid-regular justify-around ">
            {posts.map((post) => {
              return <NewsCard cardData={post} key={post._id} />;
            })}
          </section>
        )}
      </section>
      <section className="section-mb">
        <BecomeMemberBanner />
      </section>
      <section className="section-mb">
        <SponsorsList sponsorsType="all" />
      </section>
    </>
  );
};

export default NovostiPage;
