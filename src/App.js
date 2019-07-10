import React,{Component} from 'react';
import logo from './logo.svg';
import Image from './image.jpg'
import './App.css';
import './style.css'

class App extends Component{
 state={
  onClickCheck:""

  

 }

  package = () =>{
    this.setState({
      onClickCheck:true
    })
  }

  Organizations =()=>{
    this.setState({
      onClickCheck:false
    })
  }
  
  render(){
  return (
    <div className="App">

      <header class="manuebar">
        <h3 id="randomClick">Needlessly Postulating minds</h3>

                      <div class="searchItems">
                     <a href={'https://www.npmjs.com/products/enterprise'}>npm Enterprise </a>
                     <a href={'https://www.npmjs.com/products'}> Products </a>
                      <a href={'https://www.npmjs.com/solutions'}>Solutions </a>
                      <a href={'https://www.npmjs.com/resources'}> Resources </a>
                      <a href={'https://docs.npmjs.com/'}> Docs </a>
                      <a href={'https://www.npmjs.com/support'}> Supports </a>
                      </div>
      </header>
      
      
        <div className="search_bar">
        <h1>npm</h1>
        <input id="searchBox"type="text" placeholder="Serach packages"></input>
        <button id="search" >Search</button>
        <button id="loginButton">Login</button>
        <a id="joinLink">Join</a>
        </div>
        
        <div class="body">
        <img src={Image}/>
        <button id ="package" onClick={this.package}>1 Package</button>
                    {this.state.onClickCheck===true?
                    <div>
                    <h3>Package <button id="oneButton">1</button></h3>
                    <p>graph</p>
                     <p>Library for manipulating directed and undirected graphs</p>
                    <p>tantalor published 0.2.0 • 6 years ago</p>
                    </div>:null}
        <button id ="organization" onClick={this.Organizations}>0 Organization</button>
        {this.state.onClickCheck===false?
                    <div>
                    <h3>Organization <button id="zeroButton">0</button></h3>
                    </div>:null}
        </div>


        <div id="footer">
          
        <div id="help">
          <p id="text">HELP</p>
          <p><a href={'https://docs.npmjs.com/'}>Documentaion</a></p>
          <p><a href={'https://www.npmjs.com/resources/'}>Resources</a></p>          
          <p><a href={'https://www.npmjs.com/support'}>Support / Contact Us</a></p>
          <p><a href={'https://status.npmjs.org/'}>Registry Status</a></p>
          </div>

          <div id="about">
          <p id="text">ABOUT NPM</p>          
          <p><a href={'https://www.npmjs.com/about'}>Registry Status</a></p>
          <p><a href={'https://javascriptsurvey.com/'}>JavaScriptSurvey.com</a></p>
          <p><a href={'https://www.npmjs.com/events'}>Events</a></p>
          <p><a href={'https://jobs.lever.co/npm'}>Jobs</a></p>
          </div>

          <div id="terms">
          <p id="text">TERMS & POLICIES</p>
          <p><a href={'https://www.npmjs.com/policies/terms'}>Terms of Use</a></p>
          <p><a href={'https://www.npmjs.com/policies/conduct'}>Code of Conduct</a></p>          
          <p><a href={'https://www.npmjs.com/policies/disputes'}>Package Name Disputes</a></p>
          <p><a href={'https://www.npmjs.com/policies/receiving-reports'}>Privacy Policy</a></p>          
          </div>

          </div>

      
     
    </div>
  );
}}

export default App;
