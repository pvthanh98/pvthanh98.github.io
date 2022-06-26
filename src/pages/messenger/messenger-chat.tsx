import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { CardMessenger } from './card-messenger';
import axios from 'axios';
import { setAuth } from '../../redux/actions/auth.action';
import { useDispatch, useSelector } from 'react-redux';
import { updateConversationListAction } from '../../redux/actions/messenger.action';
import { RootState } from '../../redux/store';
import { ChatHeader } from './chat-header-messenger';
import { MessengerMessageItem } from './message';
import { MessengerMessageItem as MessengerMessageItemInterface } from '../../types/message.type';
import { useParams } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';


export const MessengerChatPage = () => {
    const [isLoad, setIsLoad] = useState<boolean>(false);
    const [messages, setMessages] = useState<MessengerMessageItemInterface[]>([]);
    const [userId, setUserId] = useState<string>('');
    const conversations = useSelector((state: RootState) => state.messengerApp.conversations)
    const dispatch = useDispatch();
    const params: any = useParams();
    const [messageBodyInput, setMessageBodyInput] = useState("");

    useEffect(() => {
        loadMessages(params.conversationId);
    }, [])

    const loadMessages = async (conversationId: string) => {
        try {
            if (conversationId) {
                setIsLoad(true);
                const response = await axios.get(`${process.env.REACT_APP_SERVER_HOST}/chat/conversation/${conversationId}/message`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                    }
                });
                setMessages([...response.data.result])
                setUserId(response.data.userId)
                setIsLoad(false)
            }
        } catch (e: any) {
            if (e.response && e.response.status === 401) {
                dispatch(setAuth(false));
                localStorage.removeItem("accessToken");
            }
            setIsLoad(false)
        }
    }

    const renderMessages = () => {
        return messages.map(msg => (
            <MessengerMessageItem
                key={msg.id}
                isMe={msg.fromUser.isMe}
                body={msg.body}
                createdAt={msg.createdAt}
                fromUser={msg.fromUser}
                id={msg.id}
                type={msg.type}
                updatedAt={msg.updatedAt}
            />
        ))
    }

    const onInputChange = (e: any) => {
        setMessageBodyInput(e.target.value)
    }

    const submitMessage = (e: any) => {
        e.preventDefault();
        // socket.emit(socketEvent.CLIENT_EMIT_BROADCAST_MESSAGE, {
        //   user: {
        //     id: userId,
        //     name: userName
        //   },
        //   body: messageBodyInput
        // });
        setMessageBodyInput("")
      }


    return (
        <Box
            sx={{
                padding: "0px",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >
            <Box
                sx={{
                    minHeight: "80vh",
                    padding: "4px 4px 2px 4px"
                }}
            >
                {renderMessages()}
            </Box>
            <form
                style={{
                    display: 'flex'
                }}
                onSubmit={submitMessage}
            >
                <TextField
                    sx={{
                        width: "90%"
                    }}
                    value={messageBodyInput}
                    onChange={onInputChange}
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    SEND
                </Button>
            </form>
        </Box >
    )
}
