import logo from './logo.svg';
import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from './components/Education';
import VolunteerExperience from './components/Volunteer';
import Footer from './components/Footer';
import Certificates  from './components/Certificates';
export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Skills />
      <Education />
      <Projects />
      <VolunteerExperience />
      <Contact />
      <Certificates/>
      <Footer />
    </main>
  );
}