import { Box, Button } from 'almui'
import React from 'react'

/**
 * React component that provides a `<Button>` demo page.
 *
 * @component
 * @returns {React.Component} `<Button>` demo page.
 */
const ButtonDemoPage = () => {
  return (
    <React.Fragment>
      <h1>&lt;Button&gt; demo page</h1>
      <Box>
        <h2>Fill style</h2>
        <Button>Fill</Button>
        <Button disabled>Disabled</Button>
      </Box>
      <Box>
        <h2>Outline style</h2>
        <Button styled="outline">Outline</Button>
        <Button disabled styled="outline">
          Disabled
        </Button>
      </Box>
      <Box>
        <h2>Underline style</h2>
        <Button styled="underline">Underline</Button>
        <Button disabled styled="underline">
          Disabled
        </Button>
      </Box>
      <Box>
        <h2>Text style</h2>
        <Button styled="text">Text</Button>
        <Button disabled styled="text">
          Disabled
        </Button>
      </Box>
    </React.Fragment>
  )
}

export { ButtonDemoPage }
