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
   fetch('https://reqres.in/api/users?page=2')
   .then(response=>response.json())
   .then(response=>this.setState({Monsters:response.data}));
  }

  render(){
    const {Monsters,searchfield} = this.state;
    const filtered = Monsters.filter(
      monster=>monster.first_name.toLowerCase().includes(searchfield.toLowerCase())
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
