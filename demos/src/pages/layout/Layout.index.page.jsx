import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { PageDemoPage } from '.'

/**
 * React component that provides an index page for layout related demo pages.
 *
 * @component
 * @returns {React.Component} Index page for layout related demo pages.
 */
const LayoutIndexPage = () => {
  return (
    <Routes>
      <Route element={<PageDemoPage />} path="page"></Route>
      <Route element={<h1>Layout Index Page</h1>} path="*"></Route>
    </Routes>
  )
}

export { LayoutIndexPage }
