import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"

/* ─── Demo scenarios ─────────────────────────────────────────────── */
const SCENARIOS = [
  {
    id: "contract",
    tab: "Contract Review",
    query: "Identify liability risks in this Master Services Agreement",
    clauses: [
      {
        text: "8.3  In no event shall either Party's total cumulative liability exceed fees paid in the prior three (3) months.",
        risk: null,
      },
      {
        text: "8.4  Client shall indemnify, defend and hold harmless Vendor from any and all claims, damages, losses and expenses arising out of Client's use of the Services, without limitation.",
        risk: { level: "critical", label: "Uncapped indemnification" },
      },
      {
        text: "9.1  Either Party may terminate for convenience upon thirty (30) days' written notice.",
        risk: null,
      },
      {
        text: "12.2  Client irrevocably submits to the exclusive jurisdiction of Delaware courts and waives all rights to trial by jury in any proceeding.",
        risk: { level: "high", label: "Jury trial waiver" },
      },
      {
        text: "14.1  This Agreement supersedes all prior warranties, express or implied, including any implied warranty of merchantability or fitness.",
        risk: { level: "medium", label: "Implied warranty exclusion" },
      },
    ],
    counts: { critical: 1, high: 1, medium: 1 },
  },
  {
    id: "diligence",
    tab: "Due Diligence",
    query: "Summarise material risks in this acquisition target's disclosure",
    clauses: [
      {
        text: "Annual recurring revenue for FY 2024 was $31.2M, reflecting 34% year-over-year growth.",
        risk: null,
      },
      {
        text: "The Company is party to 4 pending IP infringement claims with aggregate estimated exposure of $12.4M, none of which are covered by current insurance policies.",
        risk: { level: "critical", label: "Uninsured IP exposure $12.4M" },
      },
      {
        text: "Three of five founding engineers hold unvested equity subject to single-trigger acceleration on change of control.",
        risk: { level: "high", label: "Key person acceleration risk" },
      },
      {
        text: "The Company has not registered for sales tax nexus in 6 states in which it currently conducts business.",
        risk: { level: "critical", label: "Multi-state tax compliance gap" },
      },
    ],
    counts: { critical: 2, high: 1, medium: 0 },
  },
  {
    id: "compliance",
    tab: "Compliance Audit",
    query: "Audit this DPA for gaps against GDPR Article 28 obligations",
    clauses: [
      {
        text: "Processor shall process Personal Data solely on documented instructions from the Controller unless required otherwise by applicable law.",
        risk: null,
      },
      {
        text: "Sub-processors may be engaged at Processor's sole discretion. Controller acknowledges that Processor's list of sub-processors may change without prior notice.",
        risk: { level: "critical", label: "No sub-processor consent right" },
      },
      {
        text: "Processor shall implement technical and organisational measures appropriate to the risk, as determined at Processor's reasonable discretion.",
        risk: { level: "high", label: "Security standard undefined" },
      },
      {
        text: "Upon termination, Processor shall delete or return all Personal Data within a commercially reasonable time.",
        risk: { level: "high", label: "Deletion timeline not specified" },
      },
      {
        text: "In the event of a Personal Data breach, Processor shall notify Controller within 72 hours of becoming aware.",
        risk: null,
      },
    ],
    counts: { critical: 1, high: 2, medium: 0 },
  },
]

const RISK_STYLE = {
  critical: { bg: "rgba(232,67,37,0.12)", bar: "#E84325", badge: "rgba(232,67,37,0.15)", badgeText: "#E84325" },
  high:     { bg: "rgba(234,179,8,0.10)",  bar: "#CA8A04", badge: "rgba(234,179,8,0.15)",  badgeText: "#CA8A04" },
  medium:   { bg: "rgba(99,102,241,0.10)", bar: "#6366F1", badge: "rgba(99,102,241,0.15)", badgeText: "#6366F1" },
}

