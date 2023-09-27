import { Section } from 'almui'
import React from 'react'

/**
 * React component that provides a `<Section>` demo page.
 *
 * @component
 * @returns {React.Component} `<Section>` demo page.
 */
const SectionDemoPage = () => {
  return (
    <React.Fragment>
      <h1>&lt;Section&gt; demo page</h1>
      <Section>&lt;Section&gt; component</Section>
    </React.Fragment>
  )
}

export { SectionDemoPage }
