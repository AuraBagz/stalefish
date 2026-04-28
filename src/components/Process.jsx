import { motion } from "motion/react"
import { useBreakpoint } from "../hooks/useBreakpoint"

const STEPS = [
  {
    num: "01", label: "DEPLOY",
    title: "Live on day one.",
    desc: "We identify one high-friction workflow — a recurring motion, a demand letter cycle, a contract review process — and deploy the system against it. The firm is shipping real, reviewed work product from the first session. Not waiting on a six-month build-out.",
  },
  {
    num: "02", label: "OPERATE",
    title: "Deliverables ship continuously.",
    desc: "The system runs the workflow. Motions get drafted. Citations get verified. Ethics gates run on every output. The attorney reviews and signs. We tighten the system on every pass — faster drafts, sharper research, cleaner ethics gate results.",
  },
  {
    num: "03", label: "COMPOUND",
    title: "The firm wiki gets smarter.",
    desc: "Every session adds to the firm's institutional memory — matter history, client entities, opposing parties, prior rulings, preferred clauses. The system that served one workflow serves ten. The advantage compounds the longer it runs.",
  },
]

export default function Process() {
  const { isMobile, isTablet } = useBreakpoint()
  const isSmall = isMobile || isTablet
  const px = isMobile ? "20px" : isTablet ? "32px" : "60px"
  const py = isMobile ? "72px" : "120px"

  return (
    <section id="process" aria-labelledby="process-heading" style={{ background: "#111111", padding: `${py} ${px}` }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>

        {/* Header */}
        <div style={{
          display: "flex",
          flexDirection: isSmall ? "column" : "row",
          justifyContent: "space-between",
          alignItems: isSmall ? "flex-start" : "flex-end",
          marginBottom: isMobile ? 48 : 80,
          gap: 24,
        }}>
          <div>
            <p style={{
              fontSize: 11, fontWeight: 700, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "#E84325", marginBottom: 18,
            }}>
              How It Works
            </p>
            <h2 id="process-heading" style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: isMobile ? "clamp(36px, 11vw, 52px)" : "clamp(42px, 5.5vw, 72px)",
              fontWeight: 900, lineHeight: 0.95,
              letterSpacing: "-0.01em", textTransform: "uppercase",
              color: "#ffffff", margin: 0,
            }}>
              Deploy.<br />Operate.<br />Compound.
            </h2>
          </div>
          <a href="#contact" style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "13px 28px", borderRadius: 40,
            background: "#ffffff", color: "#111",
            fontSize: 14, fontWeight: 600, textDecoration: "none",
            letterSpacing: "-0.01em", whiteSpace: "nowrap", alignSelf: isSmall ? "flex-start" : "auto",
          }}>
            See it run on your workflow →
          </a>
        </div>

        {/* Steps */}
        <div>
          {STEPS.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                display: "grid",
                gridTemplateColumns: isSmall ? "1fr" : "80px 1fr 2fr",
                gap: isSmall ? 0 : "0 56px",
                padding: isMobile ? "36px 0" : "44px 0",
                borderTop: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {/* Number + label */}
              <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: isSmall ? 12 : 0 }}>
                <span style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: isSmall ? 36 : 52, fontWeight: 900, lineHeight: 1,
                  color: "rgba(255,255,255,0.10)",
                }}>
                  {s.num}
                </span>
                <span style={{
                  fontSize: 9, fontWeight: 700, letterSpacing: "0.14em",
                  textTransform: "uppercase", color: "#E84325",
                }}>
                  {s.label}
                </span>
              </div>

              <h3 style={{
                fontSize: isMobile ? "clamp(18px, 5.5vw, 24px)" : "clamp(20px, 2vw, 26px)",
                fontWeight: 700, letterSpacing: "-0.02em",
                color: "#fff", lineHeight: 1.2,
                paddingTop: isSmall ? 0 : 8,
                margin: isSmall ? "0 0 12px" : 0,
              }}>
                {s.title}
              </h3>

              <p style={{
                fontSize: 15, lineHeight: 1.75,
                color: "rgba(255,255,255,0.55)",
                paddingTop: isSmall ? 0 : 8,
                maxWidth: isSmall ? "100%" : 480,
                margin: 0,
              }}>
                {s.desc}
              </p>
            </motion.div>
          ))}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }} />
        </div>
      </div>
    </section>
  )
}
