"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { GithubIcon, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Portfolio",
    description: "projects.portfolio.description",
    image: "/projects/portfolio.png",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Shadcn/ui"],
    github: "https://github.com/AdamKowalczuk/portfolio-2023",
    live: "https://adam-kowalczuk.netlify.app",
  },
  {
    title: "E-commerce",
    description: "projects.ecommerce.description",
    image: "/projects/ecommerce.png",
    technologies: ["React", "TypeScript", "Redux Toolkit", "TailwindCSS"],
    github: "https://github.com/AdamKowalczuk/ecommerce",
    live: "https://ecommerce-adamk.netlify.app",
  },
  {
    title: "Weather App",
    description: "projects.weather.description",
    image: "/projects/weather.png",
    technologies: ["React", "TypeScript", "OpenWeather API", "TailwindCSS"],
    github: "https://github.com/AdamKowalczuk/weather-app",
    live: "https://weather-adamk.netlify.app",
  },
] as const;

export const Projects = () => {
  const t = useTranslations("Projects");

  return (
    <section id="projects" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-foreground mb-12 text-center text-3xl font-bold">{t("title")}</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="bg-card text-card-foreground rounded-lg border shadow-sm transition-all hover:shadow-md"
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="p-6">
                <h3 className="text-foreground mb-2 text-xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{t(project.description)}</p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub - ${project.title}`}
                    >
                      <GithubIcon className="mr-2 h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Live Demo - ${project.title}`}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {t("liveDemo")}
                    </Link>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
