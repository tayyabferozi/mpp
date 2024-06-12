const Textarea = ({ ...rest }) => {
  return (
    <div>
      <textarea
        className="block w-full border border-solid border-[rgba(255,255,255,.2)] rounded-[4px] bg-[rgba(255,255,255,.1)] px-3 placeholder:text-[rgba(255,255,255,.7)] py-4"
        rows={3}
        {...rest}
      />
    </div>
  );
};

export default Textarea;
