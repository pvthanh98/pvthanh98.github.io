import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {
  CalendarToday,
  Person,
  Phone,
  Email
} from '@mui/icons-material';

export function MyCV() {
  return (
    <Container>
      <Grid
        container
        style={{
          marginTop: "8px",
        }}
      >
        <Grid
          item
          xs={5}
          style={{
            paddingRight:"18px"
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
              src="/avt.jpeg"
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
            marginTop:"8px"
          }}>
              <ListItem disablePadding={true} style={{
                padding:"4px"
              }}>
                <ListItemIcon style={{fontSize:14}}>
                  <CalendarToday />
                </ListItemIcon>
                <ListItemText
                  primary="22-08-1998"
                  style={{
                    padding:0,
                    margin:0
                  }}
                />
              </ListItem>
              <ListItem disablePadding={true} style={{
                padding:"4px"
              }}>
                <ListItemIcon style={{fontSize:14}}>
                  <Person />
                </ListItemIcon>
                <ListItemText
                  primary="Nam"
                  style={{
                    padding:0,
                    margin:0
                  }}
                />
              </ListItem>
              <ListItem disablePadding={true} style={{
                padding:"4px"
              }}>
                <ListItemIcon style={{fontSize:14}}>
                  <Phone />
                </ListItemIcon>
                <ListItemText
                  primary="+8486940591"
                />
              </ListItem>
              <ListItem disablePadding={true} style={{
                padding:"4px"
              }}>
                <ListItemIcon style={{fontSize:14}}>
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
            fontWeight:"bold"
          }}>
            Main Skills:
          </Typography>
          <Typography>
            - NodeJS (NestJS) <br/>
            - Python (Django RestFramework)  <br/>
            - English (Learn and read from English Documents, or videos)
          </Typography>

          <Typography style={{
            fontWeight:"bold"
          }}>
            Other Skills:
          </Typography>
          <Typography>
            - NodeJS (ExpressJS) <br/>
            - ReactJS  <br/>
            - React Native  <br/>
            - Docker <br/>
            - Java
          </Typography>
        </Grid>
        <Grid item xs={7}>
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
            I have common knowledge of developing websites in both Font-End or
            Back-End. However, my main skills are working in Back-End roles with
            NodeJS (NestJS) and Django RestFramework (Python). With the total of
            1.5 years experiencing in the IT Jobs, I am confident to analysis,
            design and make APIs for the particular systems such as E-commerce,
            Educated Management or Employee Management. Besides, I have
            immediate skills in using Docker and ReactJS.
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
          <ul style={{margin:0, padding:"0px 0px 0px 16px"}}>
            <li>
              Major: <b>Information Technology</b>
            </li>
            <li>
              GPA: <b style={{color:"#870101"}}>3.17</b>
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
            fontSize:"20px",
            fontWeight:"bold"
          }}>
            Back-End Developer (01/04/2021 - Present)
          </Typography>
          <Typography>
            Company: Appcore <br/>
            - Build APIs with Django RestFramework and NodeJs (Nest) <br/>
            - Analysis and design the database and system
          </Typography>

          <Typography style={{
            fontSize:"20px",
            fontWeight:"bold"
          }}>
            Full-Stack Developer (01/07/2020 - 06/12/2020)
          </Typography>
          <Typography>
            Company: TMA Solutions (HCM City) <br/>
            - Internship and work part-time <br/>
            - Build APIs with NodeJs (ExpressJS) <br/>
            - Make UI and web font-end with ReactJS <br/>
            - Get <b style={{color:"#b10202"}}>GOOD</b> final grade  TMA certificate
          </Typography>
          <hr/>
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
            For the privacy of companies I've worked, I just described a little bit about what I've done. <br/>
            - Make a real-time website with <b style={{backgroundColor:"green", color:"white"}}>ReactJS</b> and <b style={{backgroundColor:"green", color:"white"}}>NodeJS</b>to control IoT devices <br/>
            - Make APIs for a project  (<b style={{backgroundColor:"green", color:"white"}}>NodeJS</b>) that allow tutors and students can ask and answer the question in study. Besides, they can chat with each other <br/>
            - Make system of Oto rescuing with <b style={{backgroundColor:"green", color:"white"}}>ReactJS</b>, <b style={{backgroundColor:"green", color:"white"}}>React Native</b> and <b style={{backgroundColor:"green", color:"white"}}>NodeJS</b> that allow business to register their services and the user to look for the services if their oto have prolems <br/>
            - Make APIs for a project that is a place for parents can teach students at home (<b style={{backgroundColor:"green", color:"white"}}>Django RestFramework</b>) <br/>
            - Make APIs for a project that is like a e-wallet (<b style={{backgroundColor:"green", color:"white"}}>Django RestFramework</b>) <br/>
            - Make APIs for a project that is like a wallet (<b style={{backgroundColor:"green", color:"white"}}>Django RestFramework</b>) <br/>
          </Typography>
          
        </Grid>
        <Grid xs={12}>
          <Typography style={{
            marginTop:"16px"
          }}>
            To save my CV, please click on the <b>Browser menu</b> at the top right corner, then click on <b>Print</b> item, then click on <b>Save As PDF</b> <br/>
            Thank you for viewing my profile.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
