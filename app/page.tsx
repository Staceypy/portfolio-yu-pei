import Image from "next/image";
import FeaturedProjects from "./components/FeaturedProjects";
import { metaData, socialLinks } from "./config";
import { SocialLinks } from "./components/SocialLinks";

export default function Page() {
  // Featured projects data
  const featuredProjects = [
    {
      title: "AI Chatbot",
      description:
        "an End-to-End AI chatbot built using LangGraph, FastAPI, and Streamlit. support customizing overall conversation prompt",
      image: "/projects/chatbot.png",
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
      image: "/projects/break2.png",
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
      {/* Hero Section with Warm Gradient in Bottom Right Corner */}
      <div className="relative overflow-hidden rounded-2xl mb-16 p-8 bg-backgroundL dark:bg-[#2f3e46] shadow-custom-default">
        {/* Grid pattern background */}
        <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')] dark:opacity-5"></div>

        {/* Warm gradient accent in bottom right corner */}
        <div className="absolute right-0 bottom-0 w-64 h-64 rounded-tl-full bg-gradient-to-tl from-[#FF8C42]/25 to-[#FFCC33]/5 dark:from-[#FF8C42]/20 dark:to-[#FFA07A]/5 blur-md"></div>

        <div className="relative flex flex-col md:flex-row items-center md:items-start gap-6 z-10">
          <div className="flex-shrink-0 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#FF8C42] to-contrastL rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              className="relative block"
            >
              <Image
                src="/profile_yu.png"
                alt="Profile photo"
                className="rounded-full bg-lightL dark:bg-[#2f3e46] h-40 w-40 object-cover shadow-custom-default hover:scale-105 transition-all duration-300"
                width={160}
                height={160}
                unoptimized
                priority
              />
            </a>
          </div>

          <div className="flex-grow text-center md:text-left">
            <div className="inline-flex items-center mb-4 px-3 py-1 rounded-full bg-[#FF8C42]/20 dark:bg-[#FF8C42]/20 text-[#FF8C42] dark:text-[#FFA07A] text-sm font-medium">
              <svg
                className="w-4 h-4 mr-1.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              Copenhagen, Denmark
            </div>

            <div className="inline-flex items-center mb-4 ml-0 md:ml-3 px-3 py-1 rounded-full bg-accentL/20 dark:bg-accentL/10 text-textL dark:text-textD text-sm font-medium">
              <span className="mr-1.5 h-2 w-2 rounded-full bg-[#FF8C42]"></span>
              Available for hire - Summer 2025
            </div>

            <h1 className="text-4xl font-bold text-textL dark:text-textD mb-2">
              Yu Pei
            </h1>
            <p className="text-textNormalL dark:text-textNormalD text-xl mb-4">
              Full-Stack Developer & AI Enthusiast
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-4">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      {/* About Me Section with Card Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-lightL dark:bg-[#2f3e46]/80 rounded-xl p-6 shadow-custom-default hover:shadow-custom-hover transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <span className="bg-accentL/20 dark:bg-accentL/20 text-textL dark:text-textD p-2 rounded-lg mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M10 4a1 1 0 100 2 1 1 0 000-2zm0 10a1 1 0 100 2 1 1 0 000-2z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M10 12a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            About Me
          </h2>
          <p className="text-textNormalL dark:text-textNormalD leading-relaxed">
            I'm passionate about building thoughtful digital experiences. With a
            strong foundation in
            <span className="inline-block px-2 py-1 mx-1 text-xs font-medium rounded bg-accentL/20 dark:bg-accentL/30 text-textNormalL dark:text-textNormalD">
              TypeScript
            </span>{" "}
            and
            <span className="inline-block px-2 py-1 mx-1 text-xs font-medium rounded bg-accentL/20 dark:bg-accentL/30 text-textNormalL dark:text-textNormalD">
              Python
            </span>
            , I craft solutions using modern frameworks like
            <span className="inline-block px-2 py-1 mx-1 text-xs font-medium rounded bg-accentL/20 dark:bg-accentL/30 text-textNormalL dark:text-textNormalD">
              React
            </span>
            ,
            <span className="inline-block px-2 py-1 mx-1 text-xs font-medium rounded bg-accentL/20 dark:bg-accentL/30 text-textNormalL dark:text-textNormalD">
              NextJS
            </span>
            , and
            <span className="inline-block px-2 py-1 mx-1 text-xs font-medium rounded bg-accentL/20 dark:bg-accentL/30 text-textNormalL dark:text-textNormalD">
              NestJS
            </span>
            .
          </p>
        </div>

        <div className="bg-lightL dark:bg-[#2f3e46]/80 rounded-xl p-6 shadow-custom-default hover:shadow-custom-hover transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <span className="bg-accentL/20 dark:bg-accentL/20 text-textL dark:text-textD p-2 rounded-lg mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            What I'm Doing
          </h2>
          <div className="text-textNormalL dark:text-textNormalD leading-relaxed">
            <p className="mb-4">
              Currently working as an{" "}
              <strong className="text-contrastL dark:text-textD">
                AI Student Developer
              </strong>{" "}
              while completing my studies. Graduating this summer and actively
              looking for full-time developer positions.
            </p>

            <div className="mt-4 flex justify-end">
              <span className="animate-pulse inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-contrastL/20 dark:bg-contrastL/20 text-contrastL dark:text-textD">
                <span className="mr-1.5 h-2 w-2 rounded-full bg-contrastL dark:bg-textD"></span>
                Available Summer 2025
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Section with Warm Vivid Highlighting */}
      <div className="bg-backgroundL dark:bg-[#2f3e46]/50 rounded-xl p-6 mb-16 shadow-custom-default overflow-hidden relative">
        {/* Warm gradient background accent */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#FFB347]/10 to-[#FFCC33]/5 dark:from-[#FF8C42]/10 dark:to-[#FFA07A]/5"></div> */}
        <div className="absolute right-0 bottom-0 w-64 h-64 rounded-tl-full bg-gradient-to-tl from-[#FF8C42]/25 to-[#FFCC33]/5 dark:from-[#FF8C42]/20 dark:to-[#FFA07A]/5 blur-md"></div>

        <div className="relative z-10">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <span className="bg-[#FF8C42] dark:bg-[#FF8C42] text-white dark:text-white p-2 rounded-lg mr-3 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="text-textL dark:text-textD">My Achievements</span>
          </h2>

          <ul className="space-y-4 text-textNormalL dark:text-textNormalD">
            <li className="flex items-start group">
              <span className="h-5 w-5 rounded-full bg-[#FF8C42] dark:bg-[#FF8C42] flex items-center justify-center mt-0.5 mr-3 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="h-3 w-3 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </span>
              <span className="group-hover:text-[#FF8C42] dark:group-hover:text-[#FFA07A] transition-colors duration-300">
                Developed and deployed 6+ full-stack applications with modern
                technologies
              </span>
            </li>

            <li className="flex items-start group">
              <span className="h-5 w-5 rounded-full bg-[#FF8C42] dark:bg-[#FF8C42] flex items-center justify-center mt-0.5 mr-3 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="h-3 w-3 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </span>
              <span className="group-hover:text-[#FF8C42] dark:group-hover:text-[#FFA07A] transition-colors duration-300">
                Built AI-powered solutions utilizing advanced NLP techniques and
                RAG architecture
              </span>
            </li>

            <li className="flex items-start group">
              <span className="h-5 w-5 rounded-full bg-[#FF8C42] dark:bg-[#FF8C42] flex items-center justify-center mt-0.5 mr-3 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="h-3 w-3 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </span>
              <span className="group-hover:text-[#FF8C42] dark:group-hover:text-[#FFA07A] transition-colors duration-300">
                Contributed to open-source projects with 100+ stars on GitHub
              </span>
            </li>

            <li className="flex items-start group">
              <span className="h-5 w-5 rounded-full bg-[#FF8C42] dark:bg-[#FF8C42] flex items-center justify-center mt-0.5 mr-3 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="h-3 w-3 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </span>
              <span className="group-hover:text-[#FF8C42] dark:group-hover:text-[#FFA07A] transition-colors duration-300">
                Delivered client projects on time with exceptional quality and
                positive feedback
              </span>
            </li>

            <li className="flex items-start group">
              <span className="h-5 w-5 rounded-full bg-[#FF8C42] dark:bg-[#FF8C42] flex items-center justify-center mt-0.5 mr-3 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="h-3 w-3 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </span>
              <span className="group-hover:text-[#FF8C42] dark:group-hover:text-[#FFA07A] transition-colors duration-300">
                Continuously learning and applying new technologies to stay at
                the cutting edge
              </span>
            </li>
          </ul>
        </div>

        {/* Decorative element */}
        <div className="absolute -right-12 -bottom-12 w-40 h-40 rounded-full bg-gradient-to-tr from-[#FF8C42]/20 to-[#FFCC33]/10 dark:from-[#FF8C42]/10 dark:to-[#FFA07A]/5 blur-xl"></div>
      </div>

      <FeaturedProjects projects={featuredProjects} />
    </section>
  );
}
