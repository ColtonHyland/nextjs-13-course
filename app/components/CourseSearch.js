"use client";
import { useState } from "react";

const CourseSearch = () => {
  const [query, setQuery] = useState("");
  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        className="search-input"
        placeholder="Search Courses..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
    </form>
  );
};

export default CourseSearch;
