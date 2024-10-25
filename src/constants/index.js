import {
  mobile,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  python,
  redux,
  tailwind,
  nodejs,
  mongodb,
  mysql,
  git,
  Bosch,
  PrescriptoWeb,
  Crypto_web,
  linkedIn,
  github,
  KAT
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Javascript Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
 
  {
    name: "React JS",
    icon: reactjs,
  },
  
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
 
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Flutter Developer (Intern)",
    company_name: "KAT enterprise LLC ",
    company_website: "https://www.nickelfox.com/",
    icon: KAT,
    iconBg: "#E6DEDD",
    date: "May 2024 - Aug 2024",
    points: [
      "Created an intuitive and responsive user interface with custom widgets and animations.",
      "Debugged complex issues , ensuring a smooth and seamless user experience.",
      "Collaborated with a remote team to implement feature-rich UI components that improved user retention by 20%.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    ],
  },
  {
    title: "Student Trainee (Intern)",
    company_name: "Bosch Global Software Technologies",
    company_website: "https://newgensoft.com/home-india/",
    icon: Bosch,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Sep 2023",
    points: [
      "Implemented automation testing workflows using E-sys and CANoe software for automotive systems.",
      "Orchestrated automated testing processes through Jenkins, reducing manual testing time by 30%",
      "Conducted manual checks on parts developed by the team",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    ],
  },
  
  
];

const projects = [
  {
    name: "Prescripto web",
    description:
      "Built a responsive healthcare platform using the MERN stack, enabling seamless doctor appointment scheduling with optimized user experience across all devices. Developed comprehensive admin and doctor dashboards featuring real-time appointment analytics, profile management, and schedule tracking, resulting in streamlined healthcare administration and improved patient-doctor coordination.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
    ],
    image: PrescriptoWeb,
    hosted_link: "https://dab-website-frontendnew.vercel.app/",
  },
  {
    name: "Cryptoplace",
    description:
      "Engineered a dynamic cryptocurrency tracking application using React.js that delivers real-time price updates and market data through REST API integration. Implemented an intuitive user interface with Tailwind CSS featuring customizable watchlists, advanced filtering capabilities, and interactive price charts, enabling users to efficiently monitor their preferred digital assets.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindCss",
        color: "green-text-gradient",
      },
      
    ],
    image: Crypto_web,
    hosted_link: "https://crypto-website-sand.vercel.app/",
  }
  
];

const personalInfo = {
  name: "Anand",
  fullName: "Anand R",
  email: "anandravi03200@gmail.com",
  role: "Software Developer",
  about: `I'm a skilled software developer with experience in Flutter and
  JavaScript, and expertise in frameworks like React.Js, Flutter,
  Node.js etc. I'm a quick learner and collaborate closely with clients to
  create efficient, scalable, and user-friendly solutions that solve
  real-world problems. Let's work together to bring your ideas to life!`,
  projectsIntro: `Following projects showcases my skills and experience through
  real-world examples of my work. Each project is briefly described with
  live demos. It reflects my ability to solve complex problems, work
  with different technologies, and manage projects effectively.`,
};

const publicUrls = {
  resume:
    "https://drive.google.com/file/d/1MV4Uteun3lDtOn5nNzwcBqLZbiBEuOIw/view?usp=sharing",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/anand-ravichandran03200/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/anand-hyper",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
