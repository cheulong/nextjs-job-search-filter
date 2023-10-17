//@ts-nocheck
"use client";
import React, { createContext, useReducer, useEffect } from "react";
import { Jobs as Joblisting } from "../mocks/data";
import {
  getNewsSuccess,
  filterJobsByTags,
  addTagsTOArray,
  removeTagsFromArray,
  clearTagsFromArray,
} from "./JobActions";
import JobReducer from "./JobReducer";

const initialState = {
  jobsListing: [],
  tags: [],
  tempJobs: [],
  addTags: (tag: string) => undefined,
};

export const jobContext = createContext(initialState);

export const JobProvider = ({ children }) => {
  const [state, dispatch] = useReducer(JobReducer, initialState);

  const loadJobs = () => {
    dispatch(getNewsSuccess(Joblisting));
  };

  const addTags = (tagText) => {
    if (!state.tags.includes(tagText)) dispatch(addTagsTOArray(tagText));
  };

  const removeTags = (tagText) => {
    dispatch(removeTagsFromArray(tagText));
  };

  const filterJobsFunction = (tags) => {
    dispatch(filterJobsByTags(tags));
  };

  const clearTags = () => {
    dispatch(clearTagsFromArray());
  };

  useEffect(() => {
    loadJobs();
  }, []);

  useEffect(() => {
    if (state.tags.length >= 0) {
      filterJobsFunction(state.tags);
    }
  }, [state.tags]);

  return (
    <jobContext.Provider
      value={{
        jobsListing: state.jobs,
        tags: state.tags,
        addTags,
        removeTags,
        clearTags,
      }}
    >
      {children}
    </jobContext.Provider>
  );
};
