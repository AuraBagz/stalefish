import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"

/* ─── Scenarios — real general-practice workflows ────────────────── */
const SCENARIOS = [
  {
    id: "demand",
    tab: "Demand Letter",
    query: "Draft RCW 42.56 demand — 15 requests, statutory per-diem penalties, cc to opposing counsel",
    clauses: [
      {
        text: "Re: Public Records Act Demand — RCW 42.56 et seq. | No. 2026-031 | Respondent: King County Housing Authority",
        risk: null,
      },
      {
        text: "The Agency has failed to respond within the statutory thirty-day period. Formal demand for immediate production pursuant to RCW 42.56.080.",
        risk: null,
      },
      {
        text: "Per-diem penalties of $1,500.00 per day per violation will accrue from April 3, 2026 pursuant to RCW 42.56.565(4).",
        risk: { level: "high", label: "ATTY — confirm accrual date" },
      },
      {
        text: "No direct contact with represented parties. All correspondence directed to Agency's counsel of record.",
        risk: { level: "medium", label: "RPC 4.2 — cleared ✓" },
      },
      {
        text: "See Neighborhood Alliance v. Spokane County — [SOURCE NOT READ IN SESSION — NOT CLEARED FOR DELIVERY]",
        risk: { level: "critical", label: "SOURCE GAP — remove or verify" },
      },
    ],
    rpcStatus: "not-cleared",
    statusLabel: "NOT CLEARED",
    statusNote: "1 unverified citation — deliverable held",
  },
  {
    id: "motion",
    tab: "Motion Draft",
    query: "Draft CR 55(b)(2) default judgment motion — Westlake Ventures v. Harmon, $47,800 unpaid fees",
    clauses: [
      {
        text: "SUPERIOR COURT OF WASHINGTON | KING COUNTY | Westlake Ventures LLC v. Marcus R. Harmon | No. 26-2-04817-1 KNT",
        risk: null,
      },
      {
        text: "Plaintiff moves for entry of default judgment under CR 55(b)(2) in the principal amount of $47,800.00 plus pre-judgment interest.",
        risk: null,
      },
      {
        text: "Clerk's entry of default: April 14, 2026. Personal service effected: February 2, 2026. [Doc. 12, Clerk's File — read in session ✓]",
        risk: { level: "medium", label: "Citation verified ✓" },
      },
      {
        text: "Pre-judgment interest at 12% per annum from date of last invoice pursuant to RCW 19.52.020.",
        risk: { level: "high", label: "ATTY — confirm invoice date" },
      },
      {
        text: "Proposed Order of Default Judgment and supporting declaration of counsel attached as Exhibits A and B.",
        risk: null,
      },
    ],
    rpcStatus: "flagged",
    statusLabel: "CLEARED WITH FLAGS",
    statusNote: "1 attorney review item — ready for sign-off",
  },
  {
    id: "engagement",
    tab: "Engagement Letter",
    query: "Draft contingency engagement letter — personal injury matter, RPC 1.5 fee disclosure, client Chen",
    clauses: [
      {
        text: "Dear Ms. Chen: This confirms our representation in your personal injury claim arising from the incident of March 18, 2026.",
        risk: null,
      },
      {
        text: "Our fee is 33⅓% of gross recovery before suit is filed; 40% after suit is filed. All costs advanced are deducted before applying the percentage.",
        risk: { level: "medium", label: "RPC 1.5 — fee disclosed ✓" },
      },
      {
        text: "Scope of representation is limited to the personal injury claim described herein and does not extend to any related matter.",
        risk: { level: "medium", label: "RPC 1.2 — scope defined ✓" },
      },
      {
        text: "You may terminate this engagement at any time upon written notice. We may withdraw only as permitted under applicable RPC.",
        risk: null,
      },
      {
        text: "This engagement is not effective until a countersigned copy is returned to our office.",
        risk: null,
      },
    ],
    rpcStatus: "cleared",
    statusLabel: "CLEARED",
    statusNote: "RPC 1.5 + 1.2 reviewed — signature-ready",
  },
]

