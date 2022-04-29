import React from 'react'
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './dev.css' 



const Dev = () => {

    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [height, setHeight] = useState('')
    const [description, setDescription] = useState('')
    const [weight, setWeight] = useState('')
    const [list, setList] = useState([])
    const [img, setImage] = useState('./')

    const [time, setTime] = useState(toString(Date.now()))
    const handleClick =(e)=>{
       
        const newPatient ={
            id:Math.random(),
            firstname:fName,
            lastname:lName,
             createtime:time
            

        };
        setList([...list,newPatient])
        e.preventDefault();
    }
    
  return (
      
          
          
          <div id="wrap" className="">
                <br/>
                <br/>
                <div className="container align-items-center">
                
                    <h1>Provide Details to Add Patient</h1><br/>

                    <form >

                        <div>First Name: <input  value={fName} onChange={(e)=>setFName(e.target.value)} className="form-control mr-sm-2"  type="text" placeholder="First name" /></div><br/>
                        <div>Last Name: <input className="form-control mr-sm-2" value={lName} onChange={(e)=>setLName(e.target.value)} type="text" placeholder="Last name" /></div><br/>
                        <div className="radio" >Gender:<br/> <input className="" name="gender" value="Male"  type="radio" /> Male <input className="" name="gender" value="Female"  type="radio" /> Female </div><br/>
                        <div>Age: <input className="form-control mr-sm-2" value={age} onChange={(e)=>setAge(e.target.value)}  type="text" placeholder="Age" /></div><br/>
                        <div>Email: <input className="form-control mr-sm-2" value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" /></div><br/>
                        <div>Weight: <input className="form-control mr-sm-2" value={weight} onChange={(e)=>setWeight(e.target.value)} type="text" placeholder="Weight in Kg" /></div><br/>
                        <div>Height: <input className="form-control mr-sm-2" value={height} onChange={(e)=>setHeight(e.target.value)} type="text" placeholder="Height in Metre" /></div><br/>
                        <div>Description: <input className="form-control mr-sm-2" value={description} onChange={(e)=>setDescription(e.target.value)}  type="text" /></div><br/>
                    
                    <div> <button onClick={handleClick} className="btn btn-success" type="submit">Add Patient</button> </div>
                    
                    </form>

                    <h3 style={{color: "green"}} className="label label-success"></h3>
                    
                </div> 
                {list.map((t,i) => (
            <li key={i}>
                
              {t.firstname}{t.lastname} 
              <br/>
              {t.createtime}
              
              
            </li>
          ))}
            </div>
            
            
    
  )
}

export default Dev