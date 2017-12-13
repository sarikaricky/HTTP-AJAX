import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends } from' ../actions';

class FriendsList extends Component {
    componentDidMount() {
        this.props.getFriends(); 
    }
}

    render() {
        return (
            <div>
                <ul>
                    {this.props.friends.map((friend, i) => {
                       return (
                           <li key={i}>
                               <p>['Friend ${i+1}'}</p>
                               <p>{'Name: $[friend.name}'}'</p>
                               <p>{'Age: ${friend.age}'}

                       )
        )

    }