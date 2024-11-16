import Image from "next/image";
import type { Info } from "../lib/types/employee";

const PersonalInfo = ({ info }: { info: Info }) => {
  return (
    <>
      <section className="flex flex-col items-center py-8 md:flex-row md:items-start">
        <section className="h-full w-3/5 pt-1">
          <Image
            src={info?.img}
            alt=""
            loading="lazy"
            width={400}
            height={200}
            unoptimized
            className="h-full w-full rounded-md object-contain"
          />
        </section>
        <aside className="flex w-full flex-col gap-y-3 pt-3 text-center md:pl-6 md:pt-0 md:text-start">
          <h2 className="text-2xl">{info.name}</h2>
          <p className="text-xl">{info.roles}</p>
          {info?.education && <p className="text-lg">{info?.education}</p>}
          <p>Working Professionally since {info.experience.startYear}</p>
          <p>Expertise in {info.skills.software}</p>
          {info.others.map((item) => (
            <p key={crypto.randomUUID()}>{item}</p>
          ))}
        </aside>
      </section>
    </>
  );
};

export default PersonalInfo;
