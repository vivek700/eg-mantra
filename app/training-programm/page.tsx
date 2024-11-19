import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <section className="bg-slate-900/80 bg-[url('lib/images/training-programm/bg-hero.jpeg')] bg-cover bg-center bg-no-repeat py-10 text-center text-white bg-blend-overlay md:py-20">
        <section className="mx-auto w-11/12 2xl:w-3/5">
          <h2 className="pb-8 text-5xl">
            Skill Development / Training Program
          </h2>
          <section className="text-lg">
            <p>We are determined to improve the quality of engineering.</p>
            <p>
              To Achieve this goal we provide high-quality training in CAD and
              site to our Future engineers.
            </p>
          </section>
          <nav className="pt-8 text-lg text-blue-600">
            <Link href={"/training-programm/basic-computing"}>
              <button className="mx-3 mt-5 rounded bg-white px-3 py-1 outline outline-1 outline-blue-600 transition-colors hover:bg-slate-300 focus:bg-slate-300">
                Basic Computing
              </button>
            </Link>
            <Link href={"/training-programm/ms-office"}>
              <button className="mx-3 mt-5 rounded bg-white px-3 py-1 outline outline-1 outline-blue-600 transition-colors hover:bg-slate-300 focus:bg-slate-300">
                Ms Office
              </button>
            </Link>
            <Link href={"/training-programm/autocad"}>
              <button className="mx-3 mt-5 rounded bg-white px-3 py-1 outline outline-1 outline-blue-600 transition-colors hover:bg-slate-300 focus:bg-slate-300">
                AutoCAD
              </button>
            </Link>
            <Link href={"/training-programm/revit"}>
              <button className="mx-3 mt-5 rounded bg-white px-3 py-1 outline outline-1 outline-blue-600 transition-colors hover:bg-slate-300 focus:bg-slate-300">
                Revit
              </button>
            </Link>
            <Link href={"/training-programm/staad-pro"}>
              <button className="mx-3 mt-5 rounded bg-white px-3 py-1 outline outline-1 outline-blue-600 transition-colors hover:bg-slate-300 focus:bg-slate-300">
                Staad.Pro
              </button>
            </Link>
            <Link href={"/training-programm/3ds-max"}>
              <button className="mx-3 mt-5 rounded bg-white px-3 py-1 outline outline-1 outline-blue-600 transition-colors hover:bg-slate-300 focus:bg-slate-300">
                3Ds Max
              </button>
            </Link>
          </nav>
        </section>
      </section>
      <section className="bg-white py-10 text-black">
        <section className="mx-auto w-11/12 2xl:w-3/5">
          <p className="leading-relaxed">
            With a combined industry experience of over 24 years, we are experts
            in most of the engineering software that are used in every industry.
            Engineering software have became a necessity and need for quality
            training in these software's is missing. We, at engineer mantra
            promise to deliver the best training in all engineering software's
            carefully catered through years of experience to give young
            engineers the push they need to gain success in their career. Unlike
            most other training institute that are still giving the by book
            training that is only good in a resume we focus on practical
            learning, our team has done thousands projects nation wide, we are
            going to include these in the training program to give real world
            training
          </p>
          <section className="pt-10">
            <iframe
              loading="lazy"
              className="rounded-lg"
              src="https://docs.google.com/spreadsheets/d/1hBiao5wYJlWa2gOuCmt-lRvWjwM7iakl/edit?gid=889583001#gid=889583001"
              width="100%"
              height="600"
            ></iframe>
            <iframe
              loading="lazy"
              className="rounded-lg pt-10"
              src="https://docs.google.com/forms/d/e/1FAIpQLScKX9tbkqzU_DsxETOG4YUxliZMX4tge-kFsyyS7Quc2P8DEw/viewform"
              width="100%"
              height="600"
            ></iframe>
          </section>
        </section>
      </section>
    </>
  );
};

export default page;
