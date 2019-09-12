import React from 'react'
import { storiesOf } from '@storybook/react'
import Toggle from '../src/Toggle'
import ColorModeComparison from './ColorModeComparison'
import styles from './ToggleStory.module.scss'

const Icon = () => (
  <path
    d='M11.1501 5.625H8.77506C8.52506 5.625 8.27506 5.8125 8.15006 6.0625L6.90006 10.4375C6.77506 10.875 7.08756 11.25 7.46256 11.25H9.77506L9.15631 14.625C9.08756 14.95 9.50631 15.1375 9.71256 14.875L13.4001 9.75C13.7126 9.375 13.4001 8.75 12.9001 8.75H11.0251L11.7126 6.4375C11.8376 6 11.5251 5.625 11.1501 5.625Z'
    fill='#FFE6E6'
  />
)

storiesOf('Toggle', module).add('Simple', () => (
  <div>
    <ColorModeComparison>
      <Toggle onClick={() => console.log('click')} />
      <Toggle isActive onClick={() => console.log('click')} />
      <Toggle
        isActive
        Icon={Icon}
        className={styles.toggle}
        onClick={() => console.log('click')}
      />
    </ColorModeComparison>
  </div>
))
