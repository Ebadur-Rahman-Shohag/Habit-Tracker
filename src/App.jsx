import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import AddHabitModal from './components/AddHabitModal';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [addHabitModalOpen, setAddHabitModalOpen] = useState(false);

  const handleSaveHabit = (habitData) => {
    // For now, just log the habit data - in a real app, this would save to backend
    console.log('New habit created:', habitData);
    // You could add a toast notification here
  };

  return (
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
        <Outlet />
      </main>
    </div>
  );
}

export default App;