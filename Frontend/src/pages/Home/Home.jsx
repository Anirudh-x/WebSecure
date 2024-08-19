import React from "react";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div>
      <div className="w-full h-[100vh] flex flex-col gap-10 p-10 pt-28 shadow-xl">
        <div className="h-full w-full justify-center flex">
          <div className="h-full w-[60%] flex flex-col items-center gap-20">
            <h1 data-aos="flip-up" className="text-[150px]">
              Web<span className="text-orange-400">Secure</span>
            </h1>

            <TypeAnimation
              className="text-orange-400"
              sequence={["Let it be secure.", 2000, "We Respect Your Privacy.", 2000]}
              wrapper="span"
              speed={25}
              style={{ fontSize: "1.5em", display: "inline-block" }}
              repeat={Infinity}
            />

            <button className="border-4 bg-transparent h-16 w-44 font-semibold text-[18px] text-white hover:bg-white hover:text-orange-400 hover:rounded-[20rem]">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
