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

export interface MessengerMessageItem {
    id: string;
    body: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    fromUser: {
        id: string;
        firstName: string;
        lastName: string;
        image: string;
        isMe: boolean
    }
}