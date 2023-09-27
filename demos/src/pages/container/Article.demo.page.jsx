import { Article } from 'almui'
import React from 'react'

/**
 * React component that provides a `<Article>` demo page.
 *
 * @component
 * @returns {React.Component} `<Article>` demo page.
 */
const ArticleDemoPage = () => {
  return (
    <React.Fragment>
      <h1>&lt;Article&gt; demo page</h1>
      <Article>&lt;Article&gt; component</Article>
    </React.Fragment>
  )
}

export { ArticleDemoPage }
