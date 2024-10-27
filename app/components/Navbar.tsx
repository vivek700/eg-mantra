import { ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <header>
        <nav className="bg-[#052439] text-white">
          <section className="mx-auto flex h-24 w-11/12 items-center justify-between 2xl:w-3/5">
            <section className="mr-10 w-1/3">
              <h1 className="text-2xl font-bold tracking-wide">
                Engineer Mantra
              </h1>
            </section>
            <section className="flex-1 font-semibold">
              <ul className="flex cursor-pointer justify-between">
                <li>Design Services</li>
                <li>Testing Labs</li>
                <li className="flex">
                  <span>Traning Programm</span>
                  <ChevronDown size={20} className="text-blue-300" />
                </li>
                <li className="flex">
                  <span>Company</span>
                  <ChevronDown size={20} className="text-blue-300" />
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
