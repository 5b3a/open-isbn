/* eslint-disable react/prop-types */
import {
  ArrowUpRight,
  BookOpenText,
  Buildings,
  Calendar,
  IconContext,
  UserCircle,
} from "@phosphor-icons/react";

function Main({
  title = "",
  imgUrl = "",
  authors = [],
  pubH = [],
  pubD,
  pages = 0,
  olUrl = "",
}) {
  return (
    <IconContext.Provider
      value={{
        size: 28,
      }}
    >
      <div className="grid w-full grid-flow-row place-items-start gap-2 bg-slate-200 p-2 md:grid-flow-col">
        {/* {image} */}

        <div className="grid min-h-[500px] w-full place-items-center rounded-lg border-2 border-black p-1">
          <img
            src={imgUrl}
            alt={title}
            className="aspect-auto h-full w-full rounded-md"
          />
        </div>

        {/* details */}
        <div className="flex h-full w-full flex-col items-start gap-4 rounded-lg border-2 border-black p-1">
          {/* title */}
          <span className="font-inter w-full hyphens-auto rounded-md p-1 text-lg font-extrabold uppercase tracking-wide text-black md:text-4xl lg:text-8xl">
            {title}
          </span>

          {/* authors section */}
          <section className="flex w-full flex-wrap justify-start gap-1 font-medium capitalize tracking-wider">
            {authors.map((author, i) => (
              <a
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={i}
                className="bind-text-primary inline-flex cursor-pointer items-center gap-1 rounded-lg border-2 border-black p-0.5"
                href={author.url}
              >
                <span className="grid place-content-center rounded-md p-0.5">
                  <UserCircle />
                </span>
                <span className="grid place-items-center rounded-md p-0.5">
                  {author.name}
                </span>
              </a>
            ))}
          </section>

          {/* publisher */}
          <section className="grid w-fit grid-flow-row place-items-start gap-1 font-medium capitalize tracking-wider">
            {pubH.map((publisher, i) => (
              <div
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={i}
                className="bind-text-primary inline-flex w-full items-center justify-stretch gap-1 rounded-lg border-2 border-black p-0.5"
              >
                <span className="grid place-content-center rounded-md p-0.5">
                  <Buildings />
                </span>
                <span className="grid place-content-center rounded-md p-0.5">
                  {publisher.name}
                </span>
              </div>
            ))}
          </section>

          {/* date and pages */}
          <section className="grid w-fit grid-flow-col place-items-start gap-1 font-medium capitalize tracking-wider">
            {/* pages */}
            {Number(pages) > 1 ? (
              <div className="inline-flex h-full w-full cursor-pointer flex-wrap items-center justify-stretch gap-1 rounded-lg border-2 border-black p-0.5">
                <span className="grid place-content-center rounded-md p-0.5">
                  <BookOpenText size={20} weight="bold" />
                </span>
                <span className="grid place-content-center rounded-md p-0.5 text-sm font-bold">
                  {Number(pages)}
                </span>{" "}
                : null
              </div>
            ) : null}

            {/* date */}
            <div className="inline-flex w-full flex-wrap items-center justify-center gap-1 rounded-lg border-2 border-black p-0.5 sm:justify-stretch">
              <span className="grid place-content-center rounded-md p-0.5">
                <Calendar size={20} weight="bold" />
              </span>
              <span className="grid place-content-center rounded-md p-0.5 text-sm font-bold">
                {pubD}
              </span>
            </div>
          </section>
          <hr className="mt-2 h-0.5 w-full bg-slate-800/30" />

          {/* categories */}
          <section className="mt-2 flex w-full flex-wrap justify-start gap-1 rounded-lg border border-black p-2 font-martian text-xs font-medium capitalize tracking-wider">
            {authors.map((author, i) => (
              <a
                href={author.url}
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={i}
                className="bind-text-primary grid cursor-pointer place-items-center items-center gap-1 rounded-md border-2 border-black p-1"
              >
                {author.name}
              </a>
            ))}
          </section>
          <hr className="mt-2 h-0.5 w-full bg-slate-800/30" />

          {/* ope in open lib */}
          <section className="flex w-full flex-wrap justify-center gap-1 font-medium capitalize tracking-wider">
            <a
              className="bind-text-primary inline-flex cursor-pointer items-center gap-1 rounded-lg border-2 border-black bg-sky-500 p-0.5"
              href={olUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span className="grid place-items-center rounded-md p-0.5">
                Open In Open Library
              </span>
              <span className="grid place-content-center rounded-md p-0.5">
                <ArrowUpRight size={20} />
              </span>
            </a>
          </section>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Main;
