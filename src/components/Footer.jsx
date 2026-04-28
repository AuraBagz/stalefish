export default function Footer() {
  return (
    <footer style={{ background: "#0d0d0d", padding: "72px 60px 44px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>

        {/* Top row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: "0 40px",
          paddingBottom: 60,
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
              <div style={{
                width: 30, height: 30, background: "#fff",
                borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <div style={{ width: 11, height: 11, background: "#111", borderRadius: 2 }} />
              </div>
              <span style={{ fontWeight: 700, color: "#fff", fontSize: 15, letterSpacing: "0.01em" }}>
                STALEFISH
              </span>
            </div>
            <p style={{
              fontSize: 13, color: "rgba(255,255,255,0.3)",
              lineHeight: 1.65, maxWidth: 220,
            }}>
              AI implementation and workflow systems for the world's most demanding law firms.
            </p>
          </div>

          {/* Services */}
          <div>
            <p style={{
              fontSize: 10, fontWeight: 700, letterSpacing: "0.14em",
              textTransform: "uppercase", color: "rgba(255,255,255,0.25)",
              marginBottom: 20,
            }}>
              Services
            </p>
            {["AI Architecture", "Associate Upskilling", "Risk & Compliance", "Legal Consultation", "Performance"].map(item => (
              <a key={item} href="#capabilities" style={{
                display: "block", fontSize: 13,
                color: "rgba(255,255,255,0.42)", textDecoration: "none",
                marginBottom: 10, letterSpacing: "-0.01em",
              }}>
                {item}
              </a>
            ))}
          </div>

          {/* Company */}
          <div>
            <p style={{
              fontSize: 10, fontWeight: 700, letterSpacing: "0.14em",
              textTransform: "uppercase", color: "rgba(255,255,255,0.25)",
              marginBottom: 20,
            }}>
              Company
            </p>
            {["About us", "Methodology", "Compliance", "Insights", "Contact"].map(item => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} style={{
                display: "block", fontSize: 13,
                color: "rgba(255,255,255,0.42)", textDecoration: "none",
                marginBottom: 10, letterSpacing: "-0.01em",
              }}>
                {item}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p style={{
              fontSize: 10, fontWeight: 700, letterSpacing: "0.14em",
              textTransform: "uppercase", color: "rgba(255,255,255,0.25)",
              marginBottom: 20,
            }}>
              Contact
            </p>
            <a href="mailto:hello@stalefish.ai" style={{
              display: "block", fontSize: 13,
              color: "rgba(255,255,255,0.42)", textDecoration: "none",
              marginBottom: 10,
            }}>
              hello@stalefish.ai
            </a>
            <a href="#contact" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              marginTop: 14, padding: "10px 22px", borderRadius: 40,
              background: "#fff", color: "#111",
              fontSize: 13, fontWeight: 600, textDecoration: "none",
            }}>
              Book Consultation →
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "center", paddingTop: 28,
        }}>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.18)" }}>
            © 2026 Stalefish. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 28 }}>
            {["Privacy", "Terms", "Security"].map(item => (
              <a key={item} href="#" style={{
                fontSize: 12, color: "rgba(255,255,255,0.18)", textDecoration: "none",
              }}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
