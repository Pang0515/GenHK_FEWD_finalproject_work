import ESFJ from "./image/ESFJ.png";
import ESFP from "./image/ESFP.png";
import ESTJ from "./image/ESTJ.png";
import ESTP from "./image/ESTP.png";
import ENFJ from "./image/ENFJ.png";
import ENFP from "./image/ENFP.png";
import ENTJ from "./image/ENTJ.png";
import ENTP from "./image/ENTP.png";
import INFJ from "./image/INFJ.png";
import INFP from "./image/INFP.png";
import INTJ from "./image/INTJ.png";
import INTP from "./image/INTP.png";
import ISFJ from "./image/ISFJ.png";
import ISFP from "./image/ISFP.png";
import ISTJ from "./image/ISTJ.png";
import ISTP from "./image/ISTP.png";

export default function GetPic(showingtype) {
  if (showingtype === "ENFJ") {
    return ENFJ;
  } else if (showingtype === "ENFP") {
    return ENFP;
  } else if (showingtype === "ENTJ") {
    return ENTJ;
  } else if (showingtype === "ENTP") {
    return ENTP;
  } else if (showingtype === "ESFJ") {
    return ESFJ;
  } else if (showingtype === "ESFP") {
    return ESFP;
  } else if (showingtype === "ESTJ") {
    return ESTJ;
  } else if (showingtype === "ESTP") {
    return ESTP;
  } else if (showingtype === "INFJ") {
    return INFJ;
  } else if (showingtype === "INFP") {
    return INFP;
  } else if (showingtype === "INTJ") {
    return INTJ;
  } else if (showingtype === "INTP") {
    return INTP;
  } else if (showingtype === "ISFJ") {
    return ISFJ;
  } else if (showingtype === "ISFP") {
    return ISFP;
  } else if (showingtype === "ISTJ") {
    return ISTJ;
  } else if (showingtype === "ISTP") {
    return ISTP;
  }
}