const RISK_STYLE = {
  critical: { bg: "rgba(232,67,37,0.12)",  bar: "#E84325", badge: "rgba(232,67,37,0.15)",  badgeText: "#E84325" },
  high:     { bg: "rgba(234,179,8,0.10)",  bar: "#CA8A04", badge: "rgba(234,179,8,0.15)",  badgeText: "#CA8A04" },
  medium:   { bg: "rgba(34,197,94,0.10)",  bar: "#22C55E", badge: "rgba(34,197,94,0.15)",  badgeText: "#22C55E" },
}

const RPC_STATUS_STYLE = {
  "cleared":     { color: "#22C55E", bg: "rgba(34,197,94,0.1)",   dot: "#22C55E" },
  "flagged":     { color: "#CA8A04", bg: "rgba(234,179,8,0.1)",   dot: "#CA8A04" },
  "not-cleared": { color: "#E84325", bg: "rgba(232,67,37,0.1)",   dot: "#E84325" },
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
          fontSize: 11.5, lineHeight: 1.6,
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
              flexShrink: 0, fontSize: 9, fontWeight: 700,
              letterSpacing: "0.06em", textTransform: "uppercase",
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

/* ─── RPC Status card ────────────────────────────────────────────── */
function RPCStatus({ scenario, visible, delay }) {
  const sc = RPC_STATUS_STYLE[scenario.rpcStatus]
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 12 }}
      transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: sc.bg,
        border: `1px solid ${sc.color}30`,
        borderRadius: 10, padding: "12px 16px",
        marginTop: 14, display: "flex", alignItems: "center", gap: 14,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: sc.dot, boxShadow: `0 0 6px ${sc.dot}` }} />
        <span style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 13, fontWeight: 800, letterSpacing: "0.1em",
          textTransform: "uppercase", color: sc.color,
        }}>
          {scenario.statusLabel}
        </span>
      </div>
      <div style={{ width: 1, height: 28, background: "rgba(255,255,255,0.1)" }} />
      <span style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", fontWeight: 500, lineHeight: 1.4 }}>
        {scenario.statusNote}
      </span>
      <div style={{ marginLeft: "auto" }}>
        <span style={{ fontSize: 9.5, color: "rgba(255,255,255,0.28)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
          RPC Audit
        </span>
      </div>
    </motion.div>
  )
}

