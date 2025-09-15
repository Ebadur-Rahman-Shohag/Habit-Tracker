import { useState } from 'react';
import { Plus, Flame, Target, TrendingUp, Brain, Calendar } from 'lucide-react';
import HabitCard from '../components/HabitCard';
import ProgressBar from '../components/ProgressBar';

const Dashboard = () => {
    const [habits] = useState([
        {
            id: 1,
            name: 'Morning Exercise',
            category: 'Fitness',
            streak: 12,
            completedToday: true,
            color: 'bg-green-500',
            weekProgress: [true, true, false, true, true, true, false]
        },
        {
            id: 2,
            name: 'Read 30 Minutes',
            category: 'Learning',
            streak: 8,
            completedToday: false,
            color: 'bg-blue-500',
            weekProgress: [true, true, true, false, true, true, false]
        },
        {
            id: 3,
            name: 'Meditation',
            category: 'Wellness',
            streak: 5,
            completedToday: true,
            color: 'bg-purple-500',
            weekProgress: [false, true, true, true, true, false, true]
        },
        {
            id: 4,
            name: 'Code Practice',
            category: 'Skills',
            streak: 15,
            completedToday: false,
            color: 'bg-orange-500',
            weekProgress: [true, true, true, true, false, true, true]
        }
    ]);

    const todayStats = {
        completed: habits.filter(h => h.completedToday).length,
        total: habits.length,
        streak: 12,
        weeklyGoal: 85
    };

    return (
        <div className="p-6 max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    Good morning, John! 👋
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                    You're doing great! Keep up the momentum.
                </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Today's Progress</p>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                {todayStats.completed}/{todayStats.total}
                            </p>
                        </div>
                        <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                            <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                    </div>
                    <ProgressBar
                        progress={todayStats.completed}
                        total={todayStats.total}
                        color="blue"
                        showLabel={false}
                        className="mt-3"
                    />
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Current Streak</p>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">{todayStats.streak} days</p>
                        </div>
                        <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-lg">
                            <Flame className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                        </div>
                    </div>
                    <p className="text-sm text-green-600 dark:text-green-400 mt-2">+2 from yesterday</p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Weekly Goal</p>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">{todayStats.weeklyGoal}%</p>
                        </div>
                        <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                            <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
                        </div>
                    </div>
                    <ProgressBar
                        progress={todayStats.weeklyGoal}
                        color="green"
                        showLabel={false}
                        className="mt-3"
                    />
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">XP Points</p>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">2,450</p>
                        </div>
                        <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                            <Calendar className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                        </div>
                    </div>
                    <p className="text-sm text-purple-600 dark:text-purple-400 mt-2">Level 12</p>
                </div>
            </div>

            {/* AI Suggestion Widget */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 mb-8 border border-blue-200 dark:border-blue-800">
                <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                        <Brain className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">AI Insight</h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-3">
                            You've been consistent with morning exercise! Consider adding a 5-minute stretching routine
                            after your workout to improve flexibility and recovery.
                        </p>
                        <button className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">
                            Learn more →
                        </button>
                    </div>
                </div>
            </div>

            {/* Today's Habits */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Today's Habits</h2>
                    <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                        <Plus className="w-4 h-4" />
                        <span>Add Habit</span>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {habits.map((habit) => (
                        <HabitCard key={habit.id} habit={habit} />
                    ))}
                </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <button className="p-4 text-center border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                        <Target className="w-6 h-6 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Set Goal</span>
                    </button>
                    <button className="p-4 text-center border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                        <Calendar className="w-6 h-6 mx-auto mb-2 text-green-600 dark:text-green-400" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">View Calendar</span>
                    </button>
                    <button className="p-4 text-center border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                        <TrendingUp className="w-6 h-6 mx-auto mb-2 text-purple-600 dark:text-purple-400" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Analytics</span>
                    </button>
                    <button className="p-4 text-center border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                        <Flame className="w-6 h-6 mx-auto mb-2 text-orange-600 dark:text-orange-400" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Challenges</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;