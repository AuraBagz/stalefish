import { useEffect } from "react"
import { Link } from "react-router-dom"

const LAST_UPDATED = "April 28, 2026"

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Terms & Disclaimer — Stalefish"
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
            Terms &amp; Disclaimer
          </h1>
          <p style={{ fontSize: 13, color: "#888", margin: 0 }}>
            Last updated: {LAST_UPDATED}
          </p>
        </div>

        <div style={{ fontSize: 15, lineHeight: 1.8, color: "#333" }}>

          <Section title="1. Acceptance of Terms">
            <p>By accessing or using the Stalefish website (stalefish.ai) or any services provided by Stalefish ("Company," "we," "us," or "our"), you agree to be bound by these Terms and Disclaimer. If you do not agree to these terms, please do not use our website or services.</p>
            <p>These terms constitute a legally binding agreement. We reserve the right to modify them at any time, with changes effective upon posting to this page.</p>
          </Section>

          <Section title="2. Services Description">
            <p>Stalefish provides AI implementation consulting, workflow automation, and technology advisory services to law firms and legal organisations. Our services include but are not limited to:</p>
            <ul style={ulStyle}>
              <li>AI system architecture and implementation</li>
              <li>Legal workflow automation design and deployment</li>
              <li>AI governance and compliance frameworks</li>
              <li>Associate training and upskilling programmes</li>
              <li>Ongoing AI performance monitoring and optimisation</li>
            </ul>
          </Section>

          <Section title="3. Not Legal Advice">
            <p style={{
              background: "#fff8f7", border: "1px solid #ffd5cd",
              borderLeft: "4px solid #E84325", borderRadius: "0 8px 8px 0",
              padding: "16px 20px", margin: "0 0 16px",
            }}>
              <strong>Important Disclaimer:</strong> The information provided on this website and through our marketing materials is for general informational purposes only. It does not constitute legal advice and should not be relied upon as such.
            </p>
            <p>Stalefish is a technology consulting company, not a law firm. We do not provide legal advice, legal opinions, or legal representation. Nothing on this website or communicated by our representatives creates an attorney-client relationship.</p>
            <p>For legal advice specific to your situation, you should consult a qualified attorney licensed in your jurisdiction.</p>
          </Section>

          <Section title="4. Not Financial Advice">
            <p>Any discussion of return on investment, cost savings, efficiency gains, or financial projections on this website or in our materials are illustrative estimates only. Past performance of AI implementations at other organisations is not indicative of results you will achieve. You should not make financial or investment decisions based on information provided on this website.</p>
          </Section>

          <Section title="5. Intellectual Property">
            <p>All content on this website — including text, graphics, logos, design elements, and software — is the property of Stalefish or its content suppliers and is protected by applicable intellectual property laws.</p>
            <p>You may not:</p>
            <ul style={ulStyle}>
              <li>Reproduce, distribute, or publicly display any content without prior written permission</li>
              <li>Use our trademarks, service marks, or logos without express written consent</li>
              <li>Create derivative works based on our proprietary content</li>
              <li>Use our content for commercial purposes without authorisation</li>
            </ul>
            <p>Limited permission is granted to view and print content for personal, non-commercial use only.</p>
          </Section>

          <Section title="6. User Conduct">
            <p>When using our website or communicating with us, you agree not to:</p>
            <ul style={ulStyle}>
              <li>Transmit any unlawful, harmful, threatening, or defamatory content</li>
              <li>Attempt to gain unauthorised access to any part of our systems</li>
              <li>Use automated tools to scrape or harvest data from our website</li>
              <li>Impersonate any person or entity or misrepresent your affiliation</li>
              <li>Interfere with the proper functioning of our website</li>
            </ul>
          </Section>

          <Section title="7. Disclaimer of Warranties">
            <p>This website and its content are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied, including but not limited to:</p>
            <ul style={ulStyle}>
              <li>Warranties of merchantability or fitness for a particular purpose</li>
              <li>Warranties that the website will be uninterrupted, error-free, or secure</li>
              <li>Warranties regarding the accuracy, completeness, or reliability of any content</li>
            </ul>
            <p>We do not warrant that defects will be corrected or that the website is free of viruses or other harmful components.</p>
          </Section>

          <Section title="8. Limitation of Liability">
            <p>To the fullest extent permitted by applicable law, Stalefish and its officers, directors, employees, agents, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:</p>
            <ul style={ulStyle}>
              <li>Loss of profits, revenue, data, or business opportunities</li>
              <li>Damages arising from reliance on information on this website</li>
              <li>Service interruptions or system failures</li>
              <li>Unauthorised access to or alteration of your data</li>
            </ul>
            <p>Our total aggregate liability for any claims arising from use of this website shall not exceed one hundred US dollars (USD $100).</p>
          </Section>

          <Section title="9. Indemnification">
            <p>You agree to defend, indemnify, and hold harmless Stalefish and its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, or expenses (including reasonable legal fees) arising out of your use of our website, your violation of these terms, or your violation of any third-party rights.</p>
          </Section>

          <Section title="10. Third-Party Links">
            <p>Our website may contain links to third-party websites. These links are provided for your convenience only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them. Inclusion of any link does not imply our endorsement of the linked site.</p>
          </Section>

          <Section title="11. Confidentiality of Consultations">
            <p>Information shared during initial consultations is treated as confidential. However, no formal attorney-client privilege applies, as Stalefish is not a law firm. Formal confidentiality obligations are established only through a signed engagement agreement or Non-Disclosure Agreement (NDA).</p>
          </Section>

          <Section title="12. Governing Law and Disputes">
            <p>These terms are governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.</p>
            <p>Any dispute arising from these terms or your use of our website shall first be subject to good-faith negotiation. If unresolved, disputes shall be submitted to binding arbitration in accordance with the rules of the American Arbitration Association, with proceedings conducted in English.</p>
          </Section>

          <Section title="13. AI-Generated Content Disclaimer">
            <p>Stalefish builds and deploys AI systems. Any AI-generated content, analysis, or output produced by our systems is provided as a decision-support tool only and does not replace professional human judgment. Clients remain solely responsible for all legal, business, and regulatory decisions made in connection with their use of our AI systems.</p>
          </Section>

          <Section title="14. Contact">
            <p>Questions regarding these Terms &amp; Disclaimer should be directed to:</p>
            <div style={{
              background: "#f7f7f7", borderRadius: 10, padding: "24px 28px",
              marginTop: 16, border: "1px solid #eee",
            }}>
              <strong style={{ display: "block", marginBottom: 8 }}>Stalefish Legal</strong>
              <a href="mailto:legal@stalefish.ai" style={linkStyle}>legal@stalefish.ai</a>
            </div>
          </Section>

        </div>

        {/* Legal nav */}
        <nav aria-label="Other legal pages" style={{
          borderTop: "1px solid #eee", marginTop: 64, paddingTop: 32,
          display: "flex", gap: 24, flexWrap: "wrap",
        }}>
          <Link to="/privacy" style={navLinkStyle}>Privacy Policy →</Link>
          <Link to="/accessibility" style={navLinkStyle}>Accessibility →</Link>
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

const ulStyle = { paddingLeft: "1.4rem", marginBottom: 16, lineHeight: 1.9 }
const linkStyle = { color: "#E84325", textDecoration: "underline", textUnderlineOffset: "3px" }
const navLinkStyle = { fontSize: 14, color: "#E84325", textDecoration: "none", fontWeight: 600 }
