import React from 'react'
import { useForm } from 'react-hook-form'
import Input from '../../common/Input'
import Button from '../../common/Button'

interface FormValues {
    listName: string
}

interface AddShoppingListFormProps {
    onFormSubmit: (data: FormValues) => void
    onClose: () => void
}

const AddShoppingListForm: React.FC<AddShoppingListFormProps> = ({ onFormSubmit, onClose }) => {
    const { register, handleSubmit, reset } = useForm<FormValues>()

    const onSubmit = (data: FormValues) => {
        onFormSubmit(data)
        reset()
        onClose()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input label='List Name' name='listName' register={register} placeholder='Enter list name' />
            <Button type='submit' className='w-full my-3' size='lg'>
                Add List
            </Button>
        </form>
    )
}

export default AddShoppingListForm
