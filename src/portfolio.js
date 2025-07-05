/* Change this file to get your personal Porfolio */
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};
//SEO Related settings
const seo = {
  title: "Chaimaa's Portfolio",
  description:
  "A Passionate Data Scientist 🚀 with expertise in AI, ML, and data engineering. Skilled in using LLMs and generative AI to automate, optimize processes, and empower data-driven decisions.",
   og: {
    title: "Chaimaa Ourgani Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME DATA SCIENCE PROJECTS THAT I DESIGNED AND DEVELOPED",
  projects: [
    {
      image: require("./assets/images/voxaNote.png"),
      projectName: "VoxaNote – AI-Powered Meeting Transcription Assistant",
      projectDesc:
        "Built an end-to-end ASR system with DeepSpeech2 (CTC loss, TensorFlow), audio preprocessing, RNNs, and decoding. Integrated with FastAPI, React, and an LLM for clean, formatted transcriptions.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/Chaimaaorg/VoxaNote"
        }
      ],
      languages: [
        { name: "TensorFlow", iconifyClass: "logos-tensorflow" },
        { name: "FastAPI", iconifyClass: "simple-icons:fastapi" },
        { name: "React JS", iconifyClass: "logos-react" },
        { name: "OpenCV", iconifyClass: "logos-opencv" },
        { name: "Hugging Face", iconifyClass: "simple-icons:huggingface" },
        { name: "Railway", iconifyClass: "simple-icons:railway" },
        { name: "GitHub", iconifyClass: "akar-icons:github-fill" }
      ]
    },
    {
      image: require("./assets/images/dermaidLogo.png"),
      projectName: "DermAid - AI Copilot for Skin Cancer Detection",
      projectDesc:
      "Facebook-integrated chatbot for skin cancer detection using PyTorch and ResNeXt-50. Used DialogFlow NLP, OpenCV preprocessing, and deep learning classification trained on Kaggle dataset.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/Chaimaaorg/DermAid---AI-Copilot-for-Skin-Cancer-Detection"
        }
      ],
      languages: [
        { name: "PyTorch", iconifyClass: "simple-icons:pytorch" },
        { name: "FastAPI", iconifyClass: "simple-icons:fastapi" },
        { name: "Dialogflow", iconifyClass: "logos-dialogflow" },
        { name: "OpenCV", iconifyClass: "logos-opencv" }
      ]
    },
    {
      image: require("./assets/images/plantScan.png"),
      projectName: "PlantScan – AI-Powered Plant Disease Detection",
      projectDesc:
        "Developed a real-time plant disease diagnosis web app using a fine-tuned MobileNet, FastAPI backend, and ReactJS frontend, enabling image uploads and instant feedback for farmers and agronomists.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/Chaimaaorg/PlantScan"
        }
      ],
      languages: [
        { name: "TensorFlow", iconifyClass: "logos-tensorflow" },
        { name: "FastAPI", iconifyClass: "simple-icons:fastapi" },
        { name: "React JS", iconifyClass: "logos-react" }
      ]
    },
  ],
  display: true
};

