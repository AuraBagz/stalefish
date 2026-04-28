export default function Navbar() {
  return (
    <nav style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "18px 60px",
      background: "rgba(248,249,251,0.88)",
      backdropFilter: "blur(14px)",
      WebkitBackdropFilter: "blur(14px)",
    }}>
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{
          width: 32, height: 32,
          background: "#111",
          borderRadius: 7,
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
        }}>
          <div style={{ width: 13, height: 13, background: "#fff", borderRadius: 2 }} />
        </div>
        <span style={{ fontWeight: 700, fontSize: 16, letterSpacing: "0.01em", color: "#111" }}>
          STALEFISH
        </span>
      </div>

      {/* Nav links */}
      <div style={{ display: "flex", alignItems: "center", gap: 38 }}>
        {[
          { label: "Capabilities", href: "#capabilities" },
          { label: "How It Works", href: "#process" },
          { label: "Channels",     href: "#channels" },
          { label: "Governance",   href: "#governance" },
          { label: "FAQ",          href: "#faq" },
        ].map(item => (
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

      {/* CTA */}
      <a href="#contact" style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        padding: "10px 24px", borderRadius: 40,
        background: "#111", color: "#fff",
        fontSize: 14, fontWeight: 500, textDecoration: "none",
        letterSpacing: "-0.01em",
      }}>
        Secure Consultation →
      </a>
    </nav>
  )
}
