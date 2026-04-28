import { motion } from "motion/react"

export default function CTA() {
  return (
    <section id="contact" style={{
      background: "#111111",
      padding: "120px 60px",
    }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "1fr auto",
          gap: "0 60px", alignItems: "center", flexWrap: "wrap",
        }}>

          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{
                fontSize: 11, fontWeight: 700, letterSpacing: "0.18em",
                textTransform: "uppercase", color: "#E84325", marginBottom: 22,
              }}
            >
              Secure Engagement
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(48px, 6.5vw, 88px)",
                fontWeight: 900, lineHeight: 0.95,
                letterSpacing: "-0.01em", textTransform: "uppercase",
                color: "#ffffff", marginBottom: 30,
              }}
            >
              Discuss Your<br />AI Trajectory<br />With Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{
                fontSize: 16, lineHeight: 1.68,
                color: "rgba(255,255,255,0.42)", maxWidth: 500,
              }}
            >
              A fast diagnosis of where your legal workflow is dragging,
              what should be automated first, and what must stay attorney-reviewed.
              Every consultation is protected by a multi-layered NDA.
            </motion.p>
          </div>

          {/* Right: CTA block */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            style={{
              display: "flex", flexDirection: "column", gap: 16, alignItems: "stretch",
              minWidth: 240,
            }}
          >
            <a href="#" style={{
              display: "block", textAlign: "center",
              padding: "16px 32px", borderRadius: 40,
              background: "#ffffff", color: "#111",
              fontSize: 15, fontWeight: 600, textDecoration: "none",
              letterSpacing: "-0.01em",
            }}>
              Secure Consultation →
            </a>
            <a href="mailto:hello@stalefish.ai" style={{
              display: "block", textAlign: "center",
              padding: "16px 32px", borderRadius: 40,
              background: "transparent", color: "rgba(255,255,255,0.55)",
              fontSize: 15, fontWeight: 500, textDecoration: "none",
              letterSpacing: "-0.01em",
              border: "1px solid rgba(255,255,255,0.12)",
            }}>
              hello@stalefish.ai
            </a>

            <div style={{ marginTop: 8 }}>
              <p style={{
                fontSize: 11, fontWeight: 600, letterSpacing: "0.1em",
                textTransform: "uppercase", color: "rgba(255,255,255,0.25)",
                marginBottom: 12,
              }}>
                Firm Size
              </p>
              <div style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 12, padding: "12px 16px",
                display: "flex", justifyContent: "space-between",
                alignItems: "center", cursor: "pointer",
              }}>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>
                  Global 100 (200+ attorneys)
                </span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>∨</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
