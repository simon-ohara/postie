import React, { Component } from 'react';

export default class ArgumentItemComponent extends Component {
  propsFor(field) {
    return {
      className: `argument-${field}`,
      placeholder: field,
      value: this.props[field],
      onChange: this.props.handleChange
    }
  }

  render() {
    const { id, name, value, removeItem } = this.props
    return (
      <li id={ id } className="argument-item">
        <input { ...this.propsFor('name') } />
        <input { ...this.propsFor('value') } />
        <button className="argument-remove" onClick={ removeItem }>X</button>
      </li>
    );
  }
}
