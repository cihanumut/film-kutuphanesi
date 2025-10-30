
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const stripHtml = (html) => {
  if (!html) return 'Özet mevcut değil.';
  let doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || "";
};

const ShowDetail = () => {
  const { id } = useParams(); 
  const [show, setShow] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        
        const showPromise = axios.get(`https://api.tvmaze.com/shows/${id}`);
        
        const episodesPromise = axios.get(`https://api.tvmaze.com/shows/${id}/episodes`);

        
        const [showResponse, episodesResponse] = await Promise.all([showPromise, episodesPromise]);

        setShow(showResponse.data);
        setEpisodes(episodesResponse.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchDetails();
  }, [id]); 

  if (isLoading) return <div className="loading">Yükleniyor...</div>;
  if (isError) return <div className="error">Hata oluştu. Lütfen tekrar deneyin.</div>;
  if (!show) return null;

  return (
    <div className="show-detail">
      <Link to="/" className="back-link">&larr; Ana Sayfaya Dön</Link>
      
      <div className="detail-header">
        <img 
          src={show.image?.original || 'https://via.placeholder.com/400x550.png?text=Poster+Yok'} 
          alt={show.name} 
        />
        <div className="detail-info">
          <h1>{show.name}</h1>
          <p><strong>Tür:</strong> {show.genres.join(', ')}</p>
          <p><strong>Dil:</strong> {show.language}</p>
          <p><strong>Puan:</strong> {show.rating.average}</p>
          <p><strong>Durum:</strong> {show.status}</p>
          <div className="summary">
            {stripHtml(show.summary)}
          </div>
        </div>
      </div>

      <div className="episodes-list">
        <h2>Bölümler</h2>
        <ul>
          {episodes.map(ep => (
            <li key={ep.id}>
              <strong>S{String(ep.season).padStart(2, '0')}E{String(ep.number).padStart(2, '0')}:</strong> {ep.name}
              <span>(Puan: {ep.rating.average || 'N/A'})</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShowDetail;