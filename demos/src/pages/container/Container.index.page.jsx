import React from 'react'
import { Route, Routes } from 'react-router-dom'

import {
  ArticleDemoPage,
  BoxDemoPage,
  ContainerDemoPage,
  SectionDemoPage,
} from '.'

/**
 * React component that provides an index page for container related demo pages.
 *
 * @component
 * @returns {React.Component} Index page for container related demo pages.
 */
const ContainerIndexPage = () => {
  return (
    <Routes>
      <Route element={<ArticleDemoPage />} path="article" />
      <Route element={<BoxDemoPage />} path="box" />
      <Route element={<ContainerDemoPage />} path="container" />
      <Route element={<SectionDemoPage />} path="section" />
      <Route element={<h1>Container Index Page</h1>} path="*" />
    </Routes>
  )
}

export { ContainerIndexPage }
