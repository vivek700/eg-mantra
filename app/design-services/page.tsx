import React from "react";
import Buttons from "../components/ui/Buttons";
import Image from "next/image";
import img1 from "../lib/images/design-services/architectural-drawing.jpeg";
import img2 from "../lib/images/design-services/floor-plans.jpeg";
import img3 from "../lib/images/design-services/structure-design.jpeg";
import img4 from "../lib/images/design-services/autodcr.jpeg";
import img5 from "../lib/images/design-services/interior-design.jpeg";
import img6 from "../lib/images/design-services/building-health.jpeg";
import img7 from "../lib/images/design-services/estimation.jpeg";
import img8 from "../lib/images/design-services/construction-supervision.jpeg";
import img9 from "../lib/images/design-services/architecture-model-3dprinting.jpeg";
import img10 from "../lib/images/design-services/mechanical-plumbing.jpeg";

const Page = () => {
  return (
    <>
      <section className="bg-slate-900/90 bg-[url('lib/images/design-services/background-hero.jpg')] bg-cover bg-center bg-no-repeat py-20 text-center text-white bg-blend-overlay">
        <section className="mx-auto w-11/12 2xl:w-3/5">
          <h1 className="pb-7 text-6xl">Design Services</h1>
          <Buttons />
        </section>
      </section>
      <section className="h-full w-full bg-white/90 bg-[url('../public/bg-hero-4.svg')] bg-cover bg-center bg-no-repeat bg-blend-overlay">
        <section className="mx-auto grid w-11/12 gap-6 py-10 text-center md:grid-cols-3 2xl:w-3/5">
          <div className="flex flex-col items-center gap-y-5">
            <Image
              src={img1}
              width={300}
              height={300}
              alt=""
              className="rounded"
            />
            <h2 className="text-2xl">Architectural Drawing</h2>
            <p>
              Our team of architects specializes in creating unique and
              innovative designs that are tailored to meet the specific needs of
              our clients. We use the latest software and tools to create
              detailed architectural drawings that are both functional and
              aesthetically pleasing.{" "}
            </p>
          </div>
          <div className="flex flex-col items-center gap-y-5">
            <Image
              src={img2}
              width={300}
              height={300}
              alt=""
              className="rounded"
            />
            <h2 className="text-2xl">Floor Plans</h2>
            <p>
              Our experts are skilled in creating customized floor plans that
              maximize space utilization while ensuring optimal functionality
              and aesthetics. We take into account your preferences and
              requirements to create floor plans that are both functional and
              visually appealing.{" "}
            </p>
          </div>
          <div className="flex flex-col items-center gap-y-5">
            <Image
              src={img3}
              width={300}
              height={300}
              alt=""
              className="rounded"
            />
            <h2 className="text-2xl">
              Structure Design and Structural Drawing
            </h2>
            <p>
              Our structural engineers are experts in designing and drawing safe
              and efficient structures that meet all relevant standards and
              regulations. We use advanced software and techniques to analyze
              complex structures and ensure their stability and durability.{" "}
            </p>
          </div>
          <div className="flex flex-col items-center gap-y-5">
            <Image
              src={img4}
              width={300}
              height={300}
              alt=""
              className="rounded"
            />
            <h2 className="text-2xl">AutoDCR & Autoplan Conversion </h2>
            <p>
              We offer AutoDCR and Autoplan conversion services to help you get
              faster approvals for your building plans. Our experts use the
              latest software to convert your plans into digital formats that
              are compatible with these systems, saving you time and hassle.{" "}
            </p>
          </div>
          <div className="flex flex-col items-center gap-y-5">
            <Image
              src={img5}
              width={300}
              height={300}
              alt=""
              className="rounded"
            />
            <h2 className="text-2xl">Interior Design</h2>
            <p>
              Our interior designers are skilled in creating beautiful and
              functional spaces that reflect your personal style and
              preferences. We use the latest software and tools to create 3D
              visualizations that help you visualize your space before it&apos;s
              built.{" "}
            </p>
          </div>
          <div className="flex flex-col items-center gap-y-5">
            <Image
              src={img6}
              width={300}
              height={300}
              alt=""
              className="rounded"
            />
            <h2 className="text-2xl">Building Health Survey</h2>
            <p>
              We offer building health survey services to help you identify and
              address any structural or maintenance issues with your building.
              Our team of experts uses advanced tools and techniques to
              thoroughly inspect your building and provide you with a
              comprehensive report.{" "}
            </p>
          </div>
          <div className="flex flex-col items-center gap-y-5">
            <Image
              src={img7}
              width={300}
              height={300}
              alt=""
              className="rounded"
            />
            <h2 className="text-2xl">Estimation</h2>
            <p>
              Our experts are skilled in accurately estimating the cost of your
              construction project. We take into account all relevant factors
              and provide you with a detailed estimate that helps you plan your
              project and budget effectively.{" "}
            </p>
          </div>
          <div className="flex flex-col items-center gap-y-5">
            <Image
              src={img8}
              width={300}
              height={300}
              alt=""
              className="rounded"
            />
            <h2 className="text-2xl">Construction Supervision</h2>
            <p>
              Our team of experts provides construction supervision services to
              ensure that your project is completed on time, within budget, and
              to your specifications. We monitor every stage of the construction
              process and ensure that all work is completed to the highest
              standards.{" "}
            </p>
          </div>
          <div className="flex flex-col items-center gap-y-5">
            <Image
              src={img9}
              width={300}
              height={300}
              alt=""
              className="rounded"
            />
            <h2 className="text-2xl">Architecture model with 3d printing</h2>
            <p>
              Our team of experts is skilled in creating detailed and accurate
              architecture models using the latest 3D printing technology. We
              use advanced software and tools to create models that are both
              functional and visually appealing.{" "}
            </p>
          </div>
          <div className="flex flex-col items-center gap-y-5 md:col-span-3">
            <Image
              src={img10}
              width={300}
              height={300}
              alt=""
              className="rounded"
            />
            <h2 className="text-2xl">Mechanical, Electrical & Plumbing</h2>
            <p>
              Our team of experts is skilled in designing and planning MEP
              systems that meet your specific requirements. We use advanced
              software and techniques to create detailed MEP plans that ensure
              optimal functionality and efficiency.{" "}
            </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default Page;
