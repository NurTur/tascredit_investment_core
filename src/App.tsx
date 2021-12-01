import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import AccountDetailView from './account/AccountDetailView';
import AccountLayout from './account/AccountLayout';
import MainLayout from './main/MainLayout';

const App: React.FC = (): JSX.Element => {
  const mainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '*', element: <Navigate to="/404" /> },
      { path: '/', element: <div>MainPage</div> },
      { path: '404', element: <div>404444</div> },
      { path: 'account', element: <Navigate to="/account/list" /> },
    ],
  };

  const accountRoutes = {
    path: 'account',
    element: <AccountLayout />,
    children: [
      { path: '*', element: <Navigate to="/404" /> },
      { path: ':id', element: <AccountDetailView /> },
      { path: 'add', element: <div>add</div> },
    ],
  };

  const routing = useRoutes([mainRoutes, accountRoutes]);

  return <>{routing}</>;
};

export default App;
