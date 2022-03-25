import './index.css'

const CountriesVisited = props => {
  const {onRemoveBtn, visitedCountries} = props
  const {id, name, imageUrl} = visitedCountries

  const onClickRemove = () => {
    onRemoveBtn(id)
  }

  return (
    <li className="visited-countries-list">
      <img src={imageUrl} className="country-image" alt="thumbnail" />
      <div className="country-list-div">
        <p className="country-name">{name}</p>
        <button className="remove-btn" type="button" onClick={onClickRemove}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default CountriesVisited
