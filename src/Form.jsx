import React, { useEffect, useState } from "react";
import {useLocation,useNavigate} from "react-router-dom"
const getLocalItems=()=>{
    const list=localStorage.getItem("lists")
    if(!list) return {
        fname:"",
        lname:"",
        email:"",
        phone:""
    }
    return JSON.parse(list)
}
const Form=()=>{  
    const navigate=useNavigate()
    const location=useLocation()
    const [fullname,setfullname]=useState(getLocalItems)
    const inputEvent=(event)=>{
        const {name,value}=event.target
        setfullname((preValue)=>{
            //console.log(preValue)
            return {
                ...preValue,
                [name]:value    
            }
        })
    }
    const onSubmits=(event)=>{
        event.preventDefault()
        alert("submittes")
    }
    const submit=()=>{
        navigate("/end")
        console.log(fullname)
    }
    useEffect(()=>{
        localStorage.setItem("lists",JSON.stringify(fullname))
    },[fullname])
    return (
        <>
            <div style={{backgroundColor:"lightgray",textAlign:"center"}}>
            <h1>Book Your Tickets Now </h1>
            <h4>Show Name: {location.state.name}</h4>
            <h4>Lang: {location.state.language}</h4>
            <h4>Ratings: {location.state.rating.average}</h4>
            </div>
            <div>
            <h1 style={{backgroundColor:"lightblue",textAlign:"center"}}>Enter Details To Book A Ticket</h1>
            <form onSubmit={onSubmits}>
                <div>
                    {/*<h1>
                        Hello {fullname.fname} {fullname.lname}
                    
                    </h1>
                    <p>{fullname.email}</p>
                    <p>{fullname.phone}</p>*/}
                    <input style={{width:"80%",marginLeft:"30px",marginTop:"10px"}}
                    type="text"
                    placeholder="Enter Your Name"
                    name="fname"
                    onChange={inputEvent}
                    value={fullname.fname}
                    />
                    <br/>
                    <input style={{width:"80%",marginLeft:"30px",marginTop:"10px"}}
                    type="text"
                    placeholder="Enter Your last name"
                    name="lname"
                    onChange={inputEvent}
                    value={fullname.lname}
                    />
                    <br/>
                    <input style={{width:"80%",marginLeft:"30px",marginTop:"10px"}}
                    type="text"
                    placeholder="Enter Your Email"
                    name="email"
                    onChange={inputEvent}
                    value={fullname.email}
                    />
                    <br/>
                    <input style={{width:"80%",marginLeft:"30px",marginTop:"10px"}}
                    type="text"
                    placeholder="Enter Your Number"
                    name="phone"
                    onChange={inputEvent}
                    value={fullname.phone}
                    />
                    <button className="btn btn-warning" onClick={submit} style={{width:"100%",marginTop:"20px"}}>Submit</button>
                </div>
            </form>
            </div>

        </>
    )
}
export default Form