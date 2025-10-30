
import React, { useState, useContext } from 'react';
import { AppContext } from '../App';

const SearchBox = () => {
  const { dispatch } = useContext(AppContext);
  const [localQuery, setLocalQuery] = useState('friends');

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch({ type: 'SET_QUERY', payload: localQuery });
  };

  return (
    <form onSubmit={handleSearch} className="search-box">
      <input
        type="text"
        value={localQuery}
        onChange={(e) => setLocalQuery(e.target.value)}
        placeholder="Dizi ara (örn: friends)"
      />
      <button type="submit">Ara</button>
    </form>
  );
};

export default SearchBox;