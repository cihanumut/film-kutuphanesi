
import React, { useContext } from 'react';
import { AppContext } from '../App';

const Filters = () => {
  const { state, dispatch } = useContext(AppContext);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'SET_FILTERS', payload: { [name]: value } });
  };

  return (
    <div className="filters">
      {}
      <select name="genre" value={state.filters.genre} onChange={handleFilterChange}>
        <option value="">Tüm Türler</option>
        <option value="Drama">Drama</option>
        <option value="Comedy">Comedy</option>
        <option value="Action">Action</option>
        <option value="Thriller">Thriller</option>
      </select>
      
      <select name="language" value={state.filters.language} onChange={handleFilterChange}>
        <option value="">Tüm Diller</option>
        <option value="English">English</option>
        <option value="Turkish">Turkish</option>
        <option value="Spanish">Spanish</option>
      </select>

      <label>
        Min. Puan:
        <input
          type="number"
          name="rating"
          min="0"
          max="10"
          step="0.1"
          value={state.filters.rating}
          onChange={handleFilterChange}
        />
      </label>
    </div>
  );
};

export default Filters;