import Image from "next/image";
import FeaturedProjects from "./components/FeaturedProjects";
import { socialLinks } from "./config";

export default function Page() {
  // Featured projects data
  const featuredProjects = [
    {
      title: "AI Chatbot",
      description:
        "an End-to-End AI chatbot built using LangGraph, FastAPI, and Streamlit. support customizing overall conversation prompt",
      image: "/projects/chatbot.png", // Add your project screenshot
      techStack: ["Python", "Generative AI", "Streamlit", "FastAPI"],
      github: "https://github.com/Staceypy/ai-chatbot-langgraph-streamlit",
    },
    // {
    //   title: "AI Chatbot for ESG Reporting",
    //   description:
    //     "a chatbot designed to answer customer questions regarding ESG regulations and reporting. It utilizes RAG architecture powered by LangChain and Pinecone.",
    //   image: "/project1.png", // Add your project screenshot
    //   techStack: ["Python", "Generative AI"],
    //   github: "https://github.com/Staceypy/esg-chatbot",
    // },
    {
      title: "Desktop App Prompting Regular Standing and Moving Breaks",
      description:
        "An Electron app that reminds you to take breaks with customisable break duration.",
      image: "/projects/break2.png", // Add your project screenshot
      techStack: ["React", "Electron", "Node.js", "Typescript", "Webpack"],
      github: "https://github.com/Staceypy/breaktimer-app",
    },

    {
      title: "Company Website, Dashboard, and CMS",
      description:
        "Hello Ada is a company website for a client. Leveraged Webflow and Xano to rapidly deliver a complete system—website, dashboard, and CMS.",
      image: "/projects/hello3.png",
      techStack: ["JavaScript", "Webflow", "Wized", "Xano"],
      demo: "https://www.helloada.ai/en/eng",
    },
    {
      title: "Mobile App for Chefs Collaboration",
      description:
        'contributed in building prototype on Figma, and building mobile APP for <a href="https://www.linkedin.com/company/thisisremi/" target="_blank" rel="noopener noreferrer" class="text-neutral-700 dark:text-neutral-300 hover:text-blue-500 dark:hover:text-blue-400">Remi</a>',
      image: "/projects/remi1.png",
      techStack: ["React Native", "TypeScript", "Firebase"],
    },
    {
      title: "T-Shirt E-Commerce Website",
      description:
        "A full-stack e-commerce web application built with React and express for T-shirt enthusiasts.",
      image: "/projects/shopping-home.png",
      techStack: ["React", "TypeScript", "Node.js"],
      github: "https://github.com/Staceypy/shopping-website-react",
    },
  ];

  return (
    <section>
      <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/profile_yu.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 hover:scale-105 transition-all duration-300"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Yu Pei</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Welcome to my portfolio! I'm an emerging{" "}
          <strong>full stack developer</strong>
          passionate about building thoughtful digital experiences. With a
          strong foundation in <strong>TypeScript</strong> and{" "}
          <strong>Python</strong>, I craft solutions using modern frameworks
          like <strong>React</strong>, <strong>Angular</strong>,{" "}
          <strong>NestJs</strong>. Currently completing my studies, I combine
          these technical skills with user-centered design principles to develop
          applications that are both powerful and intuitive to use
        </p>
      </div>

      <FeaturedProjects projects={featuredProjects} />
    </section>
  );
}
