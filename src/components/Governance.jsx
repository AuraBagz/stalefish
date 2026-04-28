import { motion, useInView } from "motion/react"
import { useRef } from "react"

const PILLARS = [
  {
    number: "01",
    rpc: "RPC 5.3",
    title: "Supervised AI",
    desc: "Every deliverable requires attorney sign-off before it leaves the firm. The system is structured so a final document cannot be released without the supervising attorney's review. Stalefish is a tool under attorney control — not an autonomous actor.",
    tags: ["Attorney Sign-Off Required", "Supervised AI Structure", "No Autonomous Release"],
  },
  {
    number: "02",
    rpc: "RPC 1.1 / 3.3",
    title: "Citation Discipline",
    desc: "Verifiable sourcing on every citation. Verbatim-quote validation against source documents. SOURCE GAP flags surface unverified items before delivery. The system structurally refuses to ship a citation it cannot trace to a source read in-session.",
    tags: ["In-Session Source Verification", "SOURCE GAP Flagging", "No Fabricated Authority"],
  },
  {
    number: "03",
    rpc: "RPC 1.6",
    title: "Confidentiality",
    desc: "Client matter data stays inside firm-controlled storage. No third-party data egress to model training pipelines. Access boundaries enforced at the system layer. What your client tells you stays in your system.",
    tags: ["Firm-Controlled Storage", "Zero Training Data Egress", "Access Boundary Enforcement"],
  },
  {
    number: "04",
    rpc: "RPC 4.2",
    title: "Communication Discipline",
    desc: "Represented-party rules respected at the recipient-list level on every outgoing letter, motion, or email. No direct contact with opposing represented parties without proper authorization — checked at the system layer before delivery.",
    tags: ["Recipient-List Verification", "Represented Party Protection", "Pre-Delivery Check"],
  },
]

const RPC_TICKER = [
  "RPC 5.3 — Supervision", "RPC 1.1 — Competence", "RPC 3.3 — Candor",
  "RPC 1.6 — Confidentiality", "RPC 4.2 — Communication",
  "RPC 1.4 — Client Communication", "RPC 1.5 — Fees", "RPC 1.2 — Scope",
  "RPC 5.3 — Supervision", "RPC 1.1 — Competence", "RPC 3.3 — Candor",
  "RPC 1.6 — Confidentiality", "RPC 4.2 — Communication",
  "RPC 1.4 — Client Communication", "RPC 1.5 — Fees", "RPC 1.2 — Scope",
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
      <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
        {/* Number + RPC rule + Title */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: "1.25rem" }}>
          <span style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em",
            color: "#E84325", marginTop: "3px", flexShrink: 0,
          }}>
            {pillar.number}
          </span>
          <div>
            <span style={{
              display: "inline-block",
              fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em",
              textTransform: "uppercase", color: "rgba(255,255,255,0.35)",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 4, padding: "2px 7px", marginBottom: 8,
            }}>
              {pillar.rpc}
            </span>
            <h3 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "1.3rem", fontWeight: 800, letterSpacing: "-0.01em",
              color: "#ffffff", lineHeight: 1.2, margin: 0,
            }}>
              {pillar.title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p style={{
          fontSize: "0.875rem", lineHeight: 1.72,
          color: "rgba(255,255,255,0.48)", margin: 0, paddingLeft: "2.5rem",
        }}>
          {pillar.desc}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", paddingLeft: "2.5rem" }}>
          {pillar.tags.map(tag => (
            <span key={tag} style={{
              fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.06em",
              textTransform: "uppercase", color: "rgba(255,255,255,0.3)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "4px", padding: "3px 8px",
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
    <section id="governance" aria-labelledby="governance-heading" style={{
      background: "#06070d", padding: "0 0 0 0", overflow: "hidden",
    }}>
      {/* Top bar accent */}
      <div aria-hidden="true" style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(232,67,37,0.6) 30%, rgba(232,67,37,0.6) 70%, transparent)" }} />

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
                fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.18em",
                textTransform: "uppercase", color: "#E84325", margin: "0 0 1.25rem",
              }}
            >
              Governance
            </motion.p>

            <motion.h2
              id="governance-heading"
              initial={{ opacity: 0, y: 24 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(2.2rem, 4vw, 3.3rem)",
                fontWeight: 900, letterSpacing: "-0.02em",
                lineHeight: 1.05, color: "#ffffff",
                margin: 0, textTransform: "uppercase",
              }}
            >
              The bar audits<br />
              your conduct,<br />
              <span style={{ color: "#E84325" }}>not your tech stack.</span>
            </motion.h2>
          </div>

          {/* Right: description + stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            <p style={{
              fontSize: "1rem", lineHeight: 1.78,
              color: "rgba(255,255,255,0.48)", margin: 0,
            }}>
              Every Stalefish system is built around the Rules of Professional
              Conduct that govern your bar — not an alphabet soup of tech
              compliance frameworks your clients will never ask about. The governance
              backbone is what actually protects you in front of a disciplinary committee.
            </p>

            <div style={{ display: "flex", gap: "3rem" }}>
              {[
                { value: "100%", label: "RPC audit on every deliverable" },
                { value: "0",    label: "Ethics violations in production" },
              ].map(stat => (
                <div key={stat.label}>
                  <div style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "2.4rem", fontWeight: 900,
                    color: "#ffffff", lineHeight: 1, letterSpacing: "-0.02em",
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: "0.72rem", color: "rgba(255,255,255,0.32)",
                    marginTop: "0.4rem", letterSpacing: "0.04em", lineHeight: 1.4,
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Pillars grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 4rem" }}>
          {PILLARS.map((pillar, i) => (
            <PillarCard key={pillar.number} pillar={pillar} index={i} />
          ))}
        </div>

        {/* Audit trail note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            marginTop: "3rem",
            padding: "1.5rem 2rem",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 12,
            display: "flex", alignItems: "center", gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 8, height: 8, borderRadius: "50%",
              background: "#22C55E", boxShadow: "0 0 6px #22C55E",
            }} aria-hidden="true" />
            <span style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "0.85rem", fontWeight: 800, letterSpacing: "0.08em",
              textTransform: "uppercase", color: "#22C55E",
            }}>
              Full Audit Trail
            </span>
          </div>
          <p style={{
            fontSize: "0.875rem", color: "rgba(255,255,255,0.38)",
            margin: 0, lineHeight: 1.6, maxWidth: 700,
          }}>
            Every action timestamped. Every citation traceable. Every ethics review preserved
            as a record the firm can produce on demand. When your client's matter goes sideways,
            you have the receipts.
          </p>
        </motion.div>
      </div>

      {/* Scrolling RPC ticker */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "1.25rem 0", overflow: "hidden", position: "relative",
      }} aria-hidden="true">
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0, width: "120px",
          background: "linear-gradient(90deg, #06070d, transparent)", zIndex: 1, pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", right: 0, top: 0, bottom: 0, width: "120px",
          background: "linear-gradient(270deg, #06070d, transparent)", zIndex: 1, pointerEvents: "none",
        }} />
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          style={{ display: "flex", gap: "0", whiteSpace: "nowrap" }}
        >
          {RPC_TICKER.map((rule, i) => (
            <span key={i} style={{
              fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.14em",
              textTransform: "uppercase", color: "rgba(255,255,255,0.18)",
              padding: "0 2.5rem",
              borderRight: "1px solid rgba(255,255,255,0.07)",
            }}>
              {rule}
            </span>
          ))}
        </motion.div>
      </div>

      <div aria-hidden="true" style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.05) 30%, rgba(255,255,255,0.05) 70%, transparent)" }} />
    </section>
  )
}