/* ─── AI demo panel ──────────────────────────────────────────────── */
function AIDemo() {
  const [scene, setScene] = useState(0)
  const [phase, setPhase] = useState(0)

  const s = SCENARIOS[scene]

  useEffect(() => {
    setPhase(0)
    const t1 = setTimeout(() => setPhase(1), 600)
    const t2 = setTimeout(() => setPhase(2), 600 + s.clauses.length * 220 + 400)
    const t3 = setTimeout(() => {
      setScene(n => (n + 1) % SCENARIOS.length)
    }, 600 + s.clauses.length * 220 + 400 + 3400)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [scene])

  return (
    <div
      role="img"
      aria-label="Live demonstration of Stalefish agentic legal operations system showing demand letter drafting with RPC ethics gate"
      style={{
        background: "#0a0b10",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 16, overflow: "hidden",
        height: "100%", display: "flex", flexDirection: "column",
      }}
    >
      {/* title bar */}
      <div style={{
        padding: "12px 16px",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        display: "flex", alignItems: "center", gap: 8,
      }}>
        <div style={{ display: "flex", gap: 5 }}>
          {["#E84325", "#CA8A04", "#22C55E"].map((c, i) => (
            <div key={i} aria-hidden="true" style={{ width: 9, height: 9, borderRadius: "50%", background: c, opacity: 0.7 }} />
          ))}
        </div>
        <span style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.3)", letterSpacing: "0.06em", marginLeft: 6 }}>
          STALEFISH AI  ·  Legal Operations
        </span>
        <div style={{ marginLeft: "auto", display: "flex", gap: 0 }}>
          {SCENARIOS.map((sc, i) => (
            <button
              key={sc.id}
              onClick={() => setScene(i)}
              aria-pressed={i === scene}
              style={{
                padding: "4px 11px", fontSize: 10.5, fontWeight: 600,
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
      <div style={{ flex: 1, padding: "16px 18px 14px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
        {/* query bubble */}
        <AnimatePresence mode="wait">
          <motion.div
            key={s.id + "-query"}
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 14 }}
          >
            <div style={{
              width: 24, height: 24, borderRadius: "50%", flexShrink: 0,
              background: "linear-gradient(135deg, #E84325, #c2320d)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 10, fontWeight: 700, color: "#fff",
            }}>
              Atty
            </div>
            <div style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "4px 10px 10px 10px",
              padding: "7px 11px",
              fontSize: 11.5, lineHeight: 1.5,
              color: "rgba(255,255,255,0.82)",
              fontFamily: "'Barlow', sans-serif",
            }}>
              {s.query}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* AI label */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <div style={{
            width: 24, height: 24, borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 9, fontWeight: 700, color: "rgba(255,255,255,0.6)",
          }}>
            AI
          </div>
          <span style={{ fontSize: 10.5, color: "rgba(255,255,255,0.3)", fontWeight: 500 }}>
            {phase < 2 ? "Drafting + running ethics gate…" : "Draft complete — RPC audit done"}
          </span>
          {phase < 2 && (
            <motion.div style={{ display: "flex", gap: 3, marginLeft: 2 }}>
              {[0, 1, 2].map(i => (
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
              <Clause key={i} clause={clause} delay={i * 0.18} visible={phase >= 1} />
            ))}
            <RPCStatus scenario={s} visible={phase >= 2} delay={0.1} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

/* ─── Trust badges ───────────────────────────────────────────────── */
const PROOF_POINTS = [
  "Built and operating in a live general-practice firm",
  "Hundreds of deliverables shipped",
  "Zero ethics violations",
  "Citation discipline audit-defensible to state-bar standards",
]

/* ─── Hero ───────────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-heading" style={{
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
            Agentic Legal Operations
          </motion.p>

          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(52px, 6.5vw, 86px)",
              fontWeight: 900, lineHeight: 0.95,
              letterSpacing: "-0.015em", textTransform: "uppercase",
              color: "#0a0a0a", margin: "0 0 28px",
            }}
          >
            Custom-Built<br />
            <span style={{ color: "#E84325" }}>Around</span><br />
            Your Firm.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              fontSize: 15.5, lineHeight: 1.72,
              color: "rgba(10,10,10,0.52)",
              maxWidth: 420, margin: "0 0 36px",
            }}
          >
            Not a chatbot. Not a SaaS dashboard. A custom-deployed
            agentic system that drafts the motion, verifies the citation,
            runs the ethics gate — and delivers signature-ready work product
            through whatever channel your firm already uses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.38 }}
            style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 48 }}
          >
            <a href="#contact" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#0a0a0a", color: "#fff",
              padding: "13px 24px", borderRadius: 100,
              fontSize: 14, fontWeight: 600, letterSpacing: "0.01em",
              textDecoration: "none",
            }}>
              Secure Consultation →
            </a>
            <a href="#contact" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "transparent", color: "#0a0a0a",
              padding: "13px 24px", borderRadius: 100,
              fontSize: 14, fontWeight: 600, letterSpacing: "0.01em",
              textDecoration: "none",
              border: "1.5px solid rgba(10,10,10,0.15)",
            }}>
              See it run on your workflow
            </a>
          </motion.div>

          {/* Trust bar — proof points, not firm names */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p style={{
              fontSize: 9.5, fontWeight: 700, letterSpacing: "0.2em",
              textTransform: "uppercase", color: "rgba(10,10,10,0.22)", marginBottom: 14,
            }}>
              Proof of operation
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {PROOF_POINTS.map((point, i) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.54 + i * 0.07 }}
                  style={{ display: "flex", alignItems: "center", gap: 10 }}
                >
                  <span style={{
                    width: 5, height: 5, borderRadius: "50%",
                    background: "#22C55E", flexShrink: 0,
                  }} aria-hidden="true" />
                  <span style={{
                    fontSize: 12.5, fontWeight: 500,
                    color: "rgba(10,10,10,0.42)", letterSpacing: "-0.01em",
                  }}>
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Right: AI demo ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          style={{ height: 590 }}
        >
          <AIDemo />
        </motion.div>

      </div>
    </section>
  )
}
