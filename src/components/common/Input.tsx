import React from 'react'
import { UseFormRegister } from 'react-hook-form'

interface InputProps {
    label?: string
    name: string
    placeholder?: string
    register: UseFormRegister<any>
    className?: HTMLInputElement['className']
}

const Input: React.FC<InputProps> = ({ label, name, placeholder, register, className }) => {
    return (
        <div>
            <label htmlFor={name} className='ml-px block pl-4 text-sm font-medium leading-6 text-gray-900'>
                {label}
            </label>
            <div className='mt-2'>
                <input
                    {...register(name)}
                    type='text'
                    id={name}
                    className={`block w-full rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-submarine-600 sm:text-sm sm:leading-6 ${className}`}
                    placeholder={placeholder}
                />
            </div>
        </div>
    )
}

export default Input
