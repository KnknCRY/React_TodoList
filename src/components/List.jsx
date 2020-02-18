import React, { Component } from "react";
import Item from "./item";

class List extends Component {
  state = {
    items: [
      { id: 1, text: "Learn Vue.js", checked: false },
      { id: 2, text: "Code todo list", checked: false },
      { id: 3, text: "Learn somthing else", checked: false },
      { id: 4, text: "123123", checked: false }
    ],
    inputItem: "",
    moveEnd: false
  };

  handleCheck = item => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...item };
    items[index].checked = !items[index].checked;
    this.setState({ items });
  };

  handleDelete = itmeId => {
    const items = this.state.items.filter(item => item.id !== itmeId);
    this.setState({ items });
  };

  handleMoveEnd = () => {
    this.setState({ moveEnd: !this.state.moveEnd });
    if (!this.state.moveEnd) {
      this.sortByCheck();
    } else {
      this.sortByID();
    }
  };

  sortByCheck = () => {
    const checked = this.state.items.filter(item => item.checked === true);
    const unchecked = this.state.items.filter(item => item.checked === false);
    const items = [...unchecked, ...checked];
    this.setState({ items });
  };

  sortByID = () => {
    const items = this.state.items.sort((a, b) => {
      return a.id > b.id ? 1 : -1;
    });
    this.setState({ items });
  };

  addItem = event => {
    let max_id = this.state.items[0].id;
    let min_id = this.state.items[0].id;

    this.state.items.forEach(item => {
      if (max_id < item.id) max_id = item.id;
      if (min_id > item.id) min_id = item.id;
    });

    let items = [...this.state.items];
    items.push({
      id: max_id + 1,
      text: this.state.inputItem,
      checked: false
    });

    this.setState({ items });
    event.preventDefault();
  };

  handleInput = event => {
    this.setState({ inputItem: event.target.value });
  };

  render() {
    return (
      <div className="main">
        <span className="head">
          <p style={{ "font-size": "20px" }}>Todo List</p>
          <p style={{ "font-size": "5px" }}>
            Get things done, one item add a time
          </p>
          <hr
            style={{
              border: "0",
              "background-color": "#FF9696",
              height: "1px"
            }}
          />
        </span>

        {this.state.items.map(item => (
          <Item
            key={item.id}
            item={item}
            onCheck={this.handleCheck}
            onDelete={this.handleDelete}
          />
        ))}

        <span className="moveEnd">
          Move done Items at the end?
          <input
            type="checkbox"
            onChange={this.handleMoveEnd}
            checked={this.state.moveEnd}
          ></input>
        </span>

        <form className="addItem" onSubmit={this.addItem}>
          <label className="addItem-text">
            Add to todo list <br />
            <input
              style={{ width: "200px", height: "30px" }}
              type="text"
              onChange={this.handleInput}
            />
          </label>
          <button className="addItem-button">ADD ITEM</button>
        </form>
      </div>
    );
  }
}

export default List;
