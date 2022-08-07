import React, { useEffect, useRef, useState } from "react";
import axios from 'axios';
import moment from 'moment';
import { Button, CircularProgress, Container, Grid, TextField, Typography } from "@mui/material";
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import { Box } from "@mui/system";
import { MessageItem } from "../post-detail/message";
import SendIcon from '@mui/icons-material/Send';
import { MessageBroadcast } from "../../types/message-socket";
import * as socketEvent from '../../types/socket-event.constant';
import { converMessageDBToMessageItem } from "../../utils/util";

export interface LogPropType {
  socket?: any
}

export function LogPage({ socket }: LogPropType) {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [logs, setLogs] = useState<any[]>([]);
  const [isLoad, setIsLoad] = useState(false);
  const [page, setPage] = useState(1); // logs 
  const [messagePage, setMessagePage] = useState(1);

  const [isFirstRender, setIsFirstRender] = useState(true);
  const [messages, setMessages] = useState<Array<MessageBroadcast>>([])
  const [userName, setUserName] = useState("");
  const [userNameInput, setUserNameInput] = useState("");
  const [userId, setUserId] = useState("");
  const [messageBodyInput, setMessageBodyInput] = useState("");

  useEffect(() => {
    loadLogs();
    loadMessages();
  }, [])


  useEffect(() => {
    chatContainerRef.current?.scrollIntoView();
  }, [messages, userId])

  useEffect(() => {
    if (socket) {
      socket.on(socketEvent.SERVER_EMIT_BROADCAST_MESSAGE, function (data: MessageBroadcast) {
        setMessages((oldMessages: MessageBroadcast[]) => {
          return [
            ...oldMessages,
            { ...data }
          ]
        })
      })
    }
  }, [socket])


  const loadMessages = async () => {
    setIsLoad(true)
    const response = await axios.get(`${process.env.REACT_APP_SERVER_HOST}/common/chat/public-message?page=${messagePage}`);
    const { result } = response.data;
    setMessages(msgs => [...msgs, ...converMessageDBToMessageItem(result).reverse()])
    setIsLoad(false);
  }

  const loadLogs = async () => {
    setIsLoad(true)
    const response = await axios.get(`${process.env.REACT_APP_SERVER_HOST}/common/log`);
    const { result } = response.data;
    setLogs([...result])
    setIsLoad(false);
    setIsFirstRender(false)
  }

  const pingServer = async () => {
    setIsLoad(true);
    await axios.get(`${process.env.REACT_APP_SERVER_HOST}/common/ping`);
    loadLogs();
  }

  const onLoadMore = async () => {
    setPage(page + 1);
    setIsLoad(true)
    const response = await axios.get(`${process.env.REACT_APP_SERVER_HOST}/common/log?page=${page + 1}`);
    const { result } = response.data;
    setLogs([...logs, ...result])
    setIsLoad(false);
  }

  const renderMessage = () => {
    return messages.map((message, index) => {
      if ((messages.length - 1) === index)
        return (
          <div ref={chatContainerRef} key={index}>
            <MessageItem
              id={message.user.id}
              name={message.user.name}
              body={message.body}
              isLeft={(message.user.id.toString() === userId)}
              fromNow={moment(message.createdAt).fromNow()}
            />
          </div>
        )
      return (
        <div key={index}>
          <MessageItem
            id={message.user.id}
            name={message.user.name}
            body={message.body}
            isLeft={(message.user.id.toString() === userId)}
            fromNow={moment(message.createdAt).fromNow()}
          />
        </div>
      )
    })
  }

  const submitUserChat = (e: any) => {
    e.preventDefault();
    setUserId(`${Math.random().toString()}-tp-site`)
    setUserName(userNameInput);
    setUserNameInput("")
  }

  const submitMessage = (e: any) => {
    e.preventDefault();
    socket.emit(socketEvent.CLIENT_EMIT_BROADCAST_MESSAGE, {
      user: {
        id: userId,
        name: userName
      },
      body: messageBodyInput
    });
    setMessageBodyInput("")
  }

  const onInputChange = (e: any) => {
    setMessageBodyInput(e.target.value)
  }

  return (
    <Container>
      <Grid container>
        {
          !userId && (
            <Grid item xs={12} md={12} sx={{ padding: "8px" }}>
              <Typography variant="h5" fontWeight={700}>
                Server Alive
              </Typography>
              <Box
              >
                {
                  logs.map((log: any) => {
                    return (
                      <div
                        style={{
                          marginTop: "8px"
                        }}
                        key={Math.random().toString()}
                      >
                        <div>
                          Message: {log.message}
                        </div>
                        <div>
                          From: {log.from}
                        </div>
                        <div>
                          Type: {log.type}
                        </div>
                        <div>
                          Created At: {moment(log.createdAt).format("DD-MMM-YY, h:mm:ss a")} ({moment(log.createdAt).fromNow()})
                        </div>
                        <hr />
                      </div>
                    )
                  })
                }
              </Box>
              <Box>
                <Typography
                  onClick={onLoadMore}
                  sx={{
                    fontStyle: "italic",
                    textDecoration: "underline",
                    cursor: "pointer",
                    margin: "16px 0px 16px 0px",
                    textAlign: "center"
                  }}
                >
                  {
                    isLoad ? "Loading..." : "Load More"
                  }
                </Typography>
              </Box>
              <Box>
                {
                  !isFirstRender && (
                    <Button
                      variant="contained"
                      color="primary"
                      endIcon={<ConnectWithoutContactIcon />}
                      onClick={pingServer}
                      sx={{
                        '@media only screen and (max-width: 690px)': {
                          width: "100%"
                        },
                      }}
                    >
                      {
                        isLoad ? <CircularProgress size="30px" color="inherit" /> : "PING"
                      }
                    </Button>
                  )
                }
              </Box>
            </Grid>
          )
        }
      </Grid>
    </Container>
  );
}
