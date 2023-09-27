import { Container } from 'almui'
import React from 'react'

/**
 * React component that provides a `<Container>` demo page.
 *
 * @component
 * @returns {React.Component} `<Container>` demo page.
 */
const ContainerDemoPage = () => {
  return (
    <React.Fragment>
      <h1>&lt;Container&gt; demo page</h1>
      <Container>&lt;Container&gt; component</Container>
    </React.Fragment>
  )
}

export { ContainerDemoPage }
