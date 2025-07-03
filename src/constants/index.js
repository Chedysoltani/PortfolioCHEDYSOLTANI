import { spring } from "framer-motion";
import {
    mobile,
    flutter,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    sass,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    github,
    linkedin,
    code_tag,
    company_icon,
    project2,
    project3,
    music_app,
    project5,
    facebook,
    mark,
    java,
    acceuil,
    tache,
    event,
    project6,
    project8,
    material_ui,
    next,
    clerk,
    shadcn,
    joinMe,
    Dart,
    Aws,
    python,
    Spring,
    
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
        id: "education",
        title: "Education",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Angular & Vue.js Interface Innovator",
        icon: web,
    },
    {
        title: "Spring Boot & AWS Backend Solutions Expert",
        icon: mobile,
    },
    {
        title: "Flutter & Mobile App Development Specialist",
        icon: flutter,
    },
];

const technologies = [
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    // {
    //     name: "Next JS",
    //     icon: next,
    // },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Flutter",
        icon: flutter,
    },
    {
        name: "Dart",
        icon: Dart,
    },
   
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Material UI",
        icon: material_ui,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "springboot",
        icon: Spring,
    },
    {
        name: "aws",
        icon: Aws,
    },
 
    {
        name: "github",
        icon: github,
    },
    
  
 
];

const experiences = [
  {
    title: "2024",
    icon: company_icon,
    iconBg: "#383E56",
    points: [
        {
            title: "Full Stack Web Developer — POEMGROUP, Antananarivo, Madagascar",
            desc: 
                "Developed a ride-hailing application similar to Uber using Vue.js for the frontend and Laravel for the backend.\n\n" +
                "Implemented core features such as geolocation, ride booking, and real-time tracking, enhancing user experience by 25%.\n\n" +
                "Optimized database queries using PostgreSQL, leading to a 30% performance improvement.\n\n" +
                "Designed a modern, responsive user interface with Flutter, increasing user retention by 15%."
        },
    ],
},

    ,
    {
        title: "2023",
        icon: company_icon,
        iconBg: "#383E56",
        points: [
            {
                title: "Carpooling Application — Personal Project",
                desc: 
                    "Developed a full-stack carpooling platform using Angular for the frontend and Node.js with Express.js for the backend, along with MongoDB for data storage.\n\n" +
                    "The platform connects drivers and passengers for shared rides and includes features such as ride creation, booking, in-app messaging, and user profile management.\n\n" +
                    "This project enhanced my knowledge in MEAN stack development, RESTful API design, and real-time communication between users."
            },
        ],
    },
    
    {
        title: "2023",
        icon: company_icon,
        iconBg: "#383E56",
        points: [
            {
                title: "Full Stack Web Developer — Nexym, Monastir, Tunisia",
                desc: 
                    "Development of the mobile application *Health Bridge* using Flutter (Dart) for the frontend and Spring Boot for the backend.\n\n" +
                    "Integrated AWS Beanstalk for hosting, achieving a 40% reduction in deployment time.\n\n" +
                    "Employed PostgreSQL for data management and Swagger for API documentation.\n\n" +
                    "This project enhanced my skills in cross-platform mobile development, backend services integration, cloud deployment, and RESTful API design."
            },
        ],
    },
    {
        title: "2022",
        icon: company_icon,
        iconBg: "#383E56",
        points: [
            {
                title: "Event Management Platform — Personal Project",
                desc: 
                    "Developed a web-based event booking and management platform using Spring Boot, Thymeleaf, Spring Security, and MySQL.\n\n" +
                    "The platform featured a secure admin dashboard for managing users and available event services.\n\n" +
                    "Focused on backend logic, authentication mechanisms, and dynamic front-end rendering with Thymeleaf.\n\n" +
                    "This project strengthened my skills in full-stack development, secure user management, and MVC architecture."
            },
        ],
    },
    
    
,
    {
        title: "2022",
        icon: company_icon,
        iconBg: "#383E56",
        points: [
            {
                title: "Final Year Project (PFA) at the Higher Institute of Computer Science and Mathematics of Monastir (ISIMM), Tunisia",
                desc: 
                   "Implementation of a web-based e-commerce  application using Angular and MySQL.\n \n  \n  \n  \n  The project focused on delivering a smooth online shopping experience with features like product browsing, cart management, payments, and user authentication.I developed skills in frontend development with Angular, backend data management with MySQL, and version control using Git."
                   
                ,
            },
          
        ],
    },
];
import sesame from "../assets/images/sesame.png";
const testimonials = [
    {
        eduType: "University",
        universityName: "Université Privée TEK-UP",
        field: "Engineering Degree in Software Engineering and Information Systems",
        name: "TEK-UP",
        image: "https://media.licdn.com/dms/image/v2/C561BAQEXbO5Mo54CWQ/company-background_1536_768/company-background_1536_768/0/1583919757580?e=2147483647&v=beta&t=2ZffeLJRTiWq0v_fblLAEiysRYBHPZ_G3SNyo2wOoaE", // à adapter selon ton image/logo
        date: "2023 – 2026",
        link: "https://www.tek-up.de/",
    },
    {
        eduType: "University",
        universityName: "Higher Institute of Computer Science and Mathematics of Monastir (ISIMM)",
        field: "Bachelor’s Degree in Software Engineering",
        name: "ISIMM",
        image: "https://th.bing.com/th/id/OIP.UgoZL2K9tKZz9b4EtHod8wAAAA?rs=1&pid=ImgDetMain", // à adapter selon ton image/logo
        date: "2020 – 2023",
        link: "http://www.isimm.rnu.tn/",
    },
    {
        eduType: "Certification Degree's",
        courses: [
            "AWS Certified Cloud Practitioner – AWS (Pearson Vue)",
            "PCAP – Python Certified Associate Programmer – Python Institute",
            "English for Business – Saylor.org",
            "Participation in STUDY TRIP TURKEY – TEK-UP",
            "Digital Congress Certificate – TEK-UP"
        ],
        name: ["AWS", "Python Institute", "Saylor.org", "TEK-UP"],
        image: [
            "https://th.bing.com/th/id/OIP.AdT02QRbS4WuZnC90FzZuwHaHa?rs=1&pid=ImgDetMain",
            "https://th.bing.com/th/id/R.d46c7d8daab557da089717cba10e475d?rik=sRG0Ov%2fyRu3%2bOg&pid=ImgRaw&r=0",
            "https://th.bing.com/th/id/OIP.l6LrNmbIa3faZjI6IC4qIwHaEK?w=768&h=432&rs=1&pid=ImgDetMain",
            "https://media.licdn.com/dms/image/v2/C561BAQEXbO5Mo54CWQ/company-background_1536_768/company-background_1536_768/0/1583919757580?e=2147483647&v=beta&t=2ZffeLJRTiWq0v_fblLAEiysRYBHPZ_G3SNyo2wOoaE"
        ],
        link: [
            "https://aws.amazon.com/certification/certified-cloud-practitioner/",
            "https://pythoninstitute.org/pcap",
            "https://www.saylor.org/",
            "https://www.tek-up.de/"
        ],
    },
  
];


