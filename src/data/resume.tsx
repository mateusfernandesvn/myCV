import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Mateus Fernandes - Developer  ",
  initials: "MF",
  url: "https://mfcurriculum.vercel.app/",
  location: "Brasil Salvador-Bahia",
  locationLink: "",
  description:
    "I am a software developer focused on Frontend, creating modern and functional interfaces.",
  summary:
    "I’m a 20-year-old software developer from Salvador, Bahia. I began my programming journey in 2023 at Senai Cimatec, where I completed my technical degree in system developer. Since then, I’ve been passionate about building innovative solutions, continuously improving my skills, and expanding my knowledge to deliver impactful and high-quality projects.",
  avatarUrl: "/image.png",
  skills: [
    "Next.js",
    "React.js",
    "Typescript",
    "Node.js",
    "CSS",
    "TailwindCSS",
    "Sass",
    "HTML",
    "MySQL",
    "Firebase",
    "Git",
    "Figma",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],

  contact: {
    email: "mateusveloso2608@gmail.com",
    tel: "(71) 996397-126",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mateusfernandesvn",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mateusfernandesvn/",
        icon: Icons.linkedin,
        navbar: true,
      },

      email: {
        name: "mateusveloso2608@gmail.com",
        url: "mailto:mateusveloso2608@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Fiber Fast Telecom",
      href: "https://fiberfasttelecom.com.br/",
      badges: [],
      location: "Salvador, BA",
      title: "customer support",
      logoUrl: "/fiber.png",
      start: "Dez 2024",
      end: "currently",
      description:
        "I provide customer support services, configuring routers, managing fiber connections, and troubleshooting to ensure a stable internet experience.",
    },
  ],

  education: [
    {
      school: "Senai Cimatec",
      href: "https://www.senaicimatec.com.br/",
      degree: "systems development",
      logoUrl: "/senai.jpg",
      start: "2023",
      end: "2024",
      description:
        "My journey in the Technical Course in Systems Development at Senai Cimatec was my first contact with programming, where I learned C, JavaScript, Node.js, HTML, CSS, MySQL, and Figma. I developed both technical and interpersonal skills, such as teamwork, communication, and modeling, as well as the ability to create complete projects, building a solid foundation for my career in IT.",
    },
  ],

  projects: [
    {
      title: "SENAIBOT",
      href: "https://www.youtube.com/watch?v=GSzvVvewhI4",
      dates: "Dec 2024",
      active: true,
      description:
        "The project aims to automate the consultation of patents at INPI (National Institute of Industrial Property), scraping the data with Python, storing it in a database and displaying the results in a web interface developed in React.",
      technologies: [
        "Python",
        "Node.js",
        "React.js",
        "Typescript",
        "TailwindCSS",
        "MySQL",
        "Firebase",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/mateusfernandesvn/senaibot",
          icon: <Icons.github className="size-3" />,
        }
        
      ],
      image: "",
      video: "tccVideoFinal.mp4",
    },

    {
      title: "CineVerse",
      href: "https://cineverseofc.vercel.app/",
      dates: "Dec 2024",
      active: true,
      description:
        "Cineverse is an application that consumes data from The Movie Database (TMDb) API. The project provides an interactive experience for users, allowing them to explore information about movies and TV shows.",
      technologies: [
        "Next.js",
        "React.js",
        "Typescript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://cineverseofc.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/mateusfernandesvn/cineverse",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "",
      video: "cine.mp4",
    },

    {
      title: "Barber Shop",
      href: "hhttps://barberanavalha.vercel.app",
      dates: "Dec 2024",
      active: true,
      description:
        "This is a modern and visually appealing landing page designed for a barbershop. It features all the essential information customers need, including services offered, pricing, contact details, and business hours. The page is tailored to provide an engaging and seamless user experience, showcasing the barbershop's style and professionalism.",
      technologies: ["Next.js", "React.js", "Typescript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://barberanavalha.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/mateusfernandesvn/barber",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "",
      video: "barber.mp4",
    },

  ],
} as const;
