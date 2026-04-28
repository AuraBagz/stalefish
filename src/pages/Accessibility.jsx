import { useEffect } from "react"
import { Link } from "react-router-dom"

const LAST_UPDATED = "April 28, 2026"

export default function Accessibility() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Accessibility — Stalefish"
  }, [])

  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      {/* Skip to content */}
      <a href="#main-content" style={{
        position: "absolute", top: "-40px", left: 0, background: "#E84325",
        color: "#fff", padding: "8px 16px", zIndex: 9999, fontSize: "14px",
        fontWeight: 600, textDecoration: "none", borderRadius: "0 0 6px 0",
        transition: "top 0.2s",
      }}
        onFocus={e => e.target.style.top = "0"}
        onBlur={e => e.target.style.top = "-40px"}
      >
        Skip to main content
      </a>

      {/* Nav bar */}
      <header style={{
        borderBottom: "1px solid #eee", padding: "0 60px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 64, position: "sticky", top: 0, background: "#fff", zIndex: 100,
      }} role="banner">
        <Link to="/" style={{
          display: "flex", alignItems: "center", gap: 10, textDecoration: "none",
        }} aria-label="Stalefish home">
          <div style={{
            width: 28, height: 28, background: "#111",
            borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center",
          }} aria-hidden="true">
            <div style={{ width: 10, height: 10, background: "#fff", borderRadius: 2 }} />
          </div>
          <span style={{ fontWeight: 700, color: "#111", fontSize: 14, letterSpacing: "0.06em" }}>
            STALEFISH
          </span>
        </Link>
        <Link to="/" style={{ fontSize: 13, color: "#555", textDecoration: "none", fontWeight: 500 }}>
          ← Back to home
        </Link>
      </header>

      {/* Content */}
      <main id="main-content" tabIndex={-1} style={{ maxWidth: 760, margin: "0 auto", padding: "64px 40px 100px" }}>
        <div style={{ marginBottom: 48 }}>
          <p style={{
            fontSize: 11, fontWeight: 700, letterSpacing: "0.18em",
            textTransform: "uppercase", color: "#E84325", marginBottom: 16,
          }}>
            Legal
          </p>
          <h1 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "clamp(2.2rem, 5vw, 3rem)",
            fontWeight: 900, letterSpacing: "-0.02em",
            textTransform: "uppercase", color: "#111",
            lineHeight: 1.05, margin: "0 0 20px",
          }}>
            Accessibility
          </h1>
          <p style={{ fontSize: 13, color: "#888", margin: 0 }}>
            Last updated: {LAST_UPDATED}
          </p>
        </div>

        <div style={{ fontSize: 15, lineHeight: 1.8, color: "#333" }}>

          <Section title="Our Commitment">
            <p>Stalefish is committed to ensuring our website is accessible to all users, including people with disabilities. We believe that everyone deserves equal access to information and we strive to provide a website that is accessible in accordance with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.</p>
            <p>As a company that builds AI systems for some of the world's most demanding organisations, we hold ourselves to the same high standard of quality and inclusion in our own digital presence.</p>
          </Section>

          <Section title="Conformance Status">
            <p>We aim to conform to the <strong>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</strong>. These guidelines explain how to make web content more accessible to people with disabilities and more usable for everyone.</p>
            <div style={{
              background: "#f0faf4", border: "1px solid #b7e5c8",
              borderLeft: "4px solid #22c55e", borderRadius: "0 8px 8px 0",
              padding: "16px 20px", margin: "16px 0",
            }} role="note" aria-label="Conformance note">
              <strong>Current Status:</strong> Partially conformant. We are actively working to resolve known issues and improve our conformance level. Some older content and third-party embedded components may not yet meet the full standard.
            </div>
          </Section>

          <Section title="Accessibility Features">
            <p>The following accessibility features are implemented on this website:</p>
            <h3 style={h3Style}>Keyboard Navigation</h3>
            <ul style={ulStyle}>
              <li>All interactive elements are reachable and operable via keyboard</li>
              <li>Visible focus indicators on all focusable elements</li>
              <li>Logical tab order throughout all pages</li>
              <li>"Skip to main content" link at the top of every page</li>
            </ul>
            <h3 style={h3Style}>Screen Reader Support</h3>
            <ul style={ulStyle}>
              <li>Semantic HTML5 landmark elements (<code style={codeStyle}>header</code>, <code style={codeStyle}>main</code>, <code style={codeStyle}>nav</code>, <code style={codeStyle}>footer</code>, <code style={codeStyle}>section</code>)</li>
              <li>Descriptive ARIA labels on interactive elements and regions</li>
              <li>Meaningful alt text for all informational images</li>
              <li>Decorative images marked with <code style={codeStyle}>aria-hidden="true"</code></li>
              <li>Proper heading hierarchy (h1 → h2 → h3) across all pages</li>
              <li>Live region announcements for dynamic content updates</li>
            </ul>
            <h3 style={h3Style}>Visual Design</h3>
            <ul style={ulStyle}>
              <li>Colour contrast ratios meet or exceed WCAG 2.1 AA minimums (4.5:1 for body text, 3:1 for large text)</li>
              <li>Information is never conveyed by colour alone</li>
              <li>Text can be resized up to 200% without loss of content or functionality</li>
              <li>No content flashes more than 3 times per second</li>
            </ul>
            <h3 style={h3Style}>Motion and Animation</h3>
            <ul style={ulStyle}>
              <li>Animations respect the <code style={codeStyle}>prefers-reduced-motion</code> media query — users who have requested reduced motion in their system settings will see static versions of all animated elements</li>
              <li>No auto-playing audio or video content</li>
            </ul>
            <h3 style={h3Style}>Forms and Interactions</h3>
            <ul style={ulStyle}>
              <li>All form fields have visible, programmatically associated labels</li>
              <li>Error messages are descriptive and linked to their respective fields</li>
              <li>Required fields are indicated both visually and to assistive technology</li>
            </ul>
          </Section>

          <Section title="Known Limitations">
            <p>We are aware of the following accessibility limitations and are actively working to address them:</p>
            <ul style={ulStyle}>
              <li>The AI document analysis demo panel in the hero section is primarily a visual demonstration. A text-based equivalent description is provided for screen reader users via ARIA live regions.</li>
              <li>Some third-party embedded content (such as calendar booking widgets) may not fully conform to WCAG 2.1 AA. We are working with our vendors to improve this.</li>
              <li>Certain animated transitions may cause visual discomfort for some users with vestibular disorders, even with reduced-motion fallbacks in place.</li>
            </ul>
          </Section>

          <Section title="Assistive Technologies Tested">
            <p>We test our website with the following assistive technologies:</p>
            <ul style={ulStyle}>
              <li>NVDA (Windows) with Chrome and Firefox</li>
              <li>JAWS (Windows) with Chrome</li>
              <li>VoiceOver (macOS) with Safari</li>
              <li>VoiceOver (iOS) with Safari</li>
              <li>TalkBack (Android) with Chrome</li>
              <li>Keyboard-only navigation (no pointing device)</li>
              <li>Windows High Contrast Mode</li>
            </ul>
          </Section>

          <Section title="Requesting Accessible Formats">
            <p>If you need any content on this website in an alternative format — including large print, audio, or easy-read — please contact us and we will do our best to accommodate your request within five business days.</p>
          </Section>

          <Section title="Feedback and Contact">
            <p>We welcome feedback on the accessibility of our website. If you encounter any barriers or have suggestions for improvement, please contact our accessibility team:</p>
            <div style={{
              background: "#f7f7f7", borderRadius: 10, padding: "24px 28px",
              marginTop: 16, border: "1px solid #eee",
            }}>
              <strong style={{ display: "block", marginBottom: 6 }}>Accessibility Team — Stalefish</strong>
              <a href="mailto:accessibility@stalefish.ai" style={linkStyle}>accessibility@stalefish.ai</a>
              <p style={{ margin: "12px 0 0", fontSize: 13, color: "#666" }}>
                We aim to respond to accessibility feedback within 2 business days.
              </p>
            </div>
            <p style={{ marginTop: 20 }}>
              If you are not satisfied with our response, you may contact the relevant accessibility enforcement authority in your jurisdiction. In the United States, this is the <a href="https://www.ada.gov" style={linkStyle} target="_blank" rel="noopener noreferrer">U.S. Department of Justice ADA information line</a>.
            </p>
          </Section>

          <Section title="Technical Specifications">
            <p>This website relies on the following technologies for conformance:</p>
            <ul style={ulStyle}>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript (ECMAScript 2022)</li>
              <li>WAI-ARIA 1.2</li>
            </ul>
            <p>The website has been tested in the following browsers: Chrome (latest), Firefox (latest), Safari (latest), Edge (latest).</p>
          </Section>

          <Section title="Formal Complaints">
            <p>If you are not satisfied with our response to your accessibility concern, you may escalate by submitting a formal complaint to <a href="mailto:legal@stalefish.ai" style={linkStyle}>legal@stalefish.ai</a>. We take all accessibility concerns seriously and will investigate and respond within 10 business days.</p>
          </Section>

        </div>

        {/* Legal nav */}
        <nav aria-label="Other legal pages" style={{
          borderTop: "1px solid #eee", marginTop: 64, paddingTop: 32,
          display: "flex", gap: 24, flexWrap: "wrap",
        }}>
          <Link to="/privacy" style={navLinkStyle}>Privacy Policy →</Link>
          <Link to="/terms" style={navLinkStyle}>Terms &amp; Disclaimer →</Link>
        </nav>
      </main>

      <FooterBar />
    </div>
  )
}

