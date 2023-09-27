import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { TextDemoPage } from '.'

/**
 * React component that provides an index page for text related demo pages.
 *
 * @component
 * @returns {React.Component} Index page for text related demo pages.
 */
const TextIndexPage = () => {
  return (
    <Routes>
      <Route element={<TextDemoPage />} path="text" />
      <Route element={<h1>Text Index Page</h1>} path="*" />
    </Routes>
  )
}

export { TextIndexPage }
