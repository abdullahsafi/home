// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Abdullah",
  middleName: "",
  lastName: "Safi",
  message: " Passionate about people and technology",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/abdullahsafi",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/abdullah-safi-52381a177/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/abz.safi/",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/profile.php?id=100024636103941",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/headshot3.jpg"),
  imageSize: 375,
  message1: "👋 Hi, I’m Abdullah Safi. Nice to meet you.",
  message2: "",
  message3: "I made the decision to go to the University of Sydney and study two degrees majoring in Data Science and Medical Science with the aspiration of combining the skills from both disciplines and helping people in the community by enhancing health outcomes. This site documents some of the projects I'm currently working on.",
  message4: "",
  message5: "📫 Feel free to email me: abdullah.safi@outlook.com.au or send a message on Linkedin!",
  resume: "",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recently Updated Repositories",
  gitHubUsername: "abdullahsafi", //i.e."johnDoe12Gh"
  specificRepos: [],
  reposLength: 6,
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/headshot.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/headshot.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: false,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 100 },
    { name: "SQL", value: 100 },
    { name: "R", value: 100 },
    { name: "Machine Learning/AI", value: 100 },
    { name: "Java", value: 100 },
    { name: "Databases", value: 100 },
    { name: "HTML/CSS", value: 100 },
    { name: "Research", value: 100 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 100 },
    { name: "Collaboration", value: 100 },
    { name: "Positivity", value: 100 },
    { name: "Adaptability", value: 100 },
    { name: "Problem Solving", value: 100 },
    { name: "Empathy", value: 100 },
    { name: "Organization", value: 100 },
    { name: "Creativity", value: 100 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Please feel free to email me at",
  email: "abdullah.safi@outlook.com.au",
};

const experiences = {
  show: false,
  heading: "Experience",
  data: [
    {
      role: 'Data Science Internship',// Here Add Company Name
      companylogo: require('../assets/img/iag.png'),
      date: 'Jun 2019 – Aug 2019',
    },
    {
      role: 'Founder / Mobile Application Developer',
      companylogo: require('../assets/img/cc3.png'),
      date: 'Sep 2019 – Present',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: true,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
