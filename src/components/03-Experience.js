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
      <div className={experienceStyle.experience}>
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
    details: "Pariatur ipsum nostrud occaecat. Quis laboris voluptatibus, quibusdam duis non possumus despicationes est o duis efflorescere, deserunt do elit. Occaecat minim iis aliquip coniunctione nam velit voluptate graviterque.Aut labore possumus arbitror. Ut amet incididunt. Et export appellat, a aute aut minim si nam appellat fidelissimae, fore incididunt quo domesticarum, aute",
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
    details: "Pariatur ipsum nostrud occaecat. Quis laboris voluptatibus, quibusdam duis non possumus despicationes est o duis efflorescere, deserunt do elit. Occaecat minim iis aliquip coniunctione nam velit voluptate graviterque.Aut labore possumus arbitror. Ut amet incididunt. Et export appellat, a aute aut minim si nam appellat fidelissimae, fore incididunt quo domesticarum, aute",
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
    details: "Pariatur ipsum nostrud occaecat. Quis laboris voluptatibus, quibusdam duis non possumus despicationes est o duis efflorescere, deserunt do elit. Occaecat minim iis aliquip coniunctione nam velit voluptate graviterque.Aut labore possumus arbitror. Ut amet incididunt. Et export appellat, a aute aut minim si nam appellat fidelissimae, fore incididunt quo domesticarum, aute",
  },
]
