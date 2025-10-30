
import React from 'react';
import TVCard from './TVCard';

const TVList = ({ shows }) => {
  return (
    <div className="tv-list">
      {shows.map(item => (
        <TVCard key={item.show.id} item={item} />
      ))}
    </div>
  );
};

export default TVList;