import React from 'react'
import { useForm } from 'react-hook-form'
import Input from '../../common/Input'
import Button from '../../common/Button'
import { useTranslation } from 'react-i18next'

interface FormValues {
    listName: string
}

interface AddShoppingListFormProps {
    onFormSubmit: (data: FormValues) => void
    onClose: () => void
}

const translationPrefix = 'lists.'

const AddShoppingListForm: React.FC<AddShoppingListFormProps> = ({ onFormSubmit, onClose }) => {
    const { register, handleSubmit, reset } = useForm<FormValues>()
    const { t } = useTranslation()

    const onSubmit = (data: FormValues) => {
        onFormSubmit(data)
        reset()
        onClose()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                label={t(translationPrefix + 'name')}
                name='listName'
                register={register}
                placeholder={t(translationPrefix + 'enterName')}
            />
            <Button type='submit' className='w-full my-3' size='lg'>
                {t(translationPrefix + 'add')}
            </Button>
        </form>
    )
}

export default AddShoppingListForm
