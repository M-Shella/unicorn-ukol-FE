import { Product } from '../../types/Product'
import { User } from '../../types/User'

export interface CreateList {
    name: string
    items: Product[]
    users: User[]
}
