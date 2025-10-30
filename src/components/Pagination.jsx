
import React from 'react';

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  if (totalPages <= 1) return null; 

  return (
    <div className="pagination">
      <button 
        onClick={() => setCurrentPage(1)} 
        disabled={currentPage === 1}
      >
        İlk
      </button>
      <button 
        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
        disabled={currentPage === 1}
      >
        Geri
      </button>
      
      <span>Sayfa {currentPage} / {totalPages}</span>
      
      <button 
        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
        disabled={currentPage === totalPages}
      >
        İleri
      </button>
      <button 
        onClick={() => setCurrentPage(totalPages)} 
        disabled={currentPage === totalPages}
      >
        Son
      </button>
    </div>
  );
};

export default Pagination;