import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriend, updateFriend, deleteFriend } from '../actions';

class AddFriend extends Component { 
   constructor() {
       super(); 

       this.state ={ 
           name: '',
           age: '',
           email: '',
           index: ''
   };
}

handleNameChange = (e) => {
};

handleAgeChange = (e) =>{
};

handleEmailChange = (e) => {
};

handleIndexChange = (e) => {
};

newFriend = (e) => {
};

updateFriend = (e) => {
};

deleteFriend = (e) => {
};

render() {
    return (
        <form>
            <input value={this.state.name} onChange={this.handleNameChange} placeholder="Name" />
            <input value={this.state.name} onChange={this.handleNameChange} placeholder="Name" />
            <input value={this.state.name} onChange={this.handleNameChange} placeholder="Name" />
            <input value={this.state.name} onChange={this.handleNameChange} placeholder="Name" />
            <button onClick={this.newFriend}>Add</button>
            <button onClick={this.newFriend}>Add</button>
            <button onClick={this.newFriend}>Add</button>
        </form>

      );
  }
}
export default connect(null, {addFriend, updateFriend, deleteFriend }) (AddFriend);

//[Component] - dispatches -> [Action] - send to -> [Reducers]

/* 
     -write the actions
     -write the action creators => signature for the function(num, array) { return { type: '', payload: } }
     -write the reducers <= this is implementation of the action, how am I to do this?
     -write the component.
     -connect to Redux.  Do I need to react to changes on the store? Am I dispatching actions

store: {
    friends: friendsReducer, 
    selectedFriend: friendsReducer,
    isFetchingData: false,
    spinnerShouldShow: false
}

function mapDispatchToProps() {
    return {
        showSpinner: dispatch(actionCreator(args))
    }
}
actions: [ selectFriend, showSpinner ]

function(selectedFriend, action) {
    //state.selectedFriend = action.payload;
}
*/