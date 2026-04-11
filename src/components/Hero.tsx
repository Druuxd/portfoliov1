import logoSrc from '../assets/Logo.svg';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <img
          src={logoSrc}
          alt="logo"
          className="w-10 h-10 mx-auto mb-6 opacity-0 animate-fade-in"
          style={{ animationDelay: '0ms' }}
        />
        <h1
          className="text-5xl md:text-7xl font-bold text-white mb-4 opacity-0 animate-fade-in"
          style={{ animationDelay: '200ms' }}
        >
          Andrei Darius
        </h1>
        <p
          className="text-xl md:text-2xl text-zinc-400 mb-6 opacity-0 animate-fade-in"
          style={{ animationDelay: '400ms' }}
        >
          Software Engineer / Data & Automation
        </p>
        <p
          className="text-lg text-zinc-500 max-w-2xl mx-auto opacity-0 animate-fade-in"
          style={{ animationDelay: '600ms' }}
        >
          I build scrapers, automation tools, and things that run quietly in the background.
        </p>
      </div>
    </section>
  );
}
