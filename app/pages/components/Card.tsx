import React from "react";
const Card =(props:Tprops)  => {
    return(
        <div>
            <h1>Name:{props.name}</h1>
            <h1>Rollno:{props.rollno}</h1>
            <h1>Day:{props.day}</h1>
            <h1>Timing:{props.timing}</h1>
            <h1>Center:{props.center}</h1>
            </div>        
    )
}
export default Card;