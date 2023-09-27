import React from 'react'

import { createElement } from '../core'

/**
 * A React Component that provides text elements.
 *
 * @component
 * @param {React.ComponentProps} props React Props.
 * @param {React.ReactNode} props.children React Node to include in the text element.
 * @param {String} props.className Style sheet class name to apply to text elements.
 * @param {String} [props.tag='p'] Tag name to apply to text elements.
 * @returns {React.Component} Text element React Component.
 */
const Text = React.forwardRef(function Text(
  { children, className, tag },
  forwardedRef
) {
  return createElement({
    children,
    props: {
      className: className ? `text ${className}` : 'text',
      ref: forwardedRef,
    },
    tag: tag ? tag : 'p',
  })
})

export { Text }
