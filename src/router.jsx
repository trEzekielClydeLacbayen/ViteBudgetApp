import React from 'react';
import Layout from './components/layout/layout';
import ErrorPage from './pages/error-page';
import Dashboard from './pages/dashboard/dashboard';
import Profilepage from './pages/profile/profilepage';
import Settingspage from './pages/settings/settingspage';

import { createBrowserRouter } from 'react-router-dom';

const routerparams = [
  {
    path: '/',
    element: (
      <Layout>
        <Dashboard />
      </Layout>
    ),
    errorElement: (
      <Layout>
        <ErrorPage />
      </Layout>
    ),
  },
  {
    path: '/Profile',
    element: (
      <Layout>
        <Profilepage />
      </Layout>
    ),
    errorElement: (
      <Layout>
        <ErrorPage />
      </Layout>
    ),
  },
  {
    path: '/Settings',
    element: (
      <Layout>
        <Settingspage />
      </Layout>
    ),
    errorElement: (
      <Layout>
        <ErrorPage />
      </Layout>
    ),
  },
];

export const router = createBrowserRouter(routerparams);
