import React, { lazy } from 'react';
import { Route, Routes } from 'react-router';
import { MainLayout } from '@/containers';
import { Loadable } from '@/components';


const DefaultMain = Loadable(lazy(() => import(/* @/views/main */ '@/views/main')));

const DefaultMain1 = Loadable(lazy(() => import(/* @/views/main1 */ '@/views/main1')));

const DefaultMain2 = Loadable(lazy(() => import(/* @/views/main2 */ '@/views/main2')));

const MainRoutes = () => (
    <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route index element={<DefaultMain />} />
            <Route path='dashboard/default' element={<DefaultMain1 />} />
            <Route path='contracts' element={<DefaultMain2 />}/>    
            <Route path='contracts/loan-agreements' element={<DefaultMain1 />}/>
        </Route>
    </Routes>
);

export default MainRoutes;
