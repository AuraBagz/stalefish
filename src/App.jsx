import { Routes, Route } from 'react-router-dom'
import './index.css'

// Main site
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Governance from './components/Governance'
import Modules from './components/Modules'
import Process from './components/Process'
import Channels from './components/Channels'
import Industries from './components/Industries'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

// Legal pages
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import Accessibility from './pages/Accessibility'

function HomePage() {
  return (
    <>
      <a
        href="#main-content"
        style={{
          position: 'absolute', top: '-40px', left: 0,
          background: '#E84325', color: '#fff',
          padding: '8px 16px', zIndex: 9999,
          fontSize: '14px', fontWeight: 600,
          textDecoration: 'none', borderRadius: '0 0 6px 0',
          transition: 'top 0.2s',
        }}
        onFocus={e => (e.target.style.top = '0')}
        onBlur={e => (e.target.style.top = '-40px')}
      >
        Skip to main content
      </a>

      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Modules />
        <Process />
        <Channels />
        <Governance />
        <Industries />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/accessibility" element={<Accessibility />} />
    </Routes>
  )
}

export default App
