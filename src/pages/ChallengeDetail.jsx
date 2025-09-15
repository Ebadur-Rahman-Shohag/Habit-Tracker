import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    Trophy,
    Users,
    Clock,
    Calendar,
    Target,
    Medal,
    Crown,
    Star,
    TrendingUp
} from 'lucide-react';
import ProgressBar from '../components/ProgressBar';

const ChallengeDetail = () => {
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState('overview');

    const challenge = {
        id: 1,
        title: '30-Day Fitness Challenge',
        description: 'Complete 30 minutes of exercise every day for a month. Build strength, endurance, and healthy habits that will last a lifetime.',
        longDescription: `This comprehensive fitness challenge is designed to help you establish a consistent exercise routine. Whether you're a beginner or looking to get back into shape, this challenge provides the structure and motivation you need.

    What counts as exercise:
    • Cardio workouts (running, cycling, swimming)
    • Strength training (weights, bodyweight exercises)
    • Sports activities (tennis, basketball, soccer)
    • Yoga or Pilates sessions
    • Dance or aerobics classes

    The key is consistency - even a 30-minute walk counts! Track your progress, connect with other participants, and celebrate your achievements along the way.`,
        participants: 2847,
        daysLeft: 12,
        totalDays: 30,
        progress: 65,
        difficulty: 'Medium',
        reward: '500 XP + Fitness Badge',
        category: 'Fitness',
        startDate: '2024-01-01',
        endDate: '2024-01-30',
        isJoined: true,
        userProgress: 18
    };

    const leaderboard = [
        { rank: 1, name: 'Sarah Johnson', avatar: '👩‍💼', streak: 30, xp: 1500 },
        { rank: 2, name: 'Mike Chen', avatar: '👨‍💻', streak: 29, xp: 1450 },
        { rank: 3, name: 'Emma Davis', avatar: '👩‍🎨', streak: 28, xp: 1400 },
        { rank: 4, name: 'Alex Rodriguez', avatar: '👨‍🔬', streak: 27, xp: 1350 },
        { rank: 5, name: 'Lisa Wang', avatar: '👩‍🏫', streak: 26, xp: 1300 },
        { rank: 12, name: 'You', avatar: '👤', streak: 18, xp: 900, isUser: true }
    ];

    const milestones = [
        { day: 7, title: 'First Week', reward: '50 XP', completed: true },
        { day: 14, title: 'Two Weeks Strong', reward: '100 XP', completed: true },
        { day: 21, title: 'Three Week Warrior', reward: '150 XP', completed: false },
        { day: 30, title: 'Challenge Champion', reward: '500 XP + Badge', completed: false }
    ];

    const tabs = [
        { id: 'overview', label: 'Overview' },
        { id: 'leaderboard', label: 'Leaderboard' },
        { id: 'milestones', label: 'Milestones' },
        { id: 'community', label: 'Community' }
    ];

    const getRankIcon = (rank) => {
        switch (rank) {
            case 1: return <Crown className="w-5 h-5 text-yellow-500" />;
            case 2: return <Medal className="w-5 h-5 text-gray-400" />;
            case 3: return <Medal className="w-5 h-5 text-amber-600" />;
            default: return <span className="text-sm font-bold text-gray-600 dark:text-gray-400">#{rank}</span>;
        }
    };

    return (
        <div className="p-6 max-w-6xl mx-auto">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white mb-8">
                <div className="flex items-start justify-between">
                    <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                            <Trophy className="w-6 h-6" />
                            <span className="text-sm opacity-90">{challenge.category} Challenge</span>
                        </div>
                        <h1 className="text-3xl font-bold mb-4">{challenge.title}</h1>
                        <p className="text-lg opacity-90 mb-6">{challenge.description}</p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold">{challenge.participants.toLocaleString()}</div>
                                <div className="text-sm opacity-75">Participants</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold">{challenge.daysLeft}</div>
                                <div className="text-sm opacity-75">Days Left</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold">{challenge.userProgress}</div>
                                <div className="text-sm opacity-75">Your Progress</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold">{challenge.progress}%</div>
                                <div className="text-sm opacity-75">Completion</div>
                            </div>
                        </div>
                    </div>

                    <div className="ml-8">
                        {challenge.isJoined ? (
                            <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                                Mark Complete Today
                            </button>
                        ) : (
                            <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                                Join Challenge
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Your Progress</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        Day {challenge.userProgress} of {challenge.totalDays}
                    </span>
                </div>
                <ProgressBar
                    progress={challenge.userProgress}
                    total={challenge.totalDays}
                    color="blue"
                    size="lg"
                    showLabel={false}
                />
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-2">
                    <span>Started: {new Date(challenge.startDate).toLocaleDateString()}</span>
                    <span>Ends: {new Date(challenge.endDate).toLocaleDateString()}</span>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex space-x-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1 mb-8">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === tab.id
                                ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="space-y-8">
                {activeTab === 'overview' && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">About This Challenge</h3>
                                <div className="prose dark:prose-invert max-w-none">
                                    {challenge.longDescription.split('\n\n').map((paragraph, index) => (
                                        <p key={index} className="text-gray-700 dark:text-gray-300 mb-4">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Challenge Details</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">Difficulty</span>
                                        <span className="font-medium text-gray-900 dark:text-white">{challenge.difficulty}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">Duration</span>
                                        <span className="font-medium text-gray-900 dark:text-white">{challenge.totalDays} days</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">Reward</span>
                                        <span className="font-medium text-gray-900 dark:text-white">{challenge.reward}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Stats</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <Users className="w-4 h-4 text-blue-500" />
                                            <span className="text-sm text-gray-600 dark:text-gray-400">Active Today</span>
                                        </div>
                                        <span className="font-medium text-gray-900 dark:text-white">1,234</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <TrendingUp className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600 dark:text-gray-400">Completion Rate</span>
                                        </div>
                                        <span className="font-medium text-gray-900 dark:text-white">78%</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <Star className="w-4 h-4 text-yellow-500" />
                                            <span className="text-sm text-gray-600 dark:text-gray-400">Average Rating</span>
                                        </div>
                                        <span className="font-medium text-gray-900 dark:text-white">4.8/5</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'leaderboard' && (
                    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                            <h3 className="font-semibold text-gray-900 dark:text-white">Leaderboard</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                Top performers in this challenge
                            </p>
                        </div>
                        <div className="divide-y divide-gray-200 dark:divide-gray-700">
                            {leaderboard.map((user) => (
                                <div
                                    key={user.rank}
                                    className={`p-6 flex items-center justify-between ${user.isUser ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                                        }`}
                                >
                                    <div className="flex items-center space-x-4">
                                        <div className="flex items-center justify-center w-8 h-8">
                                            {getRankIcon(user.rank)}
                                        </div>
                                        <div className="text-2xl">{user.avatar}</div>
                                        <div>
                                            <div className={`font-medium ${user.isUser ? 'text-blue-600 dark:text-blue-400' : 'text-gray-900 dark:text-white'}`}>
                                                {user.name}
                                            </div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                                {user.streak} day streak
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-medium text-gray-900 dark:text-white">{user.xp} XP</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">Total points</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'milestones' && (
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-6">Challenge Milestones</h3>
                        <div className="space-y-4">
                            {milestones.map((milestone, index) => (
                                <div
                                    key={milestone.day}
                                    className={`flex items-center space-x-4 p-4 rounded-lg border ${milestone.completed
                                            ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                                            : 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600'
                                        }`}
                                >
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${milestone.completed
                                            ? 'bg-green-500 text-white'
                                            : 'bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-400'
                                        }`}>
                                        {milestone.completed ? '✓' : milestone.day}
                                    </div>
                                    <div className="flex-1">
                                        <div className={`font-medium ${milestone.completed
                                                ? 'text-green-700 dark:text-green-300'
                                                : 'text-gray-900 dark:text-white'
                                            }`}>
                                            Day {milestone.day}: {milestone.title}
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">
                                            Reward: {milestone.reward}
                                        </div>
                                    </div>
                                    {milestone.completed && (
                                        <Trophy className="w-5 h-5 text-yellow-500" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'community' && (
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-6">Community Feed</h3>
                        <div className="space-y-6">
                            <div className="text-center py-12">
                                <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                                    Community Features Coming Soon
                                </h4>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Connect with other participants, share progress, and motivate each other.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChallengeDetail;