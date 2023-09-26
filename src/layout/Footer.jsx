import React from 'react'

import { createElement } from '../core'

/**
 * A React Component that provides footer elements.
 *
 * @component
 * @param {React.ComponentProps} props React Props.
 * @param {React.ReactNode} props.children React Node to include in the footer element.
 * @param {String} props.className Style sheet class name to apply to footer elements.
 * @param {String} [props.tag='footer'] Tag name to apply to footer elements.
 * @returns {React.Component} Footer element React Component.
 */
const Footer = React.forwardRef(function Footer(
  { children, className, tag },
  forwardedRef
) {
  return createElement({
    children,
    props: {
      className: className ? `footer ${className}` : 'footer',
      ref: forwardedRef,
    },
    tag: tag ? tag : 'footer',
  })
})

export { Footer }
