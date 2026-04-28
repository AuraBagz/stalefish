import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { useBreakpoint } from "../hooks/useBreakpoint"

const CHANNELS = [
  { name: "Telegram",        icon: "✈", color: "#229ED9" },
  { name: "SMS",             icon: "💬", color: "#22C55E" },
  { name: "Slack",           icon: "#",  color: "#4A154B" },
  { name: "Microsoft Teams", icon: "⬡", color: "#6264A7" },
  { name: "Discord",         icon: "⊕", color: "#5865F2" },
  { name: "Email",           icon: "✉", color: "#E84325" },
  { name: "Web Portal",      icon: "⬚", color: "#111111" },
  { name: "Custom",          icon: "+",  color: "#888888" },
]

function ChannelPill({ channel, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      style={{
        display: "flex", alignItems: "center", gap: 10,
        padding: "12px 16px", background: "#fff",
        border: "1px solid rgba(17,17,17,0.08)",
        borderRadius: 12, boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
      }}
    >
      <div style={{
        width: 32, height: 32, borderRadius: 9,
        background: channel.color + "15",
        display: "flex", alignItems: "center", justifyContent: "center",
        border: `1px solid ${channel.color}20`, flexShrink: 0,
      }} aria-hidden="true">
        <span style={{ color: channel.color, fontWeight: 700, fontSize: 13 }}>{channel.icon}</span>
      </div>
      <span style={{ fontSize: 13, fontWeight: 600, color: "#111", letterSpacing: "-0.01em" }}>
        {channel.name}
      </span>
      <div style={{ marginLeft: "auto" }}>
        <div style={{
          width: 7, height: 7, borderRadius: "50%",
          background: channel.name === "Custom" ? "rgba(17,17,17,0.2)" : "#22C55E",
          boxShadow: channel.name === "Custom" ? "none" : "0 0 5px #22C55E80",
        }} aria-hidden="true" />
      </div>
    </motion.div>
  )
}

export default function Channels() {
  const { isMobile, isTablet } = useBreakpoint()
  const isSmall = isMobile || isTablet
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: "-60px" })
  const px = isMobile ? "20px" : isTablet ? "32px" : "60px"
  const py = isMobile ? "72px" : "120px"

  return (
    <section id="channels" aria-labelledby="channels-heading" style={{ background: "#f5f5f8", padding: `${py} ${px}` }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: isSmall ? "1fr" : "1fr 1fr",
          gap: isSmall ? "48px 0" : "0 80px",
          alignItems: "center",
        }}>

          {/* Copy */}
          <div ref={headRef}>
            <motion.p
              initial={{ opacity: 0, y: 12 }} animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
              style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#E84325", marginBottom: 18 }}
            >
              Channel Deployment
            </motion.p>

            <motion.h2
              id="channels-heading"
              initial={{ opacity: 0, y: 24 }} animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: isMobile ? "clamp(36px, 11vw, 52px)" : "clamp(38px, 4.5vw, 62px)",
                fontWeight: 900, lineHeight: 1.0,
                letterSpacing: "-0.01em", textTransform: "uppercase",
                color: "#111", margin: "0 0 24px",
              }}
            >
              The system<br />comes to you.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.16 }}
              style={{ fontSize: 15, lineHeight: 1.75, color: "rgba(17,17,17,0.52)", margin: "0 0 20px", maxWidth: 440 }}
            >
              We deploy the system to whichever messaging surface your firm already lives in — Telegram, SMS, Slack, Teams, Discord, email, or a custom web portal.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.22 }}
              style={{ fontSize: 15, lineHeight: 1.75, color: "rgba(17,17,17,0.52)", margin: "0 0 32px", maxWidth: 440 }}
            >
              <strong style={{ color: "#111", fontWeight: 600 }}>The system is shaped to the firm, not the other way around.</strong> The attorney never learns a new dashboard. Deliverables travel inside the conversation they are already having.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }} animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 }}
              style={{ display: "flex", gap: 8, flexWrap: "wrap" }}
            >
              {[
                { label: "No new app to learn", color: "#111" },
                { label: "Works in your existing stack", color: "#111" },
                { label: "Custom deployment on request", color: "#E84325" },
              ].map(badge => (
                <span key={badge.label} style={{
                  fontSize: 11.5, fontWeight: 600, color: badge.color,
                  border: `1.5px solid ${badge.color === "#E84325" ? "#E84325" : "rgba(17,17,17,0.12)"}`,
                  borderRadius: 20, padding: "6px 14px",
                }}>
                  {badge.label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Channel grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {CHANNELS.map((ch, i) => (
              <ChannelPill key={ch.name} channel={ch} index={i} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
