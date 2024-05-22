// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Junwei Hou",
};
const background = {
  // Options: Snow or Particle
  type: "Snow",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    "Three years of experience. <br>Two years as Front-end Developer, one year as back-end Developer. <br>Currently, I have taken on the responsibility of leading a front-end team in a development project.",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "HTML5",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    // svg: '',
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    // svg: '',
    faClass: "fab fa-js",
  },
  {
    name: "SASS",
    // svg: '',
    faClass: "fab fa-sass",
  },
  {
    name: "Node",
    // svg: '',
    faClass: "fab fa-node",
  },
  {
    name: "Database",
    // svg: '',
    faClass: "fas fa-database",
  },
  {
    name: "Jenkins",
    // svg: '',
    faClass: "fab fa-jenkins",
  },
  {
    name: "Docker",
    // svg: '',
    faClass: "fab fa-docker",
  },
  {
    name: "Git",
    // svg: '',
    faClass: "fab fa-git",
  },
  {
    name: "React",
    // svg: '',
    faClass: "fab fa-react",
  },
  {
    name: "Vue.js",
    // svg: '',
    faClass: "fab fa-vuejs",
  },
];
// Edit your projects, its name, your framework used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Company Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "BeCool",
    framework: ["UniApp"],
    posterImgUrl:
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/beool_cover.jpg",
    hasVideo: true,
    direction: "vertical",
    carousel: [
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/becool/1.jpg",
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/becool/2.jpg",
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/becool/3.jpg",
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/becool/4.jpg",
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/becool/5.jpg",
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/becool/6.jpg",
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/becool/7.jpg",
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/becool/8.jpg",
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/becool/9.jpg",
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/becool/10.jpg",
    ],
    videoUrl:
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/video/becool_video.mp4",
    description:
      "BeCool is a social app utilizing AI-generated image technology. Users can upload photos or take pictures, which are then processed through a stable diffusion interface to generate images. After publishing, these images can be viewed, liked, commented on, and shared by other users. Furthermore, users can follow each other and become friends, enabling deeper interactions such as chatting. <br>Recently, new features have been developed, such as the 'Pair' function, which allows users' photos to be merged together, combining images taken in different locations into one scene.",
    twoWords: "AI Social",
    width: "50%",
    applications: "App WX-miniProgram",
    client: "In-house project",
    position: "Front-end Leader",
    frontend: "Uniapp",
    backend: "Php Symphony",
    database: "PostgreSQL",
    link: "https://aibecool.cn/",
    responsibility:
      "Responsible for leading a front-end team (3 members), coordinating with backend and product requirements, and handling challenging issues in front-end development. Admin console interface in Frontend",
    keyChallenges: [
      "Canvas Photo Merging:Implementing the algorithm to seamlessly merge dual-person photos using the Canvas element.",
      "CSS Functionality for Photo Dragging and Visibility:Creating functionality in CSS for dragging and toggling the visibility of front and back photos, ensuring a smooth user experience.",
      "Encapsulate common components and methods to ensure a concise and consistent code style across the team's development efforts.",
      "Deploying Android and iOS applications for production.",
    ],
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "PAcS",
    framework: ["REACT NODEJS NEST"],
    posterImgUrl:
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/pacs/2.jpg",
    hasVideo: false,
    carousel: [
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/pacs/1.jpg",
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/pacs/3.jpg",
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/pacs/4.jpg",
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/pacs/5.jpg",
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/pacs/6.jpg",
    ],
    direction: "horizontal",
    twoWords: "Plasma Collection",
    description:
      "This is a system designed to provide blood collection functionality for CSL Plasma in the United States. It includes blood collection procedures, registration and appointment scheduling for blood collection personnel, fee settlement, equipment allocation, number calling, and other services. ",
    applications: "Admin System",
    client: "CLS Plasma",
    position: "Front-end Developer",
    frontend: "React",
    backend: "Node.js",
    database: "Mysql",
    link: "https://www.cslplasma.com/",
    keyChallenges: ["Complex blood collection-related business logic."],
    responsibility: "Admin console interface",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project3",
    name: "META ZOOM",
    framework: ["REACT NODEJS NEST"],
    posterImgUrl:
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/meta_zoom_cover.jpg",
    hasVideo: true,
    carousel: [
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/metazoom/2.jpg",
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/metazoom/1.jpg",
    ],
    direction: "horizontal",
    twoWords: "Virtual Campus",
    videoUrl:
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/video/metazoom.mp4",
    description:
      "This is a virtual space created for HuangHe JiaoTong University, where players can enter different room (e.g., library, teaching building) and then into different areas (e.g., Room 1, Room 2). ",
    applications: "Game&Admin System",
    client: "HuangHe JiaoTong University",
    position: "Full Stack Developer",
    frontend: "React Refine TS",
    backend: "Node.js Nest.js websocket TS",
    database: "MongoDB",
    link: "http://www.zoomsh.cn/metazoom",
    keyChallenges: [
      "Business logic for assigning players to enter rooms.",
      "WebSocket Configuration, Calculating Player Heartbeat.",
      "The design of database table.",
      "Alibaba Cloud ECS service packaging and deployment process: Object Storage Service (OSS), NGINX reverse proxy, Linux operations.",
    ],
    codeReview:
      "https://github.com/Junwei-Hou/work-code/blob/main/handleRoomService.ts",
    responsibility:
      "Database Design, RestfulAPI Design, Business logic in backend, Admin console interface in Frontend",
  },

  {
    // Add image in './styles/images.css' in #project4
    id: "project4",
    name: "LockDown Admin System",
    framework: ["HTML CSS JS"],
    posterImgUrl:
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/lock_down_cover1.jpeg",
    hasVideo: false,
    direction: "horizontal",
    twoWords: "Game VR Data",
    carousel: [
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/lockdown_admin_list3.jpg",
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/lockdown_admin_list2.jpg",
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/lockdown_admin_list1.jpg",
    ],
    videoUrl:
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/video/Puzzle.mp4",
    description:
      "The management system project is used to record player game data and VR device data.",
    applications: "Admin System",
    client: "Zoom Game",
    position: "Full Stack Developer",
    frontend: "REACT TS",
    backend: "Node.js Nest.js TS",
    database: "MongoDB",
    link: "http://www.zoomsh.cn/vr",
    keyChallenges: [
      "Backend utilizes algorithms to compute game data and VR parameter data.",
    ],
    responsibility:
      "Database Design, RestfulAPI Design, Business logic in backend, Admin console interface in Frontend",
  },
  {
    // Add image in './styles/images.css' in #project5
    id: "project5",
    name: "Food Court Simulator",
    framework: ["HTML CSS JS"],
    posterImgUrl:
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/foodcourt_cover.jpg",
    direction: "vertical",
    twoWords: "Food Court",
    hasVideo: true,
    carousel: [
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/foodcourt/1.jpg",
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/foodcourt/2.jpg",
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/foodcourt/3.jpg",
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/foodcourt/4.jpg",
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/foodcourt/5.jpg",
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/foodcourt/6.jpg",
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/foodcourt/7.jpg",
    ],
    videoUrl:
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/video/foodcourt.mp4",
    description:
      "This is a simulation management game where players can run a food court and upgrade various types of restaurants inside.",
    applications: "WX-miniProgram & Admin System",
    client: "In-house project",
    position: "Full Stack Developer",
    frontend: "REACT TS",
    backend: "Node.js Nest.js TS",
    database: "MongoDB",
    link: "",
    keyChallenges: [
      "Built-in chatGpt api, utilizing long connections, makes conversations between players and NPCs more random.",
    ],
    responsibility:
      "Implementing backend business logic, Admin console interface in Frontend",
  },
  {
    // Add image in './styles/images.css' in #project5
    id: "project6",
    name: "Escape Room",
    framework: ["wordpress"],
    posterImgUrl:
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/official_web/official_website_cover.png",
    direction: "horizontal",
    twoWords: "Official Website",
    hasVideo: false,
    carousel: [
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/official_web/official_website_cover_1.jpg",
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/official_web/official_website_cover_2.jpg",
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/official_web/official_website_cover_3.jpg",
    ],
    // videoUrl:
    // "https://junweioss.oss-rg-china-mainland.aliyuncs.com/video/foodcourt.mp4",
    description:
      "The Escape Room Game Company's official website features an introduction to their game content and contact information. The booking function is embedded within the site.",
    applications: "Website",
    client: "Escape Website Artist",
    position: "Front end Developer",
    link: "https://theescapeartist.sg/",
    keyChallenges: [
      "Migrate WordPress to the company's own server, configure the LNMP environment, set up SSL and DNS resolution.",
      "Built-in booking function",
    ],
    responsibility: "From server setup to SSL certificate Configuration",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project7",
    name: "Hospital Information System",
    framework: ["HTML CSS JS"],
    posterImgUrl:
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/HIS_cover.jpg",
    hasVideo: false,
    direction: "horizontal",
    twoWords: "Hospital Management",
    carousel: [
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/his2.jpg",
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/his3.jpg",
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/his4.jpg",
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/his5.jpg",
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/his6.jpg",
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/his7.jpg",
    ],
    videoUrl:
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/video/foodcourt.mp4",
    description:
      "HIS (Hospital Information System) medical system has provided comprehensive hospital business process support. Including basic data, appointment scheduling, electronic medical records, pharmacy management, outpatient services, fee settlement, doctor's workstations, and nurse workstations.",
    applications: "Admin System",
    client: "3A Hospital",
    position: "Front-end Developer",
    frontend: "VUE3",
    backend: "JAVA",
    database: "MySQL",
    link: "",
    keyChallenges: [
      "Lodop printing feature, packaging styles by writing native frontend components.",
      "Complex and tailored to hospital system business logic.",
    ],
    responsibility:
      "Frontend interface, including basic data, fee settlement and nurse workstations",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project8",
    name: "National Healthcare Information Big Screen",
    framework: ["HTML CSS JS"],
    posterImgUrl:
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/nhibs_cover.jpg",
    hasVideo: true,
    direction: "horizontal",
    twoWords: "Medical Dashboard",
    carousel: [
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/nhibs/1.jpg",
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/nhibs/2.jpg",
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/nhibs/3.jpg",
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/nhibs/4.jpg",
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/nhibs/5.jpg",
    ],
    videoUrl:
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/video/nbs.mp4",
    description:
      "Displaying medical data in big screen, utilise Echart Table and Graph Visualization to generate complex effect.",
    applications: "Admin System",
    client: "3A Hospital",
    position: "Front-end Developer",
    frontend: "VUE2 ECharts",
    backend: "JAVA",
    database: "MySQL",
    link: "",
    keyChallenges: ["ECharts table and graph visualization."],
    responsibility: "Frontend interface",
  },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Independent Projects";
