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
      abilityScores:{
        strength,
        constitution,
        dexterity,
        intelligence,
        wisdom,
        charisma,
      }
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
    let abilityInfo = {...this.state.abilityScores, [key]: val}
    this.setState({abilityScores:abilityInfo})
  }
  addAbilities = () => {
    axios.post('/api/characters/abilities',this.state.abilityScores)
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
  render() {
    let {strength, constitution, dexterity, intelligence, wisdom,charisma}= this.state.abilityScores
    console.log(this.props.character)
    return (
      <div className="card card-body mb-3">
        <h1> <i class="fas fa-fist-raised"></i>Ability Scores</h1>
        <div>Strength:<input value={strength} onChange={(e)=>this.handleChange(e.target.value,'strength')}/></div>
        <div>Constitution:<input value={constitution} onChange={(e)=>this.handleChange(e.target.value,'constitution')}/></div>
        <div>Dexterity:<input value={dexterity} onChange={(e)=>this.handleChange(e.target.value,'dexterity')}/></div>
        <div>Intelligence:<input value={intelligence} onChange={(e)=>this.handleChange(e.target.value,'intelligence')}/></div>
        <div>Wisdom:<input value={wisdom} onChange={(e)=>this.handleChange(e.target.value,'wisdom')}/></div>
        <div>Charisma:<input value={charisma} onChange={(e)=>this.handleChange(e.target.value,'charisma')}/></div>
        <button onClick={this.addAbilities}>Update</button>
      </div>
    )
  }
}
let mapStateToProps=(state)=>{
  return{character:state.user}
}
export default connect(mapStateToProps,{userLoggedIn})(AbilityScores)
