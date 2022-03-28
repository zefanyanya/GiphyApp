// import React from '.react'
// import { Component } from 'react'

// class Input extends Component{
// // state
// state, = {
//     gifs: [], // buat nampung data get giphy
//     text: "" // buat ngambil input search yang mau dicari
//  }
 
//  handleInput = e => this.setState({ text:e.target.value});
 
//  // function
//  <input onChange={this.handleInput}/>
//  const handleInput = (e) => {
//    this.setState({text:e.target.value})
//  } // buat change text inputan
 
//  <form onSubmit={this.getGifs}>
//  const getGifs = async () = {
//    const gifs = await fetch(
//        `http://api.giphy.com/v1/gifs/search?q=${this.state.text}&api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=12`
//      ).then((response) => response.json());
//      this.setState({ gifs });
//    };

//  } //buat get data // dipake di form onSubmit

//  export default {Input};