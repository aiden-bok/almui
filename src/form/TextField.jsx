import React from 'react'

import { createElement } from '../core'

/**
 * A React Component that provides text form field elements.
 *
 * @component
 * @param {React.ComponentProps} props React Props.
 * @param {String} props.autoComplete Autofill properties for text form field elements. Not used when set to “off”.
 * @param {React.Component} props.children React Node to include in the text form field element.
 * @param {String} props.className Style sheet class name to apply to text form field elements.
 * @param {Boolean} props.defaultValue Default value of the text form field.
 * @param {Boolean} props.disabled Whether the text form field element is disabled.
 * @param {String} props.error Error message for the text form field.
 * @param {Boolean} props.fullWidth Whether to set the text form field element to the full width of its parent node.
 * @param {String} props.id Identifier for the text form field element.
 * @param {String} props.label Text form field label.
 * @param {Function} props.onBlur Event listener to execute when the text form field element is unactivated.
 * @param {Function} props.onChange Event listener to execute when the value of a text form field element changes.
 * @param {Function} props.onFocus Event listener to execute when the text form field element is activated.
 * @param {String} props.placeholder Short hint that describes the expected value of a text form field.
 * @param {Boolean} props.readOnly Whether to use the text form field as read-only.
 * @param {Boolean} props.required Whether the text form field is a required input field.
 * @param {String} props.styled Text form field styled type.
 * "outline"(default) | "underline" | "fill"
 * @param {String} props.type Text form field type.
 * "text"(default) | "password"
 * @param {String} props.value Value of the text form field.
 * @returns {React.Component} Text form field element React Component.
 */
const TextField = React.forwardRef(function TextField(
  {
    autoComplete,
    children,
    className,
    defaultValue,
    disabled,
    error,
    fullWidth,
    id,
    label,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    readOnly,
    required,
    styled,
    type,
    value,
  },
  forwardedRef
) {
  // Label element
  const eleLabel = label
    ? createElement({
        children: label,
        props: { className: 'input-label', htmlFor: id, key: 'label' },
        tag: 'label',
      })
    : undefined

  // Text form field element
  const eleField = createElement({
    props: {
      autoComplete,
      className: 'input-text',
      defaultValue,
      disabled,
      id,
      key: 'input',
      onBlur: (eve) => {
        eve.target.parentNode.classList.remove('input-focus')
        onBlur && onBlur(eve)
      },
      onChange: (eve) => onChange && onChange(eve),
      onFocus: (eve) => {
        eve.target.parentNode.classList.add('input-focus')
        onFocus && onFocus(eve)
      },
      placeholder,
      readOnly: readOnly ? 'readOnly' : false,
      ref: forwardedRef,
      required,
      type: type === 'password' ? 'password' : 'text',
      value,
    },
    tag: 'input',
  })

  // Additional components for text form field elements
  let childrenBase = [eleField]
  if (children) {
    if (children.props?.position === 'start') {
      childrenBase.unshift(children)
    } else {
      childrenBase.push(children)
    }
  }

  // Stylesheet class to apply to the base element for the text form field effect
  let classBase = styled ? `input-base ${styled}` : 'input-base'
  if (disabled) classBase += ' disabled'
  if (fullWidth) classBase += ' full-width'
  // Base element for text form field effect
  const eleBase = createElement({
    children: childrenBase,
    props: { className: classBase, key: 'base' },
    tag: 'div',
  })

  // Elements for text form field error messages
  const eleError = createElement({
    children: error,
    props: { className: 'input-error', key: 'error' },
    tag: 'div',
  })

  // Container element that contains all text form field elements
  let classContainer = className ? `text-field ${className}` : 'text-field'
  if (error) classContainer += ' field-error'
  const eleContainer = createElement({
    children: [eleLabel, eleBase, error && eleError],
    props: { className: classContainer },
  })

  return eleContainer
})

export { TextField }
