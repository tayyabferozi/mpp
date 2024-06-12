import Button from "components/common/Button";
import Section from "components/common/Section";

const Hero = () => {
  return (
    <>
      <Section
        rootClassName="bg-primary bg-hero bg-cover relative"
        className="pt-20 pb-10"
      >
        <img
          className="w-28 lg:w-[164px]"
          src="./assets/imgs/logo.png"
          alt="logo"
        />

        <div className="mt-9 relative z-10">
          <div className="text-xl lg:text-2xl font-black text-[#C9E1FF] tracking-[6px]">
            WELCOME TO THE
          </div>
          <h3 className="mt-2 lg:mt-0 text-4xl lg:text-[52px] font-black">
            Mentor-Protégé Program Portal
          </h3>

          <p className="max-w-[600px] mt-4 lg:mt-7 text-xl lg:text-[28px] leading-tight">
            Easily access your{" "}
            <span className="text-[#FFE45F] font-bold">
              {" "}
              Mentor-Protégé Program
            </span>{" "}
            (MPP) dashboard here. Whether you are a Mentor or a Protégé, your
            dashboard gives you access to everything you need for tracking and
            maintaining your partnerships.
          </p>
          <div className="mt-5 lg:mt-12">
            <Button>LOGIN TO MY DASHBOARD</Button>
          </div>

          <div className="mt-5 lg:mt-11 text-xl">
            Updated SAM profile required. Need to update yours?
          </div>

          <button className="flex items-center underline font-bold gap-3 mt-5">
            CLICK HERE
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.35766 0.566417L6.94938 1.97814L12.5362 7.56133L0.366202 7.57617L0.36864 9.57617L12.5386 9.56133L6.96545 15.1581L8.37717 16.5664L16.3674 8.55666L8.35766 0.566417Z"
                fill="#FFE45F"
              />
            </svg>
          </button>
        </div>

        <img
          className="absolute right-0 top-[calc(50%+80px)] -translate-y-1/2 w-[57vw] block"
          src="./assets/imgs/hero-right.png"
          alt="hero-right"
        />
      </Section>

      <Section rootClassName="bg-[#071646] relative z-10">
        <div className="flex gap-9 items-center flex-wrap py-9">
          <div className="md:w-[480px] md:flex-shrink-0 uppercase font-bold text-base sm:text-xl pl-6 relative leading-[24px] before:absolute before:top-0 before:left-0 before:h-full before:w-[6px] before:rounded-md before:bg-[#96B7E0]">
            Join our mentor community representing top PRIME ContractorS
          </div>
          <div className="flex justify-between sm:justify-start flex-wrap md:flex-nowrap items-center gap-6">
            <img src="./assets/imgs/bp.png" alt="bp" />
            <img src="./assets/imgs/boeing.png" alt="boeing" />
            <img src="./assets/imgs/harris.png" alt="harris" />
            <img src="./assets/imgs/ibm.png" alt="ibm" />
            <img src="./assets/imgs/lockheed.png" alt="lockheed" />
            <img src="./assets/imgs/raytheon.png" alt="raytheon" />
            <div className="text-[28px]">+ MORE</div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Hero;
