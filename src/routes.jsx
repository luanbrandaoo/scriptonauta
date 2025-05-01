import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Error404 from './pages/Error404';
import DashboardPage from './pages/DashboardPage';
import PlanetPage from './pages/PlanetPage';
import ActivitiesPage from './pages/ActivitiesPage';
import LoginPage from './pages/LoginPage';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/404" element={<Error404 />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/:planetId" element={<PlanetPage />} />
                <Route path="/:planetId/activities" element={<ActivitiesPage />} />
                <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;