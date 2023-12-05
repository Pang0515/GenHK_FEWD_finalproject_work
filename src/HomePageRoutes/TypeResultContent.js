import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
// import SpotifyMusicApi from "./RecommendedList_api/spotify_music_api";

export default function TypeResultContent({ showingtype }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const handleTabChange = (e, tabIndex) => {
    console.log(tabIndex);
    setCurrentTabIndex(tabIndex);
  };
  return (
    <React.Fragment>
      <Tabs value={currentTabIndex} onChange={handleTabChange}>
        <Tab label="Features" />
        <Tab label="Strengths & Weaknesses" />
        <Tab label="Suitable Career" />
        <Tab label="Recommended List" />
      </Tabs>
      {currentTabIndex === 0 && (
        <Box sx={{ p: 0 }}>
          <Typography variant="h5"></Typography>
          <Typography variant="h5">{showingtype.features}</Typography>
        </Box>
      )}
      {currentTabIndex === 1 && (
        <Box sx={{ p: 0 }} style={{ display: "flex", gap: "20px" }}>
          <div className="strengths">
            <Typography variant="h5" style={{ margin: "20px 0" }}>
              Strengths
            </Typography>
            <Typography variant="h5">
              <ul>
                {showingtype.strengths.map((strengthsArr) => (
                  <li>{strengthsArr}</li>
                ))}
              </ul>
            </Typography>
          </div>
          <div className="weaknesses">
            <Typography variant="h5" style={{ margin: "20px" }}>
              Weaknesses
            </Typography>
            <Typography variant="h5">
              {" "}
              <ul>
                {showingtype.weaknesses.map((weaknessesArr) => (
                  <li>{weaknessesArr}</li>
                ))}
              </ul>
            </Typography>
          </div>
        </Box>
      )}
      {currentTabIndex === 2 && (
        <Box sx={{ p: 0 }}>
          <Typography variant="h5"></Typography>
          <Typography variant="h5">{showingtype.suitableCareer}</Typography>
        </Box>
      )}
      {currentTabIndex === 3 && (
        <Box sx={{ p: 0 }}>
          <Typography variant="h5"></Typography>
          {/* <Typography variant="p">{showingtype.recommendedList}</Typography> */}
          <Typography variant="h5">
            {/* <SpotifyMusicApi /> */}
            <iframe
              style={{ borderRadius: "12px" , margin : "20px"}}
              src={`https://open.spotify.com/embed/playlist/${showingtype.playlistId}?utm_source=generator`}
              
              width="500px"
              height="352"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </Typography>
        </Box>
      )}
    </React.Fragment>
  );
}
