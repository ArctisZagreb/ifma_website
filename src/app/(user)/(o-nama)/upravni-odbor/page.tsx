import React from "react";
import { getBoardMembersShowcase } from "../../../../../sanity/lib/queries";
import { MemberCard } from "@/components/cards/MemberCard/MemberCard";
import { IShowcaseMemberCardData } from "@/types/types";

const UpravniOdborPage = async () => {
  const boardMembersToShow = await getBoardMembersShowcase();

  console.log("banana", boardMembersToShow.showcaseList);
  return (
    <>
      <section className="section-mb">
        <div className="article-main-title">
          <h1 className="article-h1">Upravni odbor</h1>
          <p className="article-h1-subtitle">IFMA Croatia Chapter</p>
          <span className="small-divider"></span>
        </div>
        <p className="article-p">
          Upravni odbor IFMA Hrvatske sastoji se od aktivnih suradnika i
          stručnih predstavnika priznatih u području profesionalnog upravljanja
          resursima i uslugama, koji uživaju ugled i povjerenje članova IFMA
          Hrvatske kao i IFMA Europe i Upravnog odbora IFMA krovne organizacije.
        </p>
        <p className="article-p">
          Upravni odbor IFMA Hrvatske bira skupština i ostaje na dužnosti dvije
          godine, s zadatkom utvrđivanja politika i programa koje Udruga treba
          slijediti kako bi se postigli institucionalni ciljevi.
        </p>
      </section>
      <section>
        <h2 className="text-headingS mb-[20px]">Upravni odbor</h2>
        {boardMembersToShow.showcaseList.length > 0 && (
          <div className="boardmembers-grid">
            {boardMembersToShow.showcaseList.map(
              (member: IShowcaseMemberCardData) => {
                return <MemberCard cardData={member} key={member._id} />;
              }
            )}
          </div>
        )}
      </section>
    </>
  );
};
export default UpravniOdborPage;
