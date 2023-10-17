"use client";
import React, { useContext } from "react";
import Card from "./Card";
import { jobContext } from "@/contexts/JobContext";

export default function CardList() {
  const { jobsListing } = useContext(jobContext);

  return (
    <>
      {jobsListing
        ? jobsListing.map((jobDetail, id) => (
            <Card key={id} details={jobDetail} />
          ))
        : null}
    </>
  );
}
