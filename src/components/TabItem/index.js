import './index.css'

const TabItem = props => {
  const {tab, onSelect, isSelected} = props
  const {tabId, displayText} = tab
  const selectedClass = isSelected ? 'selected-tab' : ''
  const selectedBtn = isSelected ? 'color' : ''

  const onSelectCategory = () => {
    onSelect(tabId)
  }

  return (
    <li className={`tab-item ${selectedClass}`}>
      <button type="button" className={selectedBtn} onClick={onSelectCategory}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
