import { ASide } from 'almui'
import React from 'react'

/**
 * React component that provides a `<ASide>` demo page.
 *
 * @component
 * @returns {React.Component} `<ASide>` demo page.
 */
const ASideDemoPage = () => {
  return (
    <React.Fragment>
      <h1>&lt;ASide&gt; demo page</h1>
      <ASide>&lt;ASide&gt; component</ASide>
    </React.Fragment>
  )
}

export { ASideDemoPage }
