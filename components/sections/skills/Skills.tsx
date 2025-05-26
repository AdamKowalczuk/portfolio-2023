"use client";

import { cn } from "@/lib/utils";

const technologies = [
  {
    category: "Frontend",
    items: [
      { name: "React", description: "Biblioteka JavaScript do budowania interfejsów użytkownika" },
      { name: "Next.js", description: "Framework React do tworzenia aplikacji webowych" },
      { name: "TypeScript", description: "Typowany nadzbiór JavaScript" },
      { name: "Tailwind CSS", description: "Framework CSS do szybkiego stylowania" },
      { name: "Shadcn UI", description: "Komponenty UI oparte na Radix UI" },
      { name: "Radix UI", description: "Biblioteka komponentów UI z naciskiem na dostępność" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", description: "Środowisko wykonawcze JavaScript" },
      { name: "MongoDB", description: "Baza danych NoSQL" },
    ],
  },
  {
    category: "Narzędzia",
    items: [
      { name: "Git", description: "System kontroli wersji" },
      { name: "VS Code", description: "Edytor kodu" },
      { name: "Figma", description: "Narzędzie do projektowania UI/UX" },
    ],
  },
] as const;

export const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">Umiejętności</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {technologies.map((category) => (
            <div key={category.category} className="bg-card rounded-lg border p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold">{category.category}</h3>
              <ul className="space-y-4">
                {category.items.map((item) => (
                  <li key={item.name}>
                    <h4 className="text-primary font-medium">{item.name}</h4>
                    <p className="text-muted-foreground mt-1 text-sm">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
