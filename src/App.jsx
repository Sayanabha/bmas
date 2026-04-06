// src/App.jsx
// Root component — sets up routing and page layout.
// BrowserRouter wraps everything so React Router can read the URL.

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import SayanabhaPage from './pages/SayanabhaPage.jsx'

export default function App() {
  return (
    <BrowserRouter>
      {/* Navbar sits outside Routes so it renders on every page */}
      <Navbar />

      <Routes>
        {/* Main route */}
        <Route path="/sayanabha" element={<SayanabhaPage />} />

        {/* Redirect root → /sayanabha */}
        <Route path="/" element={<Navigate to="/sayanabha" replace />} />

        {/* Catch-all → /sayanabha */}
        <Route path="*" element={<Navigate to="/sayanabha" replace />} />
      </Routes>
    </BrowserRouter>
  )
}