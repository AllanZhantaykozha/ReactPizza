import React, { createContext, useState } from 'react';

import { Header } from './components/Header';
import { Route, Routes } from 'react-router';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Basket } from './pages/Basket';

import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './redux/slices/filterSlice';

export const SearchContext = createContext();

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="App">
      <div className="wrapper">
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
          <Header />

          <div className="content">
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/basket" element={<Basket />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </SearchContext.Provider>
      </div>
    </div>
  );
}

export default App;
