import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
    {this.props.users && this.props.users.map((user, i) => <li key={i}>{user.username}</li>)}
          {this.props.userCount}
        </ul>
      </div>
    )
  }
}

function mapStateTeToProps(state) {
  return { users: state.users, userCount: state.users.length }
}

export default connect(mapStateTeToProps)(Users)
