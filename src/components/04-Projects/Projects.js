import React, { Component } from 'react';

import projectsStyle from './projects.module.scss';
import ProjectItem from './ProjectItem/ProjectItem.js'

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {projectData}
  }

  render() {
    const projectItems = this.state.projectData.map(item => {
      return (
        <ProjectItem
          item={item}
          key={item.id}
        />
      )
    })

    return (
      <div id="projects" className={projectsStyle.projects}>
        <h1>Things I've Made</h1>
        { projectItems}
      </div>
    )
  }
}

export default Projects;

const projectData = [
  {
    id: 1,
    name: "StorySmasher",
    url: {
      visit: "https://storysmasher.firebaseapp.com/",
      code: "https://github.com/jlincolndennis/storysmasher-client"
    },
    techlist: [
      "AngularJS",
      "Ruby on Rails",
      "Tracery",
      "Token-Based Auth"
    ],
    tagline: "A 'Mad Libs' inspired web application that allows users to smash out randomly generated stories, save them to their profile, and have them read aloud.",
    details: "StorySmasher was my Capstone Project at Galvanize. Built in just under two weeks, and featuring a Rails API (with no prior knowledge of Rails) it was an ambitious undertaking to say the least. I've always been interested in the intersection of art and technology, and thanks to the Tracery library, I was able to make an app that pumps out random and awesome stories about Space Janitors battling Cthulhu.",
    imageUrls: [
      'storysmash01', 'storysmash02', 'storysmash03'
    ]
  },
  {
    id: 2,
    name: "tuneUp",
    url: {
      visit: "https://tuneupjs.herokuapp.com/",
      code: "https://github.com/jlincolndennis/tuneup"
    },
    techlist: [
      "AngularJS",
      "postgreSQL",
      "Token-Based Auth"
    ],
    tagline: "A music recommendation application that allows logged in users to share tracks from their favorite albums, and vote and leave comments on other users’ recommendations.",
    details: "tuneUp began its life as an exercise in learning AngularJS’s component-based architecture. The scope of the project was expanded to include utilizing the Revealing Module Pattern, and to follow John Papa’s style guide. After exhausting myself with all of those buzzwords, I decided to make the app a music recommendation service because I think music, in general, is pretty rad.",
    imageUrls: [
      'tuneup01', 'tuneup02',
    ]
  },
  {
    id: 3,
    name: "WhereAbouts",
    url: {
      visit: null,
      code: "https://github.com/blakeface/whereabouts"
    },
    techlist: [
      "jQuery",
      "Google Maps API",
      "OAuth"
    ],
    tagline: "A community-powered map for overlooked points-of-interest, developed with three other student-developers.",
    details: "In addition to being the only app I know of where one can learn about a waterfall that steals souls, this project was as much as learning to develop in a team - particularly while utilizing the Agile workflow - as it was about building a full stack CRUD app. Over the course of development, my contributions focused mostly on server-side routing, user authorization, and CRUD implementation. I worked on my own and in pairs, learned how to integrate my code into a larger code base, and how to work with and debug code I didn’t write."
  },
  {
    id: 4,
    name: "This Week In Marvel History",
    url: {
      visit: "http://jlincolndennis.github.io/marvel-history.github.io/index.html",
      code: "https://github.com/jlincolndennis/marvel-history"
    },
    techlist: [
      "jQuery",
      "Marvel Comics API",
    ],
    tagline: "Browse the vast and interesting publication history of Marvel Comics with this front-end web app that utilizes the Official Marvel Comics API.",
    details: "The one that started it all (my 'origin story', if you will), this app was a front end only project, mainly because front end was all I knew when I did it. It was also my first experience interacting with APIs and my introduction to JSON objects. What I was able to accomplish with this somewhat limited toolset has also retroactively given me an even greater respect for Angular and other frontend frameworks. Using jQuery to append all those divs? Oh, you sweet summer child.",
    imageUrls: [
      'marvelhistory01', 'marvelhistory02', 'marvelhistory03', 'marvelhistory04'
    ]
  },


];
