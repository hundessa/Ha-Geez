import './App.css'
import Header from './Pages/Home page/Components/Header'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Banner from './Pages/Home page/Components/Banner';
import Category from './Pages/Home page/Components/Category';

function App() {
  return (
    <MantineProvider>
   <Header/>
   <Banner/>
   <Category/>
    </MantineProvider>
  )
}

export default App
