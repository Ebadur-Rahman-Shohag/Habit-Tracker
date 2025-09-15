import { Users, Calendar, Trophy, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const ChallengeCard = ({ challenge }) => {
    const { id, title, description, participants, daysLeft, progress, difficulty, reward } = challenge;

    const getDifficultyColor = (level) => {
        switch (level) {
            case 'Easy': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
            case 'Medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
            case 'Hard': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
            default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
        }
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow">
            {/* Header */}
            <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">{title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{description}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(difficulty)}`}>
                        {difficulty}
                    </span>
                </div>

                {/* Stats */}
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{participants.toLocaleString()} joined</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{daysLeft} days left</span>
                    </div>
                </div>

                {/* Progress */}
                <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Progress</span>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>

                {/* Reward */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Trophy className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{reward}</span>
                    </div>
                    <Link
                        to={`/challenges/${id}`}
                        className="px-4 py-2 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900 dark:hover:bg-blue-800 text-blue-700 dark:text-blue-200 rounded-lg text-sm font-medium transition-colors"
                    >
                        Join Challenge
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ChallengeCard;