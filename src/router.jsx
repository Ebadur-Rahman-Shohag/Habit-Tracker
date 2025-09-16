import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import Dashboard from './pages/Dashboard';
import HabitDetail from './pages/HabitDetail';
import Challenges from './pages/Challenges';
import ChallengeDetail from './pages/ChallengeDetail';
import Analytics from './pages/Analytics';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Help from './pages/Help';
import Auth from './pages/Auth';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />, // App will be the layout
        children: [
            { path: '/', element: <Navigate to="/dashboard" /> },
            { path: '/dashboard', element: <Dashboard /> },
            { path: '/habits/:id', element: <HabitDetail /> },
            { path: '/challenges', element: <Challenges /> },
            { path: '/challenges/:id', element: <ChallengeDetail /> },
            { path: '/analytics', element: <Analytics /> },
            { path: '/profile', element: <Profile /> },
            { path: '/settings', element: <Settings /> },
            { path: '/help', element: <Help /> },
            { path: '/auth', element: <Auth /> },
        ],
    },
]);

export default router;
