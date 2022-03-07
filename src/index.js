import _ from "lodash";
import "./style.css";
import Icon from "./icon.jpeg";
import Notes from "./data.csv";
import Data from "./data.xml";

function component() {
  const element = document.createElement("div");

  // _ lodash
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);
  console.log("Data: ", Data);
  console.log("Notes: ", Notes);

  return element;
}

document.body.appendChild(component());
