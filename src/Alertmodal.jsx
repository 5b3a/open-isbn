const Alertmodal = ({handleClick})=>{
    return (
        <div className="absolute p-2">
          <span className="w-full rounded-lg border border-black bg-sky-200 p-2 font-martian text-xl tracking-wider grid gap-3 place-items-center">
            <span className="p-2 border-2 border-black shadow-xl bg-rose-400 rounded-md">You must provide 10 or 13 digits of ISBN</span>
            <button onClick={handleClick} className="mt-3 p-2 border-2 border-black rounded-md bg-rose-400">
              Close
            </button>
          </span>
        </div>
      );
}

export default Alertmodal
