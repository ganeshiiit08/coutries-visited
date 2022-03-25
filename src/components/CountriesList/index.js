import './index.css'

const CountriesList = props => {
  const {countryDetails, onClickVisit} = props
  const {id, name, isVisited} = countryDetails

  const toggleVisitBtn = () => {
    onClickVisit(id)
  }

  return (
    <li className="list-item">
      <p className="country-name">{name}</p>
      {isVisited ? (
        <p className="visited">Visited</p>
      ) : (
        <button className="visit-btn" type="button" onClick={toggleVisitBtn}>
          Visit
        </button>
      )}
    </li>
  )
}

export default CountriesList
