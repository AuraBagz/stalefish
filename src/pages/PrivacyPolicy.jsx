import { useEffect } from "react"
import { Link } from "react-router-dom"

const LAST_UPDATED = "April 28, 2026"

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Privacy Policy — Stalefish"
  }, [])

  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      {/* Skip to content */}
      <a href="#main-content" className="skip-link" style={{
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
        <Link to="/" style={{
          fontSize: 13, color: "#555", textDecoration: "none", fontWeight: 500,
        }}>
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
            Privacy Policy
          </h1>
          <p style={{ fontSize: 13, color: "#888", margin: 0 }}>
            Last updated: {LAST_UPDATED}
          </p>
        </div>

        <div style={{ fontSize: 15, lineHeight: 1.8, color: "#333" }}>

          <Section title="1. Introduction">
            <p>Stalefish ("we," "us," or "our") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at stalefish.ai or engage with our services.</p>
            <p>Please read this policy carefully. If you disagree with its terms, please discontinue use of our site.</p>
          </Section>

          <Section title="2. Information We Collect">
            <p>We may collect information about you in the following ways:</p>
            <h3 style={h3Style}>2.1 Information You Provide</h3>
            <ul style={ulStyle}>
              <li>Contact and inquiry details (name, email address, phone number, company name) submitted through our consultation request forms</li>
              <li>Correspondence you send us directly via email or other channels</li>
              <li>Information provided during onboarding or engagement discussions</li>
            </ul>
            <h3 style={h3Style}>2.2 Automatically Collected Information</h3>
            <ul style={ulStyle}>
              <li>Log data including IP address, browser type, pages visited, and time spent on pages</li>
              <li>Device information including hardware model, operating system, and browser version</li>
              <li>Cookie and similar tracking technology data (see Section 6)</li>
            </ul>
            <h3 style={h3Style}>2.3 Information From Third Parties</h3>
            <ul style={ulStyle}>
              <li>Publicly available professional information (e.g., LinkedIn profiles) when researching prospective clients</li>
              <li>Analytics data from service providers such as Google Analytics</li>
            </ul>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul style={ulStyle}>
              <li>Respond to inquiries and provide requested services</li>
              <li>Schedule and facilitate consultations</li>
              <li>Send relevant updates, case studies, or service information (with your consent)</li>
              <li>Improve our website and understand usage patterns</li>
              <li>Comply with legal obligations and enforce our agreements</li>
              <li>Protect against fraud and unauthorised access</li>
            </ul>
            <p>We do not sell, rent, or trade your personal information to third parties for their own marketing purposes.</p>
          </Section>

          <Section title="4. Disclosure of Your Information">
            <p>We may share your information in the following circumstances:</p>
            <ul style={ulStyle}>
              <li><strong>Service Providers:</strong> Trusted third-party vendors who assist in operating our website and services (e.g., email platforms, CRM software), bound by confidentiality obligations</li>
              <li><strong>Legal Requirements:</strong> When required by applicable law, court order, or governmental authority</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, with appropriate confidentiality protections</li>
              <li><strong>With Your Consent:</strong> For any purpose you explicitly authorise</li>
            </ul>
          </Section>

          <Section title="5. Data Retention">
            <p>We retain personal information for as long as necessary to fulfil the purposes for which it was collected, including satisfying legal, accounting, or reporting requirements. When determining retention periods, we consider the amount, nature, and sensitivity of data, the potential risk of harm from unauthorised use, and applicable legal requirements.</p>
            <p>You may request deletion of your personal data at any time by contacting us at <a href="mailto:privacy@stalefish.ai" style={linkStyle}>privacy@stalefish.ai</a>.</p>
          </Section>

          <Section title="6. Cookies and Tracking Technologies">
            <p>We use cookies and similar tracking technologies to enhance your experience. These include:</p>
            <ul style={ulStyle}>
              <li><strong>Essential cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our site (e.g., Google Analytics)</li>
              <li><strong>Preference cookies:</strong> Remember your settings and preferences</li>
            </ul>
            <p>You can control cookies through your browser settings. Disabling certain cookies may affect website functionality.</p>
          </Section>

          <Section title="7. Data Security">
            <p>We implement commercially reasonable technical and organisational measures to protect your personal information, including encryption in transit (TLS), access controls, and regular security reviews. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>
          </Section>

          <Section title="8. International Transfers">
            <p>Your information may be transferred to and processed in countries other than the country in which you reside. These countries may have data protection laws that differ from your country. We ensure appropriate safeguards are in place for any such transfers, including standard contractual clauses where required.</p>
          </Section>

          <Section title="9. Your Rights">
            <p>Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>
            <ul style={ulStyle}>
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
              <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete data</li>
              <li><strong>Erasure:</strong> Request deletion of your personal data</li>
              <li><strong>Restriction:</strong> Request that we limit processing of your data</li>
              <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
              <li><strong>Objection:</strong> Object to processing based on legitimate interests or for direct marketing</li>
              <li><strong>Withdrawal of consent:</strong> Where processing is based on consent, withdraw it at any time</li>
            </ul>
            <p>To exercise any of these rights, contact us at <a href="mailto:privacy@stalefish.ai" style={linkStyle}>privacy@stalefish.ai</a>.</p>
          </Section>

          <Section title="10. Children's Privacy">
            <p>Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately.</p>
          </Section>

          <Section title="11. Changes to This Policy">
            <p>We may update this Privacy Policy periodically. We will notify you of material changes by updating the "Last updated" date at the top of this page. We encourage you to review this policy regularly to stay informed of how we protect your information.</p>
          </Section>

          <Section title="12. Contact Us">
            <p>If you have questions, concerns, or requests regarding this Privacy Policy, please contact us at:</p>
            <div style={{
              background: "#f7f7f7", borderRadius: 10, padding: "24px 28px",
              marginTop: 16, border: "1px solid #eee",
            }}>
              <strong style={{ display: "block", marginBottom: 8 }}>Stalefish</strong>
              <a href="mailto:privacy@stalefish.ai" style={linkStyle}>privacy@stalefish.ai</a>
            </div>
          </Section>

        </div>

        {/* Legal nav */}
        <nav aria-label="Other legal pages" style={{
          borderTop: "1px solid #eee", marginTop: 64, paddingTop: 32,
          display: "flex", gap: 24, flexWrap: "wrap",
        }}>
          <Link to="/terms" style={navLinkStyle}>Terms &amp; Disclaimer →</Link>
          <Link to="/accessibility" style={navLinkStyle}>Accessibility →</Link>
        </nav>
      </main>

      <FooterBar />
    </div>
  )
}

function Section({ title, children }) {
  return (
    <section style={{ marginBottom: 40 }} aria-labelledby={`section-${title.replace(/\s+/g, "-").toLowerCase()}`}>
      <h2 id={`section-${title.replace(/\s+/g, "-").toLowerCase()}`} style={{
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

const h3Style = {
  fontSize: "0.9rem", fontWeight: 700, color: "#111",
  margin: "20px 0 8px", letterSpacing: "0.01em",
}
const ulStyle = {
  paddingLeft: "1.4rem", marginBottom: 16, lineHeight: 1.9,
}
const linkStyle = {
  color: "#E84325", textDecoration: "underline", textUnderlineOffset: "3px",
}
const navLinkStyle = {
  fontSize: 14, color: "#E84325", textDecoration: "none",
  fontWeight: 600, letterSpacing: "0.01em",
}
