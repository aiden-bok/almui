import { Text } from 'almui'
import React from 'react'

/**
 * React component that provides a `<Text>` demo page.
 *
 * @component
 * @returns {React.Component} `<Text>` demo page.
 */
const TextDemoPage = () => {
  return (
    <React.Fragment>
      <h1>&lt;Text&gt; demo page</h1>
      <Text>&lt;Text&gt; component</Text>
    </React.Fragment>
  )
}

export { TextDemoPage }
