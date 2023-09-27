import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { FormDemoPage, InputExtraDemoPage, TextFieldDemoPage } from '.'

/**
 * React component that provides an index page for form related demo pages.
 *
 * @component
 * @returns {React.Component} Index page for form related demo pages.
 */
const FormIndexPage = () => {
  return (
    <Routes>
      <Route element={<FormDemoPage />} path="form" />
      <Route element={<InputExtraDemoPage />} path="inputextra" />
      <Route element={<TextFieldDemoPage />} path="textfield" />
      <Route element={<h1>Form Index Page</h1>} path="*" />
    </Routes>
  )
}

export { FormIndexPage }
