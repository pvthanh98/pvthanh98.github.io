import React, { useEffect, useRef, useState } from "react";
import axios from 'axios';
import moment from 'moment';
import { Button, CircularProgress, Grid, TextField, Typography } from "@mui/material";
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import { Box } from "@mui/system";
import { MessageItem } from "./message";
import SendIcon from '@mui/icons-material/Send';
import { MessageBroadcast } from "../../types/message-socket";
import * as socketEvent from '../../types/socket-event.constant';

export interface HomePagePropType {
  socket?: any
}

export function HomePage({socket}: HomePagePropType) {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [logs, setLogs] = useState<any[]>([]);
  const [isLoad, setIsLoad] = useState(false);
  const [page, setPage] = useState(1);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [messages, setMessages] = useState<Array<MessageBroadcast>>([])
  const [userName, setUserName] = useState("");
  const [userNameInput, setUserNameInput] = useState("");
  const [userId, setUserId] = useState("");
  const [messageBodyInput, setMessageBodyInput] = useState("");
 
  useEffect(() => {
    loadLogs();
  }, [])

  useEffect(() => {
    chatContainerRef.current?.scrollIntoView();
  }, [messages])

  useEffect(() => {
    if (socket) {
      socket.on(socketEvent.SERVER_EMIT_BROADCAST_MESSAGE, function (data: MessageBroadcast) {
        setMessages((oldMessages: MessageBroadcast[]) => {
          if (oldMessages.length >= 3) {
            return [
              ...oldMessages,
              { ...data }
            ]
          }
          return [
            ...oldMessages,
            data
          ]
        })
      })
    }
  }, [socket])

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
          <div ref={chatContainerRef}>
            <MessageItem
              id={message.user.id}
              name={message.user.name}
              body={message.body}
              key={index}
              isLeft={(message.user.id.toString() === userId)}
            />
          </div>
        )
      return (
        <div>
          <MessageItem
            id={message.user.id}
            name={message.user.name}
            body={message.body}
            key={index}
            isLeft={(message.user.id.toString() === userId)}
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

  const onInputChange = (e:any) => {
    setMessageBodyInput(e.target.value)
  }

  return (
    <Grid container>
      <Grid item xs={12} md={3} sx={{ padding: "8px" }}>
        {
          !userId && (
            <Box>
              <Typography variant="h6" fontWeight={700}>
                Chat Info
              </Typography>
              <form
                style={{ marginTop: "8px" }}
                onSubmit={submitUserChat}
              >
                <Typography variant="body2">
                  Name
                </Typography>
                <TextField
                  variant="standard"
                  placeholder={'Place you name'}
                  fullWidth
                  value={userNameInput}
                  onChange={e => setUserNameInput(e.target.value)}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "right"
                  }}
                >
                  <Button
                    variant="contained"
                    color="inherit"
                    sx={{
                      marginTop: "8px"
                    }}
                  >
                    Clear
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      marginTop: "8px",
                      marginLeft: "8px"
                    }}
                    type="submit"
                  >
                    Chat
                  </Button>
                </Box>
              </form>
            </Box>
          )
        }

        {!userId && (
          <Typography fontStyle={'italic'} sx={{ marginTop: "8px" }}>
            Please input your name to start chatting...
          </Typography>
        )}

        <Box>
          <Typography variant="h6" fontWeight={600}>
            {userName}
          </Typography>
          <Typography variant="body2" fontSize={10}>
            {userId}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} sx={{ padding: "8px" }}>
        <Box
          sx={{
            border: "1px solid #e0e0e0",
            height: "75vh",
            borderRadius: "8px",
            paddingTop: "8px",
            paddingLeft: "8px",
            paddingRight: "8px",
            overflow: "scroll",
            overflowX: "hidden"
          }}
        >
          {renderMessage()}
        </Box>
        <form
          style={{ display: userId ? 'flex' : 'none' }}
          onSubmit={submitMessage}
        >
          <TextField
            sx={{
              width: "100%"
            }}
            value={messageBodyInput}
            onChange={onInputChange}
          />
          <Button
            variant="contained"
            color="primary"
            endIcon={<SendIcon />}
            type="submit"
          >
            SEND
          </Button>
        </form>
      </Grid>
      <Grid item xs={12} md={3} sx={{ padding: "8px" }}>
        <Typography variant="h5" fontWeight={700}>
          Server Alive
        </Typography>
        <Box
          sx={{
            height: "67vh",
            overflow: "scroll",
            overflowX: "hidden",
          }}
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
    </Grid>
  );
}
