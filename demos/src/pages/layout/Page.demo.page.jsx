import { Page } from 'almui'
import React from 'react'

/**
 * React component that provides a `<Page>` demo page.
 *
 * @component
 * @returns {React.Component} `<Page>` demo page.
 */
const PageDemoPage = () => {
  return (
    <React.Fragment>
      <h1>&lt;Page&gt; demo page</h1>
      <Page>&lt;Page&gt; component</Page>
    </React.Fragment>
  )
}

export { PageDemoPage }
