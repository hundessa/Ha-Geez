import './App.css'
import Header from './Pages/Home page/Components/Header'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Banner from './Pages/Home page/Components/Banner';
import Category from './Pages/Home page/Components/Category';
import AboutUs from './Pages/Home page/Components/AboutUs';
import Popular_Courses from './Pages/Home page/Components/Popular_Courses';
import Testimonials from "./Pages/Home page/Components/Testimonials"

function App() {
  return (
    <MantineProvider>
   <Header/>
   <Banner/>
   <Category/>
   <AboutUs/>
   <Popular_Courses/>
   <Testimonials/>
    </MantineProvider>
  )
}

export default App
