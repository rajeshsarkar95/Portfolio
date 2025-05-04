"use client";
import Image from "next/image";
import StatusBar from "./StatusBar";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Hello! I am Rajesh Sarkar";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setDisplayText((prevText) => prevText + fullText.charAt(index));
      index += 1;
      if (index === fullText.length) {
        clearInterval(typingInterval);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col pt-20 justify-start bg-[#0f0c2f] text-white px-4 text-center">
      <div className="relative">
        <div className="absolute top-[-12px] left-[160px] -translate-x-1/2 md:left-auto md:right-10 md:translate-x-0">
          <div>
            <StatusBar />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 ml-0 md:ml-36 mt-20 items-center relative mb-6">
        <div className="relative flex items-center justify-center h-64 w-64 mb-6 md:mb-0">
          <div className="absolute w-60 h-60 rounded-full bg-purple-700 blur-2xl opacity-70"></div>
          <Image
            src="/home/homeima/bglogo.png"
            alt="Avatar"
            width={200}
            height={200}
            className="relative z-10 rounded-[100px]"
          />
        </div>
        <div className="relative flex flex-col items-start w-full md:w-auto">
          <i className="hidden lg:block absolute top-[-90px] left-[-100px] md:left-[-110px] ">
            <Image
              src="/home/homeicons/arrow.svg"
              width={100}
              height={100}
              alt=""
            />
          </i>
          <p className="absolute font-comic font-sans top-[-55px]  mb-14 md:top-[-100px] left-0 text-xl text-gray-300 md:text-2xl">
            {displayText}
          </p>
          <div className="flex flex-col text-start">
            <p className="text-gray-300 font-sans text-sm mb-2">
              A Developer who
            </p>
            <h1 className="text-3xl font-sans md:text-5xl font-bold mb-2">
              Judges a site <br /> by its UI...{" "}
              <span className="underline decoration-purple-500">cover...</span>
            </h1>

            <p className="text-xs font-sans text-gray-400 mb-6 md:text-sm">
              Because if the interface doesn&apos;t impress, will the logic matter?
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start text-start ml-0 md:ml-40 flex-1">
        <h2 className="text-2xl font-sans md:text-4xl font-semibold mb-2">
          I&apos;m a Software Engineer.
        </h2>
        <p className="mb-4 font-sans">
          Currently I&apos;m a Software Engineer at{" "}
          <span className="font-bold md:text-2xl  font-sans   ">
            @cyberclipper solutions llp
          </span>
        </p>
        <p className="max-w-xl font-sans text-sm md:text-base text-gray-300">
          A self-taught Full Stack Developer with 3+ years of experience,
          crafting seamless responsive, and intuitive digital experiences. I
          build products that strike the perfect balance between user delight
          and business impact.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
