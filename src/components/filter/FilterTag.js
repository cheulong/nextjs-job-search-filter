import React from "react";

export default function FilterTag({ text, removeTag }) {
  return (
    <div
      data-testid="filterTag"
      className="rounded-sm bg-cyan-500 m-2 cursor-pointer inline-block w-auto  text-cyan-dark font-bold text-center py-1 pl-2"
    >
      {text}
      <span
        className="text-white hover:bg-cyan-darker bg-cyan-dark px-2 text-center rounded-sm py-1 ml-1"
        onClick={() => console.log(removeTag(text))}
      >
        X
      </span>
    </div>
  );
}
