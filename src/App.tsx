import React, { ReactElement } from 'react';
import { Route, Routes } from 'react-router';

import MainLayout from './main/MainLayout';
import { Page1, Page2, Page3 } from './pages';

const RootRoutes = (): ReactElement => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Page1 />} />
      <Route path="/:loanId" element={<Page2 />} />
    </Route>
    <Route path="/login" element={<Page3 />} />
  </Routes>
);

export default RootRoutes;
