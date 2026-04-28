import { useState } from "react"
import { motion } from "motion/react"
import { useBreakpoint } from "../hooks/useBreakpoint"

const FAQS = [
  { q: "Does Stalefish give legal advice?", a: "No. The system drafts, researches, and reviews work product for a supervising attorney. The attorney makes every judgment call, approves every deliverable, and signs every document. Stalefish is a tool under attorney control — not an independent legal actor." },
  { q: "What kinds of legal work is this best for?", a: "Any workflow that is document-heavy, repetitive, or has a clear output artifact: demand letters, motions, engagement letters, contract drafts, client correspondence, matter summaries, public records requests, chronologies. The system is most valuable where the attorney currently spends time on scaffolding, not judgment." },
  { q: "How is this different from a generic AI chatbot?", a: "Chatbots generate text on request. Stalefish is a deployed system that drafts to your document-type spec, verifies every citation against sources read in-session, runs an RPC compliance check before delivery, maintains a persistent firm wiki, and requires attorney sign-off before any artifact leaves the firm. It is structured legal operations software — not a chat window." },
  { q: "Can this be used by solo and small practices?", a: "Yes — that is the primary use case. The system is currently running in a live general-practice solo firm in the Pacific Northwest. Hundreds of deliverables shipped. One attorney, no additional staff. We scope to the practice, not the headcount." },
  { q: "What about confidentiality and sensitive documents?", a: "Client matter data stays inside firm-controlled storage. No data egress to third-party model training. Access boundaries enforced at the system layer. RPC 1.6 compliance is built into the architecture, not bolted on afterward." },
  { q: "How do projects usually begin?", a: "With one real workflow on a live matter. We identify the highest-friction recurring task — a motion type, a demand letter cycle, an intake and engagement letter process — deploy the system against it, ship a real deliverable, and expand from there. No months-long build before you see output." },
  { q: "Which messaging channel does Stalefish use?", a: "Whichever channel your firm already uses. We deploy to Telegram, SMS, Slack, Microsoft Teams, Discord, email, or a custom web portal. The system is shaped to your environment — not the other way around. The attorney never has to learn a new dashboard." },
  { q: "How do you prevent AI hallucinated case citations?", a: "Every citation must trace to a source actually read in the same session. If the system cannot verify a citation against a source it retrieved and read in-session, it raises a SOURCE GAP flag — and that deliverable does not clear the ethics gate. The attorney sees the flag before sign-off. Fabricated authority is structurally blocked." },
  { q: "What does a deliverable look like?", a: "A signature-ready artifact — a motion, a demand letter, a contract, an engagement agreement — formatted to the document type's spec with an audit trail and RPC clearance status: CLEARED, CLEARED WITH FLAGS, or NOT CLEARED. Not a chat transcript. The supervising attorney reviews, approves, and signs." },
]

function Item({ faq, open, onToggle, id }) {
  return (
    <div style={{ borderTop: "1px solid rgba(17,17,17,0.08)" }}>
      <button
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`faq-answer-${id}`}
        id={`faq-question-${id}`}
        style={{
          width: "100%", display: "flex", justifyContent: "space-between",
          alignItems: "center", padding: "22px 0",
          background: "none", border: "none", cursor: "pointer",
          textAlign: "left", fontFamily: "inherit",
        }}
      >
        <span style={{ fontSize: 16, fontWeight: 600, color: "#111", letterSpacing: "-0.015em", lineHeight: 1.35, paddingRight: 16 }}>
          {faq.q}
        </span>
        <span aria-hidden="true" style={{
          fontSize: 18, color: "rgba(17,17,17,0.3)", flexShrink: 0,
          transform: open ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.28s ease", display: "inline-block",
        }}>
          ∨
        </span>
      </button>
      <div
        id={`faq-answer-${id}`}
        role="region"
        aria-labelledby={`faq-question-${id}`}
        style={{ maxHeight: open ? 260 : 0, overflow: "hidden", transition: "max-height 0.38s ease" }}
      >
        <p style={{ fontSize: 14.5, lineHeight: 1.76, color: "rgba(17,17,17,0.52)", paddingBottom: 24 }}>
          {faq.a}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(null)
  const { isMobile, isTablet } = useBreakpoint()
  const isSmall = isMobile || isTablet
  const px = isMobile ? "20px" : isTablet ? "32px" : "60px"
  const py = isMobile ? "72px" : "120px"

  return (
    <section id="faq" aria-labelledby="faq-heading" style={{ background: "#ffffff", padding: `${py} ${px}` }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: isSmall ? "1fr" : "1fr 1.6fr",
          gap: isSmall ? "0" : "0 80px",
          alignItems: "start",
        }}>

          {/* Heading */}
          <div style={{ position: isSmall ? "static" : "sticky", top: 120, marginBottom: isSmall ? 40 : 0 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#E84325", marginBottom: 18 }}>
              FAQ
            </p>
            <h2 id="faq-heading" style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: isMobile ? "clamp(36px, 11vw, 52px)" : "clamp(40px, 4.5vw, 62px)",
              fontWeight: 900, lineHeight: 0.96,
              letterSpacing: "-0.01em", textTransform: "uppercase",
              color: "#111", marginBottom: 24,
            }}>
              Frequently<br />Asked<br />Questions
            </h2>
            <p style={{ fontSize: 14, lineHeight: 1.68, color: "rgba(17,17,17,0.45)", maxWidth: 280 }}>
              Common questions about how Stalefish works, what it delivers, and what to expect.
            </p>
          </div>

          {/* Accordion */}
          <div>
            {FAQS.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <Item faq={faq} id={i} open={open === i} onToggle={() => setOpen(open === i ? null : i)} />
              </motion.div>
            ))}
            <div style={{ borderTop: "1px solid rgba(17,17,17,0.08)" }} />
          </div>
        </div>
      </div>
    </section>
  )
}
