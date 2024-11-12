"use client";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const SideNavBar = ({
  setIsClicked,
}: {
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState({ training: false, company: false });

  const handleClick = () => {
    setTimeout(() => {
      setIsClicked((bool) => !bool);
    }, 300);
  };

  const handleSubNav = (str: string) => {
    if (str === "training") {
      setNavOpen((obj) => ({
        company: false,
        training: !obj.training,
      }));
    } else {
      setNavOpen((obj) => ({
        training: false,
        company: !obj.company,
      }));
    }
  };

  return (
    <nav className="absolute inset-x-0 top-20 z-10 h-dvh w-full bg-[#052439] pl-8 pt-4 lg:hidden">
      <ul className="flex flex-col gap-4 text-lg">
        <Link href={"/design-services"}>
          <li
            onMouseUp={handleClick}
            className={`rounded p-2 hover:bg-slate-700 focus:text-red-400 ${pathname === "/design-services" ? "text-red-400" : ""}`}
          >
            Design Services
          </li>
        </Link>
        <Link href={"/testing-labs"}>
          <li
            onMouseDown={handleClick}
            className={`rounded p-2 hover:bg-slate-700 focus:text-red-400 ${pathname === "/testing-labs" ? "text-red-400" : ""}`}
          >
            Testing Labs
          </li>
        </Link>
        <li>
          <section
            className={`flex items-center rounded p-2 hover:bg-slate-700 focus:text-red-400 ${pathname === "/training-programm" ? "text-red-400" : ""}`}
          >
            <Link onMouseDown={handleClick} href={"/training-programm"}>
              <span>Training Programm</span>
            </Link>
            <section className="ml-2 rounded bg-slate-600">
              <ChevronDown
                onMouseDown={() => handleSubNav("training")}
                size={20}
                className={`text-blue-300 transition-all ease-in-out ${navOpen.training ? "origin-center rotate-180" : ""} cursor-pointer`}
              />
            </section>
          </section>

          {navOpen.training && (
            <ul className="px-10 py-1">
              <Link href={"/training-programm/basic-computing"}>
                <li
                  onMouseUp={handleClick}
                  className={`rounded p-2 hover:bg-slate-700 focus:text-red-400 ${pathname === "/training-programm/basic-computing" ? "text-red-400" : ""}`}
                >
                  Basic Computing
                </li>
              </Link>
              <Link href={"/training-programm/ms-office"}>
                <li
                  onMouseUp={handleClick}
                  className={`rounded p-2 hover:bg-slate-700 focus:text-red-400 ${pathname === "/training-programm/ms-office" ? "text-red-400" : ""}`}
                >
                  Ms Office
                </li>
              </Link>
              <Link href={"/training-programm/autocad"}>
                <li
                  onMouseUp={handleClick}
                  className={`rounded p-2 hover:bg-slate-700 focus:text-red-400 ${pathname === "/training-programm/autocad" ? "text-red-400" : ""}`}
                >
                  AutoCAD
                </li>
              </Link>
              <Link href={"/training-programm/revit"}>
                <li
                  onMouseUp={handleClick}
                  className={`rounded p-2 hover:bg-slate-700 focus:text-red-400 ${pathname === "/training-programm/revit" ? "text-red-400" : ""}`}
                >
                  Revit
                </li>
              </Link>
              <Link href={"/training-programm/staad-pro"}>
                <li
                  onMouseUp={handleClick}
                  className={`rounded p-2 hover:bg-slate-700 focus:text-red-400 ${pathname === "/training-programm/staad-pro" ? "text-red-400" : ""}`}
                >
                  Staad.Pro
                </li>
              </Link>
              <Link href={"/training-programm/3ds-max"}>
                <li
                  onMouseUp={handleClick}
                  className={`rounded p-2 hover:bg-slate-700 focus:text-red-400 ${pathname === "/training-programm/3ds-max" ? "text-red-400" : ""}`}
                >
                  3Ds Max
                </li>
              </Link>
            </ul>
          )}
        </li>
        <li>
          <section
            onMouseDown={() => handleSubNav("company")}
            className="flex cursor-pointer items-center rounded p-2 hover:bg-slate-700"
          >
            <span>Company</span>
            <ChevronDown
              size={20}
              className={`text-blue-300 transition-all ease-in-out ${navOpen.company ? "origin-center rotate-180" : ""}`}
            />
          </section>
          {navOpen.company && (
            <ul className="px-10 py-1">
              <Link href={"/company/valuation"}>
                <li
                  onMouseUp={handleClick}
                  className={`rounded p-2 hover:bg-slate-700 focus:text-red-400 ${pathname === "/company/valuation" ? "text-red-400" : ""}`}
                >
                  Valuation
                </li>
              </Link>
              <Link href={"/company/career"}>
                <li
                  onMouseUp={handleClick}
                  className={`rounded p-2 hover:bg-slate-700 focus:text-red-400 ${pathname === "/company/career" ? "text-red-400" : ""}`}
                >
                  Career
                </li>
              </Link>
              <Link href={"/company/about-us"}>
                <li
                  onMouseUp={handleClick}
                  className={`rounded p-2 hover:bg-slate-700 focus:text-red-400 ${pathname === "/company/about-us" ? "text-red-400" : ""}`}
                >
                  about Us
                </li>
              </Link>
              <Link href={"/company/contact-us"}>
                <li
                  onMouseUp={handleClick}
                  className={`rounded p-2 hover:bg-slate-700 focus:text-red-400 ${pathname === "/company/contact-us" ? "text-red-400" : ""}`}
                >
                  Contact Us
                </li>
              </Link>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};
export default SideNavBar;
