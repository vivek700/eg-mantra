const Navbar = () => {
  return (
    <>
      <header>
        <nav className="bg-[#052439] text-white">
          <section className="2xl:w-3/5 w-11/12 h-20  mx-auto flex justify-between items-center">
            <section className="flex-initial mr-10">
              <h1 className="text-2xl">Engineer Mantra</h1>
            </section>
            <section className="flex-1 ">
              <ul className="flex justify-around  w-4/5">
                <li>Design Services</li>
                <li>Traning Programm</li>
                <li>About us</li>
                <li>Contact Us</li>
                <li>Career</li>
              </ul>
            </section>
            <section>
              <button>Get Started</button>
            </section>
          </section>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
