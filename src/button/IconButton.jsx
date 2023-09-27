import React, { useRef } from 'react'

import { createElement } from '../core'

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
 * @returns {React.Component} Icon button element React Component.
 */
const IconButton = React.forwardRef(function IconButton(
  { children, className, disabled, onClick, tag },
  forwardedRef
) {
  const refRipple = useRef(null)

  // Container element for ripple effects
  const eleRipple = createElement({
    props: { className: 'ripple', key: 'ripple', ref: refRipple },
    tag: 'span',
  })

  /**
   * Ripple effect of icon button element.
   *
   * @private
   * @method rippleEffect
   * @param {SyntheticEvent} eve React event object.
   */
  const effectRipple = (eve) => {
    const eleRipple = refRipple.current
    const eleFocus = eleRipple.querySelector('.focus')
    const size = Math.max(eleRipple.clientWidth, eleRipple.clientHeight)

    // Remove elements for focus ripple effect if it is not a focus event
    eleFocus && eve.type !== 'focus' && eleRipple.removeChild(eleFocus)

    if (eve.type === 'click') {
      const rectButton = eleRipple.parentNode.getBoundingClientRect()
      // Create elements for click ripple effects
      const eleEffect = document.createElement('span')
      eleEffect.className = eve.type
      eleEffect.style.left = eve.pageX - rectButton.x - size / 2 + 'px'
      eleEffect.style.top = eve.pageY - rectButton.y - size / 2 + 'px'
      eleEffect.style.width = eleEffect.style.height = size + 'px'
      eleRipple.appendChild(eleEffect)
      setTimeout(() => eleRipple.removeChild(eleEffect), 500)
    } else if (eve.type === 'focus' && !eleFocus) {
      // Create elements for focus ripple effect
      const eleEffect = document.createElement('span')
      eleEffect.className = eve.type
      eleEffect.style.left = 0 + 'px'
      eleEffect.style.top = (eleRipple.clientHeight - size) / 2 + 'px'
      eleEffect.style.width = eleEffect.style.height = size + 'px'
      eleRipple.appendChild(eleEffect)
    }
  }

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
      type: 'button',
    },
    tag: tag ? tag : 'button',
  })

  return eleButton
})

export { IconButton }
