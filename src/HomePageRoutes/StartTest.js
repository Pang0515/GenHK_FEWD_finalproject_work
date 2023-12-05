import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { styled } from "@mui/material/styles";
import "./StartTest.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";  
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";

const MyButton = styled(Button)({
  background: "#637802",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px grey",
  color: "white",
  height: 48,
  padding: "0 30px",
});

export default function StartTest() {
  return (
    <div className="StartTest">
      <h1>16 Personality Types</h1>
      <ButtonGroup variant="string" aria-label="text button group" size="large">
        <Link to={`/`}>
          <Button startIcon={<HomeOutlinedIcon />}>Home</Button>
        </Link>
        <Link to={`/YourResult`}>
          <Button startIcon={<AssessmentOutlinedIcon />}>Your Result</Button>
        </Link>
        <Link to={`/PersonalityTypes`}>
          <Button startIcon={<ListAltOutlinedIcon />}>Personality Types</Button>
        </Link>
      </ButtonGroup>
      <h1>What is your Personality?</h1>
      <h1>Let's try MBTI Test!</h1>
      <Link to={`/Test`}>
        <MyButton size="large" endIcon={<ArrowForwardIcon />}>
          Start
        </MyButton>
      </Link>
    </div>
  );
}
