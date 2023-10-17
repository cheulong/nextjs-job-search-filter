import React, { useContext } from "react";
import { jobContext } from "../../contexts/JobContext";

interface TagsProps {
  text: string;
}

export default function Tags({ text }: TagsProps) {
  const { addTags } = useContext(jobContext);

  const handleAddition = (text: string) => {
    addTags(text);
  };

  return (
    <span
      onClick={() => handleAddition(text)}
      className="h-fit px-3 hover:text-white hover:bg-cyan-700 bg-cyan-100 rounded-full m-2 cursor-pointer inline-block w-auto text-cyan-500 font-bold text-center py-1"
    >
      {text}
    </span>
  );
}
