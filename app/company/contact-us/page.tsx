import Buttons from "@/app/components/ui/Buttons";
import React from "react";

const Page = () => {
  return (
    <>
      <section className="bg-white/70 bg-[url('lib/images/contact-us/bg-hero.jpg')] bg-cover bg-center bg-no-repeat py-10 text-center bg-blend-overlay md:py-20">
        <section className="mx-auto w-11/12 2xl:w-3/5">
          <h2 className="pb-8 text-3xl md:text-6xl">Contact Us</h2>
          <Buttons />
        </section>
      </section>
    </>
  );
};

export default Page;
