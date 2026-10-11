import { createBrowserRouter, Navigate } from 'react-router-dom';
import SiteLayout from '../layouts/SiteLayout';
import HomePage from '../pages/HomePage';
import GamesPage from '../pages/GamesPage';
import GameDetailPage from '../pages/GameDetailPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import PrivacyPage from '../pages/PrivacyPage';
import SortingWarPrivacyPage from '../pages/SortingWarPrivacyPage';
import NotFoundPage from '../pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SiteLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'games',
        element: <GamesPage />,
      },
      {
        path: 'games/:slug',
        element: <GameDetailPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'privacy',
        element: <PrivacyPage />,
      },
      {
        path: 'privacy/sorting-war',
        element: <SortingWarPrivacyPage />,
      },
      { path: 'games/core-forge', element: <Navigate to="/games/sorting-war" replace /> },
      { path: 'privacy/core-forge', element: <Navigate to="/privacy/sorting-war" replace /> },
      {
        path: '*',
        element: <NotFoundPage />,
      }
    ]
  }
]);
