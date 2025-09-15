import { useState } from 'react';
import {
    User,
    Settings,
    Award,
    Calendar,
    Target,
    Moon,
    Sun,
    Bell,
    Shield,
    Edit3,
    Camera,
    Trophy,
    Flame,
    Star
} from 'lucide-react';

const Profile = () => {
    const [activeTab, setActiveTab] = useState('profile');
    const [darkMode, setDarkMode] = useState(false);
    const [notifications, setNotifications] = useState({
        daily: true,
        weekly: true,
        achievements: true,
        challenges: false
    });

    const user = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        avatar: '👨‍💻',
        joinDate: '2024-01-15',
        level: 12,
        xp: 2450,
        nextLevelXP: 3000,
        totalHabits: 8,
        completedHabits: 156,
        longestStreak: 28,
        currentStreak: 12
    };

    const badges = [
        { id: 1, name: 'Early Bird', description: 'Complete morning habits for 7 days', icon: '🌅', earned: true, date: '2024-02-01' },
        { id: 2, name: 'Fitness Fanatic', description: 'Exercise for 30 days straight', icon: '💪', earned: true, date: '2024-02-15' },
        { id: 3, name: 'Bookworm', description: 'Read for 100 hours total', icon: '📚', earned: true, date: '2024-03-01' },
        { id: 4, name: 'Zen Master', description: 'Meditate for 50 sessions', icon: '🧘', earned: false },
        { id: 5, name: 'Code Warrior', description: 'Code every day for 60 days', icon: '⚔️', earned: false },
        { id: 6, name: 'Habit Master', description: 'Maintain 5 habits simultaneously', icon: '🏆', earned: true, date: '2024-03-10' },
        { id: 7, name: 'Streak Legend', description: 'Achieve a 100-day streak', icon: '🔥', earned: false },
        { id: 8, name: 'Community Helper', description: 'Help 10 people in challenges', icon: '🤝', earned: false }
    ];

    const achievements = [
        { title: 'First Week Complete', date: '2024-01-22', xp: 50 },
        { title: '30-Day Fitness Challenge Winner', date: '2024-02-15', xp: 500 },
        { title: 'Reading Streak: 14 days', date: '2024-02-28', xp: 200 },
        { title: 'Perfect Week', date: '2024-03-05', xp: 100 },
        { title: 'Level 10 Reached', date: '2024-03-12', xp: 300 }
    ];

    const tabs = [
        { id: 'profile', label: 'Profile', icon: User },
        { id: 'badges', label: 'Badges', icon: Award },
        { id: 'achievements', label: 'Achievements', icon: Trophy },
        { id: 'settings', label: 'Settings', icon: Settings }
    ];

    const handleNotificationChange = (key) => {
        setNotifications(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    return (
        <div className="p-6 max-w-6xl mx-auto">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white mb-8">
                <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-6">
                        <div className="relative">
                            <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-4xl">
                                {user.avatar}
                            </div>
                            <button className="absolute bottom-0 right-0 w-8 h-8 bg-white text-blue-600 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                                <Camera className="w-4 h-4" />
                            </button>
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
                            <p className="text-lg opacity-90 mb-4">{user.email}</p>
                            <div className="flex items-center space-x-6 text-sm">
                                <div>
                                    <span className="opacity-75">Level </span>
                                    <span className="font-bold">{user.level}</span>
                                </div>
                                <div>
                                    <span className="opacity-75">Joined </span>
                                    <span className="font-bold">{new Date(user.joinDate).toLocaleDateString()}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="flex items-center space-x-2 px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg transition-colors">
                        <Edit3 className="w-4 h-4" />
                        <span>Edit Profile</span>
                    </button>
                </div>

                {/* XP Progress */}
                <div className="mt-6">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm opacity-90">Experience Points</span>
                        <span className="text-sm font-medium">{user.xp} / {user.nextLevelXP} XP</span>
                    </div>
                    <div className="w-full bg-white bg-opacity-20 rounded-full h-3">
                        <div
                            className="bg-white h-3 rounded-full transition-all duration-500"
                            style={{ width: `${(user.xp / user.nextLevelXP) * 100}%` }}
                        />
                    </div>
                    <p className="text-sm opacity-75 mt-2">
                        {user.nextLevelXP - user.xp} XP to next level
                    </p>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 text-center">
                    <Target className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{user.totalHabits}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Active Habits</div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 text-center">
                    <Calendar className="w-8 h-8 text-green-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{user.completedHabits}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Completed</div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 text-center">
                    <Flame className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{user.currentStreak}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Current Streak</div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 text-center">
                    <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{user.longestStreak}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Best Streak</div>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex space-x-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1 mb-8">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center space-x-2 flex-1 px-4 py-3 rounded-md text-sm font-medium transition-colors ${activeTab === tab.id
                                ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                            }`}
                    >
                        <tab.icon className="w-4 h-4" />
                        <span>{tab.label}</span>
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="space-y-8">
                {activeTab === 'profile' && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-6">Personal Information</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        value={user.name}
                                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                        readOnly
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        value={user.email}
                                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                        readOnly
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Bio
                                    </label>
                                    <textarea
                                        rows={3}
                                        placeholder="Tell us about yourself..."
                                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                    />
                                </div>
                                <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                                    Save Changes
                                </button>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-6">Recent Achievements</h3>
                            <div className="space-y-4">
                                {achievements.slice(0, 5).map((achievement, index) => (
                                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                        <div>
                                            <div className="font-medium text-gray-900 dark:text-white">{achievement.title}</div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                                {new Date(achievement.date).toLocaleDateString()}
                                            </div>
                                        </div>
                                        <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
                                            +{achievement.xp} XP
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'badges' && (
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-semibold text-gray-900 dark:text-white">Badge Collection</h3>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                {badges.filter(b => b.earned).length} of {badges.length} earned
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {badges.map((badge) => (
                                <div
                                    key={badge.id}
                                    className={`p-6 rounded-xl border text-center transition-all ${badge.earned
                                            ? 'bg-gradient-to-b from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-yellow-200 dark:border-yellow-800'
                                            : 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 opacity-60'
                                        }`}
                                >
                                    <div className="text-4xl mb-3">{badge.icon}</div>
                                    <h4 className={`font-medium mb-2 ${badge.earned ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'
                                        }`}>
                                        {badge.name}
                                    </h4>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                                        {badge.description}
                                    </p>
                                    {badge.earned && badge.date && (
                                        <p className="text-xs text-yellow-600 dark:text-yellow-400 font-medium">
                                            Earned {new Date(badge.date).toLocaleDateString()}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'achievements' && (
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-6">Achievement History</h3>
                        <div className="space-y-4">
                            {achievements.map((achievement, index) => (
                                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                                            <Trophy className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                        </div>
                                        <div>
                                            <div className="font-medium text-gray-900 dark:text-white">{achievement.title}</div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                                {new Date(achievement.date).toLocaleDateString()}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-medium text-blue-600 dark:text-blue-400">+{achievement.xp} XP</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'settings' && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-6">Preferences</h3>
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        {darkMode ? <Moon className="w-5 h-5 text-gray-600 dark:text-gray-400" /> : <Sun className="w-5 h-5 text-gray-600 dark:text-gray-400" />}
                                        <div>
                                            <div className="font-medium text-gray-900 dark:text-white">Dark Mode</div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">Toggle dark theme</div>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setDarkMode(!darkMode)}
                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${darkMode ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                                            }`}
                                    >
                                        <span
                                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${darkMode ? 'translate-x-6' : 'translate-x-1'
                                                }`}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-6">Notifications</h3>
                            <div className="space-y-4">
                                {Object.entries(notifications).map(([key, value]) => (
                                    <div key={key} className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                                            <div>
                                                <div className="font-medium text-gray-900 dark:text-white capitalize">
                                                    {key} Reminders
                                                </div>
                                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                                    Get {key} habit reminders
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => handleNotificationChange(key)}
                                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${value ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                                                }`}
                                        >
                                            <span
                                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${value ? 'translate-x-6' : 'translate-x-1'
                                                    }`}
                                            />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-6">Account Security</h3>
                            <div className="space-y-4">
                                <button className="w-full flex items-center justify-between p-3 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                    <div className="flex items-center space-x-3">
                                        <Shield className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                                        <span className="font-medium text-gray-900 dark:text-white">Change Password</span>
                                    </div>
                                </button>
                                <button className="w-full flex items-center justify-between p-3 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                    <div className="flex items-center space-x-3">
                                        <Shield className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                                        <span className="font-medium text-gray-900 dark:text-white">Two-Factor Authentication</span>
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-6">Danger Zone</h3>
                            <div className="space-y-4">
                                <button className="w-full px-4 py-2 bg-red-50 hover:bg-red-100 dark:bg-red-900/20 dark:hover:bg-red-900/30 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800 rounded-lg transition-colors">
                                    Export Data
                                </button>
                                <button className="w-full px-4 py-2 bg-red-50 hover:bg-red-100 dark:bg-red-900/20 dark:hover:bg-red-900/30 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800 rounded-lg transition-colors">
                                    Delete Account
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile;