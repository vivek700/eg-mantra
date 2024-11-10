"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const page = () => {
  const [h3Open, setH3open] = useState({ first: false });
  const [tools, setTools] = useState([
    "Drilling Equipment",
    "Split Spoon Sampler",
    "Drop Hammer",
    "Driving Head(Anvil)",
    "Guiding Rod",
    "Tripod Stand",
    "Extensions Rod",
    "Upper Shaft (8kg)",
    "Hammer with 575 mm",
    "Lower Shaft with anvil",
    "Replaceable Cone with 60 degree cone angle",
    "Reading Device (Scale)",
    "Test plate",
    "Hydraulic jack & pump",
    "Reaction beam or reaction truss",
    "Dial gauges",
    "Load Cell",
    "Pressure gauge",
    "Loading columns",
    "Tripod, Plumb bob, spirit level, etc. ",
    "I.S. Sieves (Stainless Steel Sieves & Brass Sieves)",
    "Sieve Shaker",
    "Laser Distance Meter",
    "Vernier Caliper (150mm,300mm)",
    "Measuring Tape (5m,7.5m,30m,60m,100m)",
    "Rebound Hammer",
    "Magnetic Rebar Finder",
    "Hammer Drill kit",
    "Heavy Duty Petrol Engine Earth Auger 52CC",
    "Post Hole Hand Auger",
    "Core cutter",
    "V Cat Apparatus",
    "Le Chatelier Apparatus",
    "Slump Test Apparatus",
    "Hydrometer Test",
    "Oven",
    "Pycnometer",
    "Cassagrande Apparatus",
    "Direct shear test Apparatus",
    "Plastic limit Apparatus",
    "Shrinkage limit Apparatus",
    "Compression testing machine",
    "Air permeameter for cement",
    "Impact testing machine for aggregate",
  ]);
  return (
    <>
      <section className="flex min-h-80 w-full items-center bg-white/50 bg-[url('../public/testing-labs/testing.jpg')] bg-cover bg-center bg-no-repeat bg-blend-overlay">
        <section className="mx-auto w-11/12 text-center 2xl:w-3/5">
          <h2 className="text-5xl">Laboratory for Building Material Testing</h2>
        </section>
      </section>
      <section className="bg-white">
        <section className="mx-auto w-11/12 py-5 2xl:w-3/5">
          <h3 className="py-3 text-center text-3xl uppercase text-blue-700">
            tools available
          </h3>
          <section className="md grid justify-items-center gap-y-3 rounded border border-slate-300 py-6 md:grid-cols-2">
            {tools.map((tool, index) => (
              <p key={tool}>
                {index + 1}: {tool}
              </p>
            ))}
          </section>
          <section className="py-5">
            <h3 className="my-3 flex cursor-pointer justify-between border-b border-slate-400 py-1 text-lg">
              <span>SOIL BEARING CAPACITY</span>
              <ChevronDown
                size={20}
                className={`text-blue-500 transition-all ease-in-out ${h3Open.first ? "origin-center rotate-180" : ""}`}
              />
            </h3>
            <h3 className="my-3 flex cursor-pointer justify-between border-b border-slate-400 py-1 text-lg">
              <span>GRAIN SIZE ANALYSIS OF SOIL & AGGREGATE</span>
              <ChevronDown
                size={20}
                className={`text-blue-500 transition-all ease-in-out ${h3Open.first ? "origin-center rotate-180" : ""}`}
              />
            </h3>
            <h3 className="my-3 flex cursor-pointer justify-between border-b border-slate-400 py-1 text-lg">
              <span>GRAIN SIZE ANALYSIS OF SOIL & AGGREGATE</span>
              <ChevronDown
                size={20}
                className={`text-blue-500 transition-all ease-in-out ${h3Open.first ? "origin-center rotate-180" : ""}`}
              />
            </h3>
            <h3 className="my-3 flex cursor-pointer justify-between border-b border-slate-400 py-1 text-lg">
              <span>CONCRETE TEST</span>
              <ChevronDown
                size={20}
                className={`text-blue-500 transition-all ease-in-out ${h3Open.first ? "origin-center rotate-180" : ""}`}
              />
            </h3>
          </section>
        </section>
      </section>
    </>
  );
};

export default page;
