import React, { useState } from 'react'
import { List } from '../../../types/List'
import Button from '../../common/Button'
import { useTranslation } from 'react-i18next'

interface ShoppingListMembersProps {
    list: List
    onAddMemberToList: (name: string) => void
    onRemoveMemberFromList: (id: string) => void
}

export const ShoppingListMembers: React.FC<ShoppingListMembersProps> = ({
    list,
    onAddMemberToList,
    onRemoveMemberFromList,
}: ShoppingListMembersProps) => {
    const [newMemberName, setNewMemberName] = useState('')
    const { t } = useTranslation()

    const handleAddMemberToList = () => {
        onAddMemberToList(newMemberName)
        setNewMemberName('')
    }
    return (
        <div className='mt-12'>
            <h2 className='text-xl'>{t('users.members')}</h2>
            <div className='flex gap-3'>
                <input
                    className='
                        border
                        border-gray-300
                        rounded-md
                        shadow-sm
                        py-1
                        px-4
                        sm:text-sm
                    '
                    type='text'
                    value={newMemberName}
                    onChange={(e) => setNewMemberName(e.target.value)}
                />
                <button onClick={handleAddMemberToList}>{t('users.add')}</button>
            </div>
            {list.members.map((member) => (
                <div key={member.id}>
                    {member.name}
                    <Button size='sm' color='danger' onClick={() => onRemoveMemberFromList(member.id)}>
                        {t('common.delete')}
                    </Button>
                </div>
            ))}
        </div>
    )
}

export default ShoppingListMembers
