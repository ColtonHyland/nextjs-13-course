"use client";
import { useState } from "react";

const CourseSearch = () => {
  const [query, setQuery] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(query);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        className="search-input"
        placeholder="Search Courses..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button className="search-button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default CourseSearch;
