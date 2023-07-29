import React from "react";

const Hero = () => {
  return (
    <section className="bg-[url('/hero-img/9efe153c179330ed9ebc00f6598832dfbd0cbb47.png')] bg-cover bg-no-repeat bg-center">
      <div className="container mx-auto py-16 pl-10 text-white">
        <div>
          <div className="my-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              How can we help?
            </h1>
          </div>
          {/* Search field start */}
          <div className="flex gap-3 mb-4">
            <input
              className="pl-4 p-[0.675em_1em] rounded-full w-1/2 text-black"
              type="search"
              placeholder="🔎 Search"
            />
            <button
              type="submit"
              className="p-[0.675em_1em] bg-[#7b68ee] rounded-full hover:border-[#6751eb] hover:bg-[#6b56ec]">
              Search
            </button>
          </div>
          {/* Search field end */}

          {/* Suggestion start */}
          <div className="flex items-center gap-2 text-xs">
            <p>Suggestions: </p>
            <a
              className="bg-white bg-opacity-20 px-3 py-1 rounded-full hover:text-[#1A202C] hover:bg-[#cad9e7] font-bold"
              href="#">
              Billing
            </a>
            <a
              className="bg-white bg-opacity-20 px-3 py-1 rounded-full hover:text-[#1A202C] hover:bg-[#cad9e7] font-bold"
              href="#">
              Add a guest
            </a>
            <a
              className="bg-white bg-opacity-20 px-3 py-1 rounded-full hover:text-[#1A202C] hover:bg-[#cad9e7] font-bold"
              href="#">
              Create a Whiteboard
            </a>
            <a
              className="bg-white bg-opacity-20 px-3 py-1 rounded-full hover:text-[#1A202C] hover:bg-[#cad9e7] font-bold"
              href="#">
              Create a Dashboard
            </a>
          </div>
          {/* Suggestion end */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
