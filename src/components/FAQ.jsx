import { useState } from "react"
import { motion } from "motion/react"

const FAQS = [
  {
    q: "Does Stalefish give legal advice?",
    a: "No. We build workflow systems that organize, surface, and prepare legal work for human review. The attorney always makes the call.",
  },
  {
    q: "What kinds of legal work is this best for?",
    a: "Intake-heavy, document-heavy, or review-heavy workflows: litigation prep, contract review, client onboarding, chronology, and matter summaries.",
  },
  {
    q: "How is this different from a generic AI chatbot?",
    a: "Chatbots answer questions. We build structured systems: intake flows, review chains, document triage, and handoff protocols designed for how law firms actually work.",
  },
  {
    q: "Can this be used by solo firms and small practices?",
    a: "Yes. A single intake or review workflow can save hours per week even in a small office. We scope to the practice, not the headcount.",
  },
  {
    q: "What about confidentiality and sensitive documents?",
    a: "Every workflow includes human review checkpoints, access controls, and clear data handling boundaries. We do not cut corners on attorney-client privilege.",
  },
  {
    q: "How do projects usually begin?",
    a: "Usually with one real workflow: new-client intake, a litigation packet, a contract review process, or a recurring matter summary that currently eats too much time.",
  },
]

function Item({ faq, open, onToggle }) {
  return (
    <div style={{ borderTop: "1px solid rgba(17,17,17,0.08)" }}>
      <button
        onClick={onToggle}
        style={{
          width: "100%", display: "flex", justifyContent: "space-between",
          alignItems: "center", padding: "26px 0",
          background: "none", border: "none",
          cursor: "pointer", textAlign: "left", fontFamily: "inherit",
        }}
      >
        <span style={{
          fontSize: 18, fontWeight: 600, color: "#111",
          letterSpacing: "-0.015em", lineHeight: 1.3,
        }}>
          {faq.q}
        </span>
        <span style={{
          fontSize: 18, color: "rgba(17,17,17,0.3)",
          flexShrink: 0, marginLeft: 24,
          transform: open ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.28s ease",
          display: "inline-block",
        }}>
          ∨
        </span>
      </button>
      <div style={{
        maxHeight: open ? 180 : 0,
        overflow: "hidden",
        transition: "max-height 0.35s ease",
      }}>
        <p style={{
          fontSize: 15, lineHeight: 1.72,
          color: "rgba(17,17,17,0.52)",
          paddingBottom: 26, maxWidth: 660,
        }}>
          {faq.a}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" style={{ background: "#ffffff", padding: "120px 60px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>

        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1.6fr",
          gap: "0 80px", alignItems: "start",
        }}>
          {/* Left: heading */}
          <div style={{ position: "sticky", top: 120 }}>
            <p style={{
              fontSize: 11, fontWeight: 700, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "#E84325", marginBottom: 18,
            }}>
              FAQ
            </p>
            <h2 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(40px, 4.5vw, 62px)",
              fontWeight: 900, lineHeight: 0.96,
              letterSpacing: "-0.01em", textTransform: "uppercase",
              color: "#111", marginBottom: 32,
            }}>
              Frequently<br />Asked<br />Questions
            </h2>
            <p style={{
              fontSize: 14, lineHeight: 1.68,
              color: "rgba(17,17,17,0.45)", maxWidth: 280,
            }}>
              Common questions about how Stalefish works and what to expect.
            </p>
          </div>

          {/* Right: accordion */}
          <div>
            {FAQS.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Item
                  faq={faq}
                  open={open === i}
                  onToggle={() => setOpen(open === i ? null : i)}
                />
              </motion.div>
            ))}
            <div style={{ borderTop: "1px solid rgba(17,17,17,0.08)" }} />
          </div>
        </div>
      </div>
    </section>
  )
}
