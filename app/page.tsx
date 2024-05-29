import Hero from './_sections/Hero'
import About from './_sections/About'
import Services from './_sections/Services'
import Portfolio from './_sections/Portfolio'
import Contact from './_sections/Contact'
import QA from './_sections/QA'
import Testimonials from './_sections/Testimonials'
import Testimonials2 from './_sections/Testimonials2'

export default function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Portfolio />
      </section>
      <section>
        <Testimonials2 />
      </section>

      <section>
        <QA />
      </section>
      <section>
        <Contact />
      </section>
      {/* <section>
        <Testimonials />
      </section> */}
    </>
  )
}
