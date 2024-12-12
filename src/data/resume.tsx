import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Mateus Fernandes",
  initials: "MF",
  url: "https://dillion.io",
  location: "Brasil Salvador-Bahia",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "I am a software developer focused on Frontend, creating modern and functional interfaces.",
  summary:
    "I'm 20 years old, from Salvador, Bahia, and I started studying programming in 2023 at Senai Cimatec. Since then, I've been dedicated to software development, constantly striving to improve my skills and expand my knowledge in the field.",
  avatarUrl: "",
  skills: [
    "Next.js",
    "React.js",
    "Typescript",
    "Node.js",
    "TailwindCSS",
    "MySQL",
    "Git",
    "Figma",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
   
  ],
  contact: {
    email: "mateusveloso2608@gmail.com",
    tel: "(71) 9996397126",
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
    },
    {
      school: "Centro Universitário Jorge Amado",
      href: "https://www.unijorge.edu.br/",
      degree: "Systems Analysis and Development",
      logoUrl: "/unijorge.jpg",
      start: "2024",
      end: "2026",
    }
  
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "React.js",
        "Typescript",
        "TailwindCSS",
        "Firebase",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
   
  ],
 
} as const;
