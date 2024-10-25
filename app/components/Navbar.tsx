const Navbar = () => {
  return (
    <>
      <header>
        <nav className="flex  h-20 items-center border bottom-1">
          <section className="flex-1">
            <h1 className="text-2xl pl-5">Engineer Mantra</h1>
          </section>
          <section className="flex-1 ">
            <ul className="flex  justify-around">
              <li>Home</li>
              <li>Design Services</li>
              <li>Valuation</li>
              <li>Testing Labs</li>
              <li>Traning Programm</li>
              <li>About us</li>
              <li>Contact Us</li>
              <li>Career</li>
            </ul>
          </section>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