//Home Page
const greeting = {
  greeting: "Hi, I'm Chaimaâ",
  title: "Chaimaa Ourgani",
  logo_name: "Chaimaa Ourgani",
  nickname: "layman_brother",
  subTitle:
  "A Passionate Data Scientist 🚀 with expertise in AI, ML, and data engineering. Skilled in using LLMs and generative AI to automate, optimize processes, and empower data-driven decisions.",
  resumeLink:
    "https://drive.google.com/file/d/1X4LUC29hd1ZQZvCsf40XCrRd_ahZqWgT/view?usp=sharing",
  portfolio_repository: "https://github.com/chaimaaorg/masterPortfolio",
  githubProfile: "https://github.com/chaimaaorg",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/chaimaaorg",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/chaima.ourgani/"

  {
    name: "Github",
    link: "https://github.com/chaimaaorg",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/chaimaâ-ourgani-65a422273/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:chaimaa_ourgani@outlook.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "kaggle",
    link: "https://www.kaggle.com/chaimaourgani",
    fontAwesomeIcon: "fa-kaggle", // Reference https://fontawesome.com/icons/kaggle?f=brands&s=solid
    backgroundColor: "#20beff", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/laymanbrother.19/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/chaima.ourgani/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        // "⚡ Exploratory data analysis with expertise in preprocessing, cleaning, feature engineering, and advanced visualization for actionable insights.",
        "⚡ Building production-ready machine learning and deep learning models for regression, classification, clustering.",
        "⚡ Experience working on Computer Vision, Speech & Audio Machine Learning, and NLP projects.",
        "⚡ Proficient in using LLMs and generative AI to automate and optimize processes, enhancing efficiency and decision-making",
        "⚡ Advanced quantitative modeling for dynamic time series forecasting"
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
  skillName: "Hugging Face",
  fontAwesomeClassname: "simple-icons:huggingface",
  style: {
    color: "#ffd21e",
  },
},
{
  skillName: "LangChain",
  fontAwesomeClassname: "simple-icons:langchain", // fallback if unsupported
  style: {
    color: "#000000",
  },
},

        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "simple-icons:pytorch",
          style: {
            backgroundColor: "transparent",
            color: "#EE4C2C",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Data Eng. & Big Data",
      fileName: "BigDataImg",
      skills: [
        "⚡ Developing and orchestrating Big Data ETL pipelines for scalable and efficient data processing",
        "⚡ Developing robust and automated data ingestion workflows from diverse sources (e.g. APIs, logs, databases)",
        "⚡ Implementing and optimizing distributed data processing using frameworks like Apache Spark, Hadoop, or Flink",
        "⚡ Designing and maintaining data lake and data warehouse architectures using cloud platforms (e.g. AWS, Azure, GCP)"
      ],
      softwareSkills: [
  {
    skillName: "Apache Spark",
    fontAwesomeClassname: "simple-icons:apachespark",
    style: {
      color: "#E25A1C",
    },
  },
  {
    skillName: "Apache Hadoop",
    fontAwesomeClassname: "simple-icons:apachehadoop",
    style: {
      color: "#66CCFF",
    },
  },
  {
    skillName: "Apache Kafka",
    fontAwesomeClassname: "simple-icons:apachekafka",
    style: {
      color: "#231F20",
    },
  },
  {
    skillName: "Apache Hive",
    fontAwesomeClassname: "simple-icons:apachehive",
    style: {
      color: "#FDEE21",
    },
  },
  {
    skillName: "Apache Oozie",
    fontAwesomeClassname: "simple-icons:apache",
    style: {
      color: "#A41E11",
    },
  },
  {
    skillName: "Apache HBase",
    fontAwesomeClassname: "simple-icons:apachehbase",
    style: {
      color: "#0E4C92",
    },
  },
  {
    skillName: "Cloudera Manager",
    fontAwesomeClassname: "simple-icons:cloudera",
    style: {
      color: "#F29305",
    },
  },
]

    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
"⚡ Building responsive website front-ends using React-Redux, JavaScript, HTML, and CSS",
"⚡ Developing robust back-end services and RESTful APIs using FastAPI, Flask, and Spring Boot, with seamless integration of machine learning models",
"⚡ Creating mobile and web applications using Flutter, .NET, JEE, and PHP, as well as standalone Android apps using Java"
      ],
softwareSkills: [
  {
    skillName: "HTML5",
    fontAwesomeClassname: "simple-icons:html5",
    style: {
      color: "#E34F26",
    },
  },
  {
    skillName: "CSS3",
    fontAwesomeClassname: "fa-css3",
    style: {
      color: "#1572B6",
    },
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "simple-icons:javascript",
    style: {
      backgroundColor: "#000000",
      color: "#F7DF1E",
    },
  },
  {
    skillName: "ReactJS",
    fontAwesomeClassname: "simple-icons:react",
    style: {
      color: "#61DAFB",
    },
  },
  {
    skillName: "Redux",
    fontAwesomeClassname: "simple-icons:redux",
    style: {
      color: "#764ABC",
    },
  },
  {
    skillName: "Flutter",
    fontAwesomeClassname: "simple-icons:flutter",
    style: {
      color: "#02569B",
    },
  },
  {
    skillName: "Java",
    fontAwesomeClassname: "devicon:java",
    style: {
      color: "#007396",
    },
  },
  {
    skillName: ".NET",
    fontAwesomeClassname: "simple-icons:dotnet",
    style: {
      color: "#512BD4",
    },
  },
  {
    skillName: "PHP",
    fontAwesomeClassname: "simple-icons:php",
    style: {
      color: "#777BB4",
    },
  },
  {
    skillName: "FastAPI",
    fontAwesomeClassname: "simple-icons:fastapi",
    style: {
      color: "#009688",
    },
  },
  {
    skillName: "Flask",
    fontAwesomeClassname: "simple-icons:flask",
    style: {
      color: "#000000",
    },
  },
  {
    skillName: "Spring Boot",
    fontAwesomeClassname: "simple-icons:spring",
    style: {
      color: "#6DB33F",
    },
  },
  {
    skillName: "Python",
    fontAwesomeClassname: "simple-icons:python",
    style: {
      color: "#3776AB",
    },
  },
  {
    skillName: "Git",
    fontAwesomeClassname: "simple-icons:git",
    style: {
      color: "#F05032",
    },
  },
  {
    skillName: "GitHub",
    fontAwesomeClassname: "simple-icons:github",
    style: {
      color: "#181717",
    },
  },
]
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working with multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machines with integrated databases",
        "⚡ Deploying deep learning models on the cloud for mobile device usage",
        "⚡ Monitoring logs and metrics across cloud environments"
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
  skillName: "Dynatrace",
  fontAwesomeClassname: "simple-icons:dynatrace",
  style: {
    color: "#1496FF", // Dynatrace blue
  },
},
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },

  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.github.com/chaimaaorg",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/chaimaourgani",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "National School of Computer Science and Systems Analysis (ENSIAS)",
      subtitle: "State Engineer Degree in Data Science and IoT",
      logo_path: "ensiasLogo.jpg",
      alt_name: "ENSIAS",
      duration: "2021 - 2024",
      descriptions: [
        "⚡ Studied core software engineering subjects: Data Structures, Algorithms, Database Management Systems (DBMS), Operating Systems (OS), Computer Architecture (CA), Artificial Intelligence (AI), etc.",
        "⚡ Completed specialized courses in Machine Learning, Deep Learning, Big Data, Natural Language Processing (NLP), Computer Vision, Web and Data Mining, Internet of Things (IoT), DevOps & Cloud Computing, Advanced Statistics, and Full Stack Web Development.",
        "⚡ Gained experience in software project management and real-world application of AI and data-driven systems."
      ],
      website_link: "https://www.ensias.um5.ac.ma/",
    },
    {
      title: "Lycée d’Excellence (CPGE), Ben Guerir, Morocco",
      subtitle: "Preparatory Classes for Engineering Schools – MPSI Track (Mathematics, Physics and Engineering Sciences)",
      logo_path: "lydexLogo.png",
      alt_name: "Lydex",
      duration: "2019 - 2021",
      descriptions: [
        "⚡ Intensive coursework in Advanced Mathematics, Classical and Quantum Physics, and Engineering Sciences.",
        "⚡ Developed strong foundations in programming (Python, SQL), algorithms, probability, and statistics to prepare for national competitive engineering school exams (Concours)."
      ],
      website_link: "https://lm6e.ma/", // UM6P hosts Lydex
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Python for Data Science and Machine Learning Bootcamp",
      subtitle:
        "Mastered Python for ML: Pandas, NumPy, Scikit-learn, Seaborn, and Spark for big data analysis.",
      image: require("./assets/images/udemyLogo.webp"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.udemy.com/certificate/UC-afbb1ab7-953c-4dcf-a899-9fd7510f89c9",
        },
      ],
    },
    {
      title: "Feature Engineering",
      subtitle:
        "Kaggle-certified in advanced feature engineering techniques using Pandas, Scikit-learn, and NumPy.",
      image: require("./assets/images/kaggleLogo.webp"), // Add Kaggle logo asset
      imageAlt: "Kaggle Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.kaggle.com/learn/certification/chaimaourgani/feature-engineering", // Replace with your Kaggle URL
        },
      ],
    },
    {
      title: "Complete TensorFlow 2 and Keras Deep Learning Bootcamp",
      subtitle:
        "Built CNNs, RNNs, GANs, and NLP models using TensorFlow/Keras, with deployment best practices.",
      image: require("./assets/images/udemyLogo.webp"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.udemy.com/certificate/UC-69bf675d-bcf5-4b38-9744-0edfab34a226/",
        },
      ],
    },
    {
      title: "Computer Vision",
      subtitle:
        "Developed CNN-based computer vision models (TensorFlow) for image classification and object detection.",
      image: require("./assets/images/kaggleLogo.webp"),
      imageAlt: "Kaggle Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.kaggle.com/learn/certification/chaimaourgani/computer-vision", // Replace with your Kaggle URL
        },
      ],
    },
    {
      title: "LLM Fine Tuning Fundamentals + Fine-tune OpenAI GPT Model",
      subtitle:
        "Fine-tuned GPT models using LoRA/QLoRA, with hands-on data prep, training, and evaluation.",
      image: require("./assets/images/udemyLogo.webp"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.udemy.com/certificate/UC-faaad16b-3d60-4db8-ac76-08d5036a98d7",
        },
      ],
    },
        {
      title: "MLflow in Action - Master the art of MLOps",
      subtitle:
        "Implemented end-to-end MLOps pipelines: model tracking, registry, and deployment with MLflow.",
      image: require("./assets/images/udemyLogo.webp"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.udemy.com/certificate/UC-e27edc10-0f82-4e4e-a9e9-0aea62f5e274",
        },
      ],
    },
  ],
};


// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "AI Developer experienced in ML, DL, and Software Architecture, with a background in both startups and established firms, and active in open-source communities.",
  header_image_path: "experience.svg",
  experiences: [

        {
          title: "Data Scientist",
          company: "Attijwariwafa Bank",
          company_url: "https://www.attijariwafabank.com/en",
          logo_path: "awbLogo.png",
          duration: "Sept 2024 - Present",
          location: "Casablanca, Morocco",
          description:
            "I design and deploy AI/ML solutions in banking to enhance user experience and automate operations. My projects include fine-tuning LLMs and models for classification and speech-to-text, developing OCR systems, RAG-based chatbots, fuzzy-matching pipelines, and optimizing big data workflows with tools like PySpark, Hugging Face, and LangChain.",
          color: "#000000",
        },
        {
          title: "Data Scientist Intern (Graduation Project)",
          company: "Attijwariwafa Bank",
          company_url: "https://www.attijariwafabank.com/en",
          logo_path: "awbLogo.png",
          duration: "Feb 2024 - June 2024",
          location: "Casablanca, Morocco",
          description:
            "Developed a voice assistant to make eBanking services accessible to visually impaired users, integrating secure voice authentication using a Siamese neural network and advanced NLP features such as intent classification, NER, contextual switching, and a RAG system for FAQ automation. Also benchmarked and fine-tuned transformer and ML models to enhance overall performance.",
          color: "#000000",
        },
        {
          title: "Software Engineer Intern (PFA)",
          company: "Districap",
          company_url: "https://www.districap.ma/",
          logo_path: "districapLogo.png",
          duration: "Jul 2023 – Aug 2023",
          location: "Casablanca, Morocco",
          description:
            " Designed and developed a fully functional, cross-platform mobile e-commerce application using Flutter for both Android and iOS, featuring real-time database synchronization, user authentication, and cloud storage through seamless integration with Firebase services, enhancing user experience and operational efficiency.",
          color: "#ee3c26",
        },
        {
          title: "Software Engineer Intern (PFA)",
          company: "Simtis",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "simtislogo.png",
          duration: "Jul 2022 - Aug 2022",
          location: "Casablanca, Morocco",
          description:
            "Analysis, design and development of a PHP-based web application for stock management, including features for product management, sales tracking, and inventory control.",
          color: "#0071C5",
        },
  ],
}

// Big Projects Page
const bigProjectsHeader = {
  title: "Startup Projects",
  description:
    "Key Data Science Projects I’ve Designed and Implemented across Regression, Computer Vision, and Natural Language Processing domains.",
  avatar_image_path: "projects_image.svg",
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects leverage a wide range of modern technologies. I specialize in developing Data Science solutions and deploying them as web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "chaimaa.png",
    description:
  "I'm active on most social media platforms—feel free to reach out! I typically respond within 24 hours. I can assist you with Machine Learning, AI, React, Android, Cloud technologies, and Open Source development."  
},
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  splashScreen,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  bigProjectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
  bigProjects
};
