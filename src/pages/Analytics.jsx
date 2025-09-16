import { useState } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LineChart,
    Line,
    PieChart,
    Pie,
    Cell
} from 'recharts';
import {
    TrendingUp,
    Calendar,
    Target,
    Award,
    ChevronDown,
    Filter
} from 'lucide-react';

const Analytics = () => {
    const [timeRange, setTimeRange] = useState('30d');
    const [selectedMetric, setSelectedMetric] = useState('completion');

    // Mock data for charts
    const weeklyData = [
        { name: 'Mon', completed: 4, total: 5 },
        { name: 'Tue', completed: 5, total: 5 },
        { name: 'Wed', completed: 3, total: 5 },
        { name: 'Thu', completed: 4, total: 5 },
        { name: 'Fri', completed: 5, total: 5 },
        { name: 'Sat', completed: 2, total: 5 },
        { name: 'Sun', completed: 3, total: 5 }
    ];

    const monthlyTrend = [
        { month: 'Jan', consistency: 75 },
        { month: 'Feb', consistency: 82 },
        { month: 'Mar', consistency: 78 },
        { month: 'Apr', consistency: 85 },
        { month: 'May', consistency: 88 },
        { month: 'Jun', consistency: 92 }
    ];

    const habitBreakdown = [
        { name: 'Exercise', value: 30, color: '#10B981' },
        { name: 'Reading', value: 25, color: '#3B82F6' },
        { name: 'Meditation', value: 20, color: '#8B5CF6' },
        { name: 'Coding', value: 15, color: '#F59E0B' },
        { name: 'Others', value: 10, color: '#6B7280' }
    ];

    const streakData = [
        { habit: 'Morning Exercise', current: 12, longest: 28, category: 'Fitness' },
        { habit: 'Daily Reading', current: 8, longest: 15, category: 'Learning' },
        { habit: 'Meditation', current: 5, longest: 12, category: 'Wellness' },
        { habit: 'Code Practice', current: 15, longest: 22, category: 'Skills' }
    ];

    const timeRanges = [
        { value: '7d', label: 'Last 7 days' },
        { value: '30d', label: 'Last 30 days' },
        { value: '90d', label: 'Last 3 months' },
        { value: '1y', label: 'Last year' }
    ];

    const overallStats = {
        totalHabits: 8,
        activeStreak: 12,
        completionRate: 85,
        totalXP: 2450,
        longestStreak: 28,
        habitsCompleted: 156
    };

    return (
        <div className="p-6 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        Analytics 📊
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Track your progress and discover insights about your habits.
                    </p>
                </div>

                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <select
                            value={timeRange}
                            onChange={(e) => setTimeRange(e.target.value)}
                            className="appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 pr-8 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white dark:text-white"
                        >
                            {timeRanges.map(range => (
                                <option key={range.value} value={range.value}>{range.label}</option>
                            ))}
                        </select>
                        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                    <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-white dark:text-white">
                        <Filter className="w-4 h-4 text-white dark:text-white" />
                        <span className="text-white dark:text-white">Filters</span>
                    </button>
                </div>
            </div>

            {/* Overview Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Completion Rate</p>
                            <p className="text-3xl font-bold text-gray-900 dark:text-white">{overallStats.completionRate}%</p>
                        </div>
                        <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                            <Target className="w-6 h-6 text-green-600 dark:text-green-400" />
                        </div>
                    </div>
                    <p className="text-sm text-green-600 dark:text-green-400 mt-2">+5% from last month</p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Current Streak</p>
                            <p className="text-3xl font-bold text-gray-900 dark:text-white">{overallStats.activeStreak}</p>
                        </div>
                        <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-lg">
                            <TrendingUp className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                        </div>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Best: {overallStats.longestStreak} days</p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Total XP</p>
                            <p className="text-3xl font-bold text-gray-900 dark:text-white">{overallStats.totalXP.toLocaleString()}</p>
                        </div>
                        <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                            <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                        </div>
                    </div>
                    <p className="text-sm text-purple-600 dark:text-purple-400 mt-2">Level 12</p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Habits Completed</p>
                            <p className="text-3xl font-bold text-gray-900 dark:text-white">{overallStats.habitsCompleted}</p>
                        </div>
                        <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                            <Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                    </div>
                    <p className="text-sm text-blue-600 dark:text-blue-400 mt-2">This month: 42</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Weekly Completion Chart */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-6">Weekly Completion</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={weeklyData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                            <XAxis dataKey="name" stroke="#6B7280" />
                            <YAxis stroke="#6B7280" />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: '#1F2937',
                                    border: 'none',
                                    borderRadius: '8px',
                                    color: '#F9FAFB'
                                }}
                            />
                            <Bar dataKey="completed" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                            <Bar dataKey="total" fill="#E5E7EB" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Consistency Trend */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-6">Consistency Trend</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={monthlyTrend}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                            <XAxis dataKey="month" stroke="#6B7280" />
                            <YAxis stroke="#6B7280" />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: '#1F2937',
                                    border: 'none',
                                    borderRadius: '8px',
                                    color: '#F9FAFB'
                                }}
                            />
                            <Line
                                type="monotone"
                                dataKey="consistency"
                                stroke="#10B981"
                                strokeWidth={3}
                                dot={{ fill: '#10B981', strokeWidth: 2, r: 6 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Habit Breakdown */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-6">Habit Categories</h3>
                    <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                            <Pie
                                data={habitBreakdown}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={100}
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {habitBreakdown.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: '#1F2937',
                                    border: 'none',
                                    borderRadius: '8px',
                                    color: '#F9FAFB'
                                }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="mt-4 space-y-2">
                        {habitBreakdown.map((item, index) => (
                            <div key={index} className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <div
                                        className="w-3 h-3 rounded-full"
                                        style={{ backgroundColor: item.color }}
                                    />
                                    <span className="text-sm text-gray-600 dark:text-gray-400">{item.name}</span>
                                </div>
                                <span className="text-sm font-medium text-gray-900 dark:text-white">{item.value}%</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Streak Analysis */}
                <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-6">Streak Analysis</h3>
                    <div className="space-y-4">
                        {streakData.map((habit, index) => (
                            <div key={index} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                <div className="flex items-center justify-between mb-2">
                                    <div>
                                        <h4 className="font-medium text-gray-900 dark:text-white">{habit.habit}</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{habit.category}</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-lg font-bold text-gray-900 dark:text-white">
                                            {habit.current} days
                                        </div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">
                                            Best: {habit.longest}
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                                    <div
                                        className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                                        style={{ width: `${(habit.current / habit.longest) * 100}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Insights Section */}
            <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">📈 Key Insights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Best Performance Day</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            You're most consistent on <span className="font-medium text-blue-600 dark:text-blue-400">Fridays</span> with 95% completion rate.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Improvement Area</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Focus on <span className="font-medium text-orange-600 dark:text-orange-400">weekends</span> to boost overall consistency by 12%.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Streak Potential</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            You're <span className="font-medium text-green-600 dark:text-green-400">3 days away</span> from beating your longest streak!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analytics;