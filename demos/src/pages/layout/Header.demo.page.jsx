import { Header } from 'almui'
import React from 'react'

/**
 * React component that provides a `<Header>` demo page.
 *
 * @component
 * @returns {React.Component} `<Header>` demo page.
 */
const HeaderDemoPage = () => {
  return (
    <React.Fragment>
      <h1>&lt;Header&gt; demo page</h1>
      <Header>&lt;Header&gt; component</Header>
    </React.Fragment>
  )
}

export { HeaderDemoPage }
