import { Box } from 'almui'
import React from 'react'

/**
 * React component that provides a `<Box>` demo page.
 *
 * @component
 * @returns {React.Component} `<Box>` demo page.
 */
const BoxDemoPage = () => {
  return (
    <React.Fragment>
      <h1>&lt;Box&gt; demo page</h1>
      <Box>&lt;Box&gt; component</Box>
    </React.Fragment>
  )
}

export { BoxDemoPage }
