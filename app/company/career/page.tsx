import jobs from "../../lib/data/careerData.json";
import type { Job } from "@/app/lib/types/job";

const Page = () => {
  const jobElements = jobs.map((job: Job) => {
    return (
      <section
        key={crypto.randomUUID()}
        className="mb-5 border-b border-green-600"
      >
        <h2 className="py-2 text-2xl">{job.title} :</h2>
        <p className="pb-3 leading-relaxed">{job.description}</p>
      </section>
    );
  });

  return (
    <>
      <section className="bg-white/70 bg-[url('lib/images/career/bg-hero.jpeg')] bg-cover bg-center bg-no-repeat py-10 text-center bg-blend-overlay md:py-20">
        <section className="mx-auto w-11/12 2xl:w-3/5">
          <h1 className="text-3xl text-green-900 md:text-6xl">Career</h1>
        </section>
      </section>
      <section className="bg-white/50 bg-[url('lib/images/career/bg-main.jpeg')] bg-cover bg-center bg-no-repeat py-10 bg-blend-overlay">
        <section className="mx-auto w-11/12 2xl:w-3/5">
          {jobElements}
          <section>
            <h2 className="text-2xl">Requirements:</h2>
            <ul className="list-disc px-4 py-3">
              <li> Ready to relocate to our location in India.</li>
              <li>Legally allowed to work in India.</li>
              <li>
                Relevant portfolio or work experience in the respective field.
              </li>
            </ul>
            <p>
              Contact us by mail:{" "}
              <a
                className="text-blue-700 hover:underline"
                href="mailto:engineermantra@gmail.com"
              >
                engineermantra@gmail.com{" "}
              </a>
              with your portfolio and resume to apply
            </p>
          </section>
        </section>
      </section>
    </>
  );
};

export default Page;
