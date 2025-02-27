"use client";
import { metaData } from "app/config";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ImageModal from "./ImageModal";
// Define the project type for better type safety
interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  github?: string;
  demo?: string;
}

interface FeaturedProjectsProps {
  projects: Project[];
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [selectedImage, setSelectedImage] = useState("");
  // const [selectedTitle, setSelectedTitle] = useState("");

  // const openModal = (imageSrc, title) => {
  //   setSelectedImage(imageSrc);
  //   setSelectedTitle(title);
  //   setModalIsOpen(true);
  // };

  // const closeModal = () => {
  //   setModalIsOpen(false);
  // };

  return (
    <div className="mt-16">
      <h2 className="text-xl font-medium tracking-tight mb-8">
        Featured Projects
      </h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index}>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="rounded-lg lg:w-1/2 min-h-[300px] flex items-center justify-center">
                {/* <Image
                  src={project.image}
                  alt={project.title}
                  width={1000}
                  height={1000}
                  className="w-full max-h-[320px] object-contain"
                  style={{
                    objectFit: "contain",
                    maxWidth: "100%",
                  }}
                /> */}
                <figure>
                  <img src={project.image} alt={project.title} />
                </figure>
              </div>

              <div className="rounded-lg bg-lightL dark:bg-backgroundL  lg:w-1/2 p-8 shadow-custom-default">
                <h3 className="text-xl font-medium mb-3">{project.title}</h3>
                <p
                  className="mb-6 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm text-white bg-accentL dark:bg-accentL rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      className="inline-block rounded-lg bg-buttonBg text-buttonText hover:bg-buttonHoverBg hover:text-buttonHoverText shadow-custom-default hover:shadow-custom-hover transition-all duration-300 p-2"
                    >
                      GitHub →
                    </Link>
                  )}
                  {project.demo && (
                    <Link
                      href={project.demo}
                      target="_blank"
                      className="inline-block rounded-lg bg-buttonBg text-buttonText hover:bg-buttonHoverBg hover:text-buttonHoverText shadow-custom-default hover:shadow-custom-hover transition-all duration-300 p-2"
                    >
                      Live →
                    </Link>
                  )}
                </div>
              </div>
            </div>
            {/* Divider */}
            <hr className="my-8 border-t border-gray-300 dark:border-gray-600" />
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        {/* <Link
          href="/projects"
          className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
        >
          View all projects →
        </Link> */}
      </div>
      {/* Add structured data for each project */}
      {projects.map((project, index) => (
        <script
          key={`structured-data-${index}`}
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: project.title,
              description: project.description,
              image: `${metaData.baseUrl}${project.image}`,
              author: {
                "@type": "Person",
                name: metaData.name,
              },

              url: project.demo || project.github,
              keywords: project.techStack.join(", "),
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
              },
            }),
          }}
        />
      ))}
    </div>
  );
}
