import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { ASideDemoPage, FooterDemoPage, HeaderDemoPage, PageDemoPage } from '.'

/**
 * React component that provides an index page for layout related demo pages.
 *
 * @component
 * @returns {React.Component} Index page for layout related demo pages.
 */
const LayoutIndexPage = () => {
  return (
    <Routes>
      <Route element={<ASideDemoPage />} path="aside" />
      <Route element={<FooterDemoPage />} path="footer" />
      <Route element={<HeaderDemoPage />} path="header" />
      <Route element={<PageDemoPage />} path="page" />
      <Route element={<h1>Layout Index Page</h1>} path="*" />
    </Routes>
  )
}

export { LayoutIndexPage }
