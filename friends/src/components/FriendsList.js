import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../actions';
import axios from 'axios';

class FriendsList extends Component {
    constructor() {
        super();


    }

    componentDidMount() {
        this.props.getFriends();
    }

    