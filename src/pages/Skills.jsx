import React from 'react'
import '../style/Home.css'
import SkillsCard from '../components/SkillsCard';
import { useEffect,useState } from 'react';
import axios from 'axios';
import api from '../services/api';
import prfileimage from '../assets/profile.jpeg'


function Skills() {

  const [skills, setSkills] = useState([])

  useEffect(()=>{
    const getSkills = async() => {
      try{
        const response = await api.get('skills/')
        setSkills(response.data)
        console.log(response.data)
      }catch (error){
        console.log(error);
      }
    }
    getSkills()
  },[])


  return (
    <div >
      

      <SkillsCard skills={skills} />
    </div>
  )
}

export default Skills
