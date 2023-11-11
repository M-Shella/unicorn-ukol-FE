import React from 'react'

interface ButtonProps {
    size?: 'sm' | 'md' | 'lg'
    color?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning'
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    disabled?: boolean
    isLoading?: boolean
    className?: string
    children: React.ReactNode
    type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<ButtonProps> = ({
    size = 'md',
    color = 'primary',
    onClick,
    disabled,
    isLoading,
    className,
    children,
    type = 'button',
}: ButtonProps) => {
    const sizeClasses = {
        sm: 'px-2 py-1 text-xs font-semibold h-6',
        md: 'px-2 py-1.5 text-sm font-semibold h-8',
        lg: 'px-2.5 py-2 text-sm font-semibold h-10',
    }

    const colorClasses = {
        primary: 'bg-submarine-700 hover:bg-submarine-600 focus-visible:outline-submarine-700 text-gray-100',
        secondary: 'bg-purple-400 hover:bg-purple-300 focus-visible:outline-purple-400 text-gray-100',
        danger: 'bg-red-500 hover:bg-red-400 focus-visible:outline-red-500 text-white',
        success: 'bg-green-600 hover:bg-green-500 focus-visible:outline-green-600',
        warning: 'bg-yellow-600 hover:bg-yellow-500 focus-visible:outline-yellow-600',
    }

    const sizeClass = sizeClasses[size]
    const colorClass = colorClasses[color]

    const disabledClasses =
        disabled || isLoading
            ? 'opacity-50 cursor-not-allowed'
            : 'hover:opacity-80 focus-visible:outline-offset-2 focus-visible:outline shadow-md'

    const buttonClasses = `${sizeClass} ${colorClass} ${disabledClasses} ${className}`

    return (
        <button type={type} className={`rounded ${buttonClasses}`} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    )
}

export default Button
