import React from 'react'
import Button from './Button'
import { useTranslation } from 'react-i18next'

interface ModalProps {
    children: React.ReactNode
    onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
    const { t } = useTranslation()
    return (
        <div className='relative z-10' aria-labelledby='modal-title' role='dialog' aria-modal='true'>
            <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>
            <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
                <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
                    <div className='relative transform overflow-hidden rounded-lg bg-white dark:bg-gray-900 dark:text-gray-100 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6'>
                        {children}

                        <Button onClick={onClose} color='danger' className='w-full'>
                            {t('common.close')}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
