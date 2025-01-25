import { metaData } from "app/config";
import Image from "next/image";
import Link from "next/link";

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
  return (
    <div className="mt-16">
      <h2 className="text-xl font-medium tracking-tight mb-8">
        Featured Projects
      </h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="lg:w-1/2 p-8">
                <h3 className="text-xl font-medium mb-3">{project.title}</h3>
                <p
                  className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-neutral-100 dark:bg-neutral-800 rounded-full"
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
                      className="text-neutral-700 dark:text-neutral-300 hover:text-blue-500 dark:hover:text-blue-400"
                    >
                      GitHub →
                    </Link>
                  )}
                  {project.demo && (
                    <Link
                      href={project.demo}
                      target="_blank"
                      className="text-neutral-700 dark:text-neutral-300 hover:text-blue-500 dark:hover:text-blue-400"
                    >
                      Live →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          href="/projects"
          className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
        >
          View all projects →
        </Link>
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
