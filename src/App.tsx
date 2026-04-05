/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './components/Landing';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Activities from './components/Activities';
import ActivityDetail from './components/ActivityDetail';
import Teams from './components/Teams';
import CreateTeam from './components/CreateTeam';
import Leaderboard from './components/Leaderboard';
import Success from './components/Success';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/activity-detail" element={<ActivityDetail />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/create-team" element={<CreateTeam />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

