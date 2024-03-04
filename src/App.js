import './App.css'
import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


export default class App extends Component {
  pageSize=8;
  render() {
    return (
    
      <Router>
      <NavBar />
      <div>
      
        <Routes>
        <Route exact path="/" element={<News key="Home" pageSize={this.pageSize} country="us" category="General"/>}></Route>
          <Route exact path="/General" element={<News key="General" pageSize={this.pageSize} country="us" category="General"/>}></Route>
          <Route exact path="/Health" element={<News key="Health" pageSize={this.pageSize} country="us" category="Health"/>}></Route>
          <Route exact path="/Business" element={<News key="Business" pageSize={this.pageSize} country="us" category="Business"/>}></Route>
          <Route exact path="/Entertainment" element={<News key="Entertainment" pageSize={this.pageSize} country="us" category="Entertainment"/>}></Route>
          <Route exact path="/Science" element={<News key="Science" pageSize={this.pageSize} country="us" category="Science"/>}></Route>
          <Route exact path="/Technology" element={<News key="Technology" pageSize={this.pageSize} country="us" category="Technology"/>}></Route>
          <Route exact path="/Sports" element={<News key="Sports" pageSize={this.pageSize} country="us" category="Sports"/>}></Route>
        </Routes>
        
      </div>
      </Router>
 
    );
  }
}
