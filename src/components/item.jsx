import React, { Component } from "react";
import "./css/item.css";

class Item extends Component {
  handleDelete = () => {
    console.log("delete click");
  };

  render() {
    let text = this.props.item.checked ? (
      <del style={{ color: "#f8c9c9" }}>{this.props.item.text}</del>
    ) : (
      <span>{this.props.item.text}</span>
    );

    return (
      <div className="item">
        <span className="item-text">{text}</span>
        <span className="item-react">
          <input
            type="checkbox"
            className="item-checkbox"
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
