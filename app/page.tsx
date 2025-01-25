import Image from "next/image";
import FeaturedProjects from "./components/FeaturedProjects";
import { socialLinks } from "./config";

export default function Page() {
  // Featured projects data
  const featuredProjects = [
    {
      title: "AI Chatbot for ESG Reporting",
      description:
        "a chatbot designed to answer customer questions regarding ESG regulations and reporting. It utilizes RAG architecture powered by LangChain and Pinecone.",
      image: "/project1.png", // Add your project screenshot
      techStack: ["Python", "Generative AI"],
      github: "https://github.com/Staceypy/esg-chatbot",
      demo: "https://demo-link.com", // Optional
    },
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
      image: "/projects/hello2.png", // Add your project screenshot
      techStack: ["JavaScript", "Webflow", "Wized", "Xano"],
      demo: "https://www.helloada.ai/en/eng", // Optional
    },
    {
      title: "React Shopping Website",
      description:
        "A brief description of your project and what problem it solves.",
      image: "/project2.png", // Add your project screenshot
      techStack: ["React", "TypeScript", "Node.js"],
      github: "https://github.com/Staceypy/shopping-website-react",
    },
  ];

  return (
    <section>
      <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Yu Pei</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Welcome to my portfolio! I am a junior software engineer with a
          passion for building products that make a difference.
        </p>
      </div>

      <FeaturedProjects projects={featuredProjects} />
    </section>
  );
}
