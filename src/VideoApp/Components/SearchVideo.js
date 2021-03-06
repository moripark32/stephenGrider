import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };
  onFormSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input onChange={this.onInputChange} value={this.state.term} />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
