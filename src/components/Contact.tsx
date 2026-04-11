import { useEffect, useRef } from 'react';

const links = [
  {
    label: 'Email',
    value: 'hello@andreidarius.dev',
    href: 'mailto:hello@andreidarius.dev',
  },
  {
    label: 'GitHub',
    value: '@Druuxd',
    href: 'https://github.com/Druuxd',
  },
  {
    label: 'Instagram',
    value: '@ftp.dru',
    href: 'https://instagram.com/ftp.dru',
  },
  {
    label: 'Discord',
    value: 'druxd',
    href: null,
  },
];

export default function Contact() {
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
      <h2 className="text-3xl font-bold mb-8 text-white">Contact</h2>
      <div className="flex flex-wrap gap-10">
        {links.map(({ label, value, href }) => (
          <div key={label}>
            <p className="text-zinc-400 text-sm mb-1">{label}</p>
            {href ? (
              <a
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="text-white hover:text-zinc-300 transition-colors"
              >
                {value}
              </a>
            ) : (
              <p className="text-white">{value}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
