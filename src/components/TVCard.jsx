
import React, { useContext } from 'react';
import { AppContext } from '../App';
import { Link } from 'react-router-dom';

const stripHtml = (html) => {
  if (!html) return 'Özet mevcut değil.';
  let doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || "";
};

const TVCard = ({ item }) => {
  const { dispatch, state } = useContext(AppContext);
  const { show } = item;

  const handleAddWatchlist = () => {
    dispatch({ type: 'ADD_WATCHLIST', payload: item });
  };

  const isInWatchlist = state.watchlist.some(w => w.show.id === show.id);

  return (
    <div className="tv-card">
      <img 
        src={show.image?.medium || 'https://via.placeholder.com/210x295.png?text=Poster+Yok'} 
        alt={show.name} 
      />
      <div className="tv-card-content">
        <h3>{show.name}</h3>
        <p>
          <strong>Tür:</strong> {show.genres.join(', ') || 'Bilinmiyor'}
        </p>
        <p>
          <strong>Dil:</strong> {show.language || 'Bilinmiyor'}
        </p>
        <p>
          <strong>Puan:</strong> {show.rating?.average || 'N/A'}
        </p>
        <p className="summary">
          {stripHtml(show.summary).substring(0, 100)}...
        </p>
        <div className="card-buttons">
          <Link to={`/show/${show.id}`} className="btn-detail">
            Detay
          </Link>
          <button onClick={handleAddWatchlist} disabled={isInWatchlist}>
            {isInWatchlist ? 'Listede' : 'Kısa Listeye Ekle'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TVCard;