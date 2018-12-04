import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'
import CharacterSheet from './CharacterSheet'
import Login from "./login"

import Header from './Header'
import BioForm from './BioForm'


export default class Bio extends Component {
  constructor(){
    super()
    this.state = {
    bio:{}
    }
  }

  componentDidMount(){
    let {id}=this.props.match.params
    axios.get(`/api/character/${id}`).then(response=>{
      this.setState({
        bio:response.data
      })
    })
  }
  render() {
    return (
      <div>
        <Header/>
        <h1>
        Bio
       <BioForm/>
        </h1>
      </div>
    )
  }
}
