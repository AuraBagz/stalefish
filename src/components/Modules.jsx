import { motion } from "motion/react"

const CAPABILITIES = [
  {
    num: "01",
    category: "DRAFTING",
    title: "Motions, Briefs & Correspondence",
    desc: "Motions, briefs, demand letters, contracts, engagement letters, and client correspondence — drafted to the document type's exact formatting spec. Court pleadings get line numbers and proper caption formatting. Letters come out in the firm's letter style. Not a markdown dump converted to Word. File-format-level output, every time.",
    tags: [
      "Court Pleadings with Line Numbers & Caption Formatting",
      "Demand Letters, Contracts & Engagement Agreements",
      "Client Correspondence in Firm House Style",
    ],
  },
  {
    num: "02",
    category: "RESEARCH",
    title: "Citation-Disciplined Research",
    desc: "Every citation must trace to a source actually read in the same session. SOURCE GAP flags surface anything unverifiable before the deliverable leaves the firm. Verbatim-quote checks run against the source document. The system is structurally incapable of shipping a case citation it cannot verify.",
    tags: [
      "In-Session Source Verification on Every Cite",
      "SOURCE GAP Flagging Before Delivery",
      "Verbatim Quote Validation Against Source",
    ],
  },
  {
    num: "03",
    category: "ETHICS GATE",
    title: "RPC Compliance Review",
    desc: "Every deliverable routes through a mandatory rules-of-professional-conduct compliance check before it is released. Mechanical fixes applied inline. Substantive judgment calls escalated to the attorney with a clear flag. Every artifact carries a CLEARED / CLEARED WITH FLAGS / NOT CLEARED status. Nothing leaves the firm without the supervising attorney's sign-off.",
    tags: [
      "CLEARED / CLEARED WITH FLAGS / NOT CLEARED on Every Output",
      "RPC 5.3 Supervised AI — Mandatory Attorney Sign-Off",
      "Inline Mechanical Fixes + Escalation for Judgment Calls",
    ],
  },
  {
    num: "04",
    category: "CONTINUITY",
    title: "Persistent Memory & Firm Wiki",
    desc: "The system accumulates a structured firm wiki across every session — client matters, cross-referenced entities, opposing parties, prior rulings, preferred clauses. Calendar awareness with deadline warnings. Every action logged. The longer the system runs, the more valuable your firm's institutional memory becomes.",
    tags: [
      "Cross-Session Persistent Memory",
      "Structured Firm Wiki — Matters, Clients, Entities",
      "Deadline Awareness & Log-Everything Discipline",
    ],
  },
]

export default function Modules() {
  return (
    <section id="capabilities" aria-labelledby="capabilities-heading" style={{ background: "#ffffff", padding: "120px 60px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: 80 }}>
          <p style={{
            fontSize: 11, fontWeight: 700, letterSpacing: "0.18em",
            textTransform: "uppercase", color: "#E84325", marginBottom: 18,
          }}>
            What the System Does
          </p>
          <h2 id="capabilities-heading" style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "clamp(42px, 5.5vw, 72px)",
            fontWeight: 900, lineHeight: 0.95,
            letterSpacing: "-0.01em", textTransform: "uppercase",
            color: "#111",
          }}>
            Four Things.<br />All of Them Well.
          </h2>
        </div>

        {/* Capabilities list */}
        <div>
          {CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr 1fr",
                gap: "0 56px",
                padding: "48px 0",
                borderTop: "1px solid rgba(17,17,17,0.08)",
                alignItems: "start",
              }}
            >
              {/* Number + category */}
              <div>
                <span style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 48, fontWeight: 900, lineHeight: 1,
                  color: "rgba(17,17,17,0.10)", display: "block",
                }}>
                  {cap.num}
                </span>
                <span style={{
                  fontSize: 9, fontWeight: 700, letterSpacing: "0.14em",
                  textTransform: "uppercase", color: "#E84325", display: "block", marginTop: 4,
                }}>
                  {cap.category}
                </span>
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: "clamp(20px, 2vw, 28px)",
                fontWeight: 700, letterSpacing: "-0.02em",
                color: "#111", lineHeight: 1.15, paddingTop: 6,
              }}>
                {cap.title}
              </h3>

              {/* Desc + tags */}
              <div style={{ paddingTop: 6 }}>
                <p style={{
                  fontSize: 15, lineHeight: 1.72,
                  color: "rgba(17,17,17,0.52)", marginBottom: 22,
                }}>
                  {cap.desc}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {cap.tags.map(tag => (
                    <div key={tag} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <span aria-hidden="true" style={{
                        width: 5, height: 5, borderRadius: "50%",
                        background: "#E84325", flexShrink: 0, marginTop: 6,
                      }} />
                      <span style={{
                        fontSize: 12.5, color: "rgba(17,17,17,0.45)", fontWeight: 500, lineHeight: 1.5,
                      }}>
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          <div style={{ borderTop: "1px solid rgba(17,17,17,0.08)" }} />
        </div>
      </div>
    </section>
  )
}
