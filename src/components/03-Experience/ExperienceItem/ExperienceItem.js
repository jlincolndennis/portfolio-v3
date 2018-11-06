import React, { Component } from 'react';
import itemStyle from './experienceitem.module.scss';

class ExperienceItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMore: false
    }

    this.renderTechList = this.renderTechList.bind(this)
  }

  renderTechList(list){
    return list.map((elm, i) => <span key={i}>{elm}</span>).reduce((prev, curr) => [prev, ' | ', curr])
  }

  render() {
    const { name, dates, role, techlist, details } = this.props.item
    return (
      <div className={itemStyle.item}>
        <h2 className={itemStyle.name}>
          <span>{name}</span>
          <span className={itemStyle.dates}>{dates.from} - {dates.to}</span>
        </h2>
        <h3 className={itemStyle.role}>{role}</h3>
        <p className={itemStyle.techlist}>{this.renderTechList(techlist)}</p>

        <p className={itemStyle.details}>{details}</p>
      </div>
    )
  }

}

export default ExperienceItem;
