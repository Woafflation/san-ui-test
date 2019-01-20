import React from 'react'
import LabeledSelector from './LabeledSelect'
import { toggleMultiple } from './BaseSelect'
import Icon from '../Icon'
import styles from './Checkboxes.module.scss'

const ContentContainer = () => (
  <div className={styles.btn}>
    <Icon type='checkmark' className={styles.checkmark} />
  </div>
)

const Checkboxes = ({ options, className, ...props }) => (
  <LabeledSelector
    stateReducer={toggleMultiple}
    labels={options}
    selectElement={<ContentContainer />}
    className={`${className}`}
    selectedClassName={styles.selected}
    disabledClassName={styles.disabled}
    {...props}
  />
)

export default Checkboxes
