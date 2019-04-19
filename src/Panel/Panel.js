import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './Panel.module.scss'

const Panel = ({
  variant,
  children,
  padding,
  className,
  forwardedRef,
  ...props
}) => {
  return (
    <div
      className={cx({
        [`${className} ${styles.panel}`]: true,
        [styles.padding]: padding,
        [styles[variant]]: variant
      })}
      ref={forwardedRef}
      {...props}
    >
      {children}
    </div>
  )
}

Panel.Title = ({ className, withPadding, ...props }) => (
  <div
    {...props}
    className={cx(styles.header, className, withPadding && styles.padding)}
  />
)

Panel.Content = ({ className, withPadding, ...props }) => (
  <div
    {...props}
    className={cx(styles.content, className, withPadding && styles.padding)}
  />
)

Panel.propTypes = {
  variant: PropTypes.oneOf(['tooltip-small', 'tooltip', 'modal']),
  padding: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.any.isRequired
}

Panel.defaultProps = {
  variant: undefined,
  padding: false,
  className: ''
}

export default Panel
