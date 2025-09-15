import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    Trophy,
    BarChart3,
    User,
    X,
    Plus,
    Flame,
    Settings,
    HelpCircle,
    LogOut
} from 'lucide-react';

const Sidebar = ({ isOpen, onClose, onAddHabit }) => {
    const navigation = [
        { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
        { name: 'Challenges', href: '/challenges', icon: Trophy },
        { name: 'Analytics', href: '/analytics', icon: BarChart3 },
        { name: 'Profile', href: '/profile', icon: User },
    ];

    const bottomNavigation = [
        { name: 'Settings', href: '/settings', icon: Settings },
        { name: 'Help', href: '/help', icon: HelpCircle },
    ];

    return (
        <>
            {/* Mobile overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <div className={`
        fixed top-16 left-0 z-40 h-[calc(100vh-4rem)] w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out shadow-lg
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
      `}>
                <div className="flex flex-col h-full">
                    {/* Mobile Header - Only visible on mobile */}
                    <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex items-center space-x-3">
                            <div className="h-8 w-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">H</span>
                            </div>
                            <span className="font-semibold text-gray-900 dark:text-white">HabitTracker</span>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:text-gray-300 dark:hover:bg-gray-700 transition-colors"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Quick Stats Card */}
                    <div className="p-4">
                        <div className="bg-gradient-to-br from-orange-400 via-red-400 to-pink-500 rounded-xl p-4 text-white shadow-lg">
                            <div className="flex items-center justify-between mb-2">
                                <div>
                                    <p className="text-xs font-medium opacity-90 uppercase tracking-wide">Current Streak</p>
                                    <p className="text-2xl font-bold">12 days</p>
                                </div>
                                <div className="p-2 bg-white bg-opacity-20 rounded-lg">
                                    <Flame className="h-6 w-6" />
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 text-xs opacity-90">
                                <div className="flex-1 bg-white bg-opacity-20 rounded-full h-1.5">
                                    <div className="bg-white h-1.5 rounded-full w-3/4"></div>
                                </div>
                                <span className="font-medium">75%</span>
                            </div>
                        </div>
                    </div>
                    {/* Navigation */}
                    <nav className="flex-1 px-4 space-y-1">
                        <div className="mb-4">
                            <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider px-3 mb-2">
                                Main Menu
                            </p>
                            {navigation.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.href}
                                    onClick={() => window.innerWidth < 1024 && onClose()}
                                    className={({ isActive }) =>
                                        `group flex items-center px-3 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 ${isActive
                                            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                                            : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                                        }`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            <item.icon className={`mr-3 h-5 w-5 transition-colors ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300'
                                                }`} />
                                            {item.name}
                                        </>
                                    )}
                                </NavLink>
                            ))}
                        </div>
                    </nav>

                    {/* Add Habit Button */}
                    <div className="px-4 mb-4">
                        <button
                            onClick={onAddHabit}
                            className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-xl font-medium transition-all duration-200 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transform hover:scale-[1.02]"
                        >
                            <Plus className="mr-2 h-4 w-4" />
                            Add New Habit
                        </button>
                    </div>

                    {/* Bottom Navigation */}
                    <div className="border-t border-gray-200 dark:border-gray-700 p-4 space-y-1">
                        <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider px-3 mb-2">
                            Support
                        </p>
                        {bottomNavigation.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.href}
                                onClick={() => window.innerWidth < 1024 && onClose()}
                                className={({ isActive }) =>
                                    `w-full group flex items-center px-3 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 ${isActive
                                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                                        : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        <item.icon className={`mr-3 h-5 w-5 transition-colors ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300'
                                            }`} />
                                        {item.name}
                                    </>
                                )}
                            </NavLink>
                        ))}

                        {/* Logout Button */}
                        <button className="w-full group flex items-center px-3 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20 hover:text-red-700 dark:hover:text-red-300 mt-2">
                            <LogOut className="mr-3 h-5 w-5 transition-colors" />
                            Sign Out
                        </button>
                    </div>

                    {/* User Profile Section */}
                    <div className="border-t border-gray-200 dark:border-gray-700 p-4">
                        <div className="flex items-center space-x-3">
                            <div className="h-10 w-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-medium">
                                JD
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                                    John Doe
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                                    Level 12 • 2,450 XP
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;