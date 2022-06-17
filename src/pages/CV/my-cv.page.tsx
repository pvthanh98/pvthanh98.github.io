import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { Button, Typography } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ImageSource from '../../assets/images/280141999_1666459857024930_4547795600855370134_n.jpg';
import styles from './cv.module.css';

import {
  CalendarToday,
  Person,
  Phone,
  Email
} from '@mui/icons-material';
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { useState } from "react";

export function MyCV() {
  const [xsLeftColumnValue, setXsLeftColumnValue] = useState(12);
  const [xsRightColumnValue, setXsRightColumnValue] = useState(12);
  const [isMobileMode, setisMobileMode] = useState(true);
  const [boxShadowRightValue, setBoxShadowRightValue] = useState(5);
  const [boxShadowBottomValue, setBoxShadowBottomValue] = useState(5);

  const handleChangeMode = () => {
    if (isMobileMode) {
      //set print mode
      setXsLeftColumnValue(5);
      setXsRightColumnValue(7);
      setBoxShadowRightValue(0);
      setBoxShadowBottomValue(0);
    } else {
      setXsLeftColumnValue(12);
      setXsRightColumnValue(12);
      setBoxShadowRightValue(5);
      setBoxShadowBottomValue(5);
    }
    setisMobileMode(!isMobileMode);
  }

  return (
    <Box
      sx={{
        backgroundColor: "#173948",
        minHeight: "1200px",
        '@media (min-width: 600px)': {
          padding: '32px',
        },
        '@media (max-width: 590px)': {
          padding: '16px',
        },
      }}
      className={styles.boxContainer}
    >
      <Container
        sx={{
          backgroundColor: "#f1f1f1",
          minHeight: `1200px`,
          boxShadow: `${boxShadowRightValue}px ${boxShadowBottomValue}px #b4b4b4`
        }}

      >
        <Grid
          container
        >
          <Grid
            item
            xs={xsLeftColumnValue}
            md={5}
            style={{
              padding: "8px"
            }}
          >
            <div style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "40px"
            }}>
              <Avatar
                src={ImageSource}
                sx={{ width: 200, height: 200 }}
              />
              <Typography
                variant="h5"
                style={{
                  marginTop: "8px",
                }}
              >
                PHAN VĂN THÀNH
              </Typography>
              <Typography>Backend Developer</Typography>
            </div>

            <Typography
              style={{
                marginTop: "16px",
                color: "#0e4608",
                fontWeight: "bold",
                fontSize: "24px",
              }}
            >
              CONTACT
            </Typography>

            <List disablePadding={true} style={{
              marginTop: "8px"
            }}>
              <ListItem disablePadding={true} style={{
                padding: "4px"
              }}>
                <ListItemIcon style={{ fontSize: 14 }}>
                  <CalendarToday />
                </ListItemIcon>
                <ListItemText
                  primary="22-08-1998"
                  style={{
                    padding: 0,
                    margin: 0
                  }}
                />
              </ListItem>
              <ListItem disablePadding={true} style={{
                padding: "4px"
              }}>
                <ListItemIcon style={{ fontSize: 14 }}>
                  <Person />
                </ListItemIcon>
                <ListItemText
                  primary="Nam"
                  style={{
                    padding: 0,
                    margin: 0
                  }}
                />
              </ListItem>
              <ListItem disablePadding={true} style={{
                padding: "4px"
              }}>
                <ListItemIcon style={{ fontSize: 14 }}>
                  <Phone />
                </ListItemIcon>
                <ListItemText
                  primary="+8486940591"
                />
              </ListItem>
              <ListItem disablePadding={true} style={{
                padding: "4px"
              }}>
                <ListItemIcon style={{ fontSize: 14 }}>
                  <Email />
                </ListItemIcon>
                <ListItemText
                  primary="pvthanh98it@gmail.com"
                />
              </ListItem>
            </List>
            <hr />

            <Typography
              style={{
                marginTop: "16px",
                color: "#0e4608",
                fontWeight: "bold",
                fontSize: "24px",
              }}
            >
              SKILLS
            </Typography>
            <Typography style={{
              fontWeight: "bold",
              marginTop: "16px"
            }}>
              Main Skills:
            </Typography>
            <Typography>
              - NodeJS (NestJS/ExpressJS) <br />
              - Python (Django RestFramework)  <br />
            </Typography>

            <Typography style={{
              fontWeight: "bold",
              marginTop: "16px"
            }}>
              Other Skills:
            </Typography>
            <Typography>
              - English (communicate with foreign customers, learn and read from English Documents, or videos, communicate) <br />
              - ReactJS  <br />
              - React Native  <br />
              - Docker <br />
              - Java <br />
              - OOP <br />
            </Typography>
          </Grid>
          <Grid
            item
            xs={xsRightColumnValue}
            md={7}
            sx={{
              padding: "16px 8px 16px 8px",
            }}
          >
            <Typography
              style={{
                color: "#0e4608",
                fontWeight: "bold",
                fontSize: "24px",
              }}
            >
              SUMMARY
            </Typography>
            <Typography align="justify" style={{}}>
              As a NodeJs Backend Developer, my reponsibility is to design, orgainize and build infastructure of the system like
              Resful APIs, database and the application flows. I can work well on both two common web frameworks such as ExpressJs and NestJs.
              I have been experiencing 2 years on developing websites in Back-End and Front-End (ReactJs) as well.
              {/* I have common knowledge of developing websites in both Font-End or
            Back-End. However, my main skills are working in Back-End roles with
            NodeJS (NestJS) and Django RestFramework (Python). With the total of
            1.5 years experiencing in the IT Jobs, I am confident to analysis,
            design and make APIs for the particular systems such as E-commerce,
            Educated Management or Employee Management. Besides, I have
            immediate skills in using Docker and ReactJS. */}
            </Typography>

            <hr />

            <Typography
              style={{
                marginTop: "16px",
                color: "#0e4608",
                fontWeight: "bold",
                fontSize: "24px",
              }}
            >
              EDUCATION
            </Typography>
            <Typography
              align="justify"
              style={{
                fontWeight: "bold",
              }}
            >
              Can Tho University (2016-2021)
            </Typography>
            <ul style={{ margin: 0, padding: "0px 0px 0px 16px" }}>
              <li>
                Major: <b>Information Technology</b>
              </li>
              <li>
                GPA: <b style={{ color: "#870101" }}>3.17</b>
              </li>
            </ul>
            <hr />

            <Typography
              style={{
                marginTop: "16px",
                color: "#0e4608",
                fontWeight: "bold",
                fontSize: "24px",
              }}
            >
              EXPERIENCE
            </Typography>
            <Typography style={{
              fontSize: "20px",
              fontWeight: "bold"
            }}>
              Software Engineer (04/05/2021 - Present)
            </Typography>
            <Typography>
              Company: <strong style={{color:"#39a139"}}>Nashtech</strong> <br />
              - Analysis and design the database and system <br />
              - Build APIs and NodeJs (Nest/Express) <br />
              - Code as a Back-End Developer
              - Code as a Font-End Developer
            </Typography>

            <Typography style={{
              fontSize: "20px",
              fontWeight: "bold"
            }}>
              Back-End Developer (01/04/2021 - 15/04/2022)
            </Typography>
            <Typography>
              Company: <strong>Appcore</strong> <br />
              - Build APIs with Django RestFramework and NodeJs (Nest) <br />
              - Analysis and design the database and system
            </Typography>

            <Typography style={{
              fontSize: "20px",
              fontWeight: "bold"
            }}>
              Full-Stack Developer (01/07/2020 - 06/12/2020)
            </Typography>
            <Typography>
              Company: <strong>TMA Solutions</strong> <br />
              - Internship and work part-time <br />
              - Build APIs with NodeJs (ExpressJS) <br />
              - Make UI and web font-end with ReactJS <br />
              - Get <b style={{ color: "#b10202" }}>GOOD</b> final grade  TMA certificate
            </Typography>
            <hr />
            <Typography
              style={{
                marginTop: "16px",
                color: "#0e4608",
                fontWeight: "bold",
                fontSize: "24px",
              }}
            >
              PROJECTS
            </Typography>
            <Typography>
              For the privacy of companies I've worked, I just described a little bit about what I've done. <br />
              - Make a real-time website with <b style={{ backgroundColor: "green", color: "white" }}>ReactJS</b> and <b style={{ backgroundColor: "green", color: "white" }}>NodeJS</b>to control IoT devices <br />
              - Make APIs for a project  (<b style={{ backgroundColor: "green", color: "white" }}>NodeJS</b>) that allow tutors and students can ask and answer the question in study. Besides, they can chat with each other <br />
              - Make system of Oto rescuing with <b style={{ backgroundColor: "green", color: "white" }}>ReactJS</b>, <b style={{ backgroundColor: "green", color: "white" }}>React Native</b> and <b style={{ backgroundColor: "green", color: "white" }}>NodeJS</b> that allow business to register their services and the user to look for the services if their oto have prolems <br />
              - Make APIs for a project that is a place for parents can teach students at home (<b style={{ backgroundColor: "green", color: "white" }}>Django RestFramework</b>) <br />
              - Make APIs for a project that is like a e-wallet (<b style={{ backgroundColor: "green", color: "white" }}>Django RestFramework</b>) <br />
              - Make APIs for a project that is like a wallet (<b style={{ backgroundColor: "green", color: "white" }}>Django RestFramework</b>) <br />
            </Typography>

          </Grid>
          <Grid xs={12} md={12} sx={{ marginBottom: "16px" }}>
            <hr style={{ marginTop: "16px" }} />
            {
              true && (
                <Typography
                  sx={{
                    marginTop: "16px",
                    fontSize: "12px",
                    fontStyle: "italic",

                  }}
                >
                  To save my CV: <br />
                  - Use browser on pc<br />
                  - Switch to print mode
                  {' '}
                  <Button
                    variant="contained"
                    color="success"
                    size="small"
                    sx={{
                      fontSize: "8px"
                    }}
                    onClick={handleChangeMode}
                  >
                    {
                      isMobileMode ? "PRINT MODE" : "MOBILE MODE"
                    }
                  </Button> <br />
                  - Click on the <b>browser menu</b> at the top right corner <br />
                  - Click on <b>Print</b> item <br />
                  - Click <b>Save As PDF</b> <br />
                  Thank you for viewing my profile. <Link to="/">Go to home page</Link>
                </Typography>
              )
            }
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
