"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <>
      <header>
        <nav className="bg-[#052439] text-white">
          <section className="mx-auto flex h-20 w-11/12 items-center justify-between 2xl:w-3/5">
            <section className="mr-10 w-1/3">
              <h1 className="text-3xl font-bold tracking-wide">
                <Link href={"/"}>
                  <abbr title="Engineer Mantra" className="no-underline">
                    Engineer Mantra
                  </abbr>
                </Link>
              </h1>
            </section>
            <section className="flex-1 font-semibold">
              <ul className="flex cursor-pointer justify-between">
                <li
                  className={`hover:text-red-400 focus:text-red-400 ${pathname === "/design-services" ? "text-red-400" : ""} transition-all ease-in-out`}
                >
                  <Link href={"/design-services"}>Design Services</Link>
                </li>

                <li
                  className={`hover:text-red-400 focus:text-red-400 ${pathname === "/testing-labs" ? "text-red-400" : ""} transition ease-in-out`}
                >
                  <Link href={"/testing-labs"}>Testing Labs</Link>
                </li>
                <li
                  className={`group hover:text-red-400 focus:text-red-400 ${pathname === "/training-programm" ? "text-red-400" : ""} transition ease-in-out`}
                >
                  <Link
                    className="flex items-center"
                    href={"/training-programm"}
                  >
                    <span>Traning Programm</span>
                    <ChevronDown
                      size={20}
                      className="text-blue-300 transition-all ease-in-out group-hover:origin-center group-hover:rotate-180"
                    />
                  </Link>
                  <section className="invisible absolute z-10 pt-7 group-hover:visible">
                    <ul className="rounded-lg bg-green-400 px-7 py-4">
                      <li>ahkddsdfhsdh</li>
                      <li>kasjfkj</li>
                      <li>akslglj</li>
                      <li>askgjksla</li>
                      <li>asjkjdkq</li>
                      <li>kasdjg</li>
                    </ul>
                  </section>
                </li>

                <li className="group flex items-center transition hover:text-red-400 focus:text-red-400">
                  <span>Company</span>
                  <ChevronDown
                    size={20}
                    className="text-blue-300 transition-all ease-in-out group-hover:origin-center group-hover:rotate-180"
                  />
                </li>
              </ul>
            </section>
          </section>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
