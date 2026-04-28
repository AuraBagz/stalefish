import { motion } from "motion/react"

const STEPS = [
  {
    num: "01",
    label: "DEPLOY",
    title: "Live on day one.",
    desc: "We identify one high-friction workflow — a recurring motion, a demand letter cycle, a contract review process — and deploy the system against it. The firm is shipping real, reviewed work product from the first session. Not waiting on a six-month build-out.",
  },
  {
    num: "02",
    label: "OPERATE",
    title: "Deliverables ship continuously.",
    desc: "The system runs the workflow. Motions get drafted. Citations get verified. Ethics gates run on every output. The attorney reviews and signs. We tighten the system on every pass — faster drafts, sharper research, cleaner ethics gate results.",
  },
  {
    num: "03",
    label: "COMPOUND",
    title: "The firm wiki gets smarter.",
    desc: "Every session adds to the firm's institutional memory — matter history, client entities, opposing parties, prior rulings, preferred clauses. The system that served one workflow serves ten. The advantage compounds the longer it runs.",
  },
]

export default function Process() {
  return (
    <section id="process" aria-labelledby="process-heading" style={{ background: "#111111", padding: "120px 60px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>

        {/* Header */}
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-end", marginBottom: 80,
          flexWrap: "wrap", gap: 24,
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
              fontSize: "clamp(42px, 5.5vw, 72px)",
              fontWeight: 900, lineHeight: 0.95,
              letterSpacing: "-0.01em", textTransform: "uppercase",
              color: "#ffffff",
            }}>
              Deploy.<br />Operate.<br />Compound.
            </h2>
          </div>
          <a href="#contact" style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "13px 28px", borderRadius: 40,
            background: "#ffffff", color: "#111",
            fontSize: 14, fontWeight: 600, textDecoration: "none",
            letterSpacing: "-0.01em", whiteSpace: "nowrap",
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
                gridTemplateColumns: "80px 1fr 2fr",
                gap: "0 56px",
                padding: "44px 0",
                borderTop: "1px solid rgba(255,255,255,0.07)",
                alignItems: "start",
              }}
            >
              <span style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 52, fontWeight: 900, lineHeight: 1,
                color: "rgba(255,255,255,0.10)",
              }}>
                {s.num}
              </span>

              <div style={{ paddingTop: 8 }}>
                <span style={{
                  fontSize: 9, fontWeight: 700, letterSpacing: "0.14em",
                  textTransform: "uppercase", color: "#E84325",
                  display: "block", marginBottom: 10,
                }}>
                  {s.label}
                </span>
                <h3 style={{
                  fontSize: "clamp(20px, 2vw, 26px)",
                  fontWeight: 700, letterSpacing: "-0.02em",
                  color: "#fff", lineHeight: 1.2,
                }}>
                  {s.title}
                </h3>
              </div>

              <p style={{
                fontSize: 15, lineHeight: 1.75,
                color: "rgba(255,255,255,0.45)", paddingTop: 8,
                maxWidth: 480,
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
