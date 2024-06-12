import Button from "components/common/Button";
import Section from "components/common/Section";
import React from "react";

const Detroit = () => {
  return (
    <div className="bg-primary">
      <div className="bg-detroit bg-cover">
        <Section className="pt-[72px]">
          <h2 className="max-w-[1000px] mx-auto text-xl sm:text-3xl lg:text-[40px] font-black text-center">
            Network with current and potential Mentors and Protégés at the
            annual Mentor-Protégé Summit.
          </h2>

          <div className="mt-10 sm:mt-[64px] flex flex-col justify-center items-center">
            <img
              className="w-[400px] lg:w-auto"
              src="./assets/imgs/detroit-mpp.svg"
              alt="mpp"
            />
            <div className="font-rock text-2xl sm:text-4xl lg:text-[76px] mt-5 sm:mt-10">
              JULY 29 - Aug 1{" "}
            </div>
          </div>

          <div className="mt-5 sm:mt-10 lg:mt-20 flex justify-center">
            <Button className="min-w-[275px] justify-center">
              REGISTER NOW
            </Button>
          </div>
        </Section>

        <img
          className="mt-10 sm:mt-0"
          src="./assets/imgs/detroit-text.png"
          alt="text"
        />
      </div>
    </div>
  );
};

export default Detroit;
