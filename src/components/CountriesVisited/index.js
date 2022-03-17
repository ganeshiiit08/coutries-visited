import './index.css'

const CountriesVisited = props => {
  const {countryDetails, isVisitedToggle} = props
  const {name, id, imageUrl} = countryDetails

  const onRemoveCountry = () => {
    isVisitedToggle(id)
  }

  return (
    <li className="list-item">
      <div className="image-div">
        <img src={imageUrl} alt="thumbnail" className="image" />
      </div>
      <div className="countries-div">
        <p className="country-name">{name}</p>
        <button type="button" className="button" onClick={onRemoveCountry}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default CountriesVisited
