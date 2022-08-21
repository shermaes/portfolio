import './App.css'
import Container from './components/container';
import Navbar from './components/navbar/Navbar';
import AboutMe from './components/aboutme/AboutMe';
import Projects from './components/projects';
import Contact from './components/contact';

function App() {
  return (
   <>
   <Navbar/>
   <Container>
    <AboutMe/>
    <Projects/>
   </Container>
   <Contact/>
   </>
  );
}

export default App;
