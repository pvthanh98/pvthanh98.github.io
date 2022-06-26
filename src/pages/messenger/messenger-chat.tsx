import { Box } from '@mui/system';
import { useEffect, useRef, useState } from 'react';
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
import { Button, CircularProgress, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';
import * as socketEvent from '../../types/socket-event.constant';
import { updateProfile } from '../../redux/actions/profile.action';

export interface MessengerChatPagePropType {
    socket?: any
}

export const MessengerChatPage = ({ socket }: MessengerChatPagePropType) => {
    const chatContainerRef = useRef<HTMLDivElement>(null);
    const [isLoad, setIsLoad] = useState<boolean>(false);
    const [messages, setMessages] = useState<MessengerMessageItemInterface[]>([]);
    const [userId, setUserId] = useState<string>('');
    const conversations = useSelector((state: RootState) => state.messengerApp.conversations)
    const dispatch = useDispatch();
    const params: any = useParams();
    const [messageBodyInput, setMessageBodyInput] = useState("");
    const profile = useSelector((state: RootState) => state.profile.value)

    useEffect(() => {
        loadMessages(params.conversationId);
        if (profile.id === "") {
            loadProfile();
        }
    }, [])

    useEffect(() => {
        chatContainerRef.current?.scrollIntoView();
    }, [messages])

    const loadProfile = async () => {
        try {
            setIsLoad(true);
            const response = await axios.get(`${process.env.REACT_APP_SERVER_HOST}/user/profile`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            });
            dispatch(updateProfile(response.data))
            setIsLoad(false)
        } catch (e: any) {
            if (e.response && e.response.status === 401) {
                dispatch(setAuth(false));
                localStorage.removeItem("accessToken");
            }
            if (e.response.status === 403) {
                alert("Permission denied")
            }
            setIsLoad(false)
        }
    }

    const loadMessages = async (conversationId: string) => {
        try {
            if (conversationId) {
                setIsLoad(true);
                console.log(`${process.env.REACT_APP_SERVER_HOST}/chat/conversation/${conversationId}/message`)
                const response = await axios.get(`${process.env.REACT_APP_SERVER_HOST}/chat/conversation/${conversationId}/message`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                    }
                });
                setMessages([...response.data.result].reverse())
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
        return messages.map((msg, index) => {
            if (index === (messages.length - 1)) {
                return (
                    <Box
                        ref={chatContainerRef}
                    >
                        <MessengerMessageItem
                            key={msg.id}
                            userId={profile.id}
                            body={msg.body}
                            createdAt={msg.createdAt}
                            fromUser={msg.fromUser}
                            id={msg.id}
                            type={msg.type}
                            updatedAt={msg.updatedAt}

                        />
                    </Box>
                )
            } else {
                return <Box>
                    <MessengerMessageItem
                        key={msg.id}
                        userId={profile.id}
                        body={msg.body}
                        createdAt={msg.createdAt}
                        fromUser={msg.fromUser}
                        id={msg.id}
                        type={msg.type}
                        updatedAt={msg.updatedAt}

                    />
                </Box>
            }
        })
    }

    const onInputChange = (e: any) => {
        setMessageBodyInput(e.target.value)
    }

    const submitMessage = (e: any) => {
        e.preventDefault();
        socket.emit(socketEvent.CLIENT_EMIT_PRIVATE_MESSAGE, {
            fromUser: {
                id: profile.id,
                firstName: profile.firstName,
                lastName: profile.lastName,
                image: profile.image,
            },
            body: messageBodyInput,
            type: "text",
            conversationId: params.conversationId
        });

        setMessageBodyInput("")
    }

    useEffect(() => {
        socket.emit("client_emit_auth", {
            token: localStorage.getItem('accessToken')
        })
        socket.on(socketEvent.SERVER_EMIT_PRIVATE_MESSAGE, function (data: any) {
            console.log({
                RECEUVE: data
            })
            setMessages(msgs => {
                return [
                    ...msgs,
                    { ...data }
                ]
            })
        })
    }, [socket])


    return (
        <Box
            sx={{
                padding: "0px",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >
            {isLoad && (<Box display={'flex'} justifyContent={'center'}>
                <CircularProgress />
            </Box>)}
            <Box
                sx={{
                    height: "80vh",
                    padding: "4px 4px 2px 4px",
                    overflow: "scroll",
                    overflowX: "hidden"
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
