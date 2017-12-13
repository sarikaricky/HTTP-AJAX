import React from 'react';
import axios from 'axios';

function Friend(props) {
  return (
      <li className="friend" key={i}>
      <p>{'Friend ${props.index + 1'}</p>
      <p>{'Friend ${props.index + 1'}</p>
      <p>{'Friend ${props.index + 1'}</p>
      <p>{'Friend ${props.index + 1'}</p>
      
export default class List extends React.Component {
  componentDidMount() {
      const endpoint = 'http://localhost:5000/friends';
      axios.get(endpoint).then(function(response) {
)     console.log('response', response);
  });
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