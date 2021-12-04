import React, { lazy } from 'react';
import { Route, Routes } from 'react-router';
import { MainLayout } from '@/containers';
import { Loadable } from '@/components';
import DefaultMain from '../views/main';
import DefaultMain1 from '../views/main1';
import DefaultMain2 from '../views/main2';


// const DefaultMain = Loadable(lazy(() => import(/* @/views/main */ '@/views/main')));

// const DefaultMain1 = Loadable(lazy(() => import(/* @/views/main1 */ '@/views/main1')));

// const DefaultMain2 = Loadable(lazy(() => import(/* @/views/main2 */ '@/views/main2')));

// const MainRoutes = {
//     path: '/',
//     element: <MainLayout />,
//     children: [
//         {
//             path: '/',
//             element: <DefaultMain />
//         },
//         {
//             path: '/dashboard/default',
//             element: <DefaultMain1 />
//         },
//         {
//             path: '/*',
//             element: <DefaultMain2 />
//         }
//     ]
// };

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
