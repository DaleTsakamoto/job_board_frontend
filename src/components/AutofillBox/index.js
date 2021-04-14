import { useState, useEffect } from 'react'
import { useMultipleSelection, useCombobox } from 'downshift'

import './AutofillBox.css'

const menuMultipleStyles = {
  maxHeight: '180px',
  overflowY: 'auto',
  width: '135px',
  margin: 0,
  borderTop: 0,
  background: 'white',
  position: 'absolute',
  zIndex: 1000,
  listStyle: 'none',
  padding: 0,
  left: '5px',
  textAlign: 'left'
}

const comboboxStyles = { display: 'inline-block', marginLeft: '5px' }

const comboboxWrapperStyles = {
  display: 'inline-flex',
  flexWrap: 'wrap',
}

const selectedItemStyles = {
  marginLeft: '5px',
  backgroundColor: 'aliceblue',
  borderRadius: '10px',
}

const selectedItemIconStyles = {cursor: 'pointer'}

function AutofillBox () {
  const items = [
    /* Languages */
    'Javascript',
    'Python',
    'Java',
    'C++',
    'C',
    'C#',
    'Ruby',
    'PHP',
    'Go',
    'R',
    'Swift',

    /* Frameworks */
    'React',
    'Angular',
    'Vue',
    'Ember',
    'Redux',
    'Bootstrap',
    'Jquery',
    'Flask',

    /* ORM */
    'Sequelize',
    'Django',
    'Rubyonrails',

    /* Databases */
    'PostgreSQL',
    'MySQL',
    'MongoDB',
    'NoSQL',
    'Redis',
    'AWS',

  ]

  const [inputValue, setInputValue] = useState('')
  const {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    selectedItems,
  } = useMultipleSelection({initialSelectedItems: [items[0]]})
  const getFilteredItems = (items) =>
    items.filter(
      (item) =>
        selectedItems.indexOf(item) < 0 &&
        item.toLowerCase().startsWith(inputValue.toLowerCase()),
    )
  
    useEffect(() => {
      console.log(selectedItems)
    })
  
  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
    selectItem,
  } = useCombobox({
    inputValue,
    items: getFilteredItems(items),
    onStateChange: ({inputValue, type, selectedItem}) => {
      switch (type) {
        case useCombobox.stateChangeTypes.InputChange:
          setInputValue(inputValue)
          break
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputBlur:
          if (selectedItem) {
            setInputValue('')
            addSelectedItem(selectedItem)
            selectItem(null)
          }

          break
        default:
          break
      }
    },
  })
  return (
    <div>
      <label {...getLabelProps()}>Skills:</label>
      <div style={comboboxWrapperStyles}>
        {selectedItems.map((selectedItem, index) => (
          <span
            style={selectedItemStyles}
            key={`selected-item-${index}`}
            {...getSelectedItemProps({selectedItem, index})}
          >
            {selectedItem}
            <span
              style={selectedItemIconStyles}
              onClick={() => removeSelectedItem(selectedItem)}
            >
              &#10005;
            </span>
          </span>
        ))}
        <div style={comboboxStyles} {...getComboboxProps()}>
          <input
            {...getInputProps(getDropdownProps({preventKeyAction: isOpen}))}
          />
          <button {...getToggleButtonProps()} aria-label={'toggle menu'}>
            &#8595;
          </button>
        </div>
      </div>
      <ul style={menuMultipleStyles } {...getMenuProps()}>
        {isOpen &&
          getFilteredItems(items).map((item, index) => (
            <li
              style={
                highlightedIndex === index ? {backgroundColor: '#bde4ff'} : {}
              }
              key={`${item}${index}`}
              {...getItemProps({item, index})}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default AutofillBox