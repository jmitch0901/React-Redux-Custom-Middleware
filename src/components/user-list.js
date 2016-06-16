import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../actions';


class UserList extends Component {

  //JUST FOR SEEDING
  componentWillMount(){

    this.props.fetchUsers();
  }

  _renderUser(user){
    return (
      <div key={user.id} className="card card-block">
        <h4 className="card-title">{ user.name }</h4>
        <p className="card-text">{ user.company.name }</p>
        <a href={user.website} className="btn btn-primary">{ user.website }</a>
      </div>
    );
  }


  render(){

    return(

      <div className="user-list">
        { this.props.users.map(this._renderUser) }
      </div>

    );

  }
}

function mapStateToProps(state){
  return { users: state.users };
}

export default connect(mapStateToProps,action)(UserList);
