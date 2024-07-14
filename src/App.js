import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Comps/Header';
import Home from './Comps/Home';
import Favorites from './Comps/Favorites';
import ContextProvider from './context/Context1';
import MoreInfo from './Comps/MoreInfo';

function App() {
  return (
    <ContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/favorite/employee" element={<MoreInfo />} />
        </Routes>
      </Router>
    </ContextProvider>
  );
}

export default App;
