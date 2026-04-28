import { motion } from "motion/react"

const SEGMENTS = [
  {
    label: "Litigation",
    title: "Litigation & Dispute Resolution",
    desc: "Organize chronologies, document sets, and case summaries without losing the review chain or the underlying source record.",
    tag: "Reviewable File",
  },
  {
    label: "Transactional",
    title: "Transactional & Contract Work",
    desc: "Support clause review, draft comparison, contract playbooks, and checklist generation so attorneys spend more time deciding.",
    tag: "Draft to Review",
  },
  {
    label: "Small Firm",
    title: "Solo and Small Firms",
    desc: "Create a tighter front office with better intake, faster summaries, and fewer hours lost reconstructing the matter from email threads.",
    tag: "Front-Office Flow",
  },
  {
    label: "Operations",
    title: "Legal Ops & Intake Teams",
    desc: "Standardize forms, evidence collection, client communication, and handoffs so matters arrive better organized before the lawyer touches the file.",
    tag: "Ops Layer",
  },
  {
    label: "Client-Facing",
    title: "Individuals Navigating Legal Matters",
    desc: "Guide people through dates, documents, and incident details in a way that helps counsel receive cleaner information sooner.",
    tag: "Cleaner Intake",
  },
]

// Assign card colors cycling through the service palette
const CARD_COLORS = [
  { bg: "#f4f4f6", text: "#111" },
  { bg: "#111111", text: "#fff" },
  { bg: "#f4f4f6", text: "#111" },
  { bg: "#2563EB", text: "#fff" },
  { bg: "#f4f4f6", text: "#111" },
]

export default function Industries() {
  return (
    <section id="industries" style={{ background: "#f5f5f8", padding: "120px 60px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>

        {/* Header */}
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-end", marginBottom: 64, flexWrap: "wrap", gap: 24,
        }}>
          <div>
            <p style={{
              fontSize: 11, fontWeight: 700, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "#E84325", marginBottom: 18,
            }}>
              Who We Serve
            </p>
            <h2 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(42px, 5.5vw, 72px)",
              fontWeight: 900, lineHeight: 0.95,
              letterSpacing: "-0.01em", textTransform: "uppercase",
              color: "#111",
            }}>
              Built for Legal Work<br />That Cannot Be Sloppy
            </h2>
          </div>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 14,
        }}>
          {SEGMENTS.map((seg, i) => {
            const col = CARD_COLORS[i]
            return (
              <motion.div
                key={seg.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                style={{
                  background: col.bg,
                  borderRadius: 20,
                  padding: "36px 32px",
                  cursor: "default",
                  border: col.bg === "#f4f4f6" ? "1px solid rgba(17,17,17,0.06)" : "none",
                }}
              >
                <div style={{
                  display: "flex", justifyContent: "space-between",
                  alignItems: "flex-start", marginBottom: 22,
                }}>
                  <span style={{
                    fontSize: 10, fontWeight: 700, letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: col.text === "#fff" ? "rgba(255,255,255,0.5)" : "rgba(17,17,17,0.38)",
                    padding: "5px 11px", borderRadius: 20,
                    background: col.text === "#fff" ? "rgba(255,255,255,0.1)" : "rgba(17,17,17,0.06)",
                  }}>
                    {seg.label}
                  </span>
                  <span style={{
                    fontSize: 16,
                    color: col.text === "#fff" ? "rgba(255,255,255,0.5)" : "rgba(17,17,17,0.3)",
                  }}>↗</span>
                </div>
                <h3 style={{
                  fontSize: 20, fontWeight: 700, letterSpacing: "-0.015em",
                  color: col.text, lineHeight: 1.25, marginBottom: 12,
                }}>
                  {seg.title}
                </h3>
                <p style={{
                  fontSize: 14, lineHeight: 1.68,
                  color: col.text === "#fff" ? "rgba(255,255,255,0.48)" : "rgba(17,17,17,0.5)",
                  marginBottom: 22,
                }}>
                  {seg.desc}
                </p>
                <span style={{
                  fontSize: 10, fontWeight: 700, letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: col.text === "#fff" ? "rgba(255,255,255,0.28)" : "rgba(17,17,17,0.22)",
                }}>
                  {seg.tag}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
