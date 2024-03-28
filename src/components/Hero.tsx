function Hero() {
  return (
    <div className="mx-auto flex flex-col items-start md:items-center w-full max-w-4xl">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight font-poppins font-semibold mt-6 md:text-center">
        <span className="text-violet-600">Mynders Plugins:</span> Crafting
        Mindful Organization Tools
      </h1>
      <h2 className="font-sans font-normal mt-2 text-gray-500 text-lg md:text-center w-full">
        Elevate Mynders with your vision: Develop plugins with our intuitive
        boilerplate and transform how everyone organizes thoughts and ideas.
      </h2>

      <div className="mt-4 flex gap-2 items-center">
        <a
          href="https://developers.mynders.com"
          className="flex rounded-lg gap-2 px-3 py-2 items-center transition-all ease-in-out bg-white relative z-30"
          style={{ border: "1px solid rgb(0 0 0 / 0.5)" }}
        >
          <p className="text-black text-sm lg:text-base font-semibold p-0 m-0">
            Upload your Plugin
          </p>
        </a>
        <a
          href="docs/intro"
          className="flex rounded-lg gap-2 px-3 py-2 items-center transition-all ease-in-out bg-black relative z-30"
          style={{ border: "1px solid rgb(0 0 0 / 0.5)" }}
        >
          <p className="text-white text-sm lg:text-base font-semibold p-0 m-0">
            Read the Docs
          </p>
        </a>
      </div>
      {/* <p className="text-gray-400 text-lg">
        Join 300+ Mynders organizing their mind.
      </p> */}
    </div>
  );
}

export default Hero;
