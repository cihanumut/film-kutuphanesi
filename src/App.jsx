
import React, { useReducer, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShowDetail from './pages/ShowDetail';
import Footer from './components/Footer';
import './App.css';


export const AppContext = createContext(null);


const initialState = {
  isLoading: false,
  isError: false,
  shows: [],         
  watchlist: [],    
  query: 'friends',  
  filters: {         
    genre: '',
    language: '',
    rating: 0,
  },
  pageSize: 6,      
 
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, isLoading: true, isError: false };
    case 'FETCH_SUCCESS':
      return { ...state, isLoading: false, shows: action.payload };
    case 'FETCH_FAILURE':
      return { ...state, isLoading: false, isError: true };
    case 'SET_QUERY':
      return { ...state, query: action.payload };
    case 'SET_FILTERS':
     
      return { ...state, filters: { ...state.filters, ...action.payload } };
    case 'SET_WATCHLIST':
      return { ...state, watchlist: action.payload };
    case 'ADD_WATCHLIST':
     
      if (state.watchlist.find(item => item.show.id === action.payload.show.id)) {
        return state;
      }
      return { ...state, watchlist: [...state.watchlist, action.payload] };
    case 'REMOVE_WATCHLIST':
      
      return { 
        ...state, 
        watchlist: state.watchlist.filter(item => item.show.id !== action.payload) 
      };
    case 'CLEAR_WATCHLIST':
      return { ...state, watchlist: [] };
    case 'SET_PAGE_SIZE':
      return { ...state, pageSize: action.payload };
    default:
      throw new Error(`Bilinmeyen eylem türü: ${action.type}`);
  }
};


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="App">
        {}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show/:id" element={<ShowDetail />} />
        </Routes>
        
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;