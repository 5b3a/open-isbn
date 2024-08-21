
import { MagnifyingGlass } from "@phosphor-icons/react";
import { forwardRef } from 'react';

const SearchSection = ({handleClick},ref) =>{
  return (
    <div className="flex w-full items-center justify-center gap-2 border-b-2 border-black bg-slate-300 p-2">
      <input
        type="text"
        placeholder="Enter ISBN"
        required
        ref={ref}
        className="bind-text-primary btn-border h-full rounded-lg bg-transparent pl-2 font-martian text-sm placeholder:text-black"
      />
      <button onClick={handleClick} className="btn-border bind-text-primary inline-grid place-content-center rounded-lg p-1">
        <MagnifyingGlass size={24} weight="bold" />
      </button>
    </div>
  );
}

export default forwardRef(SearchSection);
