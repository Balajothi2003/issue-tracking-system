import React,{useEffect,useState} from 'react'
import axios from'axios'
export default function Admin() {
    const[post,setpost]=useState([])
    const[name,setname]=useState('')
    const[emailid,setemailid]=useState('')
    const[rollno,setrollno]=useState('')
    const[correctionno,setcorrectionno]=useState('')

    useEffect(()=>
    {
        axios.get('http://localhost:3001/task')
        .then(res=>{setpost(res.data)})
        .catch(err=>{console.log(err)})
    })
    const handlesubmit=()=>
    {
        axios.post('http://localhost:3001/task',
        {
            "name":name,"emailid":emailid,"rollno":rollno,"correctionno":correctionno})
            .then(res=>{console.log(res)})
           .catch(err=>{console.log(err)})

    }
    const handledelete=()=>
    {
        axios.delete(`http://localhost:3001/task/${name}`)
        .then(res=>{console.log(res)})
        .catch(err=>{console.log(err)})
        
    }
   
  return (
    <div className="place1">
        <h1>Add Issue</h1>
      
      <br></br>
      <form className="form1" onSubmit={handlesubmit}>
        <br></br>
        <label>Name:</label>
        <input type='text' value={name} onChange={(e)=>setname(e.target.value)}/><br></br><br></br>
        <label>Email id:</label>
        <input type='text' value={emailid} onChange={(e)=>setemailid(e.target.value)}/><br></br><br></br>
        <label>Rollno:</label>
        <input type='text' value={rollno} onChange={(e)=>setrollno(e.target.value)}/><br></br><br></br>
        <label>Correction no:</label>
        <input type='text' value={correctionno} onChange={(e)=>setcorrectionno(e.target.value)}/><br></br><br></br>
        <button type='submit'>submit</button>
      </form>
      <br></br>
      <br></br>
      <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email id</th>
                <th>Roll no</th>
                <th>Correction no</th>
            </tr>
        </thead>
        <tbody>
            {post.map(x=>(
                <tr>
                    <td>{x.name}</td>
                    <td>{x.emailid}</td>
                    <td>{x.rollno}</td>
                    <td>{x.correctionno}</td>
                   <td><button onClick={()=>handledelete(x.name)}>Delete</button></td>
                </tr>
                
            ))}
        </tbody>
      </table><br></br>
      
    </div>
  )
}



