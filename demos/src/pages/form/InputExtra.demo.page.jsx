import { IconButton, Icons, InputExtra, TextField } from 'almui'
import React, { useState } from 'react'

/**
 * React component that provides a `<InputExtra>` demo page.
 *
 * @component
 * @returns {React.Component} `<InputExtra>` demo page.
 */
const InputExtraDemoPage = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <React.Fragment>
      <h1>&lt;InputExtra&gt; demo page</h1>
      <TextField
        fullWidth
        label="Password"
        type={showPassword ? 'text' : 'password'}
      >
        <InputExtra>
          <IconButton onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <Icons.VisibleOff /> : <Icons.VisibleOn />}
          </IconButton>
        </InputExtra>
      </TextField>
    </React.Fragment>
  )
}

export { InputExtraDemoPage }
