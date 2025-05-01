import { Route, Navigate } from 'react-router-dom';
import DashboardPage from '../pages/DashboardPage';
import PlanetPage from '../pages/PlanetPage';
import ActivitiesPage from '../pages/ActivitiesPage';

export default function PrivateRoutes(user) {
  if (!user) {
    return [
      <Route key="redirect" path="/*" element={<Navigate to="/login" replace />} />
    ];
  }

  return [
    <Route key="dashboard" path="/dashboard" element={<DashboardPage />} />,
    <Route key="planet" path="/:planetId" element={<PlanetPage />} />,
    <Route
      key="activities"
      path="/:planetId/activities"
      element={<ActivitiesPage />}
    />
  ];
}
