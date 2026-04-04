import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { LandingPage } from './pages/LandingPage'
import { EarlyAccessPage } from './pages/EarlyAccessPage'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/early-access" element={<EarlyAccessPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
