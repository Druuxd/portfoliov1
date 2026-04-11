import { useEffect, useRef } from 'react';

export default function Work() {
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
      <h2 className="text-3xl font-bold mb-8 text-white">Work</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-semibold text-white">Channelsight</h3>
          <p className="text-zinc-400 mb-2">Software Engineer, Oct 2024 – present</p>
          <p className="text-zinc-500">
            DAX team. Building and maintaining scrapers for manufacturer retail pages. Node.js, Cheerio, Puppeteer.
            Thousands of crawlers running daily. Validate output, catch data issues before they propagate.
            Built two internal tools to remove the manual grunt work.
          </p>
        </div>
      </div>
    </section>
  );
}
