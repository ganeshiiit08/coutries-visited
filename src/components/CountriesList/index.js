import './index.css'

const Countries = props => {
  const {countryDetails, isVisitedToggle} = props
  const {name, id, isVisited} = countryDetails
  const onToggleChange = () => {
    isVisitedToggle(id)
  }

  const toggleVisited = isVisited ? 'Visited' : 'Visit'
  const text = isVisited ? 'Visited' : 'Visit'

  return (
    <li className="countries-list">
      <p className="name-of-country">{name}</p>
      <button className={toggleVisited} type="button" onClick={onToggleChange}>
        {text}
      </button>
    </li>
  )
}

export default Countries
