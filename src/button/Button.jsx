import React from 'react'

import { createElement } from '../core'

/**
 * Create and returns container element for ripple effects.
 *
 * @method createRipple
 * @returns {React.Component} Ripple effect element React Component.
 */
const createRipple = () => {
  return createElement({
    props: { className: 'ripple', key: 'ripple' },
    tag: 'span',
  })
}

/**
 * Ripple effect of button element.
 *
 * @method rippleEffect
 * @param {SyntheticEvent} eve React event object.
 */
const effectRipple = (eve) => {
  if (!eve?.target?.querySelector) return
  const eleRipple = eve.target.querySelector('.ripple')
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

/**
 * A React Component that provides button elements.
 *
 * @component
 * @param {React.ComponentProps} props React Props.
 * @param {React.ReactNode} props.children React Node to include in the button element.
 * @param {String} props.className Style sheet class name to apply to button elements.
 * @param {Boolean} props.disabled Whether the button element is disabled.
 * @param {Function} props.onClick Function to execute when the button element is clicked.
 * @param {Function} props.styled Button styled type.
 * "fill"(default) | "outline" | "underline" | "text"
 * @param {String} [props.tag='button'] Tag name to apply to button elements.
 * @param {String} [props.type='button'] Button type.
 * @returns {React.Component} Button element React Component.
 */
const Button = React.forwardRef(function Button(
  { children, className, disabled, onClick, styled, tag, type },
  forwardedRef
) {
  // Container element for ripple effects
  const eleRipple = createRipple()

  // Stylesheet class for button elements
  let classButton = styled ? `button ${styled}` : 'button fill'
  classButton = disabled ? `${classButton} disabled` : classButton
  // Button element
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

export { Button, createRipple, effectRipple }
