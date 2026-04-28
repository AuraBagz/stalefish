import { useState } from "react"
import { useBreakpoint } from "../hooks/useBreakpoint"

export default function Navbar() {
  const { isMobile, isTablet } = useBreakpoint()
  const [menuOpen, setMenuOpen] = useState(false)

  const NAV_LINKS = [
    { label: "Capabilities", href: "#capabilities" },
    { label: "How It Works", href: "#process" },
    { label: "Channels",     href: "#channels" },
    { label: "Governance",   href: "#governance" },
    { label: "ADA",          href: "#ada" },
    { label: "FAQ",          href: "#faq" },
  ]

  return (
    <nav role="navigation" aria-label="Main navigation" style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 100,
      background: "rgba(248,249,251,0.92)",
      backdropFilter: "blur(14px)",
      WebkitBackdropFilter: "blur(14px)",
      borderBottom: menuOpen ? "1px solid rgba(17,17,17,0.08)" : "none",
    }}>
      {/* Main bar */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: isMobile ? "14px 20px" : isTablet ? "16px 32px" : "18px 60px",
      }}>
        {/* Logo */}
        <a href="/" aria-label="Stalefish home" style={{
          display: "flex", alignItems: "center", gap: 10, textDecoration: "none",
        }}>
          <div style={{
            width: 32, height: 32, background: "#111",
            borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }} aria-hidden="true">
            <div style={{ width: 13, height: 13, background: "#fff", borderRadius: 2 }} />
          </div>
          <span style={{ fontWeight: 700, fontSize: 16, letterSpacing: "0.01em", color: "#111" }}>
            STALEFISH
          </span>
        </a>

        {/* Desktop nav links */}
        {!isMobile && !isTablet && (
          <div style={{ display: "flex", alignItems: "center", gap: 38 }}>
            {NAV_LINKS.map(item => (
              <a key={item.label} href={item.href} style={{
                fontSize: 14, fontWeight: 400, color: "#333",
                textDecoration: "none", letterSpacing: "-0.01em",
              }}
              onMouseEnter={e => e.target.style.color = "#111"}
              onMouseLeave={e => e.target.style.color = "#333"}>
                {item.label}
              </a>
            ))}
          </div>
        )}

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {!isMobile && (
            <a href="#contact" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: isMobile ? "9px 18px" : "10px 24px",
              borderRadius: 40, background: "#111", color: "#fff",
              fontSize: 14, fontWeight: 500, textDecoration: "none",
              letterSpacing: "-0.01em", whiteSpace: "nowrap",
            }}>
              Secure Consultation →
            </a>
          )}

          {/* Mobile hamburger */}
          {(isMobile || isTablet) && (
            <button
              onClick={() => setMenuOpen(o => !o)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              style={{
                background: "none", border: "none", cursor: "pointer",
                padding: "6px", display: "flex", flexDirection: "column",
                gap: 5, alignItems: "center", justifyContent: "center",
              }}
            >
              <span style={{
                display: "block", width: 22, height: 2, background: "#111",
                borderRadius: 2,
                transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
                transition: "transform 0.25s ease",
              }} />
              <span style={{
                display: "block", width: 22, height: 2, background: "#111",
                borderRadius: 2, opacity: menuOpen ? 0 : 1,
                transition: "opacity 0.2s ease",
              }} />
              <span style={{
                display: "block", width: 22, height: 2, background: "#111",
                borderRadius: 2,
                transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
                transition: "transform 0.25s ease",
              }} />
            </button>
          )}
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {(isMobile || isTablet) && menuOpen && (
        <div style={{
          padding: "8px 20px 20px",
          background: "rgba(248,249,251,0.97)",
          borderTop: "1px solid rgba(17,17,17,0.07)",
        }}>
          {NAV_LINKS.map(item => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block", fontSize: 16, fontWeight: 500,
                color: "#333", textDecoration: "none",
                padding: "12px 0",
                borderBottom: "1px solid rgba(17,17,17,0.06)",
                letterSpacing: "-0.01em",
              }}
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} style={{
            display: "block", textAlign: "center",
            marginTop: 16, padding: "13px 24px", borderRadius: 40,
            background: "#111", color: "#fff",
            fontSize: 15, fontWeight: 600, textDecoration: "none",
          }}>
            Secure Consultation →
          </a>
        </div>
      )}
    </nav>
  )
}
