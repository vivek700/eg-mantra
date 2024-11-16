import Buttons from "@/app/components/ui/Buttons";
import Image from "next/image";
import info from "../../lib/data/data.json";
import PersonalInfo from "@/app/components/PersonalInfo";
import type { Info } from "@/app/lib/types/employee";

const page = () => {
  const infoElements = info.personalInfo.map((info: Info) => (
    <PersonalInfo key={crypto.randomUUID()} info={info} />
  ));

  return (
    <>
      <section className="bg-white/70 bg-[url('lib/images/about-us/bg-hero.jpeg')] bg-cover bg-center bg-no-repeat py-10 text-center bg-blend-overlay md:py-20">
        <section className="mx-auto w-11/12 2xl:w-3/5">
          <h2 className="pb-8 text-5xl md:text-7xl">About us</h2>
          <Buttons />
        </section>
      </section>
      <section className="bg-white/80 bg-[url('lib/images/about-us/bg-main.png')] bg-cover bg-center bg-no-repeat py-10 bg-blend-overlay">
        <section className="mx-auto w-11/12 2xl:w-3/5">
          <article className="flex flex-col gap-y-3 pb-8">
            <h3 className="text-3xl">Our Vision</h3>
            <h4 className="text-2xl">
              Is for India's building industry to become standardised and
              well-engineered.
            </h4>
            <p>
              Many buildings in India are not designed with architecture and
              engineering in mind, and many of them do not even comply with
              construction rules, making them unsafe to those who use them and
              those who live nearby.
            </p>
            <p>
              Our objective is for all new construction in India to be built
              with all of the building parameters in mind, making our cities
              safer and more attractive.
            </p>
          </article>
          <article className="flex flex-col gap-y-3">
            <h3 className="text-3xl">Our Mission</h3>
            <h4 className="text-2xl">
              aim to make affordable, well-designed housing available to
              everyone.
            </h4>
            <p>
              One of the reasons that architectural and engineering services
              aren't utilized is the additional service cost that comes with all
              of that knowledge.
            </p>
            <p>Our goal is to make building more cost-effective.</p>
            <p>
              We intend to cut the average cost of building by 20% to 30% by
              using smart design, more alternative materials, and low-cost
              services.
            </p>
          </article>
        </section>
      </section>
      <section className="bg-white">
        <section className="mx-auto flex w-11/12 flex-col items-center 2xl:w-3/5">
          <Image
            src={"/logo.svg"}
            width={150}
            height={150}
            alt="company logo"
            className="w-[9rem]"
          />
          <h2 className="text-5xl">Engineer Mantra</h2>
          <article className="flex flex-col gap-y-3 py-8 md:py-14">
            <h5 className="text-2xl">
              We are a group of engineers and experts who are dedicated to
              raising people's living standards and quality of life.
            </h5>
            <p>
              Our founder, Mr. Akhilesh Bhatt, founded Engineer Mantra in 2017
              with the goal of bridging the gap between conventional
              construction methods and engineering standards.
            </p>
            <p>
              Since then, we've assisted in the improvement of the construction
              quality of thousands of structures.
            </p>
            <p>We hope that this figure will be in the millions.</p>
          </article>
          <section>{infoElements}</section>
        </section>
      </section>
    </>
  );
};

export default page;
