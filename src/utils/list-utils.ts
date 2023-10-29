import { List } from '../types/List'

export const isUserOwnerOfList = (list: List, userId: string) => {
    return list.owner.id === userId
}

export const isUserMemberOfList = (list: List, userId: string) => {
    return list.members.some((member) => member.id === userId)
}
