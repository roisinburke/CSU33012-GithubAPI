import React, { Component } from 'react';
import axios from "axios";
import Popup from "reactjs-popup";
import './App.css';
import UserForm from "./components/UserForm";
import styled from 'styled-components';

class App extends Component {
  state = {
    name: null,
    id: null,
    avatar: null,
    followers: null,
    repos: [],
    languages: [],
    chartData: [],
    pieChartData:[]
  }

  retrieveInfo = async (e) => {
    e.preventDefault();

    const user = e.target.elements.username.value
    var users = `https://api.github.com/users/${user}`;
    var repos = `https://api.github.com/users/${user}/repos`;
    await axios.get(users)
      .then((res) => {

        const name = res.data.name;
        const id = res.data.id;
        const avatar = res.data.avatar_url;
        const followers = res.data.followers;
        const following = res.data.following;
        this.setState({ name, id, avatar, followers, following });

      })
      await axios.get(repos)
      .then((res) => {
        const repos = res.data;
        const languages = res.data;
        this.setState({ repos , languages });
      })
  }
  renderList() {
    return (
      <ul>
        {this.state.repos.map(repo => (
          <li  key={repo.id}>
               {<img src={this.state.avatar} alt="Profile-pic" height="12" width="12"></img>}
               {repo.name}
               <a href={repo.html_url}>Link</a>

          </li>
        ))}
      </ul>
    )
  }

  listOfLanguages(){
    const arr = [];
    {this.state.languages.map(language => (arr.push(language.language)))};
    var langsUnique = ([...new Set(arr)]);

    return(langsUnique)
  }

  renderLanguages(){
    const arr = [];
    {this.state.languages.map(language => (arr.push(language.language)))};
    var langsUnique = ([...new Set(arr)]);
    var arrayLength = langsUnique.length;
    const size=[];
    {this.state.languages.map(language => (size.push(language.size)))};
    const subA = size.slice(0,arrayLength);
    return(subA)
  }

  renderInfo() {
    return (
      <div className='renders'>
        <p> <UserIcon src={this.state.avatar} alt="this.name" /></p>
        <p>{this.state.name} | {this.state.id}</p>

  </div>
    );
  }


  render() {

    return (
      <div className="App">
         <header className="App-header">
            <h1 className="App-title">GitHub API Project</h1>
          </header>
        <UserForm retrieveInfo={this.retrieveInfo} />
        {this.state.name ?
          this.renderInfo()
          :
          <p id="loading-statement">Search GitHub Username</p>}
      <footer>
				<p>By Róisín Burke: 18328036</p>
			</footer>
      </div>

    );
  }
}

export default App;

const UserIcon = styled('img')`
    position: 30px 500px;
    width: 200px;
    height: 200px;
    `
