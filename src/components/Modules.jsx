import { motion } from "motion/react"
import { useBreakpoint } from "../hooks/useBreakpoint"

const CAPABILITIES = [
  {
    num: "01", category: "DRAFTING",
    title: "Motions, Briefs & Correspondence",
    desc: "Motions, briefs, demand letters, contracts, engagement letters, and client correspondence — drafted to the document type's exact formatting spec. Court pleadings get line numbers and proper caption formatting. Letters come out in the firm's letter style. Not a markdown dump converted to Word. File-format-level output, every time.",
    tags: ["Court Pleadings with Line Numbers & Caption Formatting", "Demand Letters, Contracts & Engagement Agreements", "Client Correspondence in Firm House Style"],
    dark: true,
  },
  {
    num: "02", category: "RESEARCH",
    title: "Citation-Disciplined Research",
    desc: "Every citation must trace to a source actually read in the same session. SOURCE GAP flags surface anything unverifiable before the deliverable leaves the firm. Verbatim-quote checks run against the source document. The system is structurally incapable of shipping a case citation it cannot verify.",
    tags: ["In-Session Source Verification on Every Cite", "SOURCE GAP Flagging Before Delivery", "Verbatim Quote Validation Against Source"],
    dark: false,
  },
  {
    num: "03", category: "ETHICS GATE",
    title: "RPC Compliance Review",
    desc: "Every deliverable routes through a mandatory rules-of-professional-conduct compliance check before it is released. Mechanical fixes applied inline. Substantive judgment calls escalated to the attorney with a clear flag. Every artifact carries a CLEARED / CLEARED WITH FLAGS / NOT CLEARED status. Nothing leaves the firm without the supervising attorney's sign-off.",
    tags: ["CLEARED / CLEARED WITH FLAGS / NOT CLEARED on Every Output", "RPC 5.3 Supervised AI — Mandatory Attorney Sign-Off", "Inline Mechanical Fixes + Escalation for Judgment Calls"],
    dark: true,
  },
  {
    num: "04", category: "CONTINUITY",
    title: "Persistent Memory & Firm Wiki",
    desc: "The system accumulates a structured firm wiki across every session — client matters, cross-referenced entities, opposing parties, prior rulings, preferred clauses. Calendar awareness with deadline warnings. Every action logged. The longer the system runs, the more valuable your firm's institutional memory becomes.",
    tags: ["Cross-Session Persistent Memory", "Structured Firm Wiki — Matters, Clients, Entities", "Deadline Awareness & Log-Everything Discipline"],
    dark: false,
  },
]

export default function Modules() {
  const { isMobile, isTablet } = useBreakpoint()
  const isSmall = isMobile || isTablet
  const px = isMobile ? "20px" : isTablet ? "32px" : "60px"

  return (
    <section id="capabilities" aria-labelledby="capabilities-heading">

      {/* Header */}
      <div style={{ background: "#ffffff", padding: isMobile ? "72px 20px 48px" : isTablet ? "80px 32px 56px" : "120px 60px 80px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <p style={{
            fontSize: 11, fontWeight: 700, letterSpacing: "0.18em",
            textTransform: "uppercase", color: "#E84325", marginBottom: 18,
          }}>
            What the System Does
          </p>
          <h2 id="capabilities-heading" style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: isMobile ? "clamp(36px, 11vw, 52px)" : "clamp(42px, 5.5vw, 72px)",
            fontWeight: 900, lineHeight: 0.95,
            letterSpacing: "-0.01em", textTransform: "uppercase",
            color: "#111", margin: 0,
          }}>
            The Complete<br />Legal Operations Stack.
          </h2>
        </div>
      </div>

      {/* Alternating stripes */}
      {CAPABILITIES.map((cap, i) => {
        const bg   = cap.dark ? "#111111" : "#ffffff"
        const text = cap.dark ? "#ffffff" : "#111111"
        const sub  = cap.dark ? "rgba(255,255,255,0.82)" : "rgba(17,17,17,0.52)"
        const num  = cap.dark ? "rgba(255,255,255,0.12)" : "rgba(17,17,17,0.08)"
        const tag  = cap.dark ? "rgba(255,255,255,0.72)" : "rgba(17,17,17,0.38)"
        const div  = cap.dark ? "rgba(255,255,255,0.07)" : "rgba(17,17,17,0.08)"

        return (
          <div key={cap.num} style={{ background: bg }}>
            <div style={{ maxWidth: 1160, margin: "0 auto", padding: `0 ${px}` }}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  display: "grid",
                  gridTemplateColumns: isSmall ? "1fr" : "80px 1fr 1fr",
                  gap: isSmall ? "0" : "0 56px",
                  padding: isMobile ? "40px 0" : "56px 0",
                  borderTop: `1px solid ${div}`,
                }}
              >
                {/* Number + category */}
                <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: isSmall ? 16 : 0 }}>
                  <span style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: isSmall ? 36 : 52, fontWeight: 900, lineHeight: 1, color: num,
                  }}>
                    {cap.num}
                  </span>
                  <span style={{
                    fontSize: 9, fontWeight: 700, letterSpacing: "0.14em",
                    textTransform: "uppercase", color: "#E84325",
                  }}>
                    {cap.category}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: isMobile ? "clamp(18px, 5.5vw, 24px)" : "clamp(20px, 2vw, 28px)",
                  fontWeight: 700, letterSpacing: "-0.02em",
                  color: text, lineHeight: 1.15,
                  paddingTop: isSmall ? 0 : 6,
                  margin: isSmall ? "0 0 16px" : 0,
                }}>
                  {cap.title}
                </h3>

                {/* Desc + tags */}
                <div style={{ paddingTop: isSmall ? 0 : 6 }}>
                  <p style={{ fontSize: 15, lineHeight: 1.75, color: sub, margin: "0 0 20px" }}>
                    {cap.desc}
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {cap.tags.map(t => (
                      <div key={t} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                        <span aria-hidden="true" style={{
                          width: 5, height: 5, borderRadius: "50%",
                          background: "#E84325", flexShrink: 0, marginTop: 7,
                        }} />
                        <span style={{ fontSize: 12.5, color: tag, fontWeight: 500, lineHeight: 1.5 }}>
                          {t}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
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
