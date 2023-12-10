import { useMutation, useQuery } from 'react-query'
import { api } from '../utils/api'
import { List } from '../../types/List'
import { CreateList } from '../types/ShoppingList'

export const useCreateList = () => {
    return useMutation(async (newList: CreateList) => {
        const { data } = await api.post('lists', newList)
        return data as List
    })
}

export const useDeleteList = () => {
    return useMutation(async (id: string) => {
        await api.delete(`lists/${id}`)
    })
}

export const useGetAllLists = () => {
    return useQuery('lists', async () => {
        const { data } = await api.get('lists')
        return data as List[]
    })
}

export const useGetListById = (id: string) => {
    return useQuery(['list', id], async () => {
        const { data } = await api.get(`lists/${id}`)
        return data as List
    })
}

export const useUpdateList = () => {
    return useMutation(async ({ id, ...updateData }: List) => {
        const { data } = await api.patch(`lists/${id}`, updateData)
        return data
    })
}
