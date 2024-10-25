const Navbar = () => {
  return (
    <>
      <header>
        <nav className="bg-[#052439] text-white">
          <section className="mx-auto flex h-20 w-11/12 items-center justify-between 2xl:w-3/5">
            <section className="mr-10 flex-initial">
              <h1 className="text-2xl">Engineer Mantra</h1>
            </section>
            <section className="flex-1">
              <ul className="flex w-4/5 justify-around">
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
