import { Product } from './Product'
import { User } from './User'

export interface List {
    id: string
    members: User[]
    owner: User
    name: string
    products: Product[]
}
