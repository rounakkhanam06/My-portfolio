import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Loader from './components/Loader/Loader';
import './index.css';

// Single-page site: anything other than the home page renders the 404 page
const NotFound = lazy(() => import('./pages/NotFound.jsx'));
const isHome = ['/', '/index.html'].includes(window.location.pathname.replace(/\/+$/, '') || '/');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {isHome ? (
      <>
        <Loader />
        <App />
      </>
    ) : (
      <Suspense fallback={null}>
        <NotFound />
      </Suspense>
    )}
  </React.StrictMode>
);
