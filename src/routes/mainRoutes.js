import React, { lazy } from 'react';
import { MainLayout } from '@/containers';
import { Loadable } from '@/components';

const DefaultMain = Loadable(lazy(() => import('@/views/main')));
const DefaultMain1 = Loadable(lazy(() => import('@/views/main1')));
const DefaultMain2 = Loadable(lazy(() => import('@/views/main2')));

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DefaultMain />
        },
        {
            path: '/dashboard/default',
            element: <DefaultMain1 />
        },
        {
            path: '/*',
            element: <DefaultMain2 />
        }
    ]
};

export default MainRoutes;
