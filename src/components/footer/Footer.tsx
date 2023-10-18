import React from "react";

export default function Footer() {
  return (
    <div className="text-cyan-darker static bottom-0 left-0 text-center mx-auto ">
      <span className="text-cyan-darker m-1">
        Coded with
        <span className="text-red-700" aria-label="love" role="img">
          ❤️
        </span>
        by
      </span>
      <a
        href="https://github.com/cheulong"
        rel="noopener noreferrer"
        target="_blank"
        className="text-cyan-dark font-bold ml-1 hover:font-bold"
        data-testid="footer-name"
      >
        Cheulong Sear
      </a>
      .
    </div>
  );
}
