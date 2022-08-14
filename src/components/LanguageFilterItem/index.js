import './index.css'

const LanguageFilterItem = props => {
  const {isActive, languageDetails, setActiveLanguageId} = props
  const {id, language} = languageDetails

  const activeClassName = isActive ? 'lan-btn active' : 'lan-btn'

  const onClickChangeLanguage = () => {
    setActiveLanguageId(id)
  }

  return (
    <li>
      <button
        type="button"
        className={activeClassName}
        onClick={onClickChangeLanguage}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
