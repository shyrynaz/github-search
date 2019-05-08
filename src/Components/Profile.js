import React, { Component } from "react";

class Profile extends Component {
  render() {
    let userdata = this.props.userData;
    let followers = `${userdata.homeURL}/followers`;
    let following = `${userdata.homeURL}/following`;
    let repos = `${userdata.homeURL}/repositories`;

    if (userdata.message === "Not Found") {
      return (
        <div className="notFound">
          <h2>Heyyyy </h2>
          <p>Please check the username you entered</p>
        </div>
      );
    } else {
      return (
        <section className="github-profile">
          <div className="github-profile-info">
            <a
              href={userdata.homeUrl}
              title={userdata.name || userdata.username}
            >
              <img src={userdata.avatar} alt="no profile" />
            </a>
            <h2>
              <a href={userdata.homeUrl} title={userdata.username}>
                {userdata.name || userdata.username}
              </a>
            </h2>
            <h3>{userdata.location}</h3>
          </div>
          <div className="github-profile-state">
            <ul>
              <li>
                <a href={followers} title="Number Of Followers">
                  <i>{userdata.followers}</i>
                  <span>Followers</span>
                </a>
              </li>
              <li>
                <a href={repos} title="Number Of Repository">
                  <i>{userdata.repos}</i>
                  <span>Repositoriy</span>
                </a>
              </li>
              <li>
                <a href={following} title="Number Of Following">
                  <i>{userdata.following}</i>
                  <span>Following</span>
                </a>
              </li>
            </ul>
          </div>
        </section>
      );
    }
  }
}

export default Profile;
