import React from "react";
import Buttons from "../components/ui/Buttons";

const page = () => {
  return (
    <>
      <section className="h-dvh bg-slate-900/80 bg-[url('../public/design-services/background-hero.jpg')] bg-cover bg-center bg-no-repeat text-center text-white bg-blend-overlay">
        <section className="mx-auto w-11/12 2xl:w-3/5">
          <h1>Design Services</h1>
          <Buttons />
        </section>
      </section>
      ;
    </>
  );
};

export default page;