const projects = [
    {
        "name": "Application de Covoiturage",
        "description": "A platform connecting drivers and passengers for shared rides, featuring trip creation, booking, messaging, and user profile management",
        "tags": [
            {
                "name": "angular",
                "color": "red-text-gradient"
            },
            {
                "name": "nodejs",
                "color": "pink-text-gradient"
            },
            {
                "name": "expressjs",
                "color": "blue-text-gradient"
            },
            {
                "name": "mongodb",
                "color": "purple-text-gradient"
            }
        ],
        "image": acceuil,
        "type": "web"
    },
    {
        "name": "Gestionnaire de Tâches",
        "description": "A task management application enabling users to organize daily tasks with reminders, priorities, and categories",
        "tags": [
            {
                "name": "python",
                "color": "blue-text-gradient"
            },
            {
                "name": "tkinter",
                "color": "green-text-gradient"
            },
            {
                "name": "mysql",
                "color": "orange-text-gradient"
            }
        ],
        "image": tache,
        "type": "web"
    },
    {
        "name": "Gestion d'Événements",
        "description": "A platform for booking and managing events, with a secure admin dashboard for user and service management",
        "tags": [
            {
                "name": "spring-boot",
                "color": "green-text-gradient"
            },
            {
                "name": "thymeleaf",
                "color": "blue-text-gradient"
            },
            {
                "name": "spring-security",
                "color": "red-text-gradient"
            },
            {
                "name": "mysql",
                "color": "orange-text-gradient"
            }
        ],
        "image": event,
        "type": "web"
    },
    {
        "name": "Site E-commerce (StyleMart)",
        "description": "An online clothing store with features for cart management, order processing, and a responsive user interface",
        "tags": [
            {
                "name": "angular",
                "color": "red-text-gradient"
            },
            {
                "name": "nodejs",
                "color": "pink-text-gradient"
            },
            {
                "name": "expressjs",
                "color": "blue-text-gradient"
            },
            {
                "name": "mongodb",
                "color": "purple-text-gradient"
            }
        ],
        "image": mark,
        "type": "web"
    },
    {
        name: "Full Stack Video Conference App with Next JS",
        description:
            "Built with the latest Next.js and TypeScript. It enables users to securely log in, create meetings and access various meeting functionalities such as recording, screen sharing, and managing participants.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
            {
                name: "clerk",
                color: "pink-text-gradient",
            },
            {
                name: "Open Project",
                color: "white-text-gradient",
                url: "https://join-me-project.vercel.app/sign-in?redirect_url=https%3A%2F%2Fjoin-me-project.vercel.app%2F",
                border: "font-sans font-semibold border-2 border-white rounded-lg hover:text-tertiary hover:bg-white",
            },
        ],
        image: joinMe,
        type: "web",
    },
   
    {
        name: "Spotify 2.0 Clone Music App with React 18!",
        description:
            "Full Music App Clone ( Spotify 2.0 Clone ) With a modern homepage, fully-fledged music player, search, lyrics, song exploration features, search, popular music around you, worldwide top charts, and much more.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "Open Project",
                color: "white-text-gradient",
                url: "https://lyricsmusicappclone.netlify.app/",
                border: "font-sans font-semibold border-2 border-white rounded-lg hover:text-tertiary hover:bg-white",
            },
        ],
        image: music_app,
        type: "web",
    },
    {
        name: "Food Delivery App",
        description:
            "This project is designed for the finale project in the UX Design Certification in GO MY CODE Center.",
        tags: [
            {
                name: "ux design",
                color: "blue-text-gradient",
            },
            {
                name: "ui design",
                color: "green-text-gradient",
            },
            {
                name: "adobe xd",
                color: "pink-text-gradient",
            },
        ],
        image: project3,
      
        type: "design",
    },

 
    
    
];

const socialMediaIcons = [
    {
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "express",
                color: "white-text-gradient",
            },
        ],
        Icons: [github, linkedin, code_tag, facebook],
    },
];

export {
    services,
    technologies,
    experiences,
    testimonials,
    projects,
    socialMediaIcons,
};
