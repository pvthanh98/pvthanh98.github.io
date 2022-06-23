import { useEffect, useState } from "react";
import axios from 'axios';
import moment from 'moment';
import { Button, CircularProgress, Grid, TextField, Typography } from "@mui/material";
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import { Box } from "@mui/system";
import { MessageItem } from "./message";
import SendIcon from '@mui/icons-material/Send';
import { io } from "socket.io-client";
import { MessageBroadcast } from "../../types/message-socket";


export function HomePage() {
  const [logs, setLogs] = useState<any[]>([]);
  const [isLoad, setIsLoad] = useState(false);
  const [page, setPage] = useState(1);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [messages, setMessages] = useState<Array<MessageBroadcast>>([])


  useEffect(() => {
    loadLogs();
    const socket: any = io('http://localhost:8080');
    socket.emit('client_emit_broadcast_message', {
      user: {
        name: "Thanh Phan"
      },
      body: "Hello everyone"
    })
    socket.on('server_emit_broadcast_message', function (data: MessageBroadcast) {
      console.log({
        message: data
      })
      setMessages([
        ...messages,
        {
          user: {
            name: data.user.name
          },
          body: data.body
        }
      ])
    })
  }, [])

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
    return messages.map((message, index) => (
      <MessageItem
        id="1313121342343"
        name={message.user.name}
        body={message.body}
        key={index}
        isLeft={(index % 2) === 0}
      />
    ))
  }

  return (
    <Grid container>
      <Grid xs={12} md={3} sx={{ padding: "8px" }}>
        <Typography variant="h6" fontWeight={700}>
          Chat Info
        </Typography>
        <Box
          sx={{ marginTop: "8px" }}
        >
          <Typography variant="body2">
            Name
          </Typography>
          <TextField
            variant="standard"
            placeholder={'Place you name'}
            fullWidth
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
            >
              Chat
            </Button>
          </Box>
        </Box>

        <Box>
          <Typography variant="h6" fontWeight={600}>
            Thanh Phan
          </Typography>
          <Typography variant="body2" fontSize={10}>
            ...c37c0afded27
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={6} sx={{ padding: "8px" }}>
        <Box
          sx={{
            border: "1px solid #e0e0e0",
            height: "550px",
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
        <Box
          sx={{ display: 'flex' }}
        >
          <TextField
            sx={{
              width: "100%"
            }}
          >
            Place.....
          </TextField>
          <Button variant="contained" color="primary" endIcon={<SendIcon />}>
            SEND
          </Button>
        </Box>
      </Grid>
      <Grid xs={12} md={3} sx={{ padding: "8px" }}>
        <Typography variant="h5" fontWeight={700}>
          Server Alive
        </Typography>
        <Box>
          {
            logs.map((log: any) => {
              return (
                <div
                  style={{
                    marginTop: "8px"
                  }}
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
