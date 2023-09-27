import React, { useState } from 'react';
import "./SearchBar.css"
import magnifier from "../images/icon-search.svg"

const SearchBar = () => {
  const [query, setQuery] = useState('');

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <div className="search-bar">
    <img src={magnifier} alt="" />


     <input
     type="text"
     placeholder="Search location..."
     value={query}
     onChange={handleChange}/>
     

     </div>
     );
};

export default SearchBar;
