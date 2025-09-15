import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    Calendar,
    Flame,
    TrendingUp,
    Target,
    Clock,
    Award,
    ChevronLeft,
    ChevronRight,
    Brain
} from 'lucide-react';
import ProgressBar from '../components/ProgressBar';

const HabitDetail = () => {
    const { id } = useParams();
    const [currentMonth, setCurrentMonth] = useState(new Date());

    // Mock habit data
    const habit = {
        id: 1,
        name: 'Morning Exercise',
        category: 'Fitness',
        description: 'Start each day with 30 minutes of physical activity to boost energy and mood.',
        streak: 12,
        longestStreak: 28,
        totalCompletions: 156,
        consistency: 85,
        createdDate: '2024-01-15',
        color: 'bg-green-500'
    };

    // Mock calendar data (30 days)
    const calendarData = Array.from({ length: 30 }, (_, i) => ({
        date: i + 1,
        completed: Math.random() > 0.3, // 70% completion rate
        isToday: i + 1 === 15
    }));

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const navigateMonth = (direction) => {
        const newMonth = new Date(currentMonth);
        newMonth.setMonth(currentMonth.getMonth() + direction);
        setCurrentMonth(newMonth);
    };

    return (
        <div className="p-6 max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-4 h-4 rounded-full ${habit.color}`}></div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{habit.name}</h1>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{habit.description}</p>
                <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                    <span>Category: {habit.category}</span>
                    <span>Created: {new Date(habit.createdDate).toLocaleDateString()}</span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Stats */}
                <div className="lg:col-span-1 space-y-6">
                    {/* Current Streak */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold text-gray-900 dark:text-white">Current Streak</h3>
                            <Flame className="w-5 h-5 text-orange-500" />
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                                {habit.streak}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">days in a row</div>
                        </div>
                    </div>

                    {/* Statistics */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Statistics</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <Award className="w-4 h-4 text-yellow-500" />
                                    <span className="text-sm text-gray-600 dark:text-gray-400">Longest Streak</span>
                                </div>
                                <span className="font-medium text-gray-900 dark:text-white">{habit.longestStreak} days</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <Target className="w-4 h-4 text-blue-500" />
                                    <span className="text-sm text-gray-600 dark:text-gray-400">Total Completions</span>
                                </div>
                                <span className="font-medium text-gray-900 dark:text-white">{habit.totalCompletions}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <TrendingUp className="w-4 h-4 text-green-500" />
                                    <span className="text-sm text-gray-600 dark:text-gray-400">Consistency</span>
                                </div>
                                <span className="font-medium text-gray-900 dark:text-white">{habit.consistency}%</span>
                            </div>
                        </div>
                        <div className="mt-4">
                            <ProgressBar
                                progress={habit.consistency}
                                color="green"
                                label="Overall Progress"
                            />
                        </div>
                    </div>

                    {/* AI Insights */}
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                        <div className="flex items-start space-x-3">
                            <Brain className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1" />
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">AI Insights</h3>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                                    Your consistency is excellent! You tend to skip workouts on Sundays.
                                    Consider scheduling lighter activities for rest days.
                                </p>
                                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                    <li>• Best time: 7:00 AM - 8:00 AM</li>
                                    <li>• Success rate: Higher on weekdays</li>
                                    <li>• Suggestion: Add rest day activities</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Calendar */}
                <div className="lg:col-span-2">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                        {/* Calendar Header */}
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-semibold text-gray-900 dark:text-white">Completion Calendar</h3>
                            <div className="flex items-center space-x-4">
                                <button
                                    onClick={() => navigateMonth(-1)}
                                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                                >
                                    <ChevronLeft className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                                </button>
                                <span className="font-medium text-gray-900 dark:text-white">
                                    {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                                </span>
                                <button
                                    onClick={() => navigateMonth(1)}
                                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                                >
                                    <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                                </button>
                            </div>
                        </div>

                        {/* Calendar Grid */}
                        <div className="grid grid-cols-7 gap-2 mb-4">
                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                                <div key={day} className="text-center text-sm font-medium text-gray-500 dark:text-gray-400 py-2">
                                    {day}
                                </div>
                            ))}
                            {calendarData.map((day) => (
                                <div
                                    key={day.date}
                                    className={`
                    aspect-square flex items-center justify-center text-sm rounded-lg cursor-pointer transition-colors
                    ${day.completed
                                            ? 'bg-green-500 text-white hover:bg-green-600'
                                            : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                                        }
                    ${day.isToday ? 'ring-2 ring-blue-500' : ''}
                  `}
                                >
                                    {day.date}
                                </div>
                            ))}
                        </div>

                        {/* Legend */}
                        <div className="flex items-center justify-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-green-500 rounded"></div>
                                <span>Completed</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded"></div>
                                <span>Missed</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 border-2 border-blue-500 rounded"></div>
                                <span>Today</span>
                            </div>
                        </div>

                        {/* Monthly Summary */}
                        <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <div className="grid grid-cols-3 gap-4 text-center">
                                <div>
                                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                                        {calendarData.filter(d => d.completed).length}
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Completed</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                                        {calendarData.filter(d => !d.completed).length}
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Missed</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                        {Math.round((calendarData.filter(d => d.completed).length / calendarData.length) * 100)}%
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HabitDetail;