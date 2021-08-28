import React,{useState,useEffect} from "react"; 
import "./Tempapp.css";
const Tempapp=()=>{
    const [city,setCity]=useState(null); 
    // city(first argument) is the past state and setCity is the present state 
    const [search,setSearch]=useState("Hyderabad"); 
    useEffect(()=>{

        const fetchApi=async()=>{
            const url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=84c0458b7646b33ee7bba9d6f0f330a5`;
            const response=await fetch(url);
            console.log(response); 
            const resJson=await response.json(); 
            // console.log(resJson); 
            setCity(resJson.main);
        };
          fetchApi(); 
    },[search])
    return(
        <>
       <div className="box">
           <div className="inputData">
               <input type="search" className="inputField" placeholder="Search Ex:Hyderabad" onChange={(event)=>{
                   console.log("event", event); 
                    setSearch(event.target.value)
               }}/>
            </div>

            {
                !city?(<p className="errorMsg">No Data Found</p>):( 
                    <div>
                     <div className="info">
           <h2 className="location">
           <i className="fas fa-map-marker" aria-hidden="true"><p className="cityname">{search}</p></i>
           </h2>
         <h1 className="temp">{city.temp}°Cel</h1>
         <h3 className="tempmin_max">min: {city.temp_min}°Cel | max: {city.temp_max}°Cel </h3>
           
       </div>
       <div className="wave-one"> </div>
       <div className="wave-two"> </div>
       <div className="wave-three"> </div> 
       </div>
      )
            }

            
        </div>
             
       
       </>
    )
}
export default Tempapp; 