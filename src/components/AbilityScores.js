import React, { Component } from 'react'
import axios from 'axios'
import CharacterSheet from './CharacterSheet'
import { connect } from 'react-redux';
import {userLoggedIn}from '../redux/reducer'

 class AbilityScores extends Component {
  constructor(props){
    super(props)
    let {strength, constitution, dexterity, intelligence, wisdom,charisma}= props.character
    this.state={
        strength, strengthMod:0,
        constitution, constitutionMod:0,
        dexterity, dexterityMod:0,
        intelligence, intelligenceMod:0,
        wisdom, wisdomMod:0,
        charisma, charismaMod:0
    }
  }
  // componentDidMount(){
  //   let {abilityScores} = this.state
   
  //   axios.get(`/api/characters`).then(response=>{
  //     this.setState({
  //       abilityScores:response.data
  //     })
  //   })
  // }
  handleChange = (val, key)=> {
    this.setState({[key]: val})
  }
  addAbilities = () => {
    axios.post('/api/characters/abilities',this.state)
    .then(response=>{
      let {strength, constitution, dexterity, intelligence, wisdom,charisma}=response.data
      this.setState({
        strength,
        constitution,
        dexterity,
        intelligence,
        wisdom,
        charisma
      })
      this.props.userLoggedIn(response.data)
    })
  }

  mods=(score, name)=>{
    let mod = Math.floor((score-10)/2)
  
    let modName = `${name}Mod`;
    console.log(modName,1111111)
    this.setState({[modName]:mod})
  }

  render() {
    let {strength, constitution, dexterity, intelligence, wisdom,charisma, strengthMod, constitutionMod, dexterityMod, intelligenceMod, wisdomMod, charismaMod}= this.state
    console.log(this.props.character)
    return (
      <div className="card card-body mb-3">
        <h1> <i class="fas fa-fist-raised"></i>Ability Scores</h1>
        <div>Strength:<input value={strength} name="strength" onChange={(e)=>{this.handleChange(e.target.value,'strength'); this.mods(e.target.value, e.target.name) }}/><p>{strengthMod}</p></div>
        <div>Constitution:<input value={constitution} name="constitution" onChange={(e)=>{this.handleChange(e.target.value,'constitution'); this.mods(e.target.value, e.target.name)}}/><p>{constitutionMod}</p></div>
        <div>Dexterity:<input value={dexterity} name="dexterity" onChange={(e)=>{this.handleChange(e.target.value,'dexterity'); this.mods(e.target.value, e.target.name)}}/><p>{dexterityMod}</p></div>
        <div>Intelligence:<input value={intelligence} name="intelligence" onChange={(e)=>{this.handleChange(e.target.value,'intelligence'); this.mods(e.target.value, e.target.name)}}/><p>{intelligenceMod}</p></div>
        <div>Wisdom:<input value={wisdom} name="wisdom" onChange={(e)=>{this.handleChange(e.target.value,'wisdom'); this.mods(e.target.value, e.target.name)}}/><p>{wisdomMod}</p></div>
        <div>Charisma:<input value={charisma} name="charisma" onChange={(e)=>{this.handleChange(e.target.value,'charisma');this.mods(e.target.value, e.target.name)}}/><p>{charismaMod}</p></div>
        <button onClick={this.addAbilities}>Update</button>
      </div>
    )
  }
}
let mapStateToProps=(state)=>{
  return{character:state.user}
}
export default connect(mapStateToProps,{userLoggedIn})(AbilityScores)


