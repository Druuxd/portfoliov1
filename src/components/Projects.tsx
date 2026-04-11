import { useEffect, useRef } from 'react';

const projects = [
  {
    name: 'Shockwave',
    description: 'Browser-based PCB viewer. Load a board file, inspect it without leaving the browser.',
    status: 'Ongoing. Thesis project',
    stack: ['React', 'Canvas'],
    href: 'https://github.com/Druuxd/Shockwave',
  },
  {
    name: 'Lurk',
    description: 'Discord bot. Ask about an anime, get back data pulled from MAL.',
    status: 'Done',
    stack: ['Python', 'MAL API'],
    href: 'https://github.com/Druuxd/Discord-Bot',
  },
  {
    name: 'ZeroPassword',
    description: 'Password manager built in Java with a MongoDB backend.',
    status: 'Class project, shelved',
    stack: ['Java', 'MongoDB'],
    href: 'https://github.com/Druuxd/ZeroPassword',
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 opacity-0">
      <h2 className="text-3xl font-bold mb-8 text-white">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/50 flex flex-col gap-3 hover:-translate-y-1 hover:border-zinc-600 transition-all duration-200"
          >
            <h3 className="text-xl font-semibold text-white">{project.name}</h3>
            <p className="text-zinc-400 text-sm">{project.description}</p>
            <p className="text-zinc-600 text-xs">{project.status}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.stack.map((tag) => (
                <span key={tag} className="px-2 py-1 text-xs bg-zinc-800 text-zinc-300 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
