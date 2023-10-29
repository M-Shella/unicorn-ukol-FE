import { List } from 'postcss/lib/list'

export interface User {
    id: string
    name: string
    lists: List[]
}
