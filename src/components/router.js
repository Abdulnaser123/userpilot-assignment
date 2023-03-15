import React from 'react';
import Sidebar from './sidebar/sidebar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Users from './Users/Users';
import NoPage from './NoPage';
function router() {
  return (
    <>
      <Sidebar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default router;
