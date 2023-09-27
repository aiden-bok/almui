import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { ButtonDemoPage, IconButtonDemoPage } from '.'

/**
 * React component that provides an index page for button related demo pages.
 *
 * @component
 * @returns {React.Component} Index page for button related demo pages.
 */
const ButtonIndexPage = () => {
  return (
    <Routes>
      <Route element={<ButtonDemoPage />} path="button" />
      <Route element={<IconButtonDemoPage />} path="iconbutton" />
      <Route element={<h1>Button Index Page</h1>} path="*" />
    </Routes>
  )
}

export { ButtonIndexPage }
