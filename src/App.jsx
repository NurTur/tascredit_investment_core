import React from 'react';
import { Route, Routes } from 'react-router';
import { Page1, Page2 } from './pages';

const RootRoutes = () => (
    <Routes>
        <Route path="/" element={<Page1 />}>
            <Route index element={<Page1 />} />
            <Route path="/:loanId" element={<Page2 />} />
        </Route>
        <Route path="/login" element={<Page2 />} />
    </Routes>
);

export default RootRoutes;
