import React from 'react'

/**
 * Returns after creating a React element.
 *
 * @method createElement
 * @param {React.ComponentProps} [props] React Props.
 * @param {React.ReactNode} [props.children] React Node to include in the element.
 * @param {String} [props.props] Props to apply to the element.
 * @param {String} [props.tag='div'] Tag name to apply to the element.
 * @returns {React.Component} Created React element.
 */
const createElement = ({ children, props, tag }) => {
  const Tag = tag ? tag : 'div'

  return <Tag {...props}>{children}</Tag>
}

export { createElement }
