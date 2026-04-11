import Hero from './components/Hero'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <main className="max-w-4xl mx-auto px-6">
      <Hero />
      <Work />
      <Projects />
      <Contact />
    </main>
  )
}
