import example from "./example";
import "./styles/main.scss";
import inProgressImg from "./assets/in-progress-error.svg";

console.log(example);

const inProgress = document.getElementById("in-progress");
inProgress.src = inProgressImg;
