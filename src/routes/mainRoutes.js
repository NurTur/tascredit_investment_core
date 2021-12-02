import React, { lazy } from 'react';
// import MainLayout from 'layout/MainLayout';
import { Loadable } from '@/components';

const DefaultMain = Loadable(lazy(() => import('@/views/main')));

const MainRoutes = {
    path: '/',
    // element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DefaultMain />
        },
        {
            path: '*',
            element: <DefaultMain />
        }
    ]
};

export default MainRoutes;
