import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Gautam Sarawagi",
  title: "Hi all, I'm Gautam",
  description:
    "I'm passionate Full Stack web developer having an experience of web applications with React.js, Next.js , Node.js, Express.js and MongoDb",
  resumeLink:
    "https://docs.google.com/document/d/1eg2c1zxA6CQwhbxnujytEqBZgfKj6ZYZ5ksRrdHx7eM/edit?usp=sharing",
};

export const openSource = {
  githubUserName: "gautamsarawagi",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: "https://1hanzla100.github.io/",
  linkedin: "https://www.linkedin.com/in/gautam-sarawagi-64b1b4227/",
  github: "https://github.com/gautamsarawagi",
  twitter: "https://twitter.com/gautamsarawagi_",
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "A FULL STACK DEVELOPER WHO IS EAGER FOR NEW TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json",
      skills: [
        emoji(
          "⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
        ),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in Nodejs & ExpressJs REST Framework"),
      ],
      softwareSkills: [
        {
          skillName: "HTML-5",
          fontAwesomeClassName: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS-3",
          fontAwesomeClassName: "vscode-icons:file-type-css",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassName: "logos:javascript",
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassName: "logos:typescript",
        },
        {
          skillName: "Reactjs",
          fontAwesomeClassName: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          fontAwesomeClassName: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Nodejs",
          fontAwesomeClassName: "logos:node-js",
        },
        {
          skillName: "Redux",
          fontAwesomeClassName: "logos:redux",
        },
        {
          skillName: "NPM",
          fontAwesomeClassName: "logos:npm-icon",
        },
        {
          skillName: "Yarn",
          fontAwesomeClassName: "logos:yarn",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design",
    progressPercentage: "90",
  },
  {
    Stack: "Backend",
    progressPercentage: "70",
  },
  {
    Stack: "Programming",
    progressPercentage: "60",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "IIIT Naya Raipur",
    subHeader: "Bachelors of Technology in Computer Science",
    duration: "December 2021 - Present",
    grade: "Grade A",
    descBullets: [
      "Participated in hackathons and coding competitions to apply learned concepts and gain hands-on experience.",
      "Developed proficiency in data structures, algorithms, and computer networks through coursework and practical assignments.",
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: "React Developer",
    company: "EV Digital Technology",
    companyLogo: "/img/icons/common/evd.png",
    date: "Aug 2021 – Jun 2022",
    desc: "I worked as frontend web developer to design web based admin dashboards for mulitple apps using React js, Bootstrap, Chart.js and some other libraries.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "Travel Bastar",
    desc: "A Government of Chattisgrah Project for enhanching the tourism in Bastar and surronding areas",
    link: "https://www.travelbastar.com/",
    roles: [
      "Integrated Rest API’s using axios and fetch to make the application dynamic",
      "Integrate Razorpay Payment gateway where online transactions can be done between user and admin.",
      "QR Code generates when users can buy any services or book tickets.",
    ],
  },
  {
    name: "Mahavir Ashok Jwellers",
    desc: "An ecommerce website for a private jwelley shop owner",
    link: "https://www.infinitybyma.com/",
    roles: [
      "Make the Admin panel from scratch.",
      "Developed pixel perfect website screens as per UI/UX design provided.",
      "Updated the design as per client requirements.",
    ],
  },
  {
    name: "Watcher App",
    desc: "Watcher is a cutting-edge security protocol that uses different deep learning models and artificial intelligence to track motor vehicles, criminals, theft and illegal trespassing via a modern CCTV network. Also secure the first prize in the hackathon.",
    github: "https://github.com/1hanzla100/django-react-forum",
    roles: [
      "Integrated python backend and next js frontend",
      "Integrated mapbox and plate recognizer Api",
      "Developed a pixel perfect website designed in figma",
    ],
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "John Smith",
    feedback:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
  },
  {
    name: "John Smith",
    feedback:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Gautam Sarawagi",
  description: "A passionate Full Stack Web Developer",
  author: "Hanzla Tauqeer",
  image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Gautam",
    "Gautam Sarawagi",
    "gautamsarawagi",
    "Gautam Portfolio ",
    "Gautam Sarawagi Portfolio",
  ],
};
