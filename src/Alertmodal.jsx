const Alertmodal = ({ handleClick }) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-2">
      <span className="grid w-full place-items-center gap-3 rounded-lg border border-black bg-sky-200 p-2 font-martian text-xl tracking-wider">
        <span className="rounded-md border-2 border-black bg-rose-400 p-2 shadow-xl">
          You must provide 10 or 13 digits of ISBN
        </span>
        <button
          onClick={handleClick}
          type="button"
          className="mt-3 rounded-md border-2 border-black bg-rose-400 p-2"
        >
          Close
        </button>
      </span>
    </div>
  );
};

export default Alertmodal;
