import React, { useEffect, useState } from "react";
import { scoreobj } from "../Test/Scoreobj";
let type = "";
export function CheckType() {
  console.log(scoreobj);
  if (type.length > 3) {
    return type;
  }
  type += scoreobj.E >= scoreobj.I ? "E" : "I";
  type += scoreobj.S >= scoreobj.N ? "S" : "N";
  type += scoreobj.T >= scoreobj.F ? "T" : "F";
  type += scoreobj.J >= scoreobj.P ? "J" : "P";
  console.log(type);
}
