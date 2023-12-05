import { Link } from "react-router-dom";
import data from "./data.json";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import "./PersonalityTypes.css";
import GetPic from "./Result/GetPic.js"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";

export default function PersonalityTypes() {
  return (
    <div className="PersonalityTypes">
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
      <div className="result-img"></div>
      <div className="result-score"></div>
      <div className="sidebar">
        <ul
          style={{
            listStyle: "none",
            border: "1px solid",
          }}
        >
          {data.typeList.map((typeobj) => (
            <li
              key={typeobj.type}
              style={{ width: "12.5%", float: "left", border: "5px" }}
            >
              <Link to={`/PersonalityTypes/${typeobj.type}`}>
                <ButtonGroup variant="text" aria-label="text button group">
                  <Button>
                    <img src={GetPic(typeobj.type)} alt={typeobj.type} />
                    {typeobj.type}
                  </Button>
                </ButtonGroup>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
