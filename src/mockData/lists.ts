import { List } from '../types/List'

export const mockLists: List[] = [
    {
        id: '1',
        name: "John's List",
        members: [
            {
                id: '1',
                name: 'John',
            },
            {
                id: '2',
                name: 'List Owner',
            },
            {
                id: '3',
                name: 'List Member',
            },
        ],
        owner: {
            id: '2',
            name: 'List Owner',
        },
        products: [
            {
                id: '1',
                name: 'Milk',
                isResolved: false,
            },
            {
                id: '2',
                name: 'Bread',
                isResolved: true,
            },
            {
                id: '3',
                name: 'Eggs',
                isResolved: false,
            },
        ],
    },
]
