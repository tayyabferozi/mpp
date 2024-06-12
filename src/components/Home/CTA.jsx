import Button from "components/common/Button";

const CTA = () => {
  return (
    <div className="grid md:grid-cols-2 relative">
      <div className="bg-[linear-gradient(99.59deg,_#0B1E5A_-2.14%,_#172E77_100.3%)] flex md:justify-end py-[72px] px-5 sm:pl-[50px] md:pl-10 sm:pr-[50px] lg:pr-[88px]">
        <div className="md:max-w-[524px]">
          <h3 className="text-3xl lg:text-[40px] leading-snug lg:leading-normal font-black mb-6">
            <span className="text-[#FFE45F]">Mentors</span> shape careers,
            fortify the defense industry, and foster connections.
          </h3>
          <p className="text-xl lg:text-2xl max-w-[480px]">
            Mentors partner with small businesses to help enhance their
            capabilities to perform as subcontractors and viable suppliers under
            DoD contracts as well as other federal government and commercial
            contracts.
          </p>

          <div className="mt-12 gap-[32px] flex flex-col">
            <div className="bg-[#0C3C91] rounded-lg flex items-center gap-5 py-5 px-7">
              <div className="w-[40px] lg:w-[64px] flex-shrink-0">
                <img src="./assets/imgs/network.png" alt="network" />
              </div>
              <div className="text-base lg:text-xl font-bold max-w-[295px]">
                Develop a high-quality subcontracting pool
              </div>
            </div>
            <div className="bg-[#0C3C91] rounded-lg flex items-center gap-5 py-5 px-7">
              <div className="w-[40px] lg:w-[64px] flex-shrink-0">
                <img src="./assets/imgs/money.png" alt="money" />
              </div>
              <div className="text-base lg:text-xl font-bold max-w-[295px]">
                Receive cost reimbursement and a credit toward small business
                contracting goals
              </div>
            </div>
            <div className="bg-[#0C3C91] rounded-lg flex items-center gap-5 py-5 px-7">
              <div className="w-[40px] lg:w-[64px] flex-shrink-0">
                <img src="./assets/imgs/people.png" alt="people" />
              </div>
              <div className="text-base lg:text-xl font-bold max-w-[295px]">
                Pursue new market <br className="hidden sm:block" />{" "}
                opportunities as part of a team
              </div>
            </div>
          </div>

          <Button className="mt-[52px] text-[15px]">
            <span>
              LEARN MORE ABOUT <span className="font-bold">MENTORING</span>
            </span>
          </Button>
        </div>
      </div>
      <div className="bg-[linear-gradient(93.08deg,_#0B1E5A_0%,_#172E77_100%)] flex justify-start py-[72px] pl-5 sm:pr-10 pr-5 sm:pl-[50px] lg:pl-[145px]">
        <div className="md:max-w-[430px]">
          <h3 className="text-3xl lg:text-[40px] leading-snug lg:leading-normal font-black mb-6">
            <span className="text-[#FFE45F]">Protégés</span> receive guidance
            from top Prime Contractors.
          </h3>
          <p className="text-xl lg:text-2xl max-w-[480px]">
            Protégés connect with experts from top Prime Contractor companies,
            receiving assistance with things like:
          </p>

          <div className="mt-[52px] grid grid-cols-2 gap-14">
            <div className="flex flex-col justify-center gap-6 items-center text-center">
              <img src="./assets/imgs/technical.png" alt="technical" />
              <p className="w-[150px] leading-none">
                Technical and/or management assistance
              </p>
            </div>
            <div className="flex flex-col justify-center gap-6 items-center text-center">
              <img src="./assets/imgs/general.png" alt="general" />
              <p className="w-[150px] leading-none">
                General administrative assistance
              </p>
            </div>
            <div className="flex flex-col justify-center gap-6 items-center text-center">
              <img src="./assets/imgs/training.png" alt="training" />
              <p className="w-[150px] leading-none">Training and education</p>
            </div>
            <div className="flex flex-col justify-center gap-6 items-center text-center">
              <img src="./assets/imgs/business.png" alt="business" />
              <p className="w-[150px] leading-none">Business development</p>
            </div>
          </div>
          <div className="mt-10 text-[28px] italic text-center">
            + MUCH MORE
          </div>

          <Button className="mt-[52px] text-[15px] ">
            <span>
              LEARN MORE ABOUT{" "}
              <span className="font-bold capitalize">PTOTéGéS</span>
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
