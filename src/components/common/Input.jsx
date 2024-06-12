const Input = ({ ...rest }) => {
  return (
    <div>
      <input
        className="w-full border border-solid border-[rgba(255,255,255,.2)] rounded-[4px] bg-[rgba(255,255,255,.1)] px-3 placeholder:text-[rgba(255,255,255,.7)] py-4"
        {...rest}
      />
    </div>
  );
};

export default Input;
