import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '@containers/Layout';
import { Home } from '@pages/Home';
import { NotFound } from '@pages/NotFound';
import { Categories } from '../pages/Categories';
import { Search } from '../pages/Search';
import { WatchList } from '../pages/WatchList';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/search" element={<Search />} />
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export { App };
