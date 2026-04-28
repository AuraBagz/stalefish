import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { useBreakpoint } from "../hooks/useBreakpoint"

const WCAG_PRINCIPLES = [
  {
    code: "1.0",
    label: "Perceivable",
    desc: "Information must be presentable in ways every user can perceive — regardless of sight, hearing, or cognitive ability.",
    items: ["Alt text on all informational images", "Color contrast ≥ 4.5:1 on body text", "No information conveyed by color alone"],
  },
  {
    code: "2.0",
    label: "Operable",
    desc: "Every interface component must be operable without a mouse — and without triggering harm.",
    items: ["Full keyboard navigation on all interactions", "Skip-to-content link on every page", "No content that flashes more than 3× per second"],
  },
  {
    code: "3.0",
    label: "Understandable",
    desc: "Content and navigation must behave in ways users can predict and understand.",
    items: ["Descriptive page titles and heading hierarchy", "Meaningful link text (no 'click here')", "Error messages linked to their specific fields"],
  },
  {
    code: "4.0",
    label: "Robust",
    desc: "Content must be reliably interpreted by current and future assistive technologies.",
    items: ["Valid semantic HTML5 landmark structure", "WAI-ARIA 1.2 labels on all interactive regions", "Screen reader tested: NVDA, JAWS, VoiceOver"],
  },
]

const BUILT_IN = [
  { status: "done", label: "Skip-to-content link on every page" },
  { status: "done", label: "Semantic landmarks: <header>, <main>, <nav>, <footer>" },
  { status: "done", label: "ARIA labels on all interactive elements and regions" },
  { status: "done", label: "Keyboard-navigable — full site operable without a mouse" },
  { status: "done", label: "Focus-visible ring on all focusable elements" },
  { status: "done", label: "Heading hierarchy enforced (h1 → h2 → h3) sitewide" },
  { status: "done", label: "Color contrast meets WCAG AA on all text" },
  { status: "done", label: "prefers-reduced-motion — animations collapse for vestibular users" },
  { status: "done", label: "Alt text and aria-hidden on all image elements" },
  { status: "done", label: "Accessible accordion FAQ with aria-expanded + aria-controls" },
  { status: "done", label: "Legal pages: Privacy, Terms, Accessibility Statement" },
  { status: "done", label: "Formal complaint and accommodation request contact on file" },
]

