import React from "react";
import {useNavigate} from "react-router-dom"
const End=()=>{
    const navigate=useNavigate()
    return(
        <>
            <h1 style={{textAlign:"center"}}>Ticket Successfully Booked!</h1>
            <button style={{width:"100%"}}  className="btn btn-warning" onClick={()=>{
                navigate("/")
            }}>Return Home</button>
        </>
    )
}
export default End