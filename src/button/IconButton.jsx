import React from 'react'

import { createElement } from '../core'
import { createRipple, effectRipple } from './'

/**
 * A React Component that provides icon button elements.
 *
 * @component
 * @param {React.ComponentProps} props React Props.
 * @param {React.ReactNode} props.children React Node to include in the icon button element.
 * @param {String} props.className Style sheet class name to apply to icon button elements.
 * @param {Boolean} props.disabled Whether the icon button element is disabled.
 * @param {Function} props.onClick Function to execute when the icon button element is clicked.
 * @param {String} [props.tag='button'] Tag name to apply to icon button elements.
 * @param {String} [props.type='button'] Button type.
 * @returns {React.Component} Icon button element React Component.
 */
const IconButton = React.forwardRef(function IconButton(
  { children, className, disabled, onClick, tag, type },
  forwardedRef
) {
  // Container element for ripple effects
  const eleRipple = createRipple()

  // Stylesheet class for icon button elements
  let classButton = 'icon-button'
  classButton = disabled ? `${classButton} disabled` : classButton
  // Icon button element
  const eleButton = createElement({
    children: [children, eleRipple],
    props: {
      className: className ? `${classButton} ${className}` : classButton,
      disabled,
      onBlur: (eve) => effectRipple(eve),
      onClick: (eve) => {
        effectRipple(eve)
        onClick && onClick(eve)
      },
      onFocus: (eve) => effectRipple(eve),
      onMouseOut: (eve) => effectRipple(eve),
      ref: forwardedRef,
      type: type ? type : 'button',
    },
    tag: tag ? tag : 'button',
  })

  return eleButton
})

export { IconButton }
