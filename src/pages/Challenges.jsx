import { useState } from 'react';
import { Search, Filter, Trophy, Users, Clock, Plus } from 'lucide-react';
import ChallengeCard from '../components/ChallengeCard';
import AddChallengeModal from '../components/AddChallengeModal';

const Challenges = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [addChallengeModalOpen, setAddChallengeModalOpen] = useState(false);

    const challenges = [
        {
            id: 1,
            title: '30-Day Fitness Challenge',
            description: 'Complete 30 minutes of exercise every day for a month. Build strength, endurance, and healthy habits.',
            participants: 2847,
            daysLeft: 12,
            progress: 65,
            difficulty: 'Medium',
            reward: '500 XP + Fitness Badge',
            category: 'fitness'
        },
        {
            id: 2,
            title: 'Morning Meditation Streak',
            description: 'Start each day with 10 minutes of mindfulness meditation. Improve focus and reduce stress.',
            participants: 1523,
            daysLeft: 8,
            progress: 80,
            difficulty: 'Easy',
            reward: '300 XP + Zen Master Badge',
            category: 'wellness'
        },
        {
            id: 3,
            title: 'Code Every Day',
            description: 'Write at least 100 lines of code daily. Perfect for developers looking to improve their skills.',
            participants: 892,
            daysLeft: 18,
            progress: 45,
            difficulty: 'Hard',
            reward: '750 XP + Developer Badge',
            category: 'learning'
        },
        {
            id: 4,
            title: 'Hydration Hero',
            description: 'Drink 8 glasses of water every day. Stay hydrated and boost your energy levels.',
            participants: 3421,
            daysLeft: 5,
            progress: 90,
            difficulty: 'Easy',
            reward: '200 XP + Hydration Badge',
            category: 'health'
        },
        {
            id: 5,
            title: 'Reading Marathon',
            description: 'Read for at least 30 minutes daily. Expand your knowledge and improve focus.',
            participants: 1876,
            daysLeft: 22,
            progress: 35,
            difficulty: 'Medium',
            reward: '400 XP + Bookworm Badge',
            category: 'learning'
        },
        {
            id: 6,
            title: 'Digital Detox Weekend',
            description: 'Spend weekends without social media. Reconnect with the real world and reduce screen time.',
            participants: 654,
            daysLeft: 2,
            progress: 95,
            difficulty: 'Hard',
            reward: '600 XP + Mindful Badge',
            category: 'wellness'
        }
    ];

    const tabs = [
        { id: 'all', label: 'All Challenges', count: challenges.length },
        { id: 'joined', label: 'Joined', count: 3 },
        { id: 'completed', label: 'Completed', count: 8 },
        { id: 'trending', label: 'Trending', count: 12 }
    ];

    const filteredChallenges = challenges.filter(challenge =>
        challenge.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        challenge.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-6 max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    Challenges 🏆
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                    Join community challenges and compete with others to build better habits.
                </p>
            </div>

            {/* Stats Banner */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 mb-8 text-white">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                        <div className="text-3xl font-bold mb-1">3</div>
                        <div className="text-sm opacity-90">Active Challenges</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold mb-1">8</div>
                        <div className="text-sm opacity-90">Completed</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold mb-1">2,450</div>
                        <div className="text-sm opacity-90">XP Earned</div>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap items-center justify-between mb-6">
                <div className="flex space-x-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === tab.id
                                ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                                }`}
                        >
                            {tab.label}
                            <span className="ml-2 text-xs bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded-full">
                                {tab.count}
                            </span>
                        </button>
                    ))}
                </div>

                <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors" onClick={() => setAddChallengeModalOpen(true)}>
                    <Plus className="w-4 h-4" />
                    <span>Create Challenge</span>
                </button>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <input
                        type="text"
                        placeholder="Search challenges..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                    />
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-white dark:text-white">
                    <Filter className="w-4 h-4 text-white dark:text-white" />
                    <span className="text-white dark:text-white">Filters</span>
                </button>
            </div>

            {/* Featured Challenge */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 mb-8 border border-blue-200 dark:border-blue-800">
                <div className="flex items-start justify-between">
                    <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                            <Trophy className="w-5 h-5 text-yellow-500" />
                            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Featured Challenge</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            New Year, New Habits Challenge
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            Join thousands of people building life-changing habits this year. Complete any 3 habits for 30 days straight.
                        </p>
                        <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
                            <div className="flex items-center space-x-1">
                                <Users className="w-4 h-4" />
                                <span>5,234 participants</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <Clock className="w-4 h-4" />
                                <span>25 days left</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <Trophy className="w-4 h-4" />
                                <span>1000 XP + Special Badge</span>
                            </div>
                        </div>
                    </div>
                    <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                        Join Now
                    </button>
                </div>
            </div>

            {/* Challenges Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredChallenges.map((challenge) => (
                    <ChallengeCard key={challenge.id} challenge={challenge} />
                ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
                <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    Load More Challenges
                </button>
            </div>

            {/* Add Challenge Modal */}
            <AddChallengeModal
                isOpen={addChallengeModalOpen}
                onClose={() => setAddChallengeModalOpen(false)}
                onSave={() => {}}
            />
        </div>
    );
};

export default Challenges;