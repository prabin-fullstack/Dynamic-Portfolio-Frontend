import React from 'react'
import '../style/Home.css'
import ProjectCard from '../components/ProjectCard'
import { useState,useEffect } from 'react'
import api from '../services/api'

function Project() {

  const [project, setProject] = useState([])

  useEffect(()=>{
    const getProject = async() => {
      try{
        const response = await api.get('project/')
        setProject(response.data)
        console.log(response.data)
      }catch(error){
        console.log(error)
      }
    }
    getProject()
  },[])


  return (
    <div >
      
      <ProjectCard projects={project}/>
    </div>
  )
}

export default Project

