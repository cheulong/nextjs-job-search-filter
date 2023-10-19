"use client";
import React, { useContext } from "react";
import FilterTag from "./FilterTag";
import { jobContext } from "../../contexts/JobContext";

export default function InputBox() {
  const { tags, removeTags, clearTags } = useContext(jobContext);

  return (
    <>
      {tags.length ? (
        <div>
          <div
            data-testid="inputBox"
            className="flex justify-between items-center bg-white rounded-sm mb-8 relative bottom-3 p-4"
          >
            <div>
              {tags.map((tag, id) => (
                <FilterTag key={id} text={tag} removeTag={removeTags} />
              ))}
            </div>
            <p
              onClick={() => clearTags()}
              className="hover:underline font-bold cursor-pointer text-cyan-dark"
            >
              Clear
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
