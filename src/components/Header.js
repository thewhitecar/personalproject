import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link } from 'react-router-dom'
import {userLoggedOut} from '../redux/reducer'
import axios from 'axios'
import Register from './Register'

 class Header extends Component {

  logout = () => {
    axios.get('/auth/logout').then(response => {
      this.props.userLoggedOut()
    })
  }
  render() {
    return (
      <div>
        <header className= "navbar navbar-expand-sm navbar-dark bg-danger mb-0 py-0  justify-content-center " > <h1><i class="fab fa-d-and-d ml-10"></i></h1><h1>Tabletop Pro</h1>
        {this.props.isAuthenticated ?
        <button onClick={this.logout}>Logout</button>:
        <button>
          <Link to ="/">login</Link>
          </button>}
        
        </header>
      </div>
    )
  }
}

function mapStateToProps(state){
  let {isAuthenticated} = state
  return {
    isAuthenticated
  }
}

export default connect(mapStateToProps, {userLoggedOut})(Header)
