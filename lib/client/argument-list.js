import React, { Component } from 'react';
import ArgumentItemComponent from './argument-item';
import ArgumentItem from './models/argument-item';

export default class ArgumentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items && this.initializeItems(props.items) || [ this.newItem() ]
    };

    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let changedItemId = parseInt(e.target.parentElement.id),
        changedItemField = e.target.getAttribute('class').match(/argument-(name|value)/)[1],
        newValue = e.target.value,

        items = this.state.items.map(item => {
          if (item.id === changedItemId) {
            item[changedItemField] = newValue;
          }

          return item;
        });

    this.setState({ items });
  }

  initializeItems(items) {
    return items.map(item => {
      return new ArgumentItem(item.name, item.value);
    });
  }

  newItem() {
    return new ArgumentItem();
  }

  addItem(e) {
    e && e.preventDefault();
    let items = this.state.items;
    items.push(this.newItem());
    this.setState({ items });
  }

  removeItem(e) {
    e && e.preventDefault();
    const deletedItemId = parseInt(e.target.parentElement.id)

    let items = this.state.items.filter(item => {
      return item.id !== deletedItemId;
    });

    this.setState({ items });
  }

  renderItems() {
    return this.state.items.map((item, key) => {
      let props = Object.assign({}, item, {
        key,
        removeItem: this.removeItem,
        handleChange: this.handleChange
      });
      return <ArgumentItemComponent { ...props } />;
    });
  }

  render() {
    return (
      <div>
        <ul>
          { this.renderItems() }
        </ul>
        <button onClick={this.addItem}>+ Add Argument</button>
      </div>
    );
  }
}
