import React, { Component } from "react";

class Item extends Component {
  handleDelete = () => {
    console.log("delete click");
  };

  render() {
    let text = this.props.item.checked ? (
      <del>{this.props.item.text}</del>
    ) : (
      <span>{this.props.item.text}</span>
    );

    return (
      <div>
        <span>
          {text}
          <input
            type="checkbox"
            onChange={() => this.props.onCheck(this.props.item)}
            checked={this.props.item.checked}
          ></input>
          <button onClick={() => this.props.onDelete(this.props.item.id)}>
            Delete
          </button>
        </span>
      </div>
    );
  }
}

export default Item;
