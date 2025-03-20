 

import './App.css'
import Navbar from './Components/Navabar/Navbar'

import Mainroutes from './AllRoutes/Mainroutes'
import Footer from './Components/Footer/Footer'
// import About from './Pages/About'
// import Home from './Pages/Home'

function App() {




  // const aboutRef = useRef(null)
  // const recipeRef = useRef(null)
  // const refGallary = useRef(null)



  // const scrollToAbout = () => {
  //   aboutRef.current?.scrollIntoView({ behavior: "smooth" })
  // }
  // const scrollToRecipe=()=>{

  //   recipeRef.current?.scrollIntoView({behavior:"smooth"})
  // }
  // const scrollToSection = (Section) => {
  //   const refs = {
  //     recipe: recipeRef,
  //     gallary: refGallary,
  //   }
  //   refs[Section].current?.scrollIntoView({ behavior: "smooth" })
  // }

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <Mainroutes />
      <br />
      <br />
      <Footer/>
      
    </>
  )
}

export default App
