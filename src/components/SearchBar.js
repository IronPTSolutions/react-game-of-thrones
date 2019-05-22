import React from 'react';

class SearchBar extends React.Component {
  state = {
    searchText: '',
    error: true,
    touch: false
  }

  handleChange = (e) => {
    // long version:
    // ---------------------
    // const name = e.target.name
    // const newState = {}
    //
    // newState[name] = e.target.value
    //
    // newState.error = e.target.length <=5
    //
    // this.setState(newState)

    this.setState({
      [e.target.name]: e.target.value,
      error: (e.target.value.length <= 5)
    })
  }

  handleBlur = (e) => {
    this.setState({ touch: true })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.onSearch(this.state.searchText)
  }
  

  render() {
    return (
      <div className="SearchBar row mb-4">
        <div className="col-8">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Search</label>
              <input type="text" className="form-control"
                name="searchText"
                autoComplete="off"
                value={this.state.searchText}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              />

              {this.state.touch && this.state.error && (
                <div>
                  Invalid field
                </div>
              )}
            </div>

            <button type="submit" className="btn btn-primary" disabled={this.state.error}>Search</button>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
