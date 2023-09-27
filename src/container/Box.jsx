import React from 'react'

import { createElement } from '../core'

/**
 * A React Component that provides box elements.
 *
 * @component
 * @param {React.ComponentProps} props React Props.
 * @param {React.ReactNode} [props.children] React Node to include in the box element.
 * @param {String} [props.className] Style sheet class name to apply to box elements.
 * @param {String} [props.tag='div'] Tag name to apply to box elements.
 * @returns {React.Component} Box element React Component.
 */
const Box = React.forwardRef(function Box(
  { children, className, tag },
  forwardedRef
) {
  return createElement({
    children,
    props: {
      className: className ? `box ${className}` : 'box',
      ref: forwardedRef,
    },
    tag,
  })
})

export { Box }
