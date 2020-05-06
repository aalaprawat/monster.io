import React from 'react'
import './individual-monster.css'
const Card=(props)=>{
    return(
        <div className = "card-container">
         <img className = "hi" alt={"image " + props.element.id } src={`https://robohash.org/${props.element.id}/set=set1`}/>
         <div>
            {props.element.id-6}
        </div>
            {props.element.first_name}
        
        <div>
            {props.element.email}
        </div>
        </div>
    )
}
export default Card;