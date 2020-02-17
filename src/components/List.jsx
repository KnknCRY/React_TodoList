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
    inputItem: ""
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

  addItem = event => {
    var max_id = this.state.items[0].id;

    //這裡的i是index
    for (let i in this.state.items) {
      if (max_id < this.state.items[i].id) max_id = this.state.items[i].id;
    }

    let items = [...this.state.items];
    items.push({ id: max_id + 1, text: this.state.inputItem, checked: false });
    this.setState({ items });
    event.preventDefault();
  };

  onChangeInput = event => {
    this.setState({ inputItem: event.target.value });
  };

  render() {
    return (
      <div>
        <h3>Todo List</h3>
        {this.state.items.map(item => (
          <Item
            key={item.id}
            item={item}
            onCheck={this.handleCheck}
            onDelete={this.handleDelete}
          />
        ))}
        <br />
        <form onSubmit={this.addItem}>
          <label>
            Add to todo list <br />
            <input type="text" onChange={this.onChangeInput} />
          </label>
          <button>Add item</button>
        </form>
      </div>
    );
  }
}

export default List;
