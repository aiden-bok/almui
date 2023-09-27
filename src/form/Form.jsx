import React from 'react'

import { createElement } from '../core'

/**
 * A React Component that provides form elements.
 *
 * @component
 * @param {React.ComponentProps} props React Props.
 * @param {String} props.action Action URL to send form data to.
 * @param {React.ReactNode} props.children React Node to include in the form element.
 * @param {String} props.method Form data transmission method.
 * @returns {React.Component} Form element React Component.
 */
const Form = React.forwardRef(function Form(
  { action, children, method },
  forwardedRef
) {
  return createElement({
    children,
    props: {
      action: action,
      method: method ? method : 'POST',
      ref: forwardedRef,
    },
    tag: 'form',
  })
})

export { Form }
