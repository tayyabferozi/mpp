import clsx from "clsx";

const Section = ({ rootClassName, className, children }) => {
  return (
    <div
      className={clsx(rootClassName, "px-5 sm:px-10 min-[1440px]:px-[120px]")}
    >
      <div className={clsx(className, "max-w-[1200px] mx-auto")}>
        {children}
      </div>
    </div>
  );
};

export default Section;
