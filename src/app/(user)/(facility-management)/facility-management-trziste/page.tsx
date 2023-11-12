import React from "react";
import Image from "next/image";
import { TRZISTE_STRATEGIJE_TOCKE } from "@/constants";
const FacilityManagementTrzistePage = () => {
  return (
    <article>
      <section className="article-split">
        <div className="article-split-text">
          <div className="article-main-title-container">
            <h1 className="article-h1">Facility Management tržište</h1>
            <p className="article-h1-subtitle">
              Globalno tržište upravljanja resursima i uslugama (Facility
              Management)
            </p>
            <span className="small-divider"></span>
          </div>
          <p className="article-p">
            Prema „Global FM market report 2018“ globalno FM tržište 2017.
            godine iznosilo je 1152 milijardi USD, a postotak zaposlenih u FM
            industriji u ukupnom broju zaposlenih iznosio je 1,7%. U tu brojku
            uključena je 41 zemlja (Hrvatske nema na tome popisu). Godišnji rast
            u odnosu na 2016. godinu iznosio je 7,4%. Od toga iznosa preko 50%
            dolazi od vanjskih FM usluga.
          </p>
          <p className="article-p">
            Sjeverna Amerika i Europa su najrazvijenija FM tržišta u pogledu
            vanjskih usluga uvođenja koncepta IFM-a (integrirani FM), mnogi
            globalni pružatelji FM usluga dolaze iz tih regija. Ključni
            pokretači rasta su zahtjevi za integracijom usluga i uključivanjem
            servisa koji daju dodanu vrijednost.
          </p>
          <p className="article-p">
            Što se Europe tiče, najrazvijenije tržište jest Velika Britanija,
            koja je predvodnik u inovacijama i u pružanju vanjskih usluga.
            Očekuje se da će FM tvrtke koje nude inovativne usluge s dodanom
            vrijednošću u područjima kao što su upravljanje radnim okolišem,
            održivost, gospodarenje energijom i analitika procesa FM-a značajno
            prosperirati.
          </p>
          <p className="article-p">
            Na nerazvijenim FM tržištima glavni utjecaj na rast FM industrije
            imaju međunarodne korporacije, koje traže FM uslugu na lokalnim
            tržištima, te na taj način stimuliraju rast FM tržišta.
          </p>
        </div>
        <div className="article-split-media">
          <div className="article-image-split-container">
            <Image
              width={700}
              height={800}
              src="/assets/images/facility-management/trziste-1.avif"
              alt="statistika trzista"
              className="article-image-split"
              loading="eager"
            />
          </div>
        </div>
      </section>
      <section className="article-dark-wrapper ">
        <p className="article-p">
          <span className="article-emphesise">
            PROJEKCIJE FM TRŽIŠTA DO 2025. GODINE
          </span>
        </p>
        <span className="small-divider bg-white"></span>
        <p className="article-p">
          Očekuje se da će globalizacija ugovora i integracija usluga ubrzati
          rast FM tržišta. Naročito se očekuje značajan rast IFM sektora. (IFM
          je kratica za Integrated Facility Management- jedan pružatelj usluga
          za sve FM aktivnosti).
        </p>
        <p className="article-p">
          Prosječna stopa rasta FM vanjskih usluga od 2017-2025 projicirana je
          na 2,2%, dok bi IFM dio trebao rasti 6,3%. Još značajniji rast od 7,6%
          očekuje se za usluge gospodarenja energijom. Predviđanja su da će pet
          vodećih FM kompanija držati 13,9% globalnog tržišta, što znači
          okrupnjavanje u FM sektoru.
        </p>
      </section>
      <section className="article-split">
        <div className="article-split-text">
          <p className="article-p">
            Daljnja prilagodba ići će u smjeru razvijanja ciljanih strategija za
            klijente, a teme koje će tim strategijama biti obuhvaćene su:
          </p>
          <ul className="article-list-disc">
            {TRZISTE_STRATEGIJE_TOCKE.map((item) => {
              return (
                <li key={item.id}>
                  <span className="article-emphesise">{item.title}</span>
                  {item.list && (
                    <ul className="article-list-disc">
                      {item.list.map((sublistItem) => {
                        return (
                          <li key={sublistItem.id}>{sublistItem.title}</li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="article-split-media">
          <div className="article-image-split-container">
            <Image
              width={700}
              height={800}
              src="/assets/images/facility-management/trziste-2.avif"
              alt="statistika trzista"
              className="article-image-split"
            />
          </div>
        </div>
      </section>
      <section className="article-dark-wrapper ">
        <p className="article-p">
          <span className="article-emphesise">
            TRŽIŠTE UPRAVLJANJA RESURSIMA I USLUGAMA (FACILITY MANAGEMENT) U
            HRVATSKOJ
          </span>
        </p>
        <span className="small-divider bg-white"></span>
        <p className="article-p">
          Hrvatska spada u nerazvijena FM tržišta. Uzmemo li u obzir da
          prosječan udio zaposlenika koji se bave FM-om globalno iznosi 1,7%,
          moguće je lako izračunati da bi konkretna brojka za hrvatsko tržište
          iznosila 23.460 zaposlenih (1,38 mil zaposlenih x 1,7%) koji se bave
          upravljanjem resursima i uslugama (FM). S obzirom na globalni prosjek
          prema kojem preko 50% zaposlenih u FM-u radi u FM kompanijama, broj
          radnika zaposlenih u FM kompanijama u Hrvatskoj iznosio bi preko
          11.000. Nije provedeno istraživanje koliko FM tvrtke u Hrvatskoj
          ukupno imaju zaposlenih, ali zbrojimo li one najveće prema javno
          dostupnim podacima, dolazimo do znatno manjeg broja.
        </p>
      </section>
      <section className="article-split">
        <div className="article-split-text">
          <p className="article-p">
            U slijedećih pet godina očekuje se ulazak globalnih pružatelja
            usluga upravljanja resursima i uslugama (FM) prvenstveno u područje
            gdje su klijenti velike međunarodne korporacije. Na taj način će se
            rast IFM-a u jednom dijelu preliti i na Hrvatsku.
          </p>
          <p className="article-p">
            Osim globalnih trendova, sve veći izazov za hrvatsko FM tržište
            predstavljat će nedostatak radne snage zbog izlaznih migracija
            stanovništva. U dijelu usluga bez dodane vrijednosti, to može biti
            djelomično kompenzirano ulaznim migracijama, a nedostatak FM
            stručnjaka biti će još izraženiji. Dodatni izazov jest da će
            stručnjake biti teško zadržati povećanjem plaća s obzirom na
            kontinuirani pritisak na smanjenje cijena samih FM usluga.
          </p>
          <p className="article-p">
            Kao rezultat svih tih trendova nameće se nužnost transformacije
            postojećih lokalnih pružatelja usluga, kako bi bili sposobni pružati
            usluge sa dodanom vrijednošću, i to po modelu samostalnog obavljanja
            usluge.
          </p>
          <p className="article-p">
            Kako je Hrvatska malo FM tržište, za lokane pružatelje usluga rizik
            gubitka ugovora sa nekim od postojećih klijenata ima znatno veći
            utjecaj nego na razvijenim tržištima.
          </p>
          <p className="article-p"></p>
          <ul className="article-list-disc">
            <li>
              Zastarjelih postojećih modela vanjskih usluga direktnih
              izvršitelja usluga bez prave strategije i ciljeva, koji ne daju
              zadovoljavajuće rezultate
            </li>
            <li>
              nedostatka FM kompetencija u javnom sektoru, što onemogućava
              upravljanje promjenama
            </li>
            <li>snažan otpor vanjskim uslugama</li>
          </ul>
          <p className="article-p">
            Ukoliko se u Hrvatskoj uspori rast gospodarstva ili dođe do nove
            recesije, ponovno će se povećati pritisak za korištenje vanjskih
            usluga u javnom sektoru, ali će svejedno ostati problem nedostatka
            kompetencija. Iz toga se može zaključiti da postoji potencijal za
            rast tvrtki koje će pružati usluge savjetovanja u tranziciji prema
            modernom FM-u.
          </p>
        </div>
        <div className="article-split-media">
          <div className="article-image-split-container">
            <Image
              width={700}
              height={800}
              src="/assets/images/facility-management/card-facility-management-trziste.avif"
              alt="statistika trzista"
              className="article-image-split"
            />
          </div>
        </div>
      </section>
    </article>
  );
};

export default FacilityManagementTrzistePage;
