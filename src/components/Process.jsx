import { motion } from "motion/react"

const STEPS = [
  {
    num: "01",
    label: "AUDIT",
    title: "Map the friction in the file.",
    desc: "We look at the real workflow first: where intake enters, where facts split apart, and where attorney time gets burned rebuilding the record.",
  },
  {
    num: "02",
    label: "DESIGN",
    title: "Rebuild the flow around counsel.",
    desc: "We define what AI organizes, what staff validates, and what remains attorney-reviewed so the system stays fast without becoming sloppy.",
  },
  {
    num: "03",
    label: "DEPLOY",
    title: "Make the advantage compound.",
    desc: "Launch one high-friction workflow first, tighten it, and expand from there so the team gets faster on every matter that follows.",
  },
]

export default function Process() {
  return (
    <section id="process" style={{ background: "#111111", padding: "120px 60px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>

        {/* Header */}
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-end", marginBottom: 80,
          flexWrap: "wrap", gap: 24,
        }}>
          <div>
            <p style={{
              fontSize: 11, fontWeight: 700, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "#E84325", marginBottom: 18,
            }}>
              Methodology
            </p>
            <h2 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(42px, 5.5vw, 72px)",
              fontWeight: 900, lineHeight: 0.95,
              letterSpacing: "-0.01em", textTransform: "uppercase",
              color: "#ffffff",
            }}>
              Messy Legal Work<br />Into a System
            </h2>
          </div>
          <a href="#contact" style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "13px 28px", borderRadius: 40,
            background: "#ffffff", color: "#111",
            fontSize: 14, fontWeight: 600, textDecoration: "none",
            letterSpacing: "-0.01em", whiteSpace: "nowrap",
          }}>
            Start Implementation →
          </a>
        </div>

        {/* Steps */}
        <div>
          {STEPS.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr 2fr",
                gap: "0 56px",
                padding: "44px 0",
                borderTop: "1px solid rgba(255,255,255,0.07)",
                alignItems: "start",
              }}
            >
              {/* Step number */}
              <span style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 52, fontWeight: 900, lineHeight: 1,
                color: "rgba(255,255,255,0.12)",
              }}>
                {s.num}
              </span>

              {/* Label + title */}
              <div style={{ paddingTop: 8 }}>
                <span style={{
                  fontSize: 9, fontWeight: 700, letterSpacing: "0.14em",
                  textTransform: "uppercase", color: "#E84325",
                  display: "block", marginBottom: 10,
                }}>
                  {s.label}
                </span>
                <h3 style={{
                  fontSize: "clamp(20px, 2vw, 26px)",
                  fontWeight: 700, letterSpacing: "-0.02em",
                  color: "#fff", lineHeight: 1.2,
                }}>
                  {s.title}
                </h3>
              </div>

              {/* Desc */}
              <p style={{
                fontSize: 15, lineHeight: 1.7,
                color: "rgba(255,255,255,0.45)", paddingTop: 8,
                maxWidth: 480,
              }}>
                {s.desc}
              </p>
            </motion.div>
          ))}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }} />
        </div>
      </div>
    </section>
  )
}
