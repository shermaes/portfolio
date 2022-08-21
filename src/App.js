import './App.css'
import Container from './components/container';
import Navbar from './components/navbar/Navbar';
import AboutMe from './components/aboutme/AboutMe';

function App() {
  return (
   <>
   <Navbar/>
   <Container>
    <AboutMe/>
   </Container>
   </>
  );
}

export default App;
