import React from "react";

const SubNav = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <nav className="invisible absolute z-10 pt-8 text-white group-hover:visible">
      <ul className="origin-top -translate-y-4 transform rounded-lg border border-white bg-[#052439] px-8 py-3 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
        {children}
      </ul>
    </nav>
  );
};

export default SubNav;
