import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Features } from './components/features'
import { About } from './components/about'
import { Services } from './components/services'
import { Testimonials } from './components/testimonials'
import { Contact } from './components/contact'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'
import Grid1 from './grid'
import Advantages from './components/advantages'
import Welcomingsection from './components/DescPage'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <Welcomingsection/>
      <About data={landingPageData.About} />
      <Advantages/>
      <Services data={landingPageData.Services}/>
      <Testimonials data={landingPageData.Testimonials} />
      <Grid1/>
      <Contact data={landingPageData.Contact} />
    </div>
  )
}

export default App
