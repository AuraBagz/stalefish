import { Link } from 'react-router-dom'
import { useBreakpoint } from '../hooks/useBreakpoint'

export default function Footer() {
  const { isMobile, isTablet } = useBreakpoint()
  const isSmall = isMobile || isTablet
  const px = isMobile ? "20px" : isTablet ? "32px" : "60px"

  return (
    <footer style={{ background: "#0d0d0d", padding: `${isMobile ? "48px" : "72px"} ${px} ${isMobile ? "32px" : "44px"}` }} role="contentinfo">
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>

        {/* Top grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr 1fr" : isTablet ? "1fr 1fr 1fr" : "1fr 1fr 1fr 1fr",
          gap: isMobile ? "36px 24px" : "0 40px",
          paddingBottom: isMobile ? 40 : 60,
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}>

          {/* Brand — full width on mobile */}
          <div style={{ gridColumn: isMobile ? "1 / -1" : "auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 28, height: 28, background: "#fff", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 10, height: 10, background: "#111", borderRadius: 2 }} />
              </div>
              <span style={{ fontWeight: 700, color: "#fff", fontSize: 14, letterSpacing: "0.01em" }}>STALEFISH</span>
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", lineHeight: 1.65, maxWidth: 220 }}>
              Agentic legal operations. Custom-built around your firm.
            </p>
          </div>

          {/* Services */}
          <div>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: 16 }}>
              Services
            </p>
            {["Drafting", "Research", "Ethics Gate", "Continuity", "Channels"].map(item => (
              <a key={item} href="#capabilities" style={{ display: "block", fontSize: 13, color: "rgba(255,255,255,0.42)", textDecoration: "none", marginBottom: 9, letterSpacing: "-0.01em" }}>
                {item}
              </a>
            ))}
          </div>

          {/* Company */}
          <div>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: 16 }}>
              Company
            </p>
            {[
              { label: "How It Works", href: "#process" },
              { label: "Governance",   href: "#governance" },
              { label: "Who We Serve", href: "#industries" },
              { label: "FAQ",          href: "#faq" },
              { label: "Contact",      href: "#contact" },
            ].map(item => (
              <a key={item.label} href={item.href} style={{ display: "block", fontSize: 13, color: "rgba(255,255,255,0.42)", textDecoration: "none", marginBottom: 9, letterSpacing: "-0.01em" }}>
                {item.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: 16 }}>
              Contact
            </p>
            <a href="mailto:hello@stalefish.ai" style={{ display: "block", fontSize: 13, color: "rgba(255,255,255,0.42)", textDecoration: "none", marginBottom: 10 }}>
              hello@stalefish.ai
            </a>
            <a href="#contact" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              marginTop: 12, padding: "9px 20px", borderRadius: 40,
              background: "#fff", color: "#111",
              fontSize: 12.5, fontWeight: 600, textDecoration: "none",
            }}>
              Book Consultation →
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: isMobile ? "flex-start" : "center",
          paddingTop: 24, gap: isMobile ? 16 : 0,
        }}>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.18)", margin: 0 }}>
            © 2026 Stalefish. All rights reserved.
          </p>
          <nav aria-label="Legal links" style={{ display: "flex", gap: isMobile ? 20 : 28, flexWrap: "wrap" }}>
            <Link to="/privacy"       style={{ fontSize: 12, color: "rgba(255,255,255,0.18)", textDecoration: "none" }}>Privacy Policy</Link>
            <Link to="/terms"         style={{ fontSize: 12, color: "rgba(255,255,255,0.18)", textDecoration: "none" }}>Terms &amp; Disclaimer</Link>
            <Link to="/accessibility" style={{ fontSize: 12, color: "rgba(255,255,255,0.18)", textDecoration: "none" }}>Accessibility</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
