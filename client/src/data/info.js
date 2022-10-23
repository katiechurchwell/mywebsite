import pantry from "../assets/images/project-mockups/pantry.png";
import chewview from "../assets/images/project-mockups/chewview.png";
import nasteroids from "../assets/images/project-mockups/nasteroids.png";

export const info = {
  technologies: [
    {
      icon: "devicon-html5-plain",
      name: "html5",
      category: "language",
    },
    {
      icon: "devicon-css3-plain",
      name: "css3",
      category: "language",
    },
    {
      icon: "devicon-javascript-plain",
      name: "javascript",
      category: "language",
    },
    {
      icon: "devicon-nodejs-plain",
      name: "nodejs",
      category: "language",
    },
    {
      icon: "devicon-react-original",
      name: "react",
      category: "framework",
    },
    {
      icon: "devicon-jquery-plain",
      name: "jquery",
      category: "framework",
    },
    {
      icon: "devicon-express-original",
      name: "express",
      category: "framework",
    },
    {
      icon: "devicon-bootstrap-plain",
      name: "bootstrap",
      category: "framework",
    },
    {
      icon: "devicon-handlebars-plain",
      name: "handlebars",
      category: "framework",
    },
    {
      icon: "devicon-mongodb-plain",
      name: "mongodb",
      category: "database",
    },
    {
      icon: "devicon-mysql-plain",
      name: "mysql",
      category: "database",
    },
    {
      icon: "devicon-graphql-plain",
      name: "graphql",
      category: "database",
    },
    {
      icon: "devicon-figma-plain",
      name: "figma",
      category: "design",
    },
    {
      icon: "devicon-photoshop-plain",
      name: "photoshop",
      category: "design",
    },
    {
      icon: "devicon-illustrator-plain",
      name: "illustrator",
      category: "design",
    },
    {
      icon: "devicon-heroku-original",
      name: "heroku",
      category: "other",
    },
    {
      icon: "devicon-git-plain",
      name: "git",
      category: "other",
    },
    {
      icon: "bi bi-code",
      name: "rest-api",
      category: "other",
    },
    {
      icon: "devicon-jest-plain",
      name: "jest",
      category: "other",
    },
  ],
  socials: [
    {
      link: "https://github.com/katiechurchwell/",
      icon: "bi bi-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/katiechurchwell/",
      icon: "bi bi-linkedin",
      label: "linkedin",
    },
    {
      link: "mailto:churchwellcatherine@gmail.com",
      icon: "bi bi-envelope",
      label: "email",
    },
  ],
  portfolio: [
    {
      title: "Pantry",
      live: "https://whispering-reef-71968.herokuapp.com/",
      source: "https://github.com/katiechurchwell/Pantry",
      image: pantry,
      description:
        "Utilizes a back end with servers, databases, advanced APIs and user authentication. Allows the user to search for recipes by ingredient.",
    },
    {
      title: "Chew View",
      live: "https://katiechurchwell.github.io/Chew-View/",
      source: "https://github.com/katiechurchwell/Chew-View",
      image: chewview,
      description:
        "Allows the user to search for local restaurants and movies to watch. Built using the Travel Advisor and TMDB Movie Database APIs, Bootstrap and JavaScript.",
    },
    {
      title: "NASATEROIDS",
      live: "https://nasteroids.herokuapp.com/",
      source: "https://github.com/ChrisKurz098/NASAteroids/",
      image: nasteroids,
      description:
        "A recreation of the 1979 Atari game built in React. This application utilizes MUI components and an NES-style CSS frame work for UI, MongoDB and GraphQL for database models and API queries.",
    },
  ],
  projects: [
    {
      name: "portfolio",
      topics: [
        "portfolio",
        "personal-website",
        "resume",
        "graphql",
        "javascript",
        "react",
        "rest-api",
        "express",
      ],
    },
    {
      name: "run-buddy",
      topics: ["css3", "html5"],
    },
    {
      name: "horiseon",
      topics: ["html5", "css3"],
    },
    {
      name: "Robot-Gladiators",
      topics: ["game", "javascript"],
    },
    {
      name: "password-generator",
      topics: ["password-generator", "javascript"],
    },
    {
      name: "taskinator",
      topics: ["localstorage", "javascript"],
    },
    {
      name: "code-quiz",
      topics: ["javascript", "css3", "game", "html5"],
    },
    {
      name: "taskmaster-pro",
      topics: ["jquery", "bootstrap", "momentjs"],
    },
    {
      name: "work-day-scheduler",
      topics: ["javascript", "jquery", "momentjs", "bootstrap"],
    },
    {
      name: "p5.js-sandbox",
      topics: [],
    },
    {
      name: "weather-dashboard",
      topics: ["rest-api"],
    },
    {
      name: "git-it-done",
      topics: ["rest-api", "javascript"],
    },
    {
      name: "plant-timeline",
      topics: [],
    },
    {
      name: "team-1-dinner-movie",
      topics: [],
    },
    {
      name: "portfolio-generator",
      topics: ["nodejs", "inquirerjs"],
    },
    {
      name: "readme-generator",
      topics: ["inquirerjs", "nodejs"],
    },
    {
      name: "jest-another-RPG",
      topics: ["jest", "nodejs", "game"],
    },
    {
      name: "katiechurchwell",
      topics: [],
    },
    {
      name: "team-profile-generator",
      topics: ["nodejs", "jest"],
    },
    {
      name: "zookeepr",
      topics: ["javascript", "express", "jest", "mysql", "nodejs", "heroku"],
    },
    {
      name: "note-taker",
      topics: ["express", "heroku"],
    },
    {
      name: "employee-tracker",
      topics: ["mysql"],
    },
    {
      name: "u-develop-it",
      topics: ["mysql", "express", "jest", "nodejs"],
    },
    {
      name: "just-tech-news",
      topics: ["express", "jest", "mysql", "heroku"],
    },
    {
      name: "e-commerce-back-end",
      topics: ["express", "sequelize", "mysql"],
    },
    {
      name: "Chew-View",
      topics: ["bootstrap", "jquery", "javascript", "css3", "html5", "heroku"],
    },
    {
      name: "Pantry",
      topics: ["database", "mysql"],
    },
    {
      name: "tech-jargon",
      topics: ["just-for-fun"],
    },
    {
      name: "CMS-blog",
      topics: [
        "bootstrap",
        "express",
        "jest",
        "mysql",
        "rest-api",
        "handlebars",
        "heroku",
      ],
    },
    {
      name: "Pantry",
      topics: [
        "handlebars",
        "javascript",
        "rest-api",
        "express",
        "jest",
        "mysql",
        "heroku",
      ],
    },
    {
      name: "pizza-hunt",
      topics: ["mongodb", "nosql", "express", "heroku"],
    },
    {
      name: "social-network",
      topics: ["nosql", "express", "mongodb", "rest-api"],
    },
    {
      name: "food-festival",
      topics: ["progressive-web-app", "webpack", "bootstrap", "jquery"],
    },
    {
      name: "budget-tracker",
      topics: ["express", "nodejs", "heroku"],
    },
    {
      name: "Brett-Wine-Cheese",
      topics: ["react"],
    },
    {
      name: "photo-port",
      topics: ["react"],
    },
    {
      name: "deep-thoughts",
      topics: ["graphql", "express", "mongodb", "nodejs", "react"],
    },
    {
      name: "book-search",
      topics: [
        "mern-stack",
        "graphql",
        "apollographql",
        "express",
        "javascript",
        "mongodb",
        "nodejs",
        "react",
      ],
    },
    {
      name: "shop-shop",
      topics: [],
    },
    {
      name: "NASAteroids",
      topics: [
        "graphql",
        "javascript",
        "mongoosejs",
        "nodejs",
        "reactjs",
        "apollo",
        "expressjs",
      ],
    },
    {
      name: "NASAteroids",
      topics: ["react", "heroku", "mongodb"],
    },
    {
      name: "history-timeline",
      topics: [],
    },
    {
      name: "protocol",
      topics: [],
    },
    {
      name: "data-structures",
      topics: ["data-structures", "notes"],
    }
  ],
};