const miscellaneous = [
  {
    // Add image in './styles/images.css' in #misc1
    id: "inp1",
    name: "AI_Jigsaw",
    link: "https://jun.mrlcn.com/",
    framework: ["React", "Nodejs"],
    posterImgUrl:
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/ai-jigsaw/WechatIMG598.jpg",
    twoWords: "AI Game",
    direction: "horizontal",
    carousel: [
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/ai-jigsaw/66.jpg",
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/ai-jigsaw/55.jpg",
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/ai-jigsaw/44.jpg",
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/ai-jigsaw/33.jpg",
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/ai-jigsaw/WechatIMG598.jpg",
      "https://junweioss.oss-rg-china-mainland.aliyuncs.com/image/ai-jigsaw/22.jpg",
    ],
    description:
      "This is my own full-stack project, an AI-based game. Users can upload a photo, then use AI to generate a new photo. They can then use the generated photo to play a jigsaw puzzle. Once they complete the puzzle, they can reveal the original photo. Afterward, they can send it to their friends as a surprise. ",
    applications: "Web",
    client: "In-house project",
    position: "Full Stack Developer",
    frontend: "React",
    backend: "Node.js",
    database: "Postgres",
    devops: "docker",
    github:"https://github.com/Junwei-Hou/aipixi.git",
    keyChallenges: ["Docker Learning", "The development of the jigsaw puzzle code"],
    responsibility: "Responsible for the entire project, including UI design, functionality, front-end and back-end code development, as well as server and domain configuration.",
  },
  // {
  //   // Add image in './styles/images.css' in #misc2
  //   id: "misc2",
  //   name: "Miscellaneous 2",
  //   url: "https://github.com/",
  // },
  // {
  //   // Add image in './styles/images.css' in #misc3
  //   id: "misc3",
  //   name: "Miscellaneous 3",
  //   url: "https://github.com/",
  // },
];
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  pitch:
    "Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.",
  copyright: "",
  contactUrl: "",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/Junwei-Hou",
  // facebook: "https://facebook.com",
  // twitter: "https://twitter.com",
  // instagram: "https://instagram.com",
  linkedin: "https://www.linkedin.com/in/junwei-hou/",
  // resume: "https://novoresume.com/",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
