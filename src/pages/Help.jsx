import { useState } from 'react';
import {
    Search,
    ChevronDown,
    ChevronRight,
    Book,
    MessageCircle,
    Mail,
    Phone,
    ExternalLink,
    Play,
    FileText,
    Users,
    Lightbulb,
    Target,
    Trophy,
    BarChart3,
    Settings,
    Zap
} from 'lucide-react';

const Help = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [expandedFaq, setExpandedFaq] = useState(null);
    const [activeCategory, setActiveCategory] = useState('getting-started');

    const categories = [
        { id: 'getting-started', label: 'Getting Started', icon: Zap },
        { id: 'habits', label: 'Managing Habits', icon: Target },
        { id: 'challenges', label: 'Challenges', icon: Trophy },
        { id: 'analytics', label: 'Analytics & Progress', icon: BarChart3 },
        { id: 'account', label: 'Account & Settings', icon: Settings },
        { id: 'troubleshooting', label: 'Troubleshooting', icon: Lightbulb }
    ];

    const faqs = {
        'getting-started': [
            {
                question: 'How do I create my first habit?',
                answer: 'Click the "Add New Habit" button in the sidebar or dashboard. Fill in the habit name, choose a category, select a color, and set your preferred frequency. You can also set reminder times to help you stay consistent.'
            },
            {
                question: 'What makes a good habit?',
                answer: 'Good habits are specific, measurable, and realistic. Start small - instead of "exercise more," try "walk for 10 minutes daily." Make it easy to do and hard to skip. Focus on consistency over intensity.'
            },
            {
                question: 'How do I track my progress?',
                answer: 'Simply click the checkmark next to each habit when you complete it. Your streaks, completion rates, and progress will be automatically tracked and displayed in your dashboard and analytics.'
            }
        ],
        'habits': [
            {
                question: 'Can I edit a habit after creating it?',
                answer: 'Yes! Click on any habit card to view its details, then use the edit button to modify the name, description, category, color, or frequency. Changes will be saved automatically.'
            },
            {
                question: 'How do I delete a habit?',
                answer: 'Go to the habit detail page and click the delete button. Note that this will permanently remove all progress data for that habit. Consider pausing the habit instead if you might want to resume it later.'
            },
            {
                question: 'What if I miss a day?',
                answer: 'Don\'t worry! Missing a day happens to everyone. Your streak will reset, but your overall progress and statistics remain. Focus on getting back on track the next day rather than dwelling on the miss.'
            }
        ],
        'challenges': [
            {
                question: 'How do challenges work?',
                answer: 'Challenges are community-driven goals where you compete with other users. Join a challenge, complete your daily tasks, and climb the leaderboard. Challenges have specific durations and reward systems.'
            },
            {
                question: 'Can I create my own challenge?',
                answer: 'Yes! Click "Create Challenge" on the challenges page. Set the duration, rules, and rewards. Other users can then join your challenge and compete together.'
            },
            {
                question: 'What happens if I miss days in a challenge?',
                answer: 'Missing days will affect your ranking in the challenge leaderboard. However, you can still continue participating and complete the remaining days to earn partial rewards.'
            }
        ],
        'analytics': [
            {
                question: 'How is my consistency score calculated?',
                answer: 'Your consistency score is the percentage of days you\'ve completed your habits over a given period. It\'s calculated as (completed days / total days) × 100. Higher consistency scores indicate better habit adherence.'
            },
            {
                question: 'What do the different charts show?',
                answer: 'The weekly chart shows daily completions, the trend line shows consistency over time, and the pie chart breaks down your habits by category. Use these insights to identify patterns and areas for improvement.'
            },
            {
                question: 'Can I export my data?',
                answer: 'Yes! Go to Settings > Data & Storage to export all your habit data, progress, and statistics in JSON format. This is useful for backups or analyzing your data in other tools.'
            }
        ],
        'account': [
            {
                question: 'How do I change my password?',
                answer: 'Go to Settings > Privacy & Security, then use the "Change Password" section. Enter your current password and your new password twice to confirm the change.'
            },
            {
                question: 'Can I change my timezone?',
                answer: 'Yes! In Settings > Profile, you can select your timezone from the dropdown menu. This ensures your habit tracking aligns with your local time and daily schedule.'
            },
            {
                question: 'How do I enable two-factor authentication?',
                answer: 'Go to Settings > Privacy & Security and click "Manage" next to Two-Factor Authentication. Follow the setup process using your preferred authenticator app for enhanced account security.'
            }
        ],
        'troubleshooting': [
            {
                question: 'My habits aren\'t syncing across devices',
                answer: 'Make sure you\'re logged into the same account on all devices and have a stable internet connection. Try refreshing the page or logging out and back in. If issues persist, contact support.'
            },
            {
                question: 'I\'m not receiving notifications',
                answer: 'Check your notification settings in Settings > Notifications. Ensure both the specific notification types and delivery methods (email/push) are enabled. Also check your device\'s notification permissions.'
            },
            {
                question: 'The app is running slowly',
                answer: 'Try clearing your browser cache and cookies. If using a mobile device, ensure you have sufficient storage space. Close other apps running in the background to free up memory.'
            }
        ]
    };

    const quickActions = [
        {
            title: 'Video Tutorials',
            description: 'Watch step-by-step guides',
            icon: Play,
            action: 'Watch Now',
            color: 'bg-red-500'
        },
        {
            title: 'User Guide',
            description: 'Complete documentation',
            icon: Book,
            action: 'Read Guide',
            color: 'bg-blue-500'
        },
        {
            title: 'Community Forum',
            description: 'Connect with other users',
            icon: Users,
            action: 'Join Forum',
            color: 'bg-green-500'
        },
        {
            title: 'Feature Requests',
            description: 'Suggest new features',
            icon: Lightbulb,
            action: 'Submit Idea',
            color: 'bg-purple-500'
        }
    ];

    const contactOptions = [
        {
            method: 'Live Chat',
            description: 'Get instant help from our support team',
            icon: MessageCircle,
            availability: 'Available 24/7',
            action: 'Start Chat'
        },
        {
            method: 'Email Support',
            description: 'Send us a detailed message',
            icon: Mail,
            availability: 'Response within 24 hours',
            action: 'Send Email'
        },
        {
            method: 'Phone Support',
            description: 'Speak directly with our team',
            icon: Phone,
            availability: 'Mon-Fri, 9AM-6PM EST',
            action: 'Call Now'
        }
    ];

    const filteredFaqs = faqs[activeCategory]?.filter(faq =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

    return (
        <div className="p-6 max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    Help Center 🆘
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Find answers to your questions and get the most out of HabitTracker
                </p>

                {/* Search */}
                <div className="max-w-md mx-auto relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                        type="text"
                        placeholder="Search for help..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    />
                </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {quickActions.map((action, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                        <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-4`}>
                            <action.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{action.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{action.description}</p>
                        <button className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
                            <span>{action.action}</span>
                            <ExternalLink className="w-4 h-4" />
                        </button>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Categories Sidebar */}
                <div className="lg:col-span-1">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Categories</h3>
                        <nav className="space-y-2">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${activeCategory === category.id
                                        ? 'bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
                                        : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
                                        }`}
                                >
                                    <category.icon className="mr-3 h-4 w-4" />
                                    {category.label}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>
                {/* FAQ Content */}
                <div className="lg:col-span-3">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-6">
                            Frequently Asked Questions
                        </h3>

                        {filteredFaqs.length > 0 ? (
                            <div className="space-y-4">
                                {filteredFaqs.map((faq, index) => (
                                    <div key={index} className="border border-gray-200 dark:border-gray-600 rounded-lg">
                                        <button
                                            onClick={() => setExpandedFaq(expandedFaq === `${activeCategory}-${index}` ? null : `${activeCategory}-${index}`)}
                                            className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                                        >
                                            <span className="font-medium text-gray-900 dark:text-white">{faq.question}</span>
                                            {expandedFaq === `${activeCategory}-${index}` ? (
                                                <ChevronDown className="w-5 h-5 text-gray-500" />
                                            ) : (
                                                <ChevronRight className="w-5 h-5 text-gray-500" />
                                            )}
                                        </button>
                                        {expandedFaq === `${activeCategory}-${index}` && (
                                            <div className="px-4 pb-4">
                                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-8">
                                <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                                    No results found
                                </h4>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Try adjusting your search terms or browse different categories.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Contact Support */}
            <div className="mt-8">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 border border-blue-200 dark:border-blue-800">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            Still need help?
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Our support team is here to help you succeed with your habits
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {contactOptions.map((option, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <option.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{option.method}</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{option.description}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-500 mb-4">{option.availability}</p>
                                <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                                    {option.action}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Additional Resources */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Popular Articles</h3>
                    <div className="space-y-3">
                        {[
                            'How to build lasting habits',
                            'The science behind habit formation',
                            'Setting realistic goals',
                            'Overcoming habit plateaus',
                            'Using analytics to improve'
                        ].map((article, index) => (
                            <button key={index} className="flex items-center space-x-3 text-left hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                <FileText className="w-4 h-4 text-gray-400" />
                                <span className="text-sm text-gray-700 dark:text-gray-300">{article}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-4">System Status</h3>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-700 dark:text-gray-300">API Status</span>
                            <span className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-sm text-green-600 dark:text-green-400">Operational</span>
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-700 dark:text-gray-300">Database</span>
                            <span className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-sm text-green-600 dark:text-green-400">Operational</span>
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-700 dark:text-gray-300">Notifications</span>
                            <span className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-sm text-green-600 dark:text-green-400">Operational</span>
                            </span>
                        </div>
                        <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                            View detailed status →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Help;