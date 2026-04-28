import { motion } from "motion/react"

const CAPABILITIES = [
  {
    num: "01",
    category: "SYSTEMS",
    title: "AI Architecture Integration",
    desc: "We build the backbone of your firm's AI future. Private LLM deployment, secure document environments, and data sovereignty—engineered to respect client privilege at every layer.",
    tags: ["Private Cloud & On-Prem LLM", "Document Management System (DMS) Connectors"],
  },
  {
    num: "02",
    category: "EDUCATION",
    title: "Associate Partner Upskilling",
    desc: "Bespoke AI training programs for legal professionals. From prompt engineering for partners to LLM governance for general counsel—we build fluency that sticks.",
    tags: ["Custom Curriculum Design", "Firm-wide Rollout Planning"],
  },
  {
    num: "03",
    category: "GOVERNANCE",
    title: "Risk Mitigation & Compliance",
    desc: "Governance frameworks for AI-generated filings, client communications, and research outputs. Every workflow includes human review checkpoints and privilege preservation by design.",
    tags: ["AI Compliance Audits", "Attorney-Client Privilege Guardrails"],
  },
]

export default function Modules() {
  return (
    <section id="capabilities" style={{ background: "#ffffff", padding: "120px 60px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: 80 }}>
          <p style={{
            fontSize: 11, fontWeight: 700, letterSpacing: "0.18em",
            textTransform: "uppercase", color: "#E84325", marginBottom: 18,
          }}>
            Service Offerings
          </p>
          <h2 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "clamp(42px, 5.5vw, 72px)",
            fontWeight: 900, lineHeight: 0.95,
            letterSpacing: "-0.01em", textTransform: "uppercase",
            color: "#111",
          }}>
            Core Capabilities<br />For Global Firms
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
                  color: "rgba(17,17,17,0.12)", display: "block",
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
                fontSize: "clamp(22px, 2.2vw, 30px)",
                fontWeight: 700, letterSpacing: "-0.02em",
                color: "#111", lineHeight: 1.15, paddingTop: 6,
              }}>
                {cap.title}
              </h3>

              {/* Desc + tags */}
              <div style={{ paddingTop: 6 }}>
                <p style={{
                  fontSize: 15, lineHeight: 1.7,
                  color: "rgba(17,17,17,0.52)", marginBottom: 20,
                }}>
                  {cap.desc}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {cap.tags.map(tag => (
                    <div key={tag} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{
                        width: 5, height: 5, borderRadius: "50%",
                        background: "#E84325", flexShrink: 0,
                      }} />
                      <span style={{
                        fontSize: 12, color: "rgba(17,17,17,0.45)", fontWeight: 500,
                      }}>
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Bottom border */}
          <div style={{ borderTop: "1px solid rgba(17,17,17,0.08)" }} />
        </div>
      </div>
    </section>
  )
}