export default function ADACompliance() {
  const { isMobile, isTablet } = useBreakpoint()
  const isSmall = isMobile || isTablet
  const px = isMobile ? "20px" : isTablet ? "32px" : "60px"
  const py = isMobile ? "72px" : "120px"

  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: "-60px" })

  return (
    <section id="ada" aria-labelledby="ada-heading" style={{ background: "#ffffff", padding: `${py} ${px}` }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>

        {/* ── Header ── */}
        <div
          ref={headRef}
          style={{
            display: "grid",
            gridTemplateColumns: isSmall ? "1fr" : "1fr 1fr",
            gap: isSmall ? "2rem 0" : "0 80px",
            alignItems: "flex-end",
            marginBottom: isMobile ? "3rem" : "5rem",
          }}
        >
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }} animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
              style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#E84325", marginBottom: 18 }}
            >
              ADA Web Compliance
            </motion.p>
            <motion.h2
              id="ada-heading"
              initial={{ opacity: 0, y: 24 }} animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: isMobile ? "clamp(36px, 11vw, 52px)" : "clamp(42px, 5.5vw, 64px)",
                fontWeight: 900, lineHeight: 0.95,
                letterSpacing: "-0.01em", textTransform: "uppercase",
                color: "#111", margin: 0,
              }}
            >
              Accessible<br />
              by design.<br />
              <span style={{ color: "#E84325" }}>Required by law.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.16 }}
          >
            <p style={{ fontSize: 15.5, lineHeight: 1.75, color: "rgba(17,17,17,0.52)", margin: "0 0 20px" }}>
              The Americans with Disabilities Act extends to websites. Courts and the Department of Justice have consistently held that websites are "places of public accommodation" — meaning inaccessible sites expose their owners to ADA Title III litigation.
            </p>
            <p style={{ fontSize: 15.5, lineHeight: 1.75, color: "rgba(17,17,17,0.52)", margin: 0 }}>
              For law firms, this is doubly true: you are explicitly named as a place of public accommodation, your clients include people with disabilities who need access to legal services, and serial ADA web litigation is an active enforcement vector. The standard courts apply is <strong style={{ color: "#111", fontWeight: 600 }}>WCAG 2.1 Level AA</strong>.
            </p>
          </motion.div>
        </div>

        {/* ── WCAG 4 Principles ── */}
        <div style={{ marginBottom: isMobile ? "3.5rem" : "5rem" }}>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(17,17,17,0.28)", marginBottom: 24 }}
          >
            The four WCAG principles
          </motion.p>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(4, 1fr)",
            gap: 12,
          }}>
            {WCAG_PRINCIPLES.map((p, i) => (
              <motion.div
                key={p.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                style={{
                  background: "#f7f7f9",
                  border: "1px solid rgba(17,17,17,0.06)",
                  borderRadius: 16, padding: "28px 24px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <span style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 11, fontWeight: 800, letterSpacing: "0.1em",
                    color: "#E84325",
                    background: "rgba(232,67,37,0.08)",
                    border: "1px solid rgba(232,67,37,0.15)",
                    borderRadius: 6, padding: "2px 8px",
                  }}>
                    {p.code}
                  </span>
                  <h3 style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "1.1rem", fontWeight: 800,
                    letterSpacing: "-0.01em", color: "#111",
                    textTransform: "uppercase", margin: 0,
                  }}>
                    {p.label}
                  </h3>
                </div>
                <p style={{ fontSize: 13.5, lineHeight: 1.65, color: "rgba(17,17,17,0.52)", margin: "0 0 16px" }}>
                  {p.desc}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 7 }}>
                  {p.items.map(item => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                      <span aria-hidden="true" style={{ color: "#22C55E", fontWeight: 700, fontSize: 13, flexShrink: 0, marginTop: 1 }}>✓</span>
                      <span style={{ fontSize: 12.5, color: "rgba(17,17,17,0.48)", lineHeight: 1.45 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── What's built into this site ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isSmall ? "1fr" : "1fr 1fr",
          gap: isSmall ? "2.5rem 0" : "0 80px",
          alignItems: "start",
        }}>
          {/* Left: explanation */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(17,17,17,0.28)", marginBottom: 20 }}>
              Why it matters for law firms
            </p>
            <h3 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 900, letterSpacing: "-0.01em",
              textTransform: "uppercase", color: "#111",
              lineHeight: 1.1, margin: "0 0 24px",
            }}>
              Your website is a place of public accommodation.
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { heading: "Title III of the ADA applies to you", body: "Law firms are explicitly named in the ADA as places of public accommodation. Courts in the 1st, 7th, and 9th Circuits have held that websites fall under Title III. DOJ guidance reinforces this." },
                { heading: "Serial litigation is a real risk", body: "ADA web accessibility lawsuits exceed 4,000 filings per year in the US. Law firm sites are not exempt. The cost of retrofitting an inaccessible site — and defending a demand letter — far exceeds the cost of building it right from the start." },
                { heading: "Your clients need equal access", body: "An estimated 26% of US adults live with some form of disability. That includes potential clients who need legal help. An inaccessible site is a barrier to representation." },
                { heading: "WCAG 2.1 AA is the operative standard", body: "The DOJ's 2024 final rule on web accessibility under Title II cites WCAG 2.1 AA. While Title II applies directly to government entities, it signals the standard that Title III enforcement will follow." },
              ].map((item, i) => (
                <motion.div
                  key={item.heading}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  style={{ paddingLeft: 16, borderLeft: "2px solid rgba(17,17,17,0.1)" }}
                >
                  <p style={{ fontSize: 13.5, fontWeight: 700, color: "#111", margin: "0 0 4px" }}>{item.heading}</p>
                  <p style={{ fontSize: 13.5, lineHeight: 1.65, color: "rgba(17,17,17,0.5)", margin: 0 }}>{item.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: built-in checklist */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div style={{
              background: "#06070d", borderRadius: 20,
              padding: isMobile ? "28px 24px" : "36px 32px",
              border: "1px solid rgba(255,255,255,0.06)",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22C55E", boxShadow: "0 0 6px #22C55E" }} aria-hidden="true" />
                <span style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 12, fontWeight: 800, letterSpacing: "0.12em",
                  textTransform: "uppercase", color: "#22C55E",
                }}>
                  Implemented on this site
                </span>
              </div>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.28)", margin: "0 0 24px", letterSpacing: "0.02em" }}>
                WCAG 2.1 Level AA — partial conformance
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {BUILT_IN.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                    style={{
                      display: "flex", alignItems: "flex-start", gap: 12,
                      padding: "11px 0",
                      borderBottom: i < BUILT_IN.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                    }}
                  >
                    <span aria-hidden="true" style={{
                      width: 18, height: 18, borderRadius: "50%", flexShrink: 0,
                      background: "rgba(34,197,94,0.12)",
                      border: "1px solid rgba(34,197,94,0.25)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 10, color: "#22C55E", fontWeight: 700, marginTop: 1,
                    }}>
                      ✓
                    </span>
                    <span style={{ fontSize: 12.5, color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div style={{
                marginTop: 24, padding: "14px 16px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 10,
              }}>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", margin: 0, lineHeight: 1.6 }}>
                  Accessibility feedback or accommodation requests:{" "}
                  <a href="mailto:accessibility@stalefish.ai" style={{ color: "#E84325", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                    accessibility@stalefish.ai
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
