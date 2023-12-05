import ProgressBar from "react-bootstrap/ProgressBar";
import "@fontsource/roboto/400.css";
import "./MbtiResult.css";
import { scoreobj } from "../Test/Scoreobj";
import { CheckType } from "./CheckType";
import GetPic from "./GetPic";
import "bootstrap/dist/css/bootstrap.css";
import Stack from "@mui/material/Stack";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { TwitterShareButton, TwitterIcon ,FacebookShareButton , FacebookIcon} from "react-share";

function calce() {
  return Math.round((scoreobj.E / 11) * 100);
}

function calci() {
  return Math.round((scoreobj.I / 11) * 100);
}

function calcn() {
  return Math.round((scoreobj.N / 14) * 100);
}

function calcs() {
  return Math.round((scoreobj.S / 14) * 100);
}

function calct() {
  return Math.round((scoreobj.T / 14) * 100);
}

function calcf() {
  return Math.round((scoreobj.F / 14) * 100);
}

function calcj() {
  return Math.round((scoreobj.J / 11) * 100);
}

function calcp() {
  return Math.round((scoreobj.P / 11) * 100);
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "#1A2027"
      : "#fff sx={{backgroundColor: 'primary.dark'}}",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const theme = createTheme({
  palette: {
    primary: {
      main: "#76ff03",
    },
  },
});

export default function TestResult() {
  return (
    <div className="MbtiResult">
      <Box sx={{ flexGrow: 1 }}>
        <div className="main">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Item
                sx={{ backgroundColor: "#8fad00", border: "1px solid grey" }}
              >
                <p className="title">Your result is:</p>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item
                sx={{ backgroundColor: "#8fad00", border: "1px solid grey" }}
              >
                <img src={GetPic(CheckType())} alt={GetPic(CheckType())} />
                <p>{CheckType()}</p>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item
                sx={{ backgroundColor: "#8fad00", border: "1px solid grey" }}
              >
                <ProgressBar className="top">
                  <ProgressBar
                    className="e"
                    now={calce()}
                    label={`${calce()}%`}
                  />
                  <ProgressBar
                    variant="danger"
                    now={calci()}
                    label={`${calci()}%`}
                  />
                </ProgressBar>
                <div className="type">
                  <h6>Extrovert</h6>
                  <h6>Introvert</h6>
                </div>
                <ProgressBar>
                  <ProgressBar
                    className="n"
                    now={calcs()}
                    label={`${calcs()}%`}
                  />
                  <ProgressBar
                    variant="success"
                    now={calcn()}
                    label={`${calcn()}%`}
                  />
                </ProgressBar>
                <div className="type">
                  <h6>Intuition</h6>
                  <h6>Sensing</h6>
                </div>
                <ProgressBar>
                  <ProgressBar
                    className="f"
                    now={calct()}
                    label={`${calct()}%`}
                  />
                  <ProgressBar
                    variant="warning"
                    now={calcf()}
                    label={`${calcf()}%`}
                  />
                </ProgressBar>
                <div className="type">
                  <h6>Feeling</h6>
                  <h6>Thinking</h6>
                </div>
                <ProgressBar className="bottom">
                  <ProgressBar
                    className="j"
                    now={calcj()}
                    label={`${calcj()}%`}
                  />
                  <ProgressBar
                    variant="info"
                    now={calcp()}
                    label={`${calcp()}%`}
                  />
                </ProgressBar>
                <div className="typebottom">
                  <h6>Judging</h6>
                  <h6>Perceiving</h6>
                </div>
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Stack direction="row" spacing={2}>
                <ThemeProvider theme={theme}></ThemeProvider>
              </Stack>
            </Grid>
          </Grid>
        </div>
      </Box>
      <h4>Share</h4>
      <div className="share">
        <TwitterShareButton
          url="https://www.youtube.com/watch?v=xvFZjo5PgG0&"
          title="let people know what type are you!"
          className="Demo__some-network__share-button"
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <FacebookShareButton
          url="https://www.youtube.com/watch?v=xvFZjo5PgG0&"
          className="Demo__some-network__share-button"
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </div>
    </div>
  );
}
