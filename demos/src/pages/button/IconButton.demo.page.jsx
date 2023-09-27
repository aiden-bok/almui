import { IconButton, Icons } from 'almui'
import React from 'react'

/**
 * React component that provides a `<IconButton>` demo page.
 *
 * @component
 * @returns {React.Component} `<IconButton>` demo page.
 */
const IconButtonDemoPage = () => {
  return (
    <React.Fragment>
      <h1>&lt;IconButton&gt; demo page</h1>
      <IconButton>
        <Icons.VisibleOff />
      </IconButton>
      <IconButton>
        <Icons.VisibleOn />
      </IconButton>
      <IconButton disabled>
        <Icons.VisibleOff />
      </IconButton>
      <IconButton disabled>
        <Icons.VisibleOn />
      </IconButton>
    </React.Fragment>
  )
}

export { IconButtonDemoPage }
