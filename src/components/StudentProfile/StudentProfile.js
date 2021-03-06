import React, {useState} from 'react'
import './style.css'

function StudentProfile({firstName, lastName, company, average, skill, email, avatar, id, studentData,  searchByTag}) {
    const [expand, setExpand] = useState(false)
    const [createTag, setCreatetag] = useState("")
    const [tags, setTags] = useState([])


    //Maps through the tags array and dispalys any added atgs
    const tag = tags.map((i, id)=>{return(<p className="tags" key={id}>{i}</p>)})
       

    //Calculating the average
    const gradeavg = average.reduce((total, grade) => total += parseInt(grade), 0) / average.length 

    //Here, We will map the average scores and display them in a P tag
    const scores = average.map((score, index)=> {return(<div key={index}><ul> <li style={{"color": "black"}}> Test {index + 1}: {score} %</li></ul></div> )})
 

    //This controls the toggle functionality for the button.
    const toggle = ()=>{
       !expand ? setExpand(true) : setExpand(false)
    }

    //This takes care of the adding tags functionality
    const addTags =(e, index)=>{
        e.preventDefault()
        if (e.key === "Enter" && e.target.value !== "") {
            setTags([...tags, e.target.value, index]);
            setCreatetag("")
        }
    }
    

   
    return (
        <div>

       <div className="row no-gutters">

         <div className="col-auto">
             <div className="avartarposition">
             <img src={avatar} className="avatar" alt="avatar" />
             </div>
         </div>

         <div className="col">
         <div className="card-block">
            <h4 className="fName">{firstName.toUpperCase()} {lastName.toUpperCase()}</h4>
            {expand ? <button className="expandbtn" onClick={toggle}>-</button>: <button className="expandbtn" onClick={toggle}>+</button> }
             <p className="details">Email: {email}</p>
             <p className="details">Company: {company}</p>
             <p className="details">Skill: {skill}</p>
             <p className="details">{gradeavg}%</p> 
             {tag}
             <input className="details" type="text" value={createTag} placeholder="Add new Tag"   onKeyUp={(e) => addTags(e)} onChange={(e)=>setCreatetag(e.target.value)} />
             <div className="scores" style={{display: expand ? "block" : "none" }}>
                 {scores}
             </div>
        </div>

         </div>
        </div>
        <hr />
       </div>
    )
}

export default StudentProfile
