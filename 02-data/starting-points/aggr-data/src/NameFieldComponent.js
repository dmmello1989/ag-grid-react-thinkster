import React, { Component } from "react";

export default class NameFieldComponent extends Component {
  constructor(props) {
    super(props);
    this.value = this.props.value;
    this.rowIndex = this.props.rowIndex;
    this.id = this.props.data.id;
    this.api = this.props.api;

    this.state = {
      flaggedForReview: false,
    };
  }

  flag = () => {
    alert(`${this.value} is flagged for review! (id: ${this.id})`);
    this.setState({ flaggedForReview: true });
  };

  render() {
    console.log(this.api);
    return (
      <div>
        <span style={{ color: this.state.flaggedForReview ? "red" : "black" }}>
          {this.value}!
        </span>
        <button
          type="button"
          onClick={this.flag}
          style={{ marginLeft: "5px" }}
          disabled={this.state.flaggedForReview}
        >
          Flag for review!
        </button>
      </div>
    );
  }
}
