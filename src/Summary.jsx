import React, { useState } from "react";
import {Link,useLocation,useNavigate} from "react-router-dom"
const  Summary=(props)=>{
    const location=useLocation()
    let navigate=useNavigate()
    console.log(location.state)
    return(
        <>
            <h1 style={{textAlign:"center"}}>Showing Summary of {location.state.name}</h1>
            <div style={{backgroundColor:"lightgray"}} >
            <h4>{location.state.summary.slice(3,-4)}</h4>
            </div>
            <Link style={{ width: "100%", marginTop: "5px" }} className="btn btn-primary" to="/">Return Home</Link>
            <button style={{ width: "100%", marginTop: "5px"}} className="btn btn-warning" onClick={()=>{
                navigate("/form",{state:location.state})
            }}>Book a Ticket Now</button>  
        </>
    )
}
export default Summary