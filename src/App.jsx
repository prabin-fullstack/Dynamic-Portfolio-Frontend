import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import About from "./pages/About";
import Navbar from "./components/Navbar";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Skills from './pages/Skills'
import { useEffect, useState } from "react";
import api from "./services/api";

function App() {

  // for footer links
  const [project,setProject] = useState([])
  const [skills, setSkills] = useState([])

  useEffect(()=>{
    const getProject = async() =>{
      const response = await api.get('project/')
      const getSkills = await api.get('skills/')
      setSkills(getSkills.data)
      setProject(response.data)
      
    }
    getProject()
  },[])

const totalSkills = skills.reduce(
  (total, skill) => total + (skill.technologies?.length  || 0),
  0
)

  return (
    <>
      <Navbar />

      <section id="home">
        <Home  projectCount={project.length}  technologyCount={totalSkills}/>
      </section>
      <section id="abot">
        <About  projectCount={project.length}  technologyCount={totalSkills}/>
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="contact">
        <Contact />
      </section>

      <Footer project={project}/>
    </>
  );
}

export default App;
