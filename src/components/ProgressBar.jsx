const ProgressBar = ({
    progress,
    total = 100,
    color = 'blue',
    size = 'md',
    showLabel = true,
    label,
    className = ''
}) => {
    const percentage = Math.min((progress / total) * 100, 100);

    const sizeClasses = {
        sm: 'h-1',
        md: 'h-2',
        lg: 'h-3',
        xl: 'h-4'
    };

    const colorClasses = {
        blue: 'from-blue-500 to-blue-600',
        green: 'from-green-500 to-green-600',
        orange: 'from-orange-500 to-orange-600',
        purple: 'from-purple-500 to-purple-600',
        red: 'from-red-500 to-red-600',
        yellow: 'from-yellow-500 to-yellow-600',
    };

    return (
        <div className={`w-full ${className}`}>
            {showLabel && (
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {label || 'Progress'}
                    </span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {Math.round(percentage)}%
                    </span>
                </div>
            )}
            <div className={`w-full bg-gray-200 dark:bg-gray-700 rounded-full ${sizeClasses[size]}`}>
                <div
                    className={`bg-gradient-to-r ${colorClasses[color]} ${sizeClasses[size]} rounded-full transition-all duration-500 ease-out`}
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
};

export default ProgressBar;