"use client";

import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SubNav from "./ui/SubNav";
import { useEffect, useState } from "react";
import SideNavBar from "./ui/SideNavBar";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();

  const [isclicked, setIsClicked] = useState<boolean>(false);

  const sideNavButton = () => {
    setIsClicked((bool) => !bool);
  };

  useEffect(() => {
    if (!isclicked) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isclicked]);

  return (
    <>
      <header>
        <nav className="relative bg-[#052439] text-white">
          <section className="mx-auto flex h-20 w-11/12 items-center justify-between 2xl:w-3/5">
            <section className="mr-10 md:w-2/5">
              <h1 className="text-2xl font-bold tracking-wide md:text-3xl">
                <Link href={"/"} onClick={() => setIsClicked(false)}>
                  <abbr
                    title="Engineer Mantra Home"
                    className="flex items-center gap-1 no-underline"
                  >
                    <Image
                      src={"/logo.svg"}
                      width={40}
                      height={40}
                      alt="company logo"
                      className="h-14 w-14"
                    />
                    <span>Engineer Mantra</span>
                  </abbr>
                </Link>
              </h1>
            </section>
            <aside className="lg:hidden">
              <button
                onClick={sideNavButton}
                className="rounded p-1 hover:bg-slate-700 focus:bg-slate-700 focus:outline-none active:bg-slate-700"
              >
                {isclicked ? <X size={40} /> : <Menu size={40} />}
              </button>
            </aside>
            {isclicked && <SideNavBar setIsClicked={setIsClicked} />}

            <section className="hidden flex-1 font-semibold lg:block">
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
                  <SubNav>
                    <Link href={"/training-programm/basic-computing"}>
                      <li
                        className={`rounded py-2 hover:text-red-400 focus:text-red-400 ${pathname === "/training-programm/basic-computing" ? "text-red-400" : ""}`}
                      >
                        Basic Computing
                      </li>
                    </Link>
                    <Link href={"/training-programm/ms-office"}>
                      <li
                        className={`rounded py-2 hover:text-red-400 focus:text-red-400 ${pathname === "/training-programm/ms-office" ? "text-red-400" : ""}`}
                      >
                        Ms Office
                      </li>
                    </Link>
                    <Link href={"/training-programm/autocad"}>
                      <li
                        className={`rounded py-2 hover:text-red-400 focus:text-red-400 ${pathname === "/training-programm/autocad" ? "text-red-400" : ""}`}
                      >
                        AutoCAD
                      </li>
                    </Link>
                    <Link href={"/training-programm/revit"}>
                      <li
                        className={`rounded py-2 hover:text-red-400 focus:text-red-400 ${pathname === "/training-programm/revit" ? "text-red-400" : ""}`}
                      >
                        Revit
                      </li>
                    </Link>
                    <Link href={"/training-programm/staad-pro"}>
                      <li
                        className={`rounded py-2 hover:text-red-400 focus:text-red-400 ${pathname === "/training-programm/staad-pro" ? "text-red-400" : ""}`}
                      >
                        Staad.Pro
                      </li>
                    </Link>
                    <Link href={"/training-programm/3ds-max"}>
                      <li
                        className={`rounded py-2 hover:text-red-400 focus:text-red-400 ${pathname === "/training-programm/3ds-max" ? "text-red-400" : ""}`}
                      >
                        3Ds Max
                      </li>
                    </Link>
                  </SubNav>
                </li>

                <li className="group transition hover:text-red-400 focus:text-red-400">
                  <section className="flex items-center">
                    <span>Company</span>
                    <ChevronDown
                      size={20}
                      className="text-blue-300 transition-all ease-in-out group-hover:origin-center group-hover:rotate-180"
                    />
                  </section>
                  <SubNav>
                    <Link href={"/company/valuation"}>
                      <li
                        className={`rounded py-2 hover:text-red-400 focus:text-red-400 ${pathname === "/company/valuation" ? "text-red-400" : ""}`}
                      >
                        Valuation
                      </li>
                    </Link>
                    <Link href={"/company/career"}>
                      <li
                        className={`rounded py-2 hover:text-red-400 focus:text-red-400 ${pathname === "/company/career" ? "text-red-400" : ""}`}
                      >
                        Career
                      </li>
                    </Link>
                    <Link href={"/company/about-us"}>
                      <li
                        className={`rounded py-2 hover:text-red-400 focus:text-red-400 ${pathname === "/company/about-us" ? "text-red-400" : ""}`}
                      >
                        about Us
                      </li>
                    </Link>
                    <Link href={"/company/contact-us"}>
                      <li
                        className={`rounded py-2 hover:text-red-400 focus:text-red-400 ${pathname === "/company/contact-us" ? "text-red-400" : ""}`}
                      >
                        Contact Us
                      </li>
                    </Link>
                  </SubNav>
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
