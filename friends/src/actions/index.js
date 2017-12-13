import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';
export const ADD_FRIENDS = 'ADD_FRIENDS';

export const getFriends = () => {
    let payload={}; 

    const apiUrl = 'http://localhost.5000/friends';
    const friendRequest = axios.get(apiUrl);
    
    return {
        type: GET_FRIENDS,
        payload: friendRequest
    };
    
export const addFriends = () => {
  let payload = {};
  const apiUrl = 'http://localhost:5000/friends'
  const addRequest = axios.post(apiUrl, { data });

  return {
      type: ADD_FRIENDS, 
      payload: addRequest
  }
}