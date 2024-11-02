"use client";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import SubNav from "./SubNav";

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
  console.log(navOpen);

  return (
    <nav className="absolute inset-x-0 top-20 z-10 h-dvh w-full bg-[#052439] p-8 lg:hidden">
      <ul className="flex flex-col gap-4 text-lg">
        <li className="rounded p-2 hover:bg-slate-700">Design Services</li>
        <li className="rounded p-2 hover:bg-slate-700">Testing Labs</li>
        <li className="">
          <section
            onClick={() => handleSubNav("training")}
            className="flex items-center rounded p-2 hover:bg-slate-700"
          >
            <span>Training Programm</span>
            <ChevronDown
              size={20}
              className={`text-blue-300 transition-all ease-in-out ${navOpen.training ? "origin-center rotate-180" : ""}`}
            />
          </section>
          {navOpen.training && (
            <ul className="px-10 py-1">
              <li className="rounded p-2 hover:bg-slate-700">
                Basic Computing
              </li>
              <li className="rounded p-2 hover:bg-slate-700">Ms Office</li>
              <li className="rounded p-2 hover:bg-slate-700">AutoCAD</li>
              <li className="rounded p-2 hover:bg-slate-700">Revit</li>
              <li className="rounded p-2 hover:bg-slate-700">Staad.Pro</li>
              <li className="rounded p-2 hover:bg-slate-700">3Ds Max</li>
            </ul>
          )}
        </li>
        <li className="">
          <section
            onClick={() => handleSubNav("company")}
            className="flex items-center rounded p-2 hover:bg-slate-700"
          >
            <span>Company</span>
            <ChevronDown
              size={20}
              className={`text-blue-300 transition-all ease-in-out ${navOpen.company ? "origin-center rotate-180" : ""}`}
            />
          </section>
          {navOpen.company && (
            <ul className="px-10 py-1">
              <li className="rounded p-2 hover:bg-slate-700">Valuation</li>
              <li className="rounded p-2 hover:bg-slate-700">Career</li>
              <li className="rounded p-2 hover:bg-slate-700">about Us</li>
              <li className="rounded p-2 hover:bg-slate-700">Contact Us</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};
export default SideNavBar;
