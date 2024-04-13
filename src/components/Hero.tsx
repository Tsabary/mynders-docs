function Hero() {
  return (
    <div className="mx-auto flex flex-col items-start md:items-center justify-center w-full max-w-4xl">
      <img
        src="./img/bulb.png"
        alt="bulb"
        className="h-28 w-28 lg:h-40 lg:w-40"
      />

      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl tracking-tight font-poppins font-semibold mt-6 md:text-center">
        Build{" "}
        <span className="text-violet-600">Your Ideal Productivity Tool</span> in
        Days Instead of Weeks
      </h1>
      <h2 className="font-sans font-normal mt-2 text-gray-600 text-lg lg:text-xl md:text-center w-full">
        With authentication, encryption and a built-in folder structure, you can
        skip the boring part and focus on creataive part of building your tool
        right from the start.
      </h2>

      <div className="mt-4 flex flex-col gap-2 items-center">
        <a
          href="docs/intro"
          className="flex group gap-2 rounded-lg px-5 py-2.5 items-center border-b-4 border-b-purple-400 bg-purple-600 relative z-30 text-white text-sm lg:text-base font-semibold"
        >
          Read the Docs
        </a>
        <div className="flex gap-2 text-sm lg:text-base">
          <p className="text-black">Finsihed building?</p>
          <a
            href="https://devs.mynders.com"
            className="text-purple-600 underline"
          >
            Upload your Plugin
          </a>
        </div>
      </div>
      {/* <p className="text-gray-400 text-lg">
        Join 300+ Mynders organizing their mind.
      </p> */}
    </div>
  );
}

export default Hero;
