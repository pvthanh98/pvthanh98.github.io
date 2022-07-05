import { Box } from '@mui/system';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { setAuth } from '../../redux/actions/auth.action';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { MessengerMessageItem } from './message';
import { MessengerMessageItem as MessengerMessageItemInterface } from '../../types/message.type';
import { useParams } from 'react-router-dom';
import { Button, CircularProgress, TextField, Typography, IconButton } from '@mui/material';
import * as socketEvent from '../../types/socket-event.constant';
import { updateProfile } from '../../redux/actions/profile.action';
import RefreshIcon from '@mui/icons-material/Refresh';


export interface MessengerChatPagePropType {
    socket?: any
}

export const MessengerChatPage = ({ socket }: MessengerChatPagePropType) => {
    const chatContainerRef = useRef<HTMLDivElement>(null);
    const firstMessageRef = useRef<HTMLDivElement>(null);
    const typingRef = useRef<HTMLDivElement>(null);
    const [isLoad, setIsLoad] = useState<boolean>(false);
    const [isTyping, setIsTyping] = useState<boolean>(false);
    const [nextPage, setNextPage] = useState<number>(2);
    const [receivedMessage, setReceivedMessage] = useState<boolean>(false);
    const [messages, setMessages] = useState<MessengerMessageItemInterface[]>([]);
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

    useEffect(() => {
        firstMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [nextPage])

    useEffect(() => {
        typingRef.current?.scrollIntoView();
    }, [isTyping])

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
                const response = await axios.get(`${process.env.REACT_APP_SERVER_HOST}/chat/conversation/${conversationId}/message`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                    }
                });
                setMessages([...response.data.result].reverse())
                setReceivedMessage(false);
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

    const loadMoreMessages = async () => {
        try {
            if (params.conversationId) {
                setIsLoad(true);
                const response = await axios.get(`${process.env.REACT_APP_SERVER_HOST}/chat/conversation/${params.conversationId}/message?page=${nextPage}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                    }
                });
                setMessages(oldMessages => {
                    return [
                        ...response.data.result.reverse(),
                        ...oldMessages
                    ]
                })
                setReceivedMessage(false);
                setNextPage(next => (next + 1))
                setIsLoad(false)
            }
        } catch (e: any) {
            if (e.response && e.response.status === 401) {
                dispatch(setAuth(false));
                localStorage.removeItem("accessToken");
            }
            setReceivedMessage(false);
            setIsLoad(false)
        }
    }

    const renderMessages = () => {
        return messages.map((msg, index) => {
            switch (index) {
                case (messages.length - 1):
                    return (
                        <Box
                            ref={chatContainerRef}
                            key={`${msg.id}-box-${Math.random()}`}
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
                case 0:
                    return (
                        <Box
                            ref={firstMessageRef}
                            key={`${msg.id}-box-${Math.random()}`}
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

                default:
                    return (
                        <Box
                            key={`${msg.id}-box-${Math.random()}`}
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
        setReceivedMessage(false);
        setMessageBodyInput("")
        setIsTyping(false);
    }

    useEffect(() => {
        socket.emit("client_emit_auth", {
            token: localStorage.getItem('accessToken')
        })
        socket.on(socketEvent.SERVER_EMIT_PRIVATE_MESSAGE, function (data: any) {
            if (data.conversationId === params.conversationId) {
                setMessages(msgs => {
                    return [
                        ...msgs,
                        { ...data }
                    ]
                })
                setReceivedMessage(true);
            }

        })

        socket.on(socketEvent.SERVER_EMIT_TYPING, function (data: any) {
            if (data.conversationId === params.conversationId) {
                setIsTyping(true)
            }

        });

        socket.on(socketEvent.SERVER_EMIT_NOT_TYPING, function (data: any) {
            if (data.conversationId === params.conversationId) {
                setIsTyping(false)
            }
        });

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
                {
                    !isLoad && <Box
                        sx={{ textAlign: "center" }}
                        onClick={loadMoreMessages}
                    >
                        <IconButton aria-label="delete" size="small">
                            <RefreshIcon fontSize="inherit" />
                        </IconButton>
                    </Box>
                }
                {renderMessages()}
                {
                    isTyping && (
                        <Typography ref={typingRef}>
                            Typing...
                        </Typography>
                    )
                }
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
