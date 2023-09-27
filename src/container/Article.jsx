import React from 'react'

import { createElement } from '../core'

/**
 * A React Component that provides article elements.
 *
 * @component
 * @param {React.ComponentProps} props React Props.
 * @param {React.ReactNode} [props.children] React Node to include in the article element.
 * @param {String} [props.className] Style sheet class name to apply to article elements.
 * @param {String} [props.tag='article'] Tag name to apply to article elements.
 * @returns {React.Component} Article element React Component.
 */
const Article = React.forwardRef(function Article(
  { children, className, tag },
  forwardedRef
) {
  return createElement({
    children,
    props: {
      className: className ? `article ${className}` : 'article',
      ref: forwardedRef,
    },
    tag: tag ? tag : 'article',
  })
})

export { Article }
