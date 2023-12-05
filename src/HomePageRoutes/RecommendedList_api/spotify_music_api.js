import { Buffer } from "buffer";
import axios from "axios";
import React, { useState } from "react";

export default function SpotifyMusicApi() {
  const [state, setState] = useState(0);
  const clientId = "aa82bc0c6f594c19a0fd207dade98723";
  const clientSecret = "d1a49d9ecf024dd686daa7e697b33735";
  let playlist_id = "6DjPVCftL0PANfY69Wh7ux";
  const typeUrl = `https://api.spotify.com/v1/playlists/${playlist_id}`;

  const serialize = function (obj) {
    var str = [];
    for (var p in obj) {
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    }
    return str.join("&");
  };

  axios
    .post(
      "https://accounts.spotify.com/api/token",
      serialize({
        grant_type: "client_credentials",
      }),
      {
        headers: {
          Authorization:
            "Basic " +
            new Buffer.from(clientId + ":" + clientSecret).toString("base64"),
        },

        json: true,
      }
    )

    .then((res) => {
      fetch(typeUrl, {
        method: "GET",
        headers: { Authorization: `Bearer ${res.data.access_token}` },
      })
        .then((response) => response.json())
        .then((musicList) => {
          const show = musicList.tracks.items;
          setState(show);
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
  console.log(state);
  return <div>{JSON.stringify(state, null, 2)}</div>;
}

//   async function fetchSpotifyMusicList(token) {
//     const response = await fetch(typeUrl, {
//       method: "GET",
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     const data = await response.json();
//     const musicList = data.tracks.map((track) => track.name);
//     return musicList;
//   }
