import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import AddHabitModal from './components/AddHabitModal';
import Dashboard from './pages/Dashboard';
import HabitDetail from './pages/HabitDetail';
import Challenges from './pages/Challenges';
import ChallengeDetail from './pages/ChallengeDetail';
import Analytics from './pages/Analytics';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Help from './pages/Help';
import Auth from './pages/Auth';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Set to true for design demo
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [addHabitModalOpen, setAddHabitModalOpen] = useState(false);

  const handleSaveHabit = (habitData) => {
    // For now, just log the habit data - in a real app, this would save to backend
    console.log('New habit created:', habitData);
    // You could add a toast notification here
  };

  if (!isAuthenticated) {
    return <Auth onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          onAddHabit={() => setAddHabitModalOpen(true)}
        />
        <AddHabitModal
          isOpen={addHabitModalOpen}
          onClose={() => setAddHabitModalOpen(false)}
          onSave={handleSaveHabit}
        />
        <main className="lg:ml-64 pt-16 min-h-[calc(100vh-4rem)]">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/habits/:id" element={<HabitDetail />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/challenges/:id" element={<ChallengeDetail />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;