import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { HomeIndexPage, LayoutIndexPage } from './pages'

/**
 * React component that provides `<BrowserRouter>`, a URL-based router.
 *
 * @component
 * @returns {BrowserRouter} `<BrowserRouter>`, a URL-based router.
 */
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutIndexPage />} path="/layout/*"></Route>
        <Route element={<HomeIndexPage />} path="/*"></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
