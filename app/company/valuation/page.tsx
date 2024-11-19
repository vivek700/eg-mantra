import React from "react";

const Page = () => {
  return (
    <>
      <section className="bg-slate-900/80 bg-[url('lib/images/valuation/bg-hero.jpeg')] bg-cover bg-center bg-no-repeat py-28 text-center text-white bg-blend-overlay">
        <section className="mx-auto w-11/12 2xl:w-3/5">
          <h1 className="text-6xl">Valuation</h1>
        </section>
      </section>
      <section className="bg-white">
        <section className="mx-auto flex w-11/12 flex-col gap-y-5 py-8 leading-relaxed 2xl:w-3/5">
          <p>
            Welcome to Engineermantra.com, your trusted source for professional
            services in land and building valuation. We are proud to be
            registered valuers with the Insolvency and Bankruptcy Board of India
            (IBBI), and we bring our expertise and experience to all our
            clients.
          </p>
          <p>
            We understand the importance of accurate valuation in the real
            estate industry, and we are committed to providing our clients with
            comprehensive valuation reports that are timely, unbiased, and
            adhere to the highest industry standards.
          </p>
          <p>
            At Engineermantra.com, we offer a wide range of valuation services,
            including:
          </p>
          <ul className="flex list-disc flex-col gap-y-2 px-6">
            <li>
              Valuation of land and buildings for sale, purchase or mortgage
            </li>
            <li>Valuation for the purpose of property tax assessment</li>
            <li>Valuation for insurance purposes</li>
            <li>Valuation for legal disputes and litigation</li>
          </ul>
          <p>
            Our team of experts has extensive knowledge of the real estate
            market and the latest valuation techniques. We use the most advanced
            software and tools to analyze market data and provide our clients
            with the most accurate valuation possible.
          </p>
          <p>
            We believe in building long-term relationships with our clients, and
            we are committed to providing the highest level of customer service.
            Our team is always available to answer any questions or concerns you
            may have, and we will work closely with you to ensure that your
            valuation needs are met.
          </p>
          <p>
            If you are looking for a registered valuer for your land and
            building valuation needs, look no further than Engineermantra.com.
            Contact us today to schedule a consultation with one of our experts.
          </p>
        </section>
      </section>
    </>
  );
};

export default Page;
