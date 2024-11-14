"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const page = () => {
  const [h3Open, setH3open] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
  });

  const handleOpenState = (str: string) => {
    if (str === "first") {
      setH3open((prev) => ({ ...prev, first: !prev.first }));
    } else if (str === "second") {
      setH3open((prev) => ({ ...prev, second: !prev.second }));
    } else if (str === "third") {
      setH3open((prev) => ({ ...prev, third: !prev.third }));
    } else if (str === "fourth") {
      setH3open((prev) => ({ ...prev, fourth: !prev.fourth }));
    }
  };
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
      <section
        className={`flex min-h-80 w-full items-center bg-white/50 bg-[url('lib/images/testing-labs/testing.jpg')] bg-cover bg-center bg-no-repeat bg-blend-overlay`}
      >
        <section className="mx-auto w-11/12 text-center 2xl:w-3/5">
          <h2 className="text-5xl text-[#052439]">
            Laboratory for Building Material Testing
          </h2>
        </section>
      </section>
      <section className="bg-white">
        <section className="mx-auto w-11/12 py-5 2xl:w-3/5">
          <h3 className="py-3 text-center text-3xl uppercase text-blue-800">
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
            <h3
              onMouseDown={() => handleOpenState("first")}
              className="my-3 flex cursor-pointer justify-between border-b border-slate-400 py-1 text-lg text-blue-800"
            >
              <span>SOIL BEARING CAPACITY</span>
              <ChevronDown
                size={20}
                className={`text-blue-500 transition-all ease-in-out ${h3Open.first ? "origin-center rotate-180" : ""}`}
              />
            </h3>
            {h3Open.first && (
              <section className="flex flex-col gap-3 pb-3">
                <p>
                  Are you in need of accurate and reliable information about the
                  bearing capacity of your soil? Look no further! Our team
                  offers a range of testing services to determine the capacity
                  of soil to support applied loads. Our tests include:
                </p>
                <p>
                  1. Standard penetration test: This method involves driving a
                  thin, pointed rod into the ground and measuring the resistance
                  encountered.
                </p>
                <p>
                  2. Dynamic cone penetration test: This test uses a cone-shaped
                  penetrometer to measure the resistance of soil to penetration.
                </p>
                <p>
                  3. Plate load test: This method involves placing a flat plate
                  on the ground and applying a load to it, measuring the
                  settlement of the plate to determine the soil's bearing
                  capacity. Don't let uncertain soil conditions jeopardize the
                  stability of your project. Contact us today to learn more
                  about our bearing capacity testing services.
                </p>
              </section>
            )}
            <h3
              onMouseDown={() => handleOpenState("second")}
              className="my-3 flex cursor-pointer justify-between border-b border-slate-400 py-1 text-lg text-blue-800"
            >
              <span>GRAIN SIZE ANALYSIS OF SOIL & AGGREGATE</span>
              <ChevronDown
                size={20}
                className={`text-blue-500 transition-all ease-in-out ${h3Open.second ? "origin-center rotate-180" : ""}`}
              />
            </h3>
            {h3Open.second && (
              <section className="flex flex-col gap-3 pb-3">
                <p>
                  Are you in need of accurate and reliable information about the
                  grain size distribution of your soil? Look no further! Our
                  team offers a range of testing services to determine the grain
                  size of your soil. Our tests include:
                </p>
                <p>
                  1. Sieve analysis: This method involves passing the soil
                  through a series of sieves with progressively smaller
                  openings, allowing us to determine the distribution of
                  particle sizes within the soil.
                </p>
                <p>
                  2. Sedimentation analysis: This test involves measuring the
                  rate at which particles of different sizes settle out of a
                  suspension, allowing us to determine the grain size
                  distribution of the soil. Grain size analysis is essential for
                  a wide range of applications, including the design of earth
                  dams and the determination of soil suitability for road
                  construction and airfields. Contact us today to learn more
                  about our grain size analysis services.
                </p>
              </section>
            )}
            <h3
              onMouseDown={() => handleOpenState("third")}
              className="my-3 flex cursor-pointer justify-between border-b border-slate-400 py-1 text-lg text-blue-800"
            >
              <span>GRAIN SIZE ANALYSIS OF SOIL & AGGREGATE</span>
              <ChevronDown
                size={20}
                className={`text-blue-500 transition-all ease-in-out ${h3Open.third ? "origin-center rotate-180" : ""}`}
              />
            </h3>
            {h3Open.third && (
              <section className="flex flex-col gap-3 pb-3">
                <p>
                  Are you in need of accurate and reliable information about the
                  strength and properties of your concrete structures without
                  causing any damage? Look no further! Our team offers a range
                  of non-destructive testing (NDT) services for concrete. Our
                  tests include:
                </p>
                <p>
                  1. Rebound hammer: This method involves striking the surface
                  of the concrete with a spring-loaded hammer and measuring the
                  rebound of the hammer to determine the surface hardness and
                  compressive strength of the concrete.
                </p>
                <p>
                  2. Magnetic rebar finder: This device uses a magnetic field to
                  locate rebar, wire mesh, or other metallic reinforcing within
                  concrete structures.
                </p>
                <p>
                  3. Laser distance meter: This device uses a laser beam to
                  measure the distance between two points, allowing us to obtain
                  precise measurements of the dimensions of concrete structures.
                </p>
                <p>
                  4. Core cutting: This method involves removing small
                  cylindrical samples of concrete from the structure and testing
                  them in a laboratory to determine the compressive strength of
                  the concrete. NDT is an essential tool for evaluating the
                  condition of concrete structures and ensuring their safety and
                  integrity. Contact us today to learn more about our NDT
                  services for concrete.
                </p>
              </section>
            )}
            <h3
              onMouseDown={() => handleOpenState("fourth")}
              className="my-3 flex cursor-pointer justify-between border-b border-slate-400 py-1 text-lg text-blue-800"
            >
              <span>CONCRETE TEST</span>
              <ChevronDown
                size={20}
                className={`text-blue-500 transition-all ease-in-out ${h3Open.fourth ? "origin-center rotate-180" : ""}`}
              />
            </h3>
            {h3Open.fourth && (
              <section className="flex flex-col gap-3 pb-3">
                <p>
                  Are you in need of reliable and accurate testing services for
                  your concrete? Look no further! Our state-of-the-art concrete
                  testing lab offers a range of services to meet your needs. Our
                  services include:
                </p>
                <p>
                  1. Aggregate grading: This test determines the size and
                  distribution of the particles within a sample of aggregate,
                  which is an important factor in the strength and durability of
                  concrete.
                </p>
                <p>
                  2. Standard consistency test: This method measures the
                  consistency of concrete, which is an indication of its
                  workability and suitability for various construction
                  applications.
                </p>
                <p>
                  3. Initial/final settling time test: This test measures the
                  time it takes for a sample of concrete to settle after it has
                  been mixed, which can help to determine the quality of the
                  concrete.
                </p>
                <p>
                  4. Compressive strength test: This method involves applying a
                  compressive load to a sample of concrete and measuring the
                  amount of deformation that occurs, which is an indication of
                  the strength of the concrete.
                </p>
                <p>
                  5. Air permeability test: This test measures the ability of
                  air to pass through the pores in a sample of concrete, which
                  is an important factor in its durability and resistance to
                  freeze-thaw damage.
                </p>
                <p>
                  6. Slump test: This method involves measuring the amount of
                  deformation that occurs when a sample of concrete is placed in
                  a slump cone, which is an indication of its workability.
                </p>
                <p>
                  7. Soundness test of cement: This test measures the ability of
                  cement to expand and contract without cracking, which is an
                  important factor in the durability of concrete.
                </p>
                <p>
                  8. Impact test of aggregates: This method involves striking a
                  sample of the aggregate with a falling weight and measuring
                  the amount of deformation that occurs, which is an indication
                  of its toughness and resistance to impact. Don't let poor
                  quality concrete compromise the integrity of your project.
                  Contact us today to learn more about our concrete testing
                  services.
                </p>
              </section>
            )}
          </section>
        </section>
      </section>
    </>
  );
};

export default page;
