import { Box, TextField } from 'almui'
import React from 'react'

/**
 * React component that provides a `<TextField>` demo page.
 *
 * @component
 * @returns {React.Component} `<TextField>` demo page.
 */
const TextFieldDemoPage = () => {
  return (
    <React.Fragment>
      <h1>&lt;TextField&gt; demo page</h1>
      <Box>
        <h2>Default style</h2>
        <TextField label="Default" placeholder="Default TextField" />
        <TextField
          disabled
          label="Disabled Default"
          placeholder="Disabled Default TextField"
        />
      </Box>
      <Box>
        <h2>Outline style</h2>
        <TextField
          label="Outline"
          styled="outline"
          placeholder="Outline TextField"
        />
        <TextField
          disabled
          label="Outline"
          styled="outline"
          placeholder="Disabled Outline TextField"
        />
      </Box>
      <Box>
        <h2>Underline style</h2>
        <TextField
          label="Underline"
          styled="underline"
          placeholder="Underline TextField"
        />
        <TextField
          disabled
          label="Underline"
          styled="underline"
          placeholder="Disabled Underline TextField"
        />
      </Box>
      <Box>
        <h2>Fill style</h2>
        <TextField label="Fill" styled="fill" placeholder="Fill TextField" />
        <TextField
          disabled
          label="Fill"
          styled="fill"
          placeholder="Disabled Fill TextField"
        />
      </Box>
    </React.Fragment>
  )
}

export { TextFieldDemoPage }
