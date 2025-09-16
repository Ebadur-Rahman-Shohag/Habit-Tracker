import { useState } from 'react';
import {
    User,
    Bell,
    Moon,
    Sun,
    Shield,
    Globe,
    Smartphone,
    Mail,
    Lock,
    Eye,
    EyeOff,
    Save,
    Trash2,
    Download,
    Upload,
    Palette,
    Clock,
    Volume2,
    VolumeX
} from 'lucide-react';

const Settings = () => {
    const [activeTab, setActiveTab] = useState('profile');
    const [darkMode, setDarkMode] = useState(false);
    const [soundEnabled, setSoundEnabled] = useState(true);
    const [showPassword, setShowPassword] = useState(false);

    const [notifications, setNotifications] = useState({
        daily: true,
        weekly: true,
        achievements: true,
        challenges: false,
        email: true,
        push: true
    });

    const [profile, setProfile] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        timezone: 'America/New_York',
        language: 'en',
        avatar: '👨‍💻'
    });

    const tabs = [
        { id: 'profile', label: 'Profile', icon: User },
        { id: 'notifications', label: 'Notifications', icon: Bell },
        { id: 'appearance', label: 'Appearance', icon: Palette },
        { id: 'privacy', label: 'Privacy & Security', icon: Shield },
        { id: 'data', label: 'Data & Storage', icon: Download }
    ];

    const timezones = [
        { value: 'America/New_York', label: 'Eastern Time (ET)' },
        { value: 'America/Chicago', label: 'Central Time (CT)' },
        { value: 'America/Denver', label: 'Mountain Time (MT)' },
        { value: 'America/Los_Angeles', label: 'Pacific Time (PT)' },
        { value: 'Europe/London', label: 'Greenwich Mean Time (GMT)' },
        { value: 'Europe/Paris', label: 'Central European Time (CET)' },
        { value: 'Asia/Tokyo', label: 'Japan Standard Time (JST)' }
    ];

    const languages = [
        { value: 'en', label: 'English' },
        { value: 'es', label: 'Español' },
        { value: 'fr', label: 'Français' },
        { value: 'de', label: 'Deutsch' },
        { value: 'ja', label: '日本語' },
        { value: 'zh', label: '中文' }
    ];

    const handleNotificationChange = (key) => {
        setNotifications(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const handleProfileChange = (key, value) => {
        setProfile(prev => ({
            ...prev,
            [key]: value
        }));
    };

    return (
        <div className="p-6 max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    Settings ⚙️
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                    Customize your HabitTracker experience
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar Navigation */}
                <div className="lg:w-64">
                    <nav className="space-y-1">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${activeTab === tab.id
                                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
                                    : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
                                    }`}
                            >
                                <tab.icon className="mr-3 h-5 w-5" />
                                {tab.label}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Content Area */}
                <div className="flex-1">
                    {activeTab === 'profile' && (
                        <div className="space-y-6">
                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                                    Personal Information
                                </h3>

                                {/* Avatar Section */}
                                <div className="flex items-center space-x-6 mb-6">
                                    <div className="relative">
                                        <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-3xl">
                                            {profile.avatar}
                                        </div>
                                        <button className="absolute bottom-0 right-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                                            <Upload className="w-3 h-3" />
                                        </button>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900 dark:text-white">Profile Picture</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            Click the icon to change your avatar
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            value={profile.name}
                                            onChange={(e) => handleProfileChange('name', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            value={profile.email}
                                            onChange={(e) => handleProfileChange('email', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            <Clock className="w-4 h-4 inline mr-1" />
                                            Timezone
                                        </label>
                                        <select
                                            value={profile.timezone}
                                            onChange={(e) => handleProfileChange('timezone', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white text-white"
                                        >
                                            {timezones.map((tz) => (
                                                <option key={tz.value} value={tz.value}>{tz.label}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            <Globe className="w-4 h-4 inline mr-1" />
                                            Language
                                        </label>
                                        <select
                                            value={profile.language}
                                            onChange={(e) => handleProfileChange('language', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white text-white"
                                        >
                                            {languages.map((lang) => (
                                                <option key={lang.value} value={lang.value}>{lang.label}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="mt-6 flex justify-end">
                                    <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                                        <Save className="w-4 h-4" />
                                        <span>Save Changes</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeTab === 'notifications' && (
                        <div className="space-y-6">
                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                                    Notification Preferences
                                </h3>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-medium text-gray-900 dark:text-white mb-4">Habit Reminders</h4>
                                        <div className="space-y-4">
                                            {Object.entries({
                                                daily: 'Daily habit reminders',
                                                weekly: 'Weekly progress summaries',
                                                achievements: 'Achievement notifications',
                                                challenges: 'Challenge updates'
                                            }).map(([key, label]) => (
                                                <div key={key} className="flex items-center justify-between">
                                                    <div className="flex items-center space-x-3">
                                                        <Bell className="w-5 h-5 text-gray-400" />
                                                        <div>
                                                            <div className="font-medium text-gray-900 dark:text-white">{label}</div>
                                                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                                                Get notified about {label.toLowerCase()}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button
                                                        onClick={() => handleNotificationChange(key)}
                                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${notifications[key] ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                                                            }`}
                                                    >
                                                        <span
                                                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${notifications[key] ? 'translate-x-6' : 'translate-x-1'
                                                                }`}
                                                        />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                                        <h4 className="font-medium text-gray-900 dark:text-white mb-4">Delivery Methods</h4>
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-3">
                                                    <Mail className="w-5 h-5 text-gray-400" />
                                                    <div>
                                                        <div className="font-medium text-gray-900 dark:text-white">Email Notifications</div>
                                                        <div className="text-sm text-gray-500 dark:text-gray-400">
                                                            Receive notifications via email
                                                        </div>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={() => handleNotificationChange('email')}
                                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${notifications.email ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                                                        }`}
                                                >
                                                    <span
                                                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${notifications.email ? 'translate-x-6' : 'translate-x-1'
                                                            }`}
                                                    />
                                                </button>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-3">
                                                    <Smartphone className="w-5 h-5 text-gray-400" />
                                                    <div>
                                                        <div className="font-medium text-gray-900 dark:text-white">Push Notifications</div>
                                                        <div className="text-sm text-gray-500 dark:text-gray-400">
                                                            Receive push notifications on your device
                                                        </div>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={() => handleNotificationChange('push')}
                                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${notifications.push ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                                                        }`}
                                                >
                                                    <span
                                                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${notifications.push ? 'translate-x-6' : 'translate-x-1'
                                                            }`}
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'appearance' && (
                        <div className="space-y-6">
                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                                    Appearance & Theme
                                </h3>

                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            {darkMode ? <Moon className="w-5 h-5 text-gray-600 dark:text-gray-400" /> : <Sun className="w-5 h-5 text-gray-600 dark:text-gray-400" />}
                                            <div>
                                                <div className="font-medium text-gray-900 dark:text-white">Dark Mode</div>
                                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                                    Switch between light and dark themes
                                                </div>
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

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            {soundEnabled ? <Volume2 className="w-5 h-5 text-gray-600 dark:text-gray-400" /> : <VolumeX className="w-5 h-5 text-gray-600 dark:text-gray-400" />}
                                            <div>
                                                <div className="font-medium text-gray-900 dark:text-white">Sound Effects</div>
                                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                                    Play sounds for interactions and notifications
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => setSoundEnabled(!soundEnabled)}
                                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${soundEnabled ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                                                }`}
                                        >
                                            <span
                                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${soundEnabled ? 'translate-x-6' : 'translate-x-1'
                                                    }`}
                                            />
                                        </button>
                                    </div>

                                    <div>
                                        <h4 className="font-medium text-gray-900 dark:text-white mb-4">Theme Colors</h4>
                                        <div className="grid grid-cols-6 gap-3">
                                            {[
                                                'bg-blue-500', 'bg-purple-500', 'bg-green-500',
                                                'bg-red-500', 'bg-yellow-500', 'bg-pink-500'
                                            ].map((color, index) => (
                                                <button
                                                    key={index}
                                                    className={`w-12 h-12 rounded-lg ${color} hover:scale-105 transition-transform ${index === 0 ? 'ring-2 ring-gray-400' : ''
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'privacy' && (
                        <div className="space-y-6">
                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                                    Privacy & Security
                                </h3>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-medium text-gray-900 dark:text-white mb-4">Change Password</h4>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                    Current Password
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        type={showPassword ? 'text' : 'password'}
                                                        className="w-full px-3 py-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                                        placeholder="Enter current password"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => setShowPassword(!showPassword)}
                                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                                    >
                                                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                        New Password
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                                        placeholder="Enter new password"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                        Confirm Password
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                                        placeholder="Confirm new password"
                                                    />
                                                </div>
                                            </div>

                                            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                                                Update Password
                                            </button>
                                        </div>
                                    </div>

                                    <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                                        <h4 className="font-medium text-gray-900 dark:text-white mb-4">Two-Factor Authentication</h4>
                                        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                            <div className="flex items-center space-x-3">
                                                <Shield className="w-5 h-5 text-green-500" />
                                                <div>
                                                    <div className="font-medium text-gray-900 dark:text-white">2FA Enabled</div>
                                                    <div className="text-sm text-gray-500 dark:text-gray-400">
                                                        Your account is protected with two-factor authentication
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                                                Manage
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'data' && (
                        <div className="space-y-6">
                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                                    Data & Storage
                                </h3>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-medium text-gray-900 dark:text-white mb-4">Export Data</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                            Download all your habit data, progress, and statistics in JSON format.
                                        </p>
                                        <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
                                            <Download className="w-4 h-4" />
                                            <span>Export All Data</span>
                                        </button>
                                    </div>

                                    <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                                        <h4 className="font-medium text-gray-900 dark:text-white mb-4">Import Data</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                            Import habit data from a backup file or another habit tracking app.
                                        </p>
                                        <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                            <Upload className="w-4 h-4" />
                                            <span>Import Data</span>
                                        </button>
                                    </div>

                                    <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                                        <h4 className="font-medium text-red-600 dark:text-red-400 mb-4">Danger Zone</h4>
                                        <div className="space-y-4">
                                            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                                                <h5 className="font-medium text-red-800 dark:text-red-300 mb-2">Clear All Data</h5>
                                                <p className="text-sm text-red-600 dark:text-red-400 mb-3">
                                                    This will permanently delete all your habits, progress, and statistics. This action cannot be undone.
                                                </p>
                                                <button className="flex items-center space-x-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">
                                                    <Trash2 className="w-4 h-4" />
                                                    <span>Clear All Data</span>
                                                </button>
                                            </div>

                                            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                                                <h5 className="font-medium text-red-800 dark:text-red-300 mb-2">Delete Account</h5>
                                                <p className="text-sm text-red-600 dark:text-red-400 mb-3">
                                                    Permanently delete your account and all associated data. This action cannot be undone.
                                                </p>
                                                <button className="flex items-center space-x-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">
                                                    <Trash2 className="w-4 h-4" />
                                                    <span>Delete Account</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Settings;