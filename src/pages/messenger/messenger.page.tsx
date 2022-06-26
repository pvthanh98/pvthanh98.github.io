import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { CardMessenger } from './card-messenger';
import axios from 'axios';
import { setAuth } from '../../redux/actions/auth.action';
import { useDispatch, useSelector } from 'react-redux';
import { updateConversationListAction } from '../../redux/actions/messenger.action';
import { RootState } from '../../redux/store';


export const MessengerPage = () => {
    const [isLoad, setIsLoad] = useState<boolean>(false);
    const conversations = useSelector((state: RootState) => state.messengerApp.conversations)
    const dispatch = useDispatch();

    useEffect(()=>{
        loadConversation();
    },[]) 

    const loadConversation = async () => {
        try {
            setIsLoad(true);
            const response = await axios.get(`${process.env.REACT_APP_SERVER_HOST}/chat/conversation`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            });
            dispatch(updateConversationListAction(response.data.result))
            setIsLoad(false)
        } catch (e: any) {
            if (e.response && e.response.status === 401) {
                dispatch(setAuth(false));
                localStorage.removeItem("accessToken");
            }
            setIsLoad(false)
        }
    }

    const renderConversations = () => {
        return conversations.map(conv => (
            <CardMessenger 
                key={conv.id}
                firstName={conv.partner.firstName}
                lastName={conv.partner.lastName}
                image={conv.partner.image}
                updatedAt={conv.updatedAt}
                lastMessage={conv.lastMessage}
            />
        ))
    }


    return (
        <Box 
            sx={{
                padding: "0px 4px 2px 4px"
            }}
        >
            {renderConversations()}
        </Box >
    )
}
