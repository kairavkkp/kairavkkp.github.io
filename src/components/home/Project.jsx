import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";
import {
  projectHeading,
  gitHubLink,
  gitHubUsername,
  gitHubQuerry,
  projectsLength,
} from "../../editable-stuff/configurations.json";
import { couldStartTrivia, textSpanContainsPosition } from "typescript";
import { data } from "jquery";
const ghPinnedRepos = require('gh-pinned-repos')


const Project = () => {
  const [projectsArray, setProjectsArray] = useState([]);
  let projArr = []
  let requests = []
  // const handleRequest = useCallback((e) => {

  //   axios
  //     .get(gitHubLink + gitHubUsername + gitHubQuerry)
  //     .then((response) => {
  //       // handle success
  //       console.log(response.data.slice(0, 6));
  //       return setProjectsArray(response.data.slice(0, projectsLength));
  //     })
  //     .catch((error) => {
  //       // handle error
  //       return console.error(error.message);
  //     })
  //     .finally(() => {
  //       // always executed
  //     });
  // }, []);

  const handleRequest = useCallback((e) => {
    let projArr = []
    axios({
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
    }).then(async (result) => {
      for (let i = 0; i < result.data.data.user.pinnedItems.edges.length; i++) {
        const element = result.data.data.user.pinnedItems.edges[i];
        const owner = element.node.nameWithOwner.split('/')[0]
        const repoName = element.node.nameWithOwner.split('/')[1]
        const data = await axios.get(`${gitHubLink}${owner}/${repoName}`)
        projArr.push(data.data)
      }
      return setProjectsArray(projArr)
    });
  })
  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  return (
    <div id="projects" className="jumbotron jumbotron-fluid bg-transparent m-0">
      {projectsArray.length && (
        <div className="container container-fluid p-5">
          <h1 className="display-4 pb-5">{projectHeading}</h1>
          <div className="row">
            {projectsArray.map((project) => (
              <ProjectCard key={project.id} id={project.id} value={project} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
