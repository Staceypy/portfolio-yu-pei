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
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");

  const openModal = (image: string, title: string) => {
    setSelectedImage(image);
    setSelectedTitle(title);
    setModalOpen(true);
  };

  return (
    <div className="mt-16">
      <h2 className="text-xl font-bold tracking-tight mb-8 text-[#FF8C42] dark:text-[#FF8C42]">
        Featured Projects
      </h2>
      <div className="space-y-16">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            {/* Full-width image section */}
            <div
              className="mb-6 cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-[1.01]"
              onClick={() => openModal(project.image, project.title)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-cover h-[400px]"
              />
            </div>

            {/* Project info section */}
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-medium mb-4">{project.title}</h3>
                <p
                  className="mb-6 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />
              </div>

              <div className="md:w-1/3 flex flex-col justify-between">
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
                      className="inline-block rounded-lg bg-buttonBg text-buttonText hover:bg-buttonHoverBg hover:text-buttonHoverText shadow-custom-default hover:shadow-custom-hover transition-all duration-300 px-4 py-2"
                    >
                      GitHub →
                    </Link>
                  )}
                  {project.demo && (
                    <Link
                      href={project.demo}
                      target="_blank"
                      className="inline-block rounded-lg bg-buttonBg text-buttonText hover:bg-buttonHoverBg hover:text-buttonHoverText shadow-custom-default hover:shadow-custom-hover transition-all duration-300 px-4 py-2"
                    >
                      Live →
                    </Link>
                  )}
                </div>
              </div>
            </div>

            {/* Divider */}
            <hr className="my-12 border-t border-gray-300 dark:border-gray-600" />
          </div>
        ))}
      </div>

      {/* Image Modal for fullscreen view */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={() => setModalOpen(false)}
        >
          <div className="max-w-4xl max-h-[90vh]">
            <div className="relative">
              <button
                className="absolute top-4 right-4 text-white text-xl bg-black bg-opacity-50 w-10 h-10 rounded-full"
                onClick={() => setModalOpen(false)}
              >
                ×
              </button>
              <img
                src={selectedImage}
                alt={selectedTitle}
                className="max-h-[90vh] max-w-full"
              />
            </div>
          </div>
        </div>
      )}

      {/* Structured data */}
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
