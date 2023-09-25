import React from 'react'

import { createElement } from '../core'

/**
 * A React Component that provides page elements.
 *
 * @component
 * @param {React.ComponentProps} [props] React Props.
 * @param {React.ReactNode} [props.children] React Node to include in the page element.
 * @param {String} [props.className] Style sheet class name to apply to page elements.
 * @param {String} [props.tag='div'] Tag name to apply to page elements.
 * @returns {React.Component} Page Element React Component.
 */
const Page = React.forwardRef(function Page(
  { children, className, tag },
  forwardedRef
) {
  return createElement({
    children,
    props: {
      className: className ? `page ${className}` : 'page',
      ref: forwardedRef,
    },
    tag,
  })
})

export { Page }