/* ─── Clause row ─────────────────────────────────────────────────── */
function Clause({ clause, delay, visible }) {
  const r = clause.risk ? RISK_STYLE[clause.risk.level] : null
  return (
    <motion.div
      initial={{ opacity: 0, x: -6 }}
      animate={{ opacity: visible ? 1 : 0, x: visible ? 0 : -6 }}
      transition={{ duration: 0.35, delay }}
      style={{ position: "relative", marginBottom: 10 }}
    >
      {/* sweep highlight */}
      {r && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: visible ? 1 : 0 }}
          transition={{ duration: 0.45, delay: delay + 0.18, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "absolute", inset: "0 0 0 0",
            background: r.bg,
            borderLeft: `2px solid ${r.bar}`,
            borderRadius: "0 3px 3px 0",
            transformOrigin: "left",
          }}
        />
      )}
      <div style={{
        position: "relative", zIndex: 1,
        padding: r ? "7px 10px 7px 12px" : "7px 0",
        display: "flex", alignItems: "flex-start", gap: 10,
      }}>
        <p style={{
          fontSize: 12, lineHeight: 1.6,
          color: r ? "rgba(255,255,255,0.88)" : "rgba(255,255,255,0.44)",
          margin: 0, flex: 1,
          fontFamily: "'Barlow', sans-serif",
        }}>
          {clause.text}
        </p>
        {r && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.8 }}
            transition={{ duration: 0.22, delay: delay + 0.35 }}
            style={{
              flexShrink: 0, fontSize: 9.5, fontWeight: 700,
              letterSpacing: "0.07em", textTransform: "uppercase",
              background: r.badge, color: r.badgeText,
              padding: "3px 7px", borderRadius: 4,
              whiteSpace: "nowrap", marginTop: 2,
            }}
          >
            {clause.risk.label}
          </motion.span>
        )}
      </div>
    </motion.div>
  )
}

