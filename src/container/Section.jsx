import React from 'react'

import { createElement } from '../core'

/**
 * A React Component that provides section elements.
 *
 * @component
 * @param {React.ComponentProps} props React Props.
 * @param {React.ReactNode} [props.children] React Node to include in the section element.
 * @param {String} [props.className] Style sheet class name to apply to section elements.
 * @param {String} [props.tag='section'] Tag name to apply to section elements.
 * @returns {React.Component} Section element React Component.
 */
const Section = React.forwardRef(function Section(
  { children, className, tag },
  forwardedRef
) {
  return createElement({
    children,
    props: {
      className: className ? `section ${className}` : 'section',
      ref: forwardedRef,
    },
    tag: tag ? tag : 'section',
  })
})

export { Section }
