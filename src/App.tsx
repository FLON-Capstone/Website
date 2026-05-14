import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { LandingPage } from './pages/LandingPage'
import { EarlyAccessPage } from './pages/EarlyAccessPage'
import { LegalPage } from './pages/LegalPage'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/early-access" element={<EarlyAccessPage />} />
        <Route path="/legal" element={<LegalPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
