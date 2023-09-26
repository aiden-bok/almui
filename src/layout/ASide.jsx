import React from 'react'

import { createElement } from '../core'

/**
 * A React Component that provides aside elements.
 *
 * @component
 * @param {React.ComponentProps} props React Props.
 * @param {React.ReactNode} props.children React Node to include in the aside element.
 * @param {String} props.className Style sheet class name to apply to aside elements.
 * @param {String} [props.tag='aside'] Tag name to apply to aside elements.
 * @returns {React.Component} ASide element React Component.
 */
const ASide = React.forwardRef(function ASide(
  { children, className, tag },
  forwardedRef
) {
  return createElement({
    children,
    props: {
      className: className ? `aside ${className}` : 'aside',
      ref: forwardedRef,
    },
    tag: tag ? tag : 'aside',
  })
})

export { ASide }
