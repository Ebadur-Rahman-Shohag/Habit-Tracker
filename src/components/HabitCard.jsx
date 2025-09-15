import { Check, Flame, Calendar, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const HabitCard = ({ habit }) => {
    const { id, name, streak, completedToday, category, color, weekProgress } = habit;

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${color}`}></div>
                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">{name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{category}</p>
                    </div>
                </div>
                <button
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${completedToday
                            ? 'bg-green-500 text-white'
                            : 'border-2 border-gray-300 dark:border-gray-600 hover:border-green-500'
                        }`}
                >
                    {completedToday && <Check className="w-4 h-4" />}
                </button>
            </div>

            {/* Streak */}
            <div className="flex items-center space-x-2 mb-4">
                <Flame className={`w-4 h-4 ${streak > 0 ? 'text-orange-500' : 'text-gray-400'}`} />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {streak} day streak
                </span>
            </div>

            {/* Week Progress */}
            <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-gray-500 dark:text-gray-400">This Week</span>
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                        {weekProgress.filter(Boolean).length}/7
                    </span>
                </div>
                <div className="flex space-x-1">
                    {weekProgress.map((completed, index) => (
                        <div
                            key={index}
                            className={`flex-1 h-2 rounded-full ${completed ? 'bg-green-500' : 'bg-gray-200 dark:bg-gray-700'
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between">
                <Link
                    to={`/habits/${id}`}
                    className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 font-medium"
                >
                    View Details
                </Link>
                <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
                    <TrendingUp className="w-3 h-3" />
                    <span>85% consistency</span>
                </div>
            </div>
        </div>
    );
};

export default HabitCard;