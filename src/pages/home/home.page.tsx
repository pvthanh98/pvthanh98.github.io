import { useEffect, useState } from "react";
import { NavComponent } from "../../components/common/nav/nav";
import axios from 'axios';
import moment from 'moment';
import { Button, CircularProgress } from "@mui/material";
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import { Box } from "@mui/system";

export function HomePage() {
  const [logs, setLogs] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  useEffect(() => {
    loadLogs()
  }, [])

  const loadLogs = async () => {
    setIsLoad(true)
    const result = await axios.get(`${process.env.REACT_APP_SERVER_HOST}/common/log`);
    setLogs(result.data)
    setIsLoad(false);
  }

  const pingServer = async () => {
    setIsLoad(true);
    await axios.get(`${process.env.REACT_APP_SERVER_HOST}/common/ping`);
    loadLogs();
  }
  return (
    <div>
      <h3>ThanhPhan Hello</h3>
      <NavComponent />

      <Box sx={{display:"flex", alignItems:"center"}}>
        <Button
          variant="contained"
          color="primary"
          endIcon={<ConnectWithoutContactIcon />}
          onClick={pingServer}
        >
          {
            isLoad ? <CircularProgress size="30px" color="inherit" /> : "PING"
          }
        </Button>
        
      </Box>
      {
        logs.map((log: any) => {
          return (
            <div
              style={{
                marginTop: "8px"
              }}
            >
              <div>
                Log ID: {log.id}
              </div>
              <div>
                Message: {log.message}
              </div>
              <div>
                Created At: {moment(log.createdAt).fromNow()}
              </div>
              <hr />
            </div>
          )
        })
      }

    </div>
  );
}
