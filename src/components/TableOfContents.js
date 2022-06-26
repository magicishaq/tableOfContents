import React, { useState } from "react";
import useHeadingsData from "./useHeadingsData";
import Headings from './Headings'; 
import useIntersectionObserver from "./useIntersectionObserver";
const TableOfContents = () => {
    const [activeId, setActiveId] = useState();
    const {nestedHeadings}= useHeadingsData();
    useIntersectionObserver(setActiveId);
  
    return (
      <nav aria-label="Table of contents">
        <Headings headings={nestedHeadings} activeId={activeId} />
      </nav>
    );
  };

export default TableOfContents;
