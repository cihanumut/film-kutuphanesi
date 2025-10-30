
import React, { useContext } from 'react';
import { AppContext } from '../App';
import { Link } from 'react-router-dom';

const WatchlistPanel = () => {
  const { state, dispatch } = useContext(AppContext);

  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_WATCHLIST', payload: id });
  };

  return (
    <aside className="watchlist-panel">
      <h3>Gösterime Girecekler Listesi</h3>
      {state.watchlist.length === 0 ? (
        <p>Listeniz boş.</p>
      ) : (
        <ul>
          {state.watchlist.map(item => (
            <li key={item.show.id}>
              <Link to={`/show/${item.show.id}`}>{item.show.name}</Link>
              <button onClick={() => handleRemove(item.show.id)} className="btn-remove">
                X
              </button>
            </li>
          ))}
        </ul>
      )}
      {state.watchlist.length > 0 && (
        <button 
          onClick={() => dispatch({ type: 'CLEAR_WATCHLIST' })} 
          className="btn-clear"
        >
          Listeyi Temizle
        </button>
      )}
    </aside>
  );
};

export default WatchlistPanel;