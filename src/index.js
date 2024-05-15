import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import './index.css';
import App from './routes/App';
import { ErrorPage } from './routes/ErrorPage';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App>
        <RouterProvider router={router} />
    </App>
);


