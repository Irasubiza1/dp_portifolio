import Image from 'next/image'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Projects />
    </>
  )
}
