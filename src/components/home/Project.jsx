import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";
import {
  projectHeading,
  gitHubLink,
  gitHubUsername,

} from "../../editable-stuff/configurations.json";

export default class Project extends React.Component {
  state = {
    projectsArray: []
  };
  componentDidMount() {
    this.preparePinnedRepos();
  }

  async getPinnedRepo() {
    const result = await axios({
      url: 'https://api.github.com/graphql',
      headers: { Authorization: `Bearer aab77861e3497f1cd79113fb3fced6329b2c95f8` },
      method: 'post',
      data: {
        query: `
        query {
          user(login:"${gitHubUsername}") {
          pinnedItems(first: 6, types: [REPOSITORY, GIST]) {
            totalCount
            edges {
              node {
                ... on Repository {
                  nameWithOwner,
                  
                }
              }
            }
          }
        }
      }
      `
      }
    })
    return result;
  };

  async getRepoDetail(gitHubLink, owner, repoName) {
    const data = await axios.get(`${gitHubLink}${owner}/${repoName}`)
    return data
  };

  async preparePinnedRepos() {
    let projArr = [];
    const result = await this.getPinnedRepo();
    for (let i = 0; i < result.data.data.user.pinnedItems.edges.length; i++) {
      const element = result.data.data.user.pinnedItems.edges[i];
      const owner = element.node.nameWithOwner.split('/')[0]
      const repoName = element.node.nameWithOwner.split('/')[1]
      const data = await this.getRepoDetail(gitHubLink, owner, repoName)
      projArr.push(data.data)
    }
    this.setState({ projectsArray: projArr });
  }
  render() {
    return <div id="projects" className="jumbotron jumbotron-fluid bg-transparent m-0">
      {this.state.projectsArray.length && (
        <div className="container container-fluid p-5">
          <h1 className="display-4 pb-5">{projectHeading}</h1>
          <div className="row">
            {this.state.projectsArray.map((project) => (
              <ProjectCard key={project.id} id={project.id} value={project} />
            ))}
          </div>
        </div>
      )}
    </div>
  }
}