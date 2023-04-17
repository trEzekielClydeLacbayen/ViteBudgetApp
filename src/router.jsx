import React from 'react';
import Layout from './components/layout/layout';
import ErrorPage from './components/pages/error-page';
import Dashboard from './components/pages/dashboard';
import Profilepage from './components/pages/profilepage';
import Settingspage from './components/pages/settingspage';

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
