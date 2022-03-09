import Resume from "./resume.js";

const myResume = new Resume(
"resume1",
"Jesus Tello / Developer",
"Jesus Tello",
"../pictures/logo.png",
"add here",
"add 2 here",
"add 3 here",
"add 4 here"
);

const myResume2 = new Resume(
    "resume1",
    "Jesus Tello / Developer",
    "Jesus Tello",
    "../pictures/logo.png",
    "add here",
    "add 2 here",
    "add 3 here",
    "add 4 here"
    );

const everydayResume = [myResume, myResume2];
export default everydayResume;