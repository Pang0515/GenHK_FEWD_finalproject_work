// import { useState } from "react";
import data from "./data.json";
import { useParams } from "react-router-dom";
import React from "react";
import TypeResultContent from "./TypeResultContent";
import GetPic from "./Result/GetPic";
import "./TypeResult.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Link } from "react-router-dom";



export default function TypeResult(props) {
  const params = useParams();

  const clickedtype = data.typeList.find(({ type }) => type === params.id);
  // function TypePic(showingtype) {
  //   return (
  //     <div className="type">
  //       <img src={showingtype.src} alt={showingtype.type} />
  //       <p>{showingtype.type}</p>
  //     </div>
  //   );
  // }

  // function TypeBar(showingtype) {
  //   return (
  //     <div className="typeBar">
  //       <p>{showingtype.type}</p>
  //       typebar
  //     </div>
  //   );
  // }

  return (
    <>
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
      <div
        className="TypeResult"
        style={{ display: "flex", gap: "10px", width: "100%" }}
      >
        <div className="typeResult-left" >
          <div className="type">
            <img src={GetPic(clickedtype.type)} alt={clickedtype.type} />
          </div>
          <div className="typeBar">{clickedtype.type}</div>
        </div>
        <div className="typeResult-right" >
          <TypeResultContent showingtype={clickedtype} />
        </div>
      </div>
    </>
  );
}

// {/* <React.Fragment>
// <Tabs value={currentTabIndex} onChange={handleTabChange}>
//   <Tab label="Features" />
//   <Tab label="Strengths & Weaknesses" />
//   <Tab label="Suitable Career" />
//   <Tab label="Recommended List" />
// </Tabs>
// TAB 1 Contents
// {currentTabIndex === 0 && (
//   <Box sx={{ p: 3 }}>
//     <Typography variant="h5"></Typography>
//     <Typography variant="p">{clickedtype.features}</Typography>
//   </Box>
// )}
// TAB 2 Contents
// {currentTabIndex === 1 && (
//   <Box sx={{ p: 3 }}>
//     <Typography variant="h5"></Typography>
//     <Typography variant="p">
//       {clickedtype.strengthsWeaknesses}
//     </Typography>
//   </Box>
// )}
// TAB 3 Contents
// {currentTabIndex === 2 && (
//   <Box sx={{ p: 3 }}>
//     <Typography variant="h5"></Typography>
//     <Typography variant="p">{clickedtype.suitableCareer}</Typography>
//   </Box>
// )}
// TAB 4 Contents
// {currentTabIndex === 3 && (
//   <Box sx={{ p: 3 }}>
//     <Typography variant="h5"></Typography>
//     <Typography variant="p">{clickedtype.recommendedList}</Typography>
//   </Box>
// )}
// </React.Fragment> */}

// export default function TypeResult(props) {
//   const params = useParams();
//   const clickedtype = data.typeList.find(({ type }) => type === params.id);
//   const [showingContent, setShowingContent] = useState("features");

//   function featuresBtnClick() {
//     setShowingContent("features");
//   }

//   function strengthsWeaknessesBtnClick() {
//     setShowingContent("strengthsWeaknesses");
//   }

//   function suitableCareerBtnClick() {
//     setShowingContent("suitableCareer");
//   }

//   function recommendedListBtnClick() {
//     setShowingContent("recommendedList");
//   }

//   return (
//     <div
//       className="TypeResult"
//       style={{ display: "flex", gap: "10px", width: "100%" }}
//     >
//       <div className="typeResult-left" style={{ width: "30%", gap: "10px" }}>
//         <div className="type">
//           <img src={showingtype.src} alt={showingtype.type} />
//         </div>
//         <div className="typeBar">typebar</div>
//       </div>
//       <div className="typeResult-right" style={{ width: "70%", gap: "10px" }}>
//         <button id="features-btn" onClick={() => featuresBtnClick()}>
//           Features
//         </button>
//         <button
//           id="strengthsWeaknesses-btn"
//           onClick={() => strengthsWeaknessesBtnClick()}
//         >
//           Strengths & Weaknesses
//         </button>
//         <button
//           id="suitableCareer-btn"
//           onClick={() => suitableCareerBtnClick()}
//         >
//           Suitable Career
//         </button>
//         <button
//           id="recommendedList-btn"
//           onClick={() => recommendedListBtnClick()}
//         >
//           Recommended List
//         </button>

//         <div className="content">
//           {clickedtype && clickedtype[showingContent]}
//         </div>
//       </div>
//     </div>
//   );
// }
