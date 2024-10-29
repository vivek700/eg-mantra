import { ArrowUpRight } from "lucide-react";
import Videos from "../components/Videos";

export default function Home() {
  return (
    <main>
      <section className="relative h-full w-full bg-slate-900/70 bg-[url('../public/bg-hero-3.jpg')] bg-cover bg-center bg-no-repeat text-white bg-blend-overlay">
        <section className="mx-auto h-full w-11/12 pb-20 pt-16 text-center 2xl:w-3/5">
          <section>
            <h1 className="text-4xl font-bold">
              Engineer Mantra is a trusted and reliable provider of
              comprehensive building construction solutions.{" "}
            </h1>
            <p className="pb-20 pt-14 text-lg font-semibold tracking-wide">
              We specialize in architecture, structure, and interior design
              services that are tailored to meet the unique needs and
              requirements of each project. With a strong emphasis on adhering
              to the Indian Building Design Codes, we prioritize the safety and
              aesthetics of our buildings, striving to create structurally sound
              and visually appealing spaces.
            </p>
            <button className="mx-5 rounded-lg bg-blue-600 px-4 py-2 text-white">
              View Samples
            </button>
            <button className="mx-5 rounded-lg bg-blue-600 px-4 py-2 text-white">
              Estimae Your Charges
            </button>
          </section>
        </section>
      </section>
      <section className="h-full w-full bg-white/90 bg-[url('../public/bg-hero-4.svg')] bg-cover bg-center bg-no-repeat bg-blend-overlay">
        <section className="flex flex-col items-center justify-center py-8">
          <h1 className="pb-1 text-lg font-bold uppercase">
            Projects Engineer Mantra
          </h1>
          <button className="flex items-center rounded-lg bg-blue-500 px-4 py-3 text-lg font-semibold text-white">
            <span className="pr-1">
              Total Work Experience: 5,406,115.64 sqft
            </span>
            <span>
              <ArrowUpRight />
            </span>
          </button>
        </section>
        <section className="mx-auto w-11/12 2xl:w-3/5">
          <iframe
            className="rounded-lg"
            src="https://docs.google.com/spreadsheets/d/1zGl70pICuh_DwjrDBn6Q4fq92vDPG8BZYD1o1rO_PmI/edit?gid=0#gid=0"
            width="100%"
            height="600"
          ></iframe>
        </section>
        <section className="mx-auto w-11/12 py-10 2xl:w-3/5">
          <Videos />
        </section>
      </section>
      <section className="h-full w-full bg-white/90 bg-[url('../public/bg-logo.jpeg')] bg-cover bg-center bg-no-repeat bg-blend-overlay">
        <article className="mx-auto h-full w-11/12 py-5 text-lg font-semibold 2xl:w-3/5">
          <p>
            Welcome to our website, your ultimate destination for a wide range
            of professional services in architecture, engineering, and
            construction. With a team of highly skilled and experienced experts,
            we are dedicated to delivering exceptional quality and results to
            our clients. Through our comprehensive services, we aim to meet and
            exceed the diverse needs and expectations of our valued clients.
          </p>

          <p className="py-4">
            Our team consists of professionals who possess years of industry
            experience and expertise. We bring a wealth of knowledge and
            proficiency to each project, ensuring that we provide the highest
            level of service. To demonstrate our commitment to excellence, many
            of our team members hold certifications and memberships in
            prestigious international and national professional organizations.
            These include the International Association for Bridge and
            Structural Engineering, the Institution of Structural Engineers, the
            Indian Association of Structural Engineers, and the Institution of
            Engineers. Such affiliations highlight our dedication to staying
            updated with the latest industry advancements and adhering to the
            best practices.
          </p>

          <p className="py-4">
            To deliver outstanding results, we leverage a wide array of software
            and tools. Our team is proficient in using industry-standard
            applications such as AutoCAD, Revit, Staad.pro, Etabs, 3Ds Max,
            Sketchup, Photoshop, Twinmotion, Primavera, Civil 3D, Ansys, MS
            Office, Matlab, and Python. By utilizing these advanced tools, we
            ensure efficient and accurate project execution, facilitating
            seamless collaboration and superior outcomes.
          </p>
        </article>
      </section>
    </main>
  );
}
