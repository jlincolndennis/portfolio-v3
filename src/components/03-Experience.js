import React, { Component } from 'react';
import experienceStyle from './03-experience.module.scss';
import ExperienceItem from './03a-ExperienceItem.js';

class Experience extends Component {
  constructor(props){
    super(props);

    this.state = {experienceData};
  }

  render() {
    const experienceItems = this.state.experienceData.map((item) => {
      return (
        <ExperienceItem
          item={item}
          key={item.id}
        />
      )
    })

    return (
      <div id="experience" className={experienceStyle.experience}>
        <h1>Experience!</h1>
        { experienceItems }
      </div>
    )
  }
}

export default Experience;

const experienceData = [
  {
    id: 1,
    name: 'PathWrangler',
    dates: {
      from: 'April 2017',
      to: 'Present',
    },
    role: 'Web Developer',
    techlist: [
      'Vue.js/Nuxt.js',
      'Sails.js',
      'AngularJS',
      'Google Maps API',
      'GitLab'
    ],
    details: "Built feature-rich UX for an app that allows local and niche experts to create interactive travel guides. Designed and implemented Front End architecture utilizing new frameworks. Contributed to app-wide redesign. Maintained legacy codebase.",
  },
  {
    id: 2,
    name: 'Freelance',
    dates: {
      from: 'August 2016',
      to: 'Present',
    },
    role: 'FullStack Web Developer',
    techlist: [
      'AngularJS',
      'Ionic',
      'Node.js'
    ],
    details: "Specialized in building Single Page Applications. Communicated with clients and aided in developing their ideas into actionable projects and prototypes.",
  },
  {
    id: 3,
    name: 'Galvanize',
    dates: {
      from: 'February 2016',
      to: 'July 2016',
    },
    role: 'Student - Full Stack Immersive',
    techlist: [
      'AngularJS',
      'jQuery',
      'Node.js/Express.js',
      'postgreSQL',
      'Git/GitHub',
      'Agile Development'
    ],
    details: "Completed intensive and competitive full-time training program. Developed complex projects both independently and in small teams. ",
  },
]
