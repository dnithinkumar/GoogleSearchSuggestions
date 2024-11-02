// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {searchDetails, onClickArrow} = props
  const {suggestion} = searchDetails

  const onSelectSuggestion = () => {
    onClickArrow(suggestion)
  }

  return (
    <li className="suggestion-item">
      <div className="suggestion-item-container">
        <p className="suggestion">{suggestion}</p>
        <button className="arrow-button" onClick={onSelectSuggestion}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            alt="arrow"
            className="arrow"
          />
        </button>
      </div>
    </li>
  )
}

export default SuggestionItem
