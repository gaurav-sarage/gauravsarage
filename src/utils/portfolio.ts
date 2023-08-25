import {
  AboutSectionType,
  ContactSectionType,
  ExperienceSectionType,
  FooterSectionType,
  HeroSectionType,
  NavbarSectionType,
  ProjectsSectionType,
  SkillsSectionType,
  SocialSectionType,
} from '../types/sections';
import { StringKeyValueType } from '../types';
import { resumeFileName } from './config';
import { getId } from './helper';

/*
 * =========================
 * AUTHOR INFO
 * =========================
 */

export const socialLinks: StringKeyValueType = {
  instagram: 'https://www.instagram.com/gauravv1902',
  twitter: 'https://twitter.com/gauravsarage4',
  github: 'https://github.com/gaurav-sarage',
  linkedin: 'https://www.linkedin.com/in/gaurav-sarage/',
};

export const author = {
  name: 'Gaurav Sarage',
  email: 'gauravsarage.1902@gmail.com',
};

export const seoData = {
  title: 'Gaurav Sarage | Full-Stack Developer',
  description:
    'Gaurav Sarage is a full-stack developer who specializes in building (and occasionally designing) exceptional visual interfaces.',
  author: author.name,
  image:
    'https://user-images.githubusercontent.com/85820227/231264058-df236c47-a8d2-4077-9fa6-3577aa18e8ca.png',
  url: '',
  keywords: [
    'Gaurav',
    'Gaurav Sarage',
    '@Gaurav Sarage',
    'Gaurav Sarage',
    'Portfolio',
    'Gaurav Portfolio ',
    'Gaurav Sarage Portfolio',
  ],
};

/*
 * =========================
 * SECTIONS
 * =========================
 */

// Navbar Section

export const navbarSection: NavbarSectionType = {
  navLinks: [
    { name: 'about', url: '/#about' },
    { name: 'skills', url: '/#skills' },
    { name: 'experience', url: '/#experience' },
    { name: 'projects', url: '/#projects' },
    { name: 'contact', url: '/#contact' },
  ],
  cta: {
    title: 'resume',
    url: `/${resumeFileName}`,
  },
};

// * Hero Section

export const heroSection: HeroSectionType = {
  subtitle: "Hello fren 👋, I'm ",
  title: 'Gaurav Sarage.',
  tagline: 'I create visually appealing interfaces on the web',
  description:
    "I'm a passionate Fullstack Web Developer having an experience of creating web applications using ReactJS & NextJS. ",
  specialText: "Organizer @The Phoenix Guild - Pune",

  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};

// * About Section

export const aboutSection: AboutSectionType = {
  title: 'about me',
  list: {
    title: 'Here are a few technologies I’ve been working with recently:',
    items: [
      'Next.js',
      'React.js',
      'TailwindCSS',
      'Solidity',
      'Cairo',
      'Hardhat',
    ],
  },
  img: '/gaurav-sarage.jpg',
};

// * Skills Section

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'full stack development',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building responsive static websites using Next.js',
        'Building responsive Single Page Apps in React.js',
        'Building RESTful APIs in Express',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'HTML5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS3', icon: 'vscode-icons:file-type-css' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        {
          name: 'typeScript',
          icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'node.js', icon: 'logos:nodejs-icon' },
        { name: 'react.js', icon: 'logos:react' },
        { name: 'next.js', icon: 'logos:nextjs-icon' },
        { name: 'tailwind CSS', icon: 'logos:tailwindcss-icon' },
        { name: 'redux', icon: 'logos:redux' },
        { name: 'database', icon: 'vscode-icons:file-type-sql' },
      ],
    },
    {
      id: getId(),
      title: 'blockchain development',
      lottie: {
        light: '/lotties/ethereum.json',
        dark: '/lotties/ethereum-dark.json',
      },
      points: [
        'Experience in developing Smart Contract using Solidity & Ethereum',
        'Developing NFT Smart Contracts using ERC-721 Token Standard',
        'Building Dapps with React.js & Solidity using Web3.js',
      ],
      softwareSkills: [
        { name: 'ethereum', icon: 'logos:ethereum' },
        { name: 'solidity', icon: 'logos:solidity' },
        { name: 'metamask', icon: 'logos:metamask-icon' },
      ],
    },
  ],
};

