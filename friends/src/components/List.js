import React from 'react';
import axios from 'axios';

import 
function Friend(props) {
  return (
      <li className="friend" key={i}>
      <p>{'Friend: ${props.index + 1'}</p>
      <p>{'Name: ${props.index + 1'}</p>
      <p>{'Age: ${props.index + 1'}</p>
      <p>{'Email:  ${props.index + 1'}</p>

export default class List extends React.Component {
  componentDidMount() {
      const endpoint = 'http://localhost:5000/friends';
      axios.get(endpoint).then(function(response) {
          this.setState({ friends: response.data })
      });
  }

  render() {
      const getFriendList = () => {
          return this.state.friends.map((friend, i) =>
      }
  }
  
  render() {
    return ( 
      <div className="list">
        <h1>Friends List will be here</h1>
        <div>
        <ul>
            {this.state.friends.map((friend, i) = >{
              return (
                  <li key={i>}
                  <p>{'Friend ${i + 1}'}</p>
                  <p>{'Name: ${friend.name}'}</p>
                  <p>{'Age: ${friend.age}'}</p>'
                  <p>{'Email: ${friend.email}'}</p>
                  </li>
            }
        })}
        </ul>
        </div>
      </div>
    );
  }
}