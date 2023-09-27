import React from 'react'

import { createElement } from '../core'

/**
 * A React Component that provides additional components for input form field elements.
 *
 * @component
 * @param {React.ComponentProps} props React Props.
 * @param {React.ReactNode} props.children React Node to include in additional components for input form field elements.
 * @param {String} props.className Style sheet class name to apply to additional components for input form field elements.
 * @param {String} props.position Position of additional components.
 * "start" | "end"(default)
 * @param {String} [props.tag='div'] Tag name to apply to additional component for input form field elements.
 * @returns {React.Component} Additional element for text form field React Component.
 */
const InputExtra = React.forwardRef(function InputExtra(
  { children, className, position, tag },
  forwardedRef
) {
  // Stylesheet class for additional components for input form field elements
  let classExtra = 'input-extra'
  if (position === 'start') {
    classExtra += ' start'
  } else {
    classExtra += ' end'
  }

  return createElement({
    children,
    props: {
      className: className ? `${classExtra} ${className}` : classExtra,
      key: 'extra',
      ref: forwardedRef,
    },
    tag: tag ? tag : 'div',
  })
})

export { InputExtra }
