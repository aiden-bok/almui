import React from 'react'

import { createElement } from '../core'

/**
 * A React Component that provides header elements.
 *
 * @component
 * @param {React.ComponentProps} props React Props.
 * @param {React.ReactNode} props.children React Node to include in the header element.
 * @param {String} props.className Style sheet class name to apply to header elements.
 * @param {String} [props.tag='header'] Tag name to apply to header elements.
 * @returns {React.Component} Header element React Component.
 */
const Header = React.forwardRef(function Header(
  { children, className, tag },
  forwardedRef
) {
  return createElement({
    children,
    props: {
      className: className ? `header ${className}` : 'header',
      ref: forwardedRef,
    },
    tag: tag ? tag : 'header',
  })
})

export { Header }
