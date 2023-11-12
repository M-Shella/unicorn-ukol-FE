import React from 'react'
import Button from '../../common/Button'

interface ConfirmListDeletionProps {
    onConfirmDeletion: () => void
    onClose: () => void
}

export const ConfirmListDeletion: React.FC<ConfirmListDeletionProps> = ({
    onConfirmDeletion,
    onClose,
}: ConfirmListDeletionProps) => {
    return (
        <div>
            <h2 className='text-lg'>Are you sure you want to delete this list?</h2>
            <Button className='w-full my-3' onClick={onConfirmDeletion}>
                Yes
            </Button>
        </div>
    )
}

export default ConfirmListDeletion
