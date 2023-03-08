import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { HomePage } from '../pages/Home';
import { ArticlePage } from '../pages/Article';
import { Layout } from './Layout';

function App() {
  return (
    <div className="App">
      <h1 className="visually-hidden">Hacker news</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="address" element={<ArticlePage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
