import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {ArticlePage} from "./pages/ArticlePage/ArticlePage";
import {HomePage} from "./pages/HomePage";
import {ErrorPage} from "./pages/ErrorPage";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path=":articleId" element={<ArticlePage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>

    </div>
  );
}

export default App;