function Section({ title, children }) {
  return (
    <section style={{ marginBottom: 40 }} aria-labelledby={`section-${title.replace(/[^a-z0-9]/gi, "-").toLowerCase()}`}>
      <h2 id={`section-${title.replace(/[^a-z0-9]/gi, "-").toLowerCase()}`} style={{
        fontFamily: "'Barlow Condensed', sans-serif",
        fontSize: "1.2rem", fontWeight: 800, letterSpacing: "-0.01em",
        textTransform: "uppercase", color: "#111",
        margin: "0 0 16px", paddingBottom: 10,
        borderBottom: "1px solid #eee",
      }}>
        {title}
      </h2>
      {children}
    </section>
  )
}

function FooterBar() {
  return (
    <footer style={{
      borderTop: "1px solid #eee", padding: "24px 60px",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      flexWrap: "wrap", gap: 16,
    }} role="contentinfo">
      <p style={{ fontSize: 12, color: "#aaa", margin: 0 }}>
        © 2026 Stalefish. All rights reserved.
      </p>
      <nav aria-label="Legal links" style={{ display: "flex", gap: 24 }}>
        <Link to="/privacy" style={{ fontSize: 12, color: "#aaa", textDecoration: "none" }}>Privacy Policy</Link>
        <Link to="/terms" style={{ fontSize: 12, color: "#aaa", textDecoration: "none" }}>Terms &amp; Disclaimer</Link>
        <Link to="/accessibility" style={{ fontSize: 12, color: "#aaa", textDecoration: "none" }}>Accessibility</Link>
      </nav>
    </footer>
  )
}

const h3Style = { fontSize: "0.9rem", fontWeight: 700, color: "#111", margin: "20px 0 8px" }
const ulStyle = { paddingLeft: "1.4rem", marginBottom: 16, lineHeight: 1.9 }
const codeStyle = { background: "#f3f3f3", padding: "1px 6px", borderRadius: 4, fontSize: "0.85em", fontFamily: "monospace" }
const linkStyle = { color: "#E84325", textDecoration: "underline", textUnderlineOffset: "3px" }
const navLinkStyle = { fontSize: 14, color: "#E84325", textDecoration: "none", fontWeight: 600 }