// * Experience Section

export const experienceSection: ExperienceSectionType = {
  title: "My experience and volunteering",
  experiences: [
    {
      company: 'AirMenus',
      companyUrl: 'https://about.airmenus.in',
      role: 'Frontend Developer Intern',
      started: 'Oct 2022',
      upto: 'Present',
      tasks: [
        "Built 15+ dynamic web applications using React and Next.js, resulting in a 15% increase in user engagement.                      Collaborated closely 'with' the design team to implement pixel-perfect UI/UX designs, consistently delivering projects           on-time.",
        'Interacted directly with clients and translated their needs into       actionable development tasks to deliver satisfactory results.',
        'Adapted quickly to changing project requirements, timelines, and priorities within a fast-paced startup environment.',
      ],
    },
    {
      company: 'StarkCon',
      companyUrl: 'https://starkcon.com',
      role: 'StarkCon Cairo Fellow',
      started: 'January 2023',
      upto: 'March 2023',
      tasks: [
        "Selected for the first cohort of StarkCon Cairo Fellow program and got trained on blockchain, Cairo and started building on StarkNet. ",
        "Underwent a 5 week program under mentorship of professionals from StarkNet ecosystem. ",
        "Learnt how to setup Cairo environment, blockchain, basics of ZK and Cairo, writing smart contracts and Starklings.",
        "Earned an exclusive NFT as proof of completion and custom swag kit.",
      ],
    },
    {
      company: 'Yellow Fryum',
      companyUrl: 'https://yellowfryum.com',
      role: 'Frontend Developer & Research Intern',
      started: 'March 2022',
      upto: 'May 2022',
      tasks: [
        'Utilized React & Tailwind CSS to create modern, cross-browser user interface and increased customer interaction by nearly 25% on the website.',
        'Worked remotely with Customer Research team and utilized "Yellow Pages" to outsource potential clients in the state of Connecticut.',
        'Developed and optimized web pages and applications by writing clean, structured and reusable code and debugged and tested code to ensure accuracy and functionality.',
      ],
    },
    {
      company: 'Google Cloud India',
      companyUrl: 'https://cloud.google.com/',
      role: 'Google Cloud Ready Facilitator',
      started: 'March 2022',
      upto: 'June 2022',
      tasks: [
        "Selected as Google Cloud Facilitator for my institution.",
        "Enrolled 600+ students from mine as well as students all across India.",
        "Trained and helped them complete skill badges and quests in the domains of Cloud Infrastructure, Cloud Native Application Development, Big Data and Machine Learning, Security, Machine Learning & AI",
        "At the end of program, approximately 550 students completed their milestones and gained significant knowledge in their respective tracks",
        "The institution as a whole achieved Milestone 3 out of 4 which is a big feat with its first year in the GCRF program.",
      ],
    },
    // {
    //   company: '',
    //   companyUrl: '',
    //   role: '',
    //   started: '',
    //   upto: '',
    //   tasks: [

    //   ],
    // },
  ],
};