/* ─── Summary card ───────────────────────────────────────────────── */
function Summary({ counts, visible, delay }) {
  const total = counts.critical + counts.high + counts.medium
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 12 }}
      transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 10, padding: "14px 16px",
        marginTop: 14, display: "flex", alignItems: "center", gap: 18,
      }}
    >
      <div>
        <div style={{ fontSize: 26, fontWeight: 800, color: "#fff", lineHeight: 1, fontFamily: "'Barlow', sans-serif" }}>
          {total}
        </div>
        <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.38)", marginTop: 2 }}>
          Issues found
        </div>
      </div>
      <div style={{ width: 1, height: 36, background: "rgba(255,255,255,0.1)" }} />
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        {counts.critical > 0 && (
          <span style={{ fontSize: 11, fontWeight: 600, color: "#E84325", display: "flex", alignItems: "center", gap: 4 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#E84325", display: "inline-block" }} />
            {counts.critical} Critical
          </span>
        )}
        {counts.high > 0 && (
          <span style={{ fontSize: 11, fontWeight: 600, color: "#CA8A04", display: "flex", alignItems: "center", gap: 4 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#CA8A04", display: "inline-block" }} />
            {counts.high} High
          </span>
        )}
        {counts.medium > 0 && (
          <span style={{ fontSize: 11, fontWeight: 600, color: "#6366F1", display: "flex", alignItems: "center", gap: 4 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#6366F1", display: "inline-block" }} />
            {counts.medium} Medium
          </span>
        )}
      </div>
      <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6 }}>
        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22C55E", boxShadow: "0 0 6px #22C55E" }} />
        <span style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", fontWeight: 500 }}>Analysis complete</span>
      </div>
    </motion.div>
  )
}

/* ─── AI demo panel ──────────────────────────────────────────────── */
function AIDemo() {
  const [scene, setScene]   = useState(0)
  const [phase, setPhase]   = useState(0) // 0=query, 1=clauses, 2=summary

  const s = SCENARIOS[scene]

  useEffect(() => {
    setPhase(0)
    const t1 = setTimeout(() => setPhase(1), 600)
    const t2 = setTimeout(() => setPhase(2), 600 + s.clauses.length * 220 + 400)
    const t3 = setTimeout(() => {
      setScene(n => (n + 1) % SCENARIOS.length)
    }, 600 + s.clauses.length * 220 + 400 + 3200)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [scene])

  return (
    <div style={{
      background: "#0a0b10",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: 16,
      overflow: "hidden",
      height: "100%",
      display: "flex", flexDirection: "column",
    }}>
      {/* title bar */}
      <div style={{
        padding: "12px 16px",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        display: "flex", alignItems: "center", gap: 8,
      }}>
        <div style={{ display: "flex", gap: 5 }}>
          {["#E84325","#CA8A04","#22C55E"].map((c, i) => (
            <div key={i} style={{ width: 9, height: 9, borderRadius: "50%", background: c, opacity: 0.7 }} />
          ))}
        </div>
        <span style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.3)", letterSpacing: "0.06em", marginLeft: 6 }}>
          STALEFISH AI  ·  Legal Analysis
        </span>
        <div style={{ marginLeft: "auto", display: "flex", gap: 0 }}>
          {SCENARIOS.map((sc, i) => (
            <button
              key={sc.id}
              onClick={() => setScene(i)}
              style={{
                padding: "4px 12px", fontSize: 11, fontWeight: 600,
                letterSpacing: "0.04em", border: "none", cursor: "pointer",
                borderRadius: 6,
                background: i === scene ? "rgba(255,255,255,0.1)" : "transparent",
                color: i === scene ? "#fff" : "rgba(255,255,255,0.32)",
                transition: "all 0.2s",
              }}
            >
              {sc.tab}
            </button>
          ))}
        </div>
      </div>

      {/* content */}
      <div style={{ flex: 1, padding: "18px 18px 16px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
        {/* query bubble */}
        <AnimatePresence mode="wait">
          <motion.div
            key={s.id + "-query"}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            style={{
              display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 16,
            }}
          >
            <div style={{
              width: 26, height: 26, borderRadius: "50%", flexShrink: 0,
              background: "linear-gradient(135deg, #E84325, #c2320d)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 11, fontWeight: 700, color: "#fff",
            }}>
              You
            </div>
            <div style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "4px 10px 10px 10px",
              padding: "8px 12px",
              fontSize: 12.5, lineHeight: 1.5,
              color: "rgba(255,255,255,0.82)",
              fontFamily: "'Barlow', sans-serif",
            }}>
              {s.query}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* AI label */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          <div style={{ width: 26, height: 26, borderRadius: "50%", background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.6)" }}>
            AI
          </div>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", fontWeight: 500 }}>
            {phase < 2 ? "Analysing document…" : "Analysis complete"}
          </span>
          {phase < 2 && (
            <motion.div style={{ display: "flex", gap: 3, marginLeft: 2 }}>
              {[0,1,2].map(i => (
                <motion.div key={i}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                  style={{ width: 4, height: 4, borderRadius: "50%", background: "#E84325" }}
                />
              ))}
            </motion.div>
          )}
        </div>

        {/* clauses */}
        <AnimatePresence mode="wait">
          <motion.div key={s.id + "-clauses"} style={{ flex: 1 }}>
            {s.clauses.map((clause, i) => (
              <Clause
                key={i}
                clause={clause}
                delay={i * 0.18}
                visible={phase >= 1}
              />
            ))}
            <Summary
              counts={s.counts}
              visible={phase >= 2}
              delay={0.1}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

/* ─── Hero ───────────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section id="hero" style={{
      background: "#ffffff",
      minHeight: "100vh",
      paddingTop: 64,
      display: "flex", alignItems: "stretch",
    }}>
      <div style={{
        width: "100%", maxWidth: 1280, margin: "0 auto",
        padding: "0 48px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 48,
        alignItems: "center",
        minHeight: "calc(100vh - 64px)",
      }}>

        {/* ── Left: copy ── */}
        <div style={{ paddingBottom: 40 }}>
          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontSize: 11, fontWeight: 700, letterSpacing: "0.2em",
              textTransform: "uppercase", color: "#E84325", marginBottom: 24,
            }}
          >
            Pioneering Legal Intelligence
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(52px, 6.5vw, 90px)",
              fontWeight: 900, lineHeight: 0.95,
              letterSpacing: "-0.015em", textTransform: "uppercase",
              color: "#0a0a0a", margin: "0 0 28px",
            }}
          >
            AI-Powered<br />Legal Systems<br />
            <span style={{ color: "#E84325" }}>for the</span><br />
            Global 100.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              fontSize: 16, lineHeight: 1.7,
              color: "rgba(10,10,10,0.48)",
              maxWidth: 400, margin: "0 0 36px",
            }}
          >
            We architect, implement, and operationalise AI systems
            inside the world's most demanding law firms — handling
            the complexity so your lawyers don't have to.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.38 }}
            style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 56 }}
          >
            <a href="#contact" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#0a0a0a", color: "#fff",
              padding: "13px 24px", borderRadius: 100,
              fontSize: 14, fontWeight: 600, letterSpacing: "0.01em",
              textDecoration: "none", transition: "background 0.2s",
            }}>
              Secure Consultation →
            </a>
            <a href="#capabilities" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "transparent", color: "#0a0a0a",
              padding: "13px 24px", borderRadius: 100,
              fontSize: 14, fontWeight: 600, letterSpacing: "0.01em",
              textDecoration: "none",
              border: "1.5px solid rgba(10,10,10,0.15)",
            }}>
              View Capabilities
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p style={{
              fontSize: 9.5, fontWeight: 700, letterSpacing: "0.2em",
              textTransform: "uppercase", color: "rgba(10,10,10,0.22)", marginBottom: 16,
            }}>
              Trusted by
            </p>
            <div style={{ display: "flex", gap: 32, alignItems: "center", flexWrap: "wrap" }}>
              {["SKADDEN", "LATHAM", "KIRKLAND", "DLA PIPER", "CLIFFORD"].map((f, i) => (
                <motion.span key={f}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  transition={{ delay: 0.52 + i * 0.06 }}
                  style={{
                    fontSize: 12, fontWeight: 700, letterSpacing: "0.09em",
                    color: "rgba(10,10,10,0.22)",
                  }}
                >
                  {f}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Right: AI demo ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          style={{ height: 580 }}
        >
          <AIDemo />
        </motion.div>

      </div>
    </section>
  )
}
