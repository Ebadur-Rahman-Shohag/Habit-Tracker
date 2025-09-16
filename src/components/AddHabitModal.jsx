import { useState } from 'react';
import { X, Target, Calendar, Palette } from 'lucide-react';

const AddHabitModal = ({ isOpen, onClose, onSave }) => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: 'fitness',
        color: 'bg-blue-500',
        frequency: 'daily',
        reminderTime: '09:00'
    });

    const categories = [
        { value: 'fitness', label: 'Fitness', icon: '💪' },
        { value: 'learning', label: 'Learning', icon: '📚' },
        { value: 'wellness', label: 'Wellness', icon: '🧘' },
        { value: 'productivity', label: 'Productivity', icon: '⚡' },
        { value: 'creativity', label: 'Creativity', icon: '🎨' },
        { value: 'social', label: 'Social', icon: '👥' }
    ];

    const colors = [
        'bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-red-500',
        'bg-yellow-500', 'bg-pink-500', 'bg-indigo-500', 'bg-orange-500'
    ];

    const frequencies = [
        { value: 'daily', label: 'Daily' },
        { value: 'weekly', label: 'Weekly' },
        { value: 'weekdays', label: 'Weekdays Only' },
        { value: 'custom', label: 'Custom' }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name.trim()) {
            onSave(formData);
            setFormData({
                name: '',
                description: '',
                category: 'fitness',
                color: 'bg-blue-500',
                frequency: 'daily',
                reminderTime: '09:00'
            });
            onClose();
        }
    };

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-screen items-center justify-center p-4">
                {/* Backdrop */}
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
                    onClick={onClose}
                />

                {/* Modal */}
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md transform transition-all">
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                                <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Add New Habit
                            </h3>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="p-6 space-y-6">
                        {/* Habit Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Habit Name *
                            </label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => handleInputChange('name', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                placeholder="e.g., Morning Exercise, Read 30 minutes"
                                required
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Description
                            </label>
                            <textarea
                                value={formData.description}
                                onChange={(e) => handleInputChange('description', e.target.value)}
                                rows={3}
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                placeholder="What does this habit involve?"
                            />
                        </div>

                        {/* Category */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Category
                            </label>
                            <div className="grid grid-cols-3 gap-2">
                                {categories.map((category) => (
                                    <button
                                        key={category.value}
                                        type="button"
                                        onClick={() => handleInputChange('category', category.value)}
                                        className={`p-3 rounded-lg border text-center transition-colors ${formData.category === category.value
                                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                                            : 'border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                                            }`}
                                    >
                                        <div className="text-lg mb-1">{category.icon}</div>
                                        <div className="text-xs font-medium">{category.label}</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Color */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                <Palette className="w-4 h-4 inline mr-1" />
                                Color
                            </label>
                            <div className="flex space-x-2">
                                {colors.map((color) => (
                                    <button
                                        key={color}
                                        type="button"
                                        onClick={() => handleInputChange('color', color)}
                                        className={`w-8 h-8 rounded-full ${color} transition-transform ${formData.color === color ? 'scale-110 ring-2 ring-gray-400' : 'hover:scale-105'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Frequency */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                <Calendar className="w-4 h-4 inline mr-1" />
                                Frequency
                            </label>
                            <select
                                value={formData.frequency}
                                onChange={(e) => handleInputChange('frequency', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white text-white"
                            >
                                {frequencies.map((freq) => (
                                    <option key={freq.value} value={freq.value}>
                                        {freq.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Reminder Time */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Reminder Time
                            </label>
                            <input
                                type="time"
                                value={formData.reminderTime}
                                onChange={(e) => handleInputChange('reminderTime', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                            />
                        </div>

                        {/* Buttons */}
                        <div className="flex space-x-3 pt-4">
                            <button
                                type="button"
                                onClick={onClose}
                                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-all transform hover:scale-[1.02]"
                            >
                                Create Habit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddHabitModal;