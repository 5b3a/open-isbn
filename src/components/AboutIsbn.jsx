import React from "react";

function AboutIsbn() {
  return (
    <section className="h-full w-full p-2">
      <div className="flex h-full w-full items-center justify-center rounded-md border-2 border-black">
        <p className="max-w-[60ch] text-lg tracking-wider md:text-xl">
          <b>The International Standard Book Number</b> (ISBN) is a numeric
          commercial
          <b> book identifier</b> that is intended to be unique. <br />
          Publishers purchase or receive ISBNs from an affiliate of the
          International ISBN Agency.
          <br />
          <br />
          <b>
            <em>
              Before 2007, there were only 10-digit ISBNs; thereafter, 13-digit
              ISBNs were introduced and used to increase the availability of
              ISBNs worldwide.
            </em>
          </b>
          <br />
          <br />
          <a
            href="https://en.wikipedia.org/wiki/ISBN"
            target="_blank"
            className="text-base capitalize underline transition-all duration-150 hover:font-medium hover:text-emerald-500"
            rel="noreferrer"
          >
            more about ISBN on Wikipedia
          </a>
        </p>
      </div>
    </section>
  );
}

export default AboutIsbn;
