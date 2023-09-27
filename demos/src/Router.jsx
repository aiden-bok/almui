import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import {
  ButtonIndexPage,
  ContainerIndexPage,
  HomeIndexPage,
  LayoutIndexPage,
  TextIndexPage,
} from './pages'

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
        <Route element={<ButtonIndexPage />} path="/button/*" />
        <Route element={<ContainerIndexPage />} path="/container/*" />
        <Route element={<LayoutIndexPage />} path="/layout/*" />
        <Route element={<TextIndexPage />} path="/text/*" />
        <Route element={<HomeIndexPage />} path="/*" />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
