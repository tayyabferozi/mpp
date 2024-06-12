import React from "react";
import Section from "./Section";
import Button from "./Button";
import Input from "./Input";
import Textarea from "./Textarea";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Section
      rootClassName="bg-[linear-gradient(99.59deg,_#0B1E5A_-2.14%,_#172E77_100.3%)]"
      className="py-[72px]"
    >
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <img
          className="w-28 lg:w-[154px]"
          src="./assets/imgs/logo.png"
          alt="logo"
        />

        <div className="min-h-[100px] pb-5 flex flex-wrap md:flex-nowrap md:justify-end items-center gap-5 flex-grow border-b border-b-[rgba(255,255,255,.1)] lg:max-w-[800px]">
          <div className="text-xl md:flex-shrink-0">
            Ready to take your company to the next level?
          </div>
          <Button className="!px-0 justify-center w-[360px] !bg-[linear-gradient(95.47deg,_#DAB807_-0.22%,_#DDBC18_10.66%,_#FFDF3C_26.65%,_#FFDF3C_78.95%,_#E3C21E_93%,_#FBDB3A_97.24%)]">
            {" "}
            START YOUR MPP JOURNEY NOW
          </Button>
        </div>
      </div>
      <div className="mt-14 flex flex-col md:flex-row gap-10 justify-between">
        <div className="md:max-w-[576px] flex-grow">
          <h4 className="text-2xl font-black">Get Connected</h4>
          <p className="text-xl">
            Have someone reach out with more information about MPP:
          </p>

          <div className="mt-11">
            <div className="grid sm:grid-cols-2 gap-5">
              <Input type="text" placeholder="First Name" />
              <Input type="text" placeholder="Last Name" />
              <Input type="text" placeholder="Email Address" />
              <Input type="text" placeholder="Phone" />
              <div className="sm:col-span-2">
                <Input type="text" placeholder="Organization name" />
              </div>
              <div className="sm:col-span-2 flex gap-5">
                <div className="flex-grow">
                  <Textarea type="text" placeholder="Message..." />
                </div>
                <button className="w-[90px] rounded-[4px] flex-shrink-0 h-full flex justify-center items-center bg-[linear-gradient(95.47deg,_#DAB807_-0.22%,_#DDBC18_10.66%,_#FFDF3C_26.65%,_#FFDF3C_78.95%,_#E3C21E_93%,_#FBDB3A_97.24%)]">
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.5 0L7.09 1.41L12.67 7H0.5V9H12.67L7.09 14.59L8.5 16L16.5 8L8.5 0Z"
                      fill="#14142B"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-grow flex-shrink-0 max-w-[360px] space-y-3 md:mt-10">
          <Link className="block sm:text-lg">How to Participate</Link>
          <Link className="block sm:text-lg">Eligibility Requirements</Link>
          <Link className="block sm:text-lg">MPP Resources</Link>
          <Link className="block sm:text-lg">Browse Approved Mentor List</Link>
          <Link className="block sm:text-lg">Why we have MPP</Link>
          <Link className="block sm:text-lg">DoD OSBP Contacts</Link>
          <Link className="block sm:text-lg">FAQs</Link>
        </div>
      </div>
      <div className="mt-10 flex justify-end gap-9">
        <Link className="block text-xs sm:text-base">Web Policy</Link>
        <Link className="block text-xs sm:text-base">Privacy Statement</Link>
        <Link className="block text-xs sm:text-base">Contact Us</Link>
      </div>
    </Section>
  );
};

export default Footer;