// * Projects Section

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: 'Photo Gallery App (React)',
      url: 'https://gsierra19-photo-gallery-app.web.app/',
      repo: 'https://github.com/gaurav-sarage/photo-gallery-app',
      img: 'https://user-images.githubusercontent.com/85820227/250177861-cd5a5cd8-590e-49a1-92b5-4273aeee2f57.png',
      year: 2023,
      tags: ['ReactJS', 'CSS', 'JavaScript'],
    },
    {
      id: getId(),
      name: 'Personal Portfolio',
      url: 'https://gs-portfolio-19.netlify.app/',
      repo: 'https://github.com/gaurav-sarage/personal-portfolio',
      img: 'https://user-images.githubusercontent.com/85820227/231264058-df236c47-a8d2-4077-9fa6-3577aa18e8ca.png',
      year: 2021,
      tags: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: getId(),
      name: 'Scoot Bikes',
      url: 'https://gaurav-sarage.github.io/Client01/',
      repo: 'https://github.com/gaurav-sarage/Client01/',
      img: 'https://user-images.githubusercontent.com/85820227/231265689-e189ef1b-b7a7-4a92-a8d5-39cef51fb6f3.png',
      year: 2021,
      tags: ['HTML', 'CSS'],
    },
    {
      id: getId(),
      name: 'countries app using REST API',
      url: 'https://country-api-react-app.netlify.app/',
      repo: 'https://github.com/gaurav-sarage/country-api',
      img: 'https://user-images.githubusercontent.com/85820227/231487782-eb60fb21-32ae-4012-9190-7c42be3d18e8.png',
      year: 2022,
      tags: ['React', 'Sass'],
    },
    {
      id: getId(),
      name: 'ShopTronics - eCommerce',
      url: 'https://github.com/gaurav-sarage/shopTronics-ecommerce',
      repo: 'https://github.com/gaurav-sarage/shopTronics-ecommerce',
      img: 'https://user-images.githubusercontent.com/85820227/231495891-ec7c33c6-7f36-41fe-8efd-3e992d5b800d.png',
      year: 2023,
      tags: ['React', 'Scss', 'HTML', 'Strapi', 'Stripe Payment Gateway'],
    },
    {
      id: getId(),
      name: 'ProShop MERN eCommerce',
      url: 'https://github.com/gaurav-sarage/ecommerce',
      repo: 'https://github.com/gaurav-sarage/ecommerce',
      img: 'https://user-images.githubusercontent.com/85820227/231498672-64b2e2ff-d987-45a3-bca6-5d8d89759360.png',
      year: 2022,
      tags: ['React', 'Redux', 'Express', 'MongoDB'],
    },
    {
      id: getId(),
      name: 'Modern Art Gallery',
      url: 'https://gaurav-sarage.github.io/Client-02/',
      repo: 'https://github.com/gaurav-sarage/Client-02/',
      img: 'https://user-images.githubusercontent.com/85820227/231500007-aa155693-1871-4e44-8152-9c230861e7bd.png',
      year: 2022,
      tags: ['HTML', 'CSS'],
    },
    {
      id: getId(),
      name: 'GitHub User Search',
      url: 'https://gaurav-sarage.github.io/github-user-search/',
      repo: 'https://github.com/gaurav-sarage/github-user-search',
      img: 'https://user-images.githubusercontent.com/85820227/231501132-067311ef-2222-46d0-a20a-f0bf48827e01.png',
      year: 2021,
      tags: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: getId(),
      name: 'Hackathon Portfolio',
      url: 'https://gaurav-sarage.github.io/webathon-portfolio/',
      repo: 'https://github.com/gaurav-sarage/webathon-portfolio',
      img: 'https://user-images.githubusercontent.com/85820227/233788920-7c76e976-2f42-4750-a6ce-ad0fb2eb405d.png',
      year: 2022,
      tags: ['HTML', 'CSS', 'JavaScript'],
    },
  ],
};

// * Contact Section

export const contactSection: ContactSectionType = {
  title: 'get in touch',
  subtitle: "what's next",
  paragraphs: [
    "I'm currently looking for a remote job or any new opportunities.",
    'Whether you have a project to discuss or just want to say hi, my inbox is open for all!',
  ],
  link: `mailto:${author.email}`,
};

// Social Links Section

export const socialSection: SocialSectionType = {
  socialLinks: [
    {
      icon: 'tabler:brand-github',
      url: socialLinks.github,
    },
    {
      icon: 'mdi:instagram',
      url: socialLinks.instagram,
    },
    {
      icon: 'lucide:twitter',
      url: socialLinks.twitter,
    },
    {
      icon: 'lucide:linkedin',
      url: socialLinks.linkedin,
    },
  ],
};

// Footer Section

export const footerSection: FooterSectionType = {
  title: 'Design Inspiration @Brittany Chiang',
  link: 'https://github.com/bchiang7',
};
