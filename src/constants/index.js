import {
  backend,
  web,
  stocks,
  c,
  java,
  python,
  sql,
  javascript,
  extjs,
  html,
  solidity,
  css,
  reactjs,
  soliditylogo,
  tailwind,
  git,
  web3,
  tourblink,
  hrc,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blockchain Developer",
    icon: solidity,
  },
  {
    title: "Cryptocurrency Trader",
    icon: stocks,
  },
];

const technologies = [
  {
    name: "C++",
    icon: c,
  },{
    name: "Java",
    icon: java,
  },{
    name: "Python",
    icon: python,
  },
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
    name: "EXT JS",
    icon: extjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Solidity",
    icon: soliditylogo,
  },
  {
    name: "Web 3 JS",
    icon: web3,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Application Content Manager and Editor",
    company_name: "Tourblink | Freelance",
    icon: tourblink,
    iconBg: "#383E56",
    date: "Dec 2018 - Mar 2019",
    points: [
      "Managed and updated content on the website and mobile app, which reached over 10,000 people.",
      "Responsible for detecting plagiarism and fact-checking of content uploaded by other freelancers.",
      "Supervised a team of four additional editors to uphold and enhance the quality and accuracy of content.",
      "Added over 240 articles about numerous tourist destinations in Europe and Asia.",
    ],
  },
  {
    title: "Associate Software Engineer - I",
    company_name: "Highradius | Hyderabad",
    icon: hrc,
    iconBg: "#E6DEDD",
    date: "Jul 2022 - Jun 2023",
    points: [
      "As an Associate Software Engineer in the Collections product, I contributed significantly to the development and enhancement of software solutions.",
      "Engineered a custom CSV parser with modular column parsing capabilities, optimizing data import procedures and ensuring data accuracy.",
      "Collaborated  on the design and implementation of financial logic within one of the collections products, augmenting its functionality and performance.",
      "Worked on the transformation of the search functionality of the application through code and database modifications, participating in the seamless migration of over 300 live accounts.",
      "Played a pivotal role in the development of multi-language support enhancements for the product, fostering teamwork and ensuring comprehensive documentation to enable it to serve users in over 32 languages, thus expanding its global reach.",
      "Collaborated within a cohesive team to consistently improve the performance of both the user interface (UI) and backend components, ensuring the product operated smoothly and efficiently.",
      "Leveraged Selenium Automation and Junit Mockito to automate test cases and develop new ones, ensuring the product's robustness and reliability.",
      "Technologies used : Java, JavaScript, Ext.JS, Spring, MySQL, Selenium, Git."
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Highradius | Bhubaneswar",
    icon: hrc,
    iconBg: "#E6DEDD",
    date: "Jun 2021 - May 2022",
    points: [
      "Developed scalable UI dashboards using ExtJS & ReactJS to significantly improve the user experience and enhance data visualization. Simultaneously, I effectively utilized SQL, Excel, and Highcharts to extract, analyze, and present valuable data, thereby contributing to data-driven decision-making processes.",
      "Collaborated on a project aimed at reducing Turnaround Time (TAT) by efficiently routing incoming tickets to the appropriate Development or Product Manager, streamlining processes and improving customer satisfaction.",
      "Created comprehensive documentation for projects, ensuring clarity and ease of future development.",
      "Guided and supported interns in understanding and effectively working with the ExtJS & Java code-base, fostering a culture of knowledge sharing and contributing to increased team efficiency.",
      "Technologies used : Java, JavaScript, Ext.JS, React.JS, MySQL,MS Excel."
    ],
  }
];

const projects = [
  {
    name: "Cryptocurrency Trading Bot",
    description:
      "A trading bot, powered by Python, that carries out automated trading operations.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "BinanceAPI",
        color: "green-text-gradient",
      },
      {
        name: "TA-Lib",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Adityaxd/Crypto-BOT",
  },
  {
    name: "Sales Order Management Application",
    description:
      "An interactive sales dashboard facilitating order management within the application, enhanced with machine learning algorithms for classifying and segmenting customers based on their payment behavior.",
    tags: [
      {
        name: "reactJS",
        color: "blue-text-gradient",
      },
      {
        name: "dbms",
        color: "green-text-gradient",
      },
      {
        name: "machine learning",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Adityaxd/Sales-Management",
  },
  {
    name: "Portfolio Website",
    description:
      "An interactive portfolio website that combines ThreeJS, ReactJS, and JavaScript, utilizes email services through emailJS, and is hosted on Hostinger.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "reactjs",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Adityaxd/portfolio_website/",
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

export { services, technologies, experiences, projects };
