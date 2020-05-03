import React from 'react'
import Card from './individual-monster'
import './monster-list.css'
const MonsterList=(props)=>{
    return(
    <div >
        <div className="card-list">
        {props.monsters.map(monster=>(<Card element = {monster}> </Card>))} 
        </div>
    </div>)
}
export default MonsterList;