export interface MessageResponseType {
    id: string,
    body: string,
    type: string,
    guestName: string,
    guestId: string,
    createdAt: string,
    updatedAt: string,
    conversation: {
        id: string,
        name: string,
    }
}