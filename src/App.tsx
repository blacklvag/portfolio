import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { CommandPalette } from './components/layout/CommandPalette'
import { Hero } from './components/sections/Hero'
import { Stats } from './components/sections/Stats'
import { About } from './components/sections/About'
import { Skills } from './components/sections/Skills'
import { Projects } from './components/sections/Projects'
import { Experience } from './components/sections/Experience'
import { Achievements } from './components/sections/Achievements'
import { Terminal } from './components/sections/Terminal'
import { Contact } from './components/sections/Contact'
import { useCommandPalette } from './hooks/useCommandPalette'

function App() {
  const { isOpen, close } = useCommandPalette()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Terminal />
        <Contact />
      </main>
      <Footer />
      <CommandPalette isOpen={isOpen} onClose={close} />
    </>
  )
}

export default App
