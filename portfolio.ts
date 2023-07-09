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
    "https://drive.google.com/file/d/1eNA8RiAGz5jbOhFio52DMtVMB0iNFS9W/view?usp=sharing",
};

export const openSource = {
  githubUserName: "gautamsarawagi",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: "",
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
        emoji("⚡ Integrating third-party APIs and libraries to enhance application functionality")
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
          fontAwesomeClassName: "skill-icons:typescript",
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
          fontAwesomeClassName: "logos:nodejs",
        },
        {
          skillName: "Redux",
          fontAwesomeClassName: "logos:redux",
        },
        {
          skillName: "Express-Js",
          fontAwesomeClassName: "skill-icons:expressjs-dark",
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassName: "skill-icons:mongodb",
        },
        {
          skillName: "Firebase",
          fontAwesomeClassName: "logos:firebase",
        },
        {
          skillName: "Graphql",
          fontAwesomeClassName: "skill-icons:graphql-dark",
        },
        {
          skillName: "FastApi",
          fontAwesomeClassName: "skill-icons:fastapi",
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
    role: "SDE Intern",
    company: "Newton School",
    companyLogo: "/img/icons/common/newton.png",
    date: "Aug 2021 – Jun 2022",
    descBullets: [
      "Developed scalable software solutions, implementing industry best practices and optimising performance for enhanced user experience.",
      "Collaborated in an agile team environment, actively participating in daily stand-ups, sprint planning, and code reviews.",
      "Resolved technical challenges, debugging code and maintained the codebase integrity."

    ]
  },
  {
    role: "React Developer",
    company: "EV Digital Technology",
    companyLogo: "/img/icons/common/evd.png",
    date: "Aug 2021 – Jun 2022",
    descBullets: [
      "Collaborated a team of 5 developers to successfully deliver 5+ projects within their respective deadlines, resulting in an overall client satisfaction score of 9.5/10.",
      "Communicated with clients and stakeholders to understand project requirements and provide updates on progress.",
      "Regularly attended industry conferences and training sessions to stay updated on the latest web developmenttechnologies and trends"
    ],
  }
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
    github: "https://github.com/gautamsarawagi/Watcher_App",
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
  author: "Gautam Sarawagi",
  image: "https://avatars.githubusercontent.com/u/101802666?v=4",
  url: "https://gautamsarawagi.netlify.app/",
  keywords: [
    "Gautam",
    "Gautam Sarawagi",
    "gautamsarawagi",
    "Gautam Portfolio ",
    "Gautam Sarawagi Portfolio",
  ],
};
