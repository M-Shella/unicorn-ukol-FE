import React from 'react'
import Button from '../../common/Button'
import { useTranslation } from 'react-i18next'

interface ConfirmListDeletionProps {
    onConfirmDeletion: () => void
    onClose: () => void
}

const translationPrefix = 'lists.'

export const ConfirmListDeletion: React.FC<ConfirmListDeletionProps> = ({
    onConfirmDeletion,
    onClose,
}: ConfirmListDeletionProps) => {
    const { t } = useTranslation()

    return (
        <div>
            <h2 className='text-lg'>{t(translationPrefix + 'deleteList')}</h2>
            <Button className='w-full my-3' onClick={onConfirmDeletion}>
                {t('common.yes')}
            </Button>
        </div>
    )
}

export default ConfirmListDeletion
