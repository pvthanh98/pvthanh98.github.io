export type ProfileType = {
    id: string,
    firstName: string
    lastName: string
    email: string
    image: string
    isActive: boolean
    isAdmin: boolean
    createdAt: string
    updatedAt: string
}

export type FriendRowType = {
    id: string,
    firstName: string
    lastName: string
    status: string
    image: string
}


export enum UserSideBarEnum {
    ALL_USER="All User",
    FRIEND_LIST="Friend_List",
    FRIEND_REQUEST="Friend_Request"
}