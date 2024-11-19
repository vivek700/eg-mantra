const Buttons = () => {
  return (
    <>
      <a
        target="_blank"
        href="https://drive.google.com/drive/folders/1bmcvJA_VVlUIx6otnU51bex6aQZCMmWU"
      >
        <button className="mx-5 my-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:bg-blue-700">
          View Samples
        </button>
      </a>
      <a
        target="_blank"
        href="https://docs.google.com/spreadsheets/d/1u-QThegW2aHHGnpG38W1d1ghKCqBe4XH0fvKWZK1Lzw/edit?gid=2112575983#gid=2112575983"
      >
        <button className="mx-5 my-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:bg-blue-700">
          Estimae Your Charges
        </button>
      </a>
    </>
  );
};

export default Buttons;
