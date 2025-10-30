import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AppContext } from '../App'; 


import SearchBox from '../components/SearchBox';
import Filters from '../components/Filters';
import TVList from '../components/TVList';
import WatchlistPanel from '../components/WatchlistPanel';
import Pagination from '../components/Pagination';

const Home = () => {
  
  const { state, dispatch } = useContext(AppContext);
  
  
  const [currentPage, setCurrentPage] = useState(1);

  
  useEffect(() => {
    const fetchData = async () => {
      
      dispatch({ type: 'FETCH_INIT' });
      try {
        
        const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${state.query}`);
        
   
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
        
       
        setCurrentPage(1); 
      } catch (error) {
        
        dispatch({ type: 'FETCH_FAILURE' });
      }
    };


    if (state.query) {
      fetchData();
    } else {
      
      dispatch({ type: 'FETCH_SUCCESS', payload: [] });
    }
  }, [state.query, dispatch]);

  
  const filteredShows = state.shows
    .filter(item => {
      const { genre, language, rating } = state.filters;
      const show = item.show;

   
      const genreMatch = !genre || (show.genres && show.genres.includes(genre));
      const languageMatch = !language || show.language === language;
      const ratingMatch = !rating || (show.rating && show.rating.average && show.rating.average >= parseFloat(rating));
      
      return genreMatch && languageMatch && ratingMatch;
    });

  
  const totalPages = Math.ceil(filteredShows.length / state.pageSize);
  
  
  const paginatedShows = filteredShows.slice(
    (currentPage - 1) * state.pageSize, 
    currentPage * state.pageSize        
  );


  const renderContent = () => {
    if (state.isLoading) {
      return <div className="loading">Yükleniyor...</div>; 
    }
    
    if (state.isError) {
      return <div className="error">Hata oluştu. Lütfen tekrar deneyin.</div>;
    }
    
    if (filteredShows.length === 0 && !state.isLoading) {

      return <div className="empty-results">Aradığınız kriterlere uygun sonuç bulunamadı.</div>;
    }
    return <TVList shows={paginatedShows} />;
  };

  return (
    <main className="home-layout">
      {}
      <div className="left-panel">
        <SearchBox />
        <Filters />
        
        {}
        {renderContent()} 
        
        <Pagination 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage} 
          totalPages={totalPages} 
        />
      </div>
      
      {}
      <div className="right-panel">
        <WatchlistPanel />
      </div>
    </main>
  );
};

export default Home;