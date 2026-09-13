
import Footer from './component/Footer';
import Hero from './component/Hero'
import NavBar from './component/NavBar'
import TechnologySection from './component/TechnologyComponent/TechnologySection'
 import { ToastContainer} from 'react-toastify';

function App() {
  

  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <TechnologySection></TechnologySection>
      <ToastContainer />
      <Footer></Footer>
      
    </>
  )
}

export default App
