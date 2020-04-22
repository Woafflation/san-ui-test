import React, { useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Input from './Input'
import Button from '../Button'
import Icon from '../Icon'
import styles from './MultiInput.module.scss'

const VALUE_ADD_KEYS = ['Tab', 'Enter']
const VALUE_REMOVE_KEYS = ['Delete', 'Backspace']

const MultiInput = ({
  className,
  inputClassName,
  children,
  value: defaultValue,
  wrapperRef,
  onChange,
  values: defaultValues,
  ...props
}) => {
  const [input, setInput] = useState(defaultValue)
  const [values, setValues] = useState(defaultValues)

  function onInputChange (evt) {
    const { value } = evt.currentTarget
    setInput(value)
    onChange(value, evt)
  }

  function onValueAdd (value) {
    setInput('')
    onChange('')

    const valuesSet = new Set(values)
    valuesSet.add(value)

    setValues([...valuesSet])
  }

  function onValueRemove (value) {
    setValues(values.filter(item => item !== value))
  }

  function onKeyDown (evt) {
    if (VALUE_ADD_KEYS.includes(evt.key)) {
      evt.preventDefault()
      onValueAdd(evt.currentTarget.value)
    }

    if (VALUE_REMOVE_KEYS.includes(evt.key) && !input) {
      evt.preventDefault()
      onValueRemove(values[values.length - 1])
    }
  }

  return (
    <div className={cx(className, styles.wrapper)} ref={wrapperRef}>
      <div className={styles.values}>
        {values.map((item, idx) => (
          <Button
            border
            className={styles.value}
            key={idx}
            onClick={() => onValueRemove(item)}
          >
            {item}
            <Icon type='close-small' className={styles.delete} />
          </Button>
        ))}
        <Input
          className={cx(inputClassName, styles.input)}
          onChange={onInputChange}
          onKeyDown={onKeyDown}
          value={input}
          {...props}
        />
      </div>
      {children}
    </div>
  )
}

MultiInput.propTypes = {
  className: PropTypes.string,
  inputClassName: PropTypes.string
}

MultiInput.defaultProps = {
  className: '',
  onChange: () => {},
  values: ['blockchain', 'wow']
}

export default MultiInput
