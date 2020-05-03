import React from 'react';
import './App.css';
import Search from './components/searchbar'
import MonsterList from './components/monster-list';
 

class App extends React.Component{
  constructor(){
    super();
    this.state={
      Monsters:[],
      searchfield:""
    }
  }
  componentDidMount(){
   fetch('http://dummy.restapiexample.com/api/v1/employees')
   .then(response=>response.json())
   .then(response=>this.setState({Monsters:response.data}));
  }

  render(){
    const {Monsters,searchfield} = this.state;
    const filtered = Monsters.filter(
      monster=>monster.employee_name.toLowerCase().includes(searchfield.toLowerCase())
    );
    return(
    <div>
      <h3 className="title">Monsters Inc.</h3>
      <Search handlechange={(e) => this.setState({searchfield : e.target.value})}></Search>
      <MonsterList monsters = {filtered}></MonsterList>
    </div>)
  }
}

export default App;
