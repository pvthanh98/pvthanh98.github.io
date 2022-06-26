export interface Partner {
    id: string;
    firstName: string;
    lastName: string;
    image: string;
}

export interface Conversation {
    id: string;
    lastMessage: string;
    isGroup: boolean;
    createdAt: string;
    updatedAt: string;
    partner: Partner;
}