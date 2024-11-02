// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickArrow = searchData => {
    this.setState({searchInput: searchData})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput),
    )
    return (
      <div className="suggestions-bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
        <div className="search-suggestion-container">
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              onChange={this.onChangeSearchInput}
              type="search"
              value={searchInput}
              placeholder="Search Google"
              className="search-bar"
            />
          </div>
          <ul className="suggestions-container">
            {searchResults.map(eachItem => (
              <SuggestionItem
                searchDetails={eachItem}
                key={eachItem.id}
                onClickArrow={this.onClickArrow}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
