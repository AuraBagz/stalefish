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
    dark: true,
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
    dark: false,
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
    dark: true,
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
    dark: false,
  },
]

export default function Modules() {
  return (
    <section id="capabilities" aria-labelledby="capabilities-heading">

      {/* Section header — light */}
      <div style={{ background: "#ffffff", padding: "120px 60px 80px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
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
            color: "#111", margin: 0,
          }}>
            The Complete<br />Legal Operations Stack.
          </h2>
        </div>
      </div>

      {/* Alternating capability stripes */}
      {CAPABILITIES.map((cap, i) => {
        const bg   = cap.dark ? "#111111" : "#ffffff"
        const text = cap.dark ? "#ffffff" : "#111111"
        const sub  = cap.dark ? "rgba(255,255,255,0.82)" : "rgba(17,17,17,0.52)"
        const num  = cap.dark ? "rgba(255,255,255,0.12)" : "rgba(17,17,17,0.08)"
        const tag  = cap.dark ? "rgba(255,255,255,0.72)" : "rgba(17,17,17,0.38)"
        const dot  = cap.dark ? "#E84325" : "#E84325"
        const div  = cap.dark ? "rgba(255,255,255,0.07)" : "rgba(17,17,17,0.08)"
        const cat  = "#E84325"

        return (
          <div key={cap.num} style={{ background: bg }}>
            <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 60px" }}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr 1fr",
                  gap: "0 56px",
                  padding: "56px 0",
                  borderTop: `1px solid ${div}`,
                  alignItems: "start",
                }}
              >
                {/* Number + category */}
                <div>
                  <span style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 52, fontWeight: 900, lineHeight: 1,
                    color: num, display: "block",
                  }}>
                    {cap.num}
                  </span>
                  <span style={{
                    fontSize: 9, fontWeight: 700, letterSpacing: "0.14em",
                    textTransform: "uppercase", color: cat, display: "block", marginTop: 6,
                  }}>
                    {cap.category}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: "clamp(20px, 2vw, 28px)",
                  fontWeight: 700, letterSpacing: "-0.02em",
                  color: text, lineHeight: 1.15, paddingTop: 6,
                  margin: 0,
                }}>
                  {cap.title}
                </h3>

                {/* Desc + tags */}
                <div style={{ paddingTop: 6 }}>
                  <p style={{
                    fontSize: 15, lineHeight: 1.75,
                    color: sub, marginBottom: 22, margin: "0 0 22px",
                  }}>
                    {cap.desc}
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {cap.tags.map(t => (
                      <div key={t} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                        <span aria-hidden="true" style={{
                          width: 5, height: 5, borderRadius: "50%",
                          background: dot, flexShrink: 0, marginTop: 7,
                        }} />
                        <span style={{
                          fontSize: 12.5, color: tag, fontWeight: 500, lineHeight: 1.5,
                        }}>
                          {t}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Bottom border on last row only if light */}
              {i === CAPABILITIES.length - 1 && (
                <div style={{ borderTop: `1px solid ${div}` }} />
              )}
            </div>
          </div>
        )
      })}
    </section>
  )
}
