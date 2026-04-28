import { motion } from "motion/react"
import { useBreakpoint } from "../hooks/useBreakpoint"

export default function CTA() {
  const { isMobile, isTablet } = useBreakpoint()
  const isSmall = isMobile || isTablet
  const px = isMobile ? "20px" : isTablet ? "32px" : "60px"
  const py = isMobile ? "72px" : "120px"

  return (
    <section id="contact" aria-labelledby="cta-heading" style={{ background: "#111111", padding: `${py} ${px}` }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: isSmall ? "1fr" : "1fr auto",
          gap: isSmall ? "40px 0" : "0 60px",
          alignItems: "center",
        }}>

          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#E84325", marginBottom: 22 }}
            >
              Start Here
            </motion.p>
            <motion.h2
              id="cta-heading"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: isMobile ? "clamp(40px, 13vw, 60px)" : "clamp(44px, 6vw, 82px)",
                fontWeight: 900, lineHeight: 0.95,
                letterSpacing: "-0.01em", textTransform: "uppercase",
                color: "#ffffff", marginBottom: 24,
              }}
            >
              Bring us<br />one workflow.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{ fontSize: 15, lineHeight: 1.72, color: "rgba(255,255,255,0.42)", maxWidth: 520 }}
            >
              Tell us the workflow that eats the most time — a motion type, a demand letter cycle, an engagement letter and intake process. We will run it through the system on a live matter. You will have a signature-ready deliverable in hand before the consultation is over.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.16 }}
              style={{ fontSize: 12.5, lineHeight: 1.6, color: "rgba(255,255,255,0.22)", maxWidth: 520, marginTop: 16 }}
            >
              Every consultation is covered by a mutual NDA. No obligation beyond the conversation.
            </motion.p>
          </div>

          {/* Right: CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            style={{
              display: "flex", flexDirection: "column", gap: 12,
              width: isSmall ? "100%" : 260,
            }}
          >
            <a href="mailto:hello@stalefish.ai?subject=Consultation%20Request" style={{
              display: "block", textAlign: "center",
              padding: "15px 32px", borderRadius: 40,
              background: "#ffffff", color: "#111",
              fontSize: 15, fontWeight: 700, textDecoration: "none", letterSpacing: "-0.01em",
            }}>
              Secure Consultation →
            </a>
            <a href="mailto:hello@stalefish.ai?subject=Run%20my%20workflow" style={{
              display: "block", textAlign: "center",
              padding: "15px 32px", borderRadius: 40,
              background: "rgba(232,67,37,0.12)", color: "#E84325",
              fontSize: 15, fontWeight: 700, textDecoration: "none", letterSpacing: "-0.01em",
              border: "1px solid rgba(232,67,37,0.25)",
            }}>
              See it run on your workflow
            </a>
            <a href="mailto:hello@stalefish.ai" style={{
              display: "block", textAlign: "center",
              padding: "13px 32px", borderRadius: 40,
              background: "transparent", color: "rgba(255,255,255,0.38)",
              fontSize: 13, fontWeight: 500, textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.1)",
            }}>
              hello@stalefish.ai
            </a>
            <div style={{ marginTop: 4 }}>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)", marginBottom: 10 }}>
                Typically works with
              </p>
              <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 12, padding: "12px 16px" }}>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", lineHeight: 1.5, display: "block" }}>
                  Solo attorneys and 1–50 attorney practices — general practice, litigation, and transactional.
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
