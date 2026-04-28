import { motion } from "motion/react"
import { useBreakpoint } from "../hooks/useBreakpoint"

const SEGMENTS = [
  {
    label: "Solo & Small Firm",
    title: "Solo and Small-to-Mid Practices",
    desc: "The system was built and is running in a live general-practice firm today. Hundreds of deliverables shipped. A solo or small firm gets the same agentic drafting, research, and ethics gate that a larger team would — shaped to the practice areas and workflows that actually matter to you.",
    tag: "Where We Operate",
    featured: true,
  },
  {
    label: "Litigation",
    title: "Litigation & Dispute Resolution",
    desc: "Motions, demand letters, chronologies, and discovery summaries — drafted to court filing spec, citations verified, RPC 3.3 compliance checked. The attorney argues the case. The system handles the paper.",
    tag: "Motion Practice",
    featured: false,
  },
  {
    label: "Transactional",
    title: "Transactional & Contract Work",
    desc: "Contracts, engagement letters, redlines, and clause libraries — drafted in the firm's house style and reviewed for common risk flags before the attorney reads the first page.",
    tag: "Contract Drafting",
    featured: false,
  },
  {
    label: "Legal Ops",
    title: "Legal Ops & Intake Teams",
    desc: "Standardized intake, client onboarding correspondence, matter summaries, and status updates — routed through the ethics gate and delivered to the attorney with the record already organized.",
    tag: "Ops Layer",
    featured: false,
  },
]

const CARD_COLORS = [
  { bg: "#111111", text: "#fff" },
  { bg: "#f4f4f6", text: "#111" },
  { bg: "#f4f4f6", text: "#111" },
  { bg: "#f4f4f6", text: "#111" },
]

export default function Industries() {
  const { isMobile, isTablet } = useBreakpoint()
  const px = isMobile ? "20px" : isTablet ? "32px" : "60px"
  const py = isMobile ? "72px" : "120px"

  return (
    <section id="industries" aria-labelledby="industries-heading" style={{ background: "#f5f5f8", padding: `${py} ${px}` }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: isMobile ? 40 : 64, flexWrap: "wrap", gap: 24 }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#E84325", marginBottom: 18 }}>
              Who We Serve
            </p>
            <h2 id="industries-heading" style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: isMobile ? "clamp(36px, 11vw, 52px)" : "clamp(42px, 5.5vw, 72px)",
              fontWeight: 900, lineHeight: 0.95,
              letterSpacing: "-0.01em", textTransform: "uppercase", color: "#111", margin: 0,
            }}>
              Built for Legal Work<br />That Cannot Be Sloppy
            </h2>
          </div>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 12,
        }}>
          {SEGMENTS.map((seg, i) => {
            const col = CARD_COLORS[i]
            return (
              <motion.article
                key={seg.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                style={{
                  background: col.bg, borderRadius: 20,
                  padding: isMobile ? "28px 24px" : "36px 32px",
                  border: col.bg === "#f4f4f6" ? "1px solid rgba(17,17,17,0.06)" : "none",
                  position: "relative", overflow: "hidden",
                }}
              >
                {seg.featured && (
                  <div style={{ position: "absolute", top: 16, right: 16, display: "flex", alignItems: "center", gap: 6 }} aria-hidden="true">
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22C55E", boxShadow: "0 0 5px #22C55E" }} />
                    <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
                      Live today
                    </span>
                  </div>
                )}
                <div style={{ marginBottom: 20 }}>
                  <span style={{
                    fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
                    color: col.text === "#fff" ? "rgba(255,255,255,0.5)" : "rgba(17,17,17,0.38)",
                    padding: "5px 11px", borderRadius: 20,
                    background: col.text === "#fff" ? "rgba(255,255,255,0.1)" : "rgba(17,17,17,0.06)",
                  }}>
                    {seg.label}
                  </span>
                </div>
                <h3 style={{ fontSize: 19, fontWeight: 700, letterSpacing: "-0.015em", color: col.text, lineHeight: 1.25, marginBottom: 10 }}>
                  {seg.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.68, color: col.text === "#fff" ? "rgba(255,255,255,0.5)" : "rgba(17,17,17,0.5)", marginBottom: 20 }}>
                  {seg.desc}
                </p>
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: col.text === "#fff" ? "rgba(255,255,255,0.28)" : "rgba(17,17,17,0.22)" }}>
                  {seg.tag}
                </span>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
