import React from 'react'

import { createElement } from '../core'

/**
 * A React Component that provides container elements.
 *
 * @component
 * @param {React.ComponentProps} props React Props.
 * @param {React.ReactNode} [props.children] React Node to include in the container element.
 * @param {String} [props.className] Style sheet class name to apply to container elements.
 * @param {String} [props.tag='div'] Tag name to apply to container elements.
 * @returns {React.Component} Container element React Component.
 */
const Container = React.forwardRef(function Container(
  { children, className, tag },
  forwardedRef
) {
  return createElement({
    children,
    props: {
      className: className ? `container ${className}` : 'container',
      ref: forwardedRef,
    },
    tag,
  })
})

export { Container }
