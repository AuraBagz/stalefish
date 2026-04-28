import { motion, useInView } from "motion/react"
import { useRef } from "react"

const PILLARS = [
  {
    number: "01",
    title: "Regulatory Compliance",
    desc: "Full alignment with EU AI Act, GDPR, CCPA, and sector-specific mandates — updated as frameworks evolve.",
    tags: ["EU AI Act", "GDPR", "CCPA"],
  },
  {
    number: "02",
    title: "Audit Trails & Explainability",
    desc: "Every AI decision logged, timestamped, and explainable. Complete chain-of-custody for partners, clients, and regulators.",
    tags: ["Decision Logs", "Explainability", "SOC 2"],
  },
  {
    number: "03",
    title: "Data Sovereignty",
    desc: "On-premises and private cloud deployment options. Client matter data never leaves your infrastructure.",
    tags: ["On-Prem", "Zero Egress", "ISO 27001"],
  },
  {
    number: "04",
    title: "Model Governance",
    desc: "Version-controlled models with drift detection, approval workflows, and rollback — AI you can actually trust at scale.",
    tags: ["Model Registry", "Drift Detection", "Approvals"],
  },
]

const FRAMEWORKS = [
  "EU AI Act", "GDPR", "CCPA", "SOC 2 Type II", "ISO 27001",
  "HIPAA", "FCA Guidelines", "SEC AI Policy", "NIST AI RMF", "NY DFS",
  "EU AI Act", "GDPR", "CCPA", "SOC 2 Type II", "ISO 27001",
  "HIPAA", "FCA Guidelines", "SEC AI Policy", "NIST AI RMF", "NY DFS",
]

function PillarCard({ pillar, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{
        borderTop: "1px solid rgba(255,255,255,0.1)",
        paddingTop: "2rem",
        paddingBottom: "2rem",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {/* Number + Title row */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: "1.25rem" }}>
          <span style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            color: "#E84325",
            marginTop: "3px",
            flexShrink: 0,
          }}>
            {pillar.number}
          </span>
          <h3 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "1.35rem",
            fontWeight: 800,
            letterSpacing: "-0.01em",
            color: "#ffffff",
            lineHeight: 1.2,
            margin: 0,
          }}>
            {pillar.title}
          </h3>
        </div>

        {/* Description */}
        <p style={{
          fontSize: "0.875rem",
          lineHeight: 1.7,
          color: "rgba(255,255,255,0.5)",
          margin: 0,
          paddingLeft: "2.5rem",
        }}>
          {pillar.desc}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", paddingLeft: "2.5rem" }}>
          {pillar.tags.map(tag => (
            <span key={tag} style={{
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "4px",
              padding: "3px 8px",
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Governance() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: "-60px" })

  return (
    <section style={{
      background: "#06070d",
      padding: "0 0 0 0",
      overflow: "hidden",
    }}>
      {/* Top bar accent */}
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(232,67,37,0.6) 30%, rgba(232,67,37,0.6) 70%, transparent)" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "6rem 2rem" }}>

        {/* Header row */}
        <div
          ref={headRef}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "flex-end",
            marginBottom: "4.5rem",
          }}
        >
          {/* Left: headline */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#E84325",
                margin: "0 0 1.25rem",
              }}
            >
              AI Governance
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(2.4rem, 4vw, 3.5rem)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
                color: "#ffffff",
                margin: 0,
                textTransform: "uppercase",
              }}
            >
              The regulatory<br />
              landscape just got<br />
              <span style={{ color: "#E84325" }}>a lot more complex.</span>
            </motion.h2>
          </div>

          {/* Right: description + stat */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}
          >
            <p style={{
              fontSize: "1rem",
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.5)",
              margin: 0,
            }}>
              Global law firms deploying AI face a tightening web of regulation, liability, and client expectation. Stalefish builds governance into every system from day one — so your AI is defensible, auditable, and future-proof.
            </p>

            {/* Stats row */}
            <div style={{ display: "flex", gap: "3rem" }}>
              {[
                { value: "47+", label: "Compliance frameworks tracked" },
                { value: "100%", label: "Audit coverage on all outputs" },
              ].map(stat => (
                <div key={stat.label}>
                  <div style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "2.5rem",
                    fontWeight: 900,
                    color: "#ffffff",
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: "0.75rem",
                    color: "rgba(255,255,255,0.35)",
                    marginTop: "0.4rem",
                    letterSpacing: "0.04em",
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Pillars grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "0 4rem",
        }}>
          {PILLARS.map((pillar, i) => (
            <PillarCard key={pillar.number} pillar={pillar} index={i} />
          ))}
        </div>
      </div>

      {/* Scrolling frameworks ticker */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.07)",
        padding: "1.25rem 0",
        overflow: "hidden",
        position: "relative",
      }}>
        {/* Fade edges */}
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0, width: "120px",
          background: "linear-gradient(90deg, #06070d, transparent)",
          zIndex: 1,
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", right: 0, top: 0, bottom: 0, width: "120px",
          background: "linear-gradient(270deg, #06070d, transparent)",
          zIndex: 1,
          pointerEvents: "none",
        }} />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity }}
          style={{ display: "flex", gap: "0", whiteSpace: "nowrap" }}
        >
          {FRAMEWORKS.map((fw, i) => (
            <span key={i} style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.2)",
              padding: "0 2.5rem",
              borderRight: "1px solid rgba(255,255,255,0.08)",
            }}>
              {fw}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Bottom bar accent */}
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 30%, rgba(255,255,255,0.06) 70%, transparent)" }} />
    </section>
  )
}
