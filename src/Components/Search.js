import React, { Component } from "react";
import { Form } from "react-bootstrap";

class Search extends Component {
  submitForm(event) {
    event.preventDefault();
    let value = this.refs.username.value;
    this.props.searchProfile(value);
    this.refs.username.value = "";
  }

  render() {
    return (
      <div className="search-box">
        <Form onSubmit={this.submitForm.bind(this)}>
          <label>
            <input
              type="search"
              ref="username"
              placeholder="enter username to search"
            />
          </label>
        </Form>
      </div>
    );
  }
}

export default Search;
