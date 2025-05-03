import Image from "next/image";
const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#0f0c2f] text-white px-4 text-center">
      <div className="flex flex-row gap-10 items-center relative mb-6">
        <div>
          <Image
            src="/home/homeima/profilelogo.svg"
            alt="Avatar"
            width={150}
            height={150}
            className="mx-auto rounded-full"
          />
        </div>

        <div className="relative flex flex-col items-start">
          <p className="absolute top-[-30px] left-0 text-sm text-gray-300">
            Hello! I am <span className="text-purple-400">Ibrahim Memon</span>
          </p>

          <p className="text-gray-300 text-sm mb-2">A Designer who</p>

          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            Judges a book <br /> by its{" "}
            <span className="underline decoration-purple-500">cover...</span>
          </h1>

          <p className="text-xs text-gray-400 mb-6">
            Because if the cover doesn’t impress you what else can?
          </p>
        </div>
      </div>

      <h2 className="text-2xl md:text-4xl font-semibold mb-2">
        I'm a Software Engineer.|
      </h2>
      <p className="mb-4">
        Currently, I'm a Software Engineer at{" "}
        <a
          href="https://facebook.com"
          target="_blank"
          className="text-blue-400 hover:underline inline-flex items-center"
        >
          <span>Facebook</span>
        </a>
      </p>
      <p className="max-w-xl text-sm md:text-base text-gray-300">
        A self-taught UI/UX designer, functioning in the industry for 3+ years
        now. I make meaningful and delightful digital products that create an
        equilibrium between user needs and business goals.
      </p>
    </section>
  );
};

export default HeroSection;
