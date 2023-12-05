import { Link } from "react-router-dom";
import MbtiResult from "./Result/MbitResult";
 import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { styled } from "@mui/material/styles";
 

const MyButton = styled(Button)({
  background: "#637802",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px grey",
  color: "white",
  height: 48,
  padding: "0 30px",
});

export default function TestResult() {
  return (
    <div className="TestResult">
      <MbtiResult />
      <Link to={`/YourResult`}>
        <MyButton variant="contained" size="large" endIcon={<ArrowForwardIcon />}>
          Show More
        </MyButton>
      </Link>
    </div>
  );
}
