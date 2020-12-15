import React from 'react';
import Moment from 'react-moment';

const imgStyle = {
  borderRadius: "50%",
  width: "250px",
  height: "250px"
};

const ProfileDetails = (props) => {
    return (
      <div>
        <div class = "row">
          <div class="col-md-8 "> {props.infoclean.avatar_url ? <img src={props.infoclean.avatar_url} alt="Profile" style={imgStyle}/> : null }</div>
        </div>
        <div class = "row">
          <div class="col-md-8 "> {props.infoclean.name ? <div><p>Name: {props.infoclean.name}</p></div> : null }</div>
        </div>
        <div class = "row">
          <div class="col-md-8 "> {props.infoclean.bio ? <div><p>Bio: {props.infoclean.bio}</p></div> : null }</div>
        </div>
        <div class = "row">
          <div class="col-md-8 "> {props.infoclean.created_at ? <div><p>Joined: {
          <Moment from={new Date()}>{props.infoclean.created_at}</Moment>}</p></div> : null }</div>
        </div>
        <div class ="row">
          <div class="col-md-8 "> {props.infoclean.location ? <div><p>Location: {props.infoclean.location}</p></div> : null }</div>
        </div>
        <div class = "row">
          <div class="col-md-8 "> {props.infoclean.public_repos ? <div><p>Public Repos: {props.infoclean.public_repos}</p></div> : null } </div>
        </div>
        <div class = "row">
          <div class="col-md-8 ">{props.infoclean.followers ? <div><p>Followers: {props.infoclean.followers}</p></div> : null } </div>
        </div>
        <div class = "row">
          <div class="col-md-8 ">{props.infoclean.following ? <div><p>Following: {props.infoclean.following}</p></div> : null } </div>
        </div>
        <div class = "row">
          <div class="col-md-8 ">{props.infoclean.html_url ? <div><p><a href={props.infoclean.html_url} target="_blank">View Profile</a></p></div> : null } </div>
        </div>
      </div>
    )};
    
export default ProfileDetails;