// src/components/Form.js
import { useState } from "react";

export default function Form({ moviesearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    moviesearch(searchTerm); // Call the passed down function with the search term
    setSearchTerm(""); // Clear the input field
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for a movie"
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}

  