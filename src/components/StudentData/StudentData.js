import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import StudentProfile from '../StudentProfile/StudentProfile'
import './style.css'


function StudentData() {

    const [studentData, setStudentData] = useState([])
    const [searchByName, setSearchByName] = useState('')
    const [searchByTag, setSearchByTag] = useState("")
    
  
    
    
    useEffect(()=>{
     const fetchData = async () =>{
        const res = await Axios.get(`https://api.hatchways.io/assessment/students/`)
        const result= res.data
     console.log(result.students)
     setStudentData(result.students)
  
     }
     fetchData()
    }, [])



    // For search by name functionality 
    const filterByName = studentData.filter( profile =>{
      return profile.firstName.toLowerCase().includes(searchByName) || profile.lastName.toLowerCase().includes(searchByName)
    })


    return (
        <div>
            <input 
            placeholder="Search By Name"
            onChange={(e)=> setSearchByName(e.target.value)} 
            className="search" />
            <hr />

            <input 
            placeholder="Search By Tag"
            onChange={(e)=> setSearchByTag(e.target.value)} 
            className="search" />
            <hr />

            {filterByName.map((student, index)=>{
                return(
                  <StudentProfile 
                  key={index} 
                  id={index}
                  studentData={studentData}
                  searchByTag={searchByTag} 
                  firstName={student.firstName}
                  lastName={student.lastName}
                  skill={student.skill}
                  avatar={student.pic}
                  company={student.company}
                  email={student.email}
                  average={student.grades}
                  />
                )
            })}
        </div>
    )
}

export default StudentData
