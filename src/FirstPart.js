import React, { useEffect, useState } from "react";
import Summary from "./Summary";
import {useNavigate} from "react-router-dom"
const FirstPart = (props) => { 
    let navigate=useNavigate()
    const [query, setquery] = useState("")
    const [fullquery, setfullquery] = useState("all")
    const [data, setdata] = useState([])
    useEffect(() => {
        const Tvmaze = async () => {
            const url = `https://api.tvmaze.com/search/shows?q=${fullquery}`;
            const responce = await fetch(url)
            const resJson = await responce.json()
            setdata(resJson)
            console.log(resJson)
        }
        Tvmaze()
    }, [fullquery])
    const inputEvent = (event) => {
        setquery(event.target.value)
    }
    const onSubmit = () => {
        setfullquery(query)
    }
    return (
        <>
            <div className="main-div">
                <div className="div">
                    <h1 className="heading">TV MAZE</h1>
                    <h3 className="heading-low" style={{ textAlign: "center" }}>Search Any TV Series And Movies !</h3>
                    <input className="search" type="text" placeholder="Search Any TV Series And Movies (eg: Mirzapur)" onChange={inputEvent} autoComplete="Off"></input>
                    <button id="button" className="btn btn-warning" onClick={onSubmit}>Search</button>
                </div>
                <div>

                    {

                        data.map((child_data) => {
                            return (
                                <>

                                    <div class="card my-2" style={{ backgroundColor: "black" }} >
                                        <img style={{ height: "10%" }} src={child_data.show.image.medium} class="card-img-top" alt="img" />
                                        <div className="card-body">
                                            <h5 className="card-title" style={{ color: "yellow" }}>{child_data.show.name}</h5>
                                            <p className="card-text" style={{ color: "skyblue", textTransform: "uppercase" }}>{child_data.show.genres[0]}</p>
                                            <p className="card-text" style={{ color: "white", textTransform: "uppercase" }}>{"Lang : " + child_data.show.language}</p>
                                            <p className="card-text" style={{ color: "white", textTransform: "uppercase" }}>{"PREMIERED : " + child_data.show.premiered}</p>
                                            <p className="card-text" style={{ color: "white", textTransform: "uppercase", color: "skyblue", }}>{"Ratings : " + child_data.show.rating.average + "/10"}</p>
                                            <button style={{ width: "100%", marginTop: "5px" }} className="btn btn-warning" onClick={() => window.open(child_data.show.url)}>Read Full Article on {child_data.show.name}</button>
                                            <button  style={{ width: "100%", marginTop: "5px"}}  className="btn btn-info" onClick={()=>{
                                                navigate("/summary",{state:child_data.show})
                                            }}>Summary</button>
                                        </div>
                                    </div>
                                </>


                            )
                        })

                    }
                </div>
                
            </div>
        </>
    )
}
export default FirstPart