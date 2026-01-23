import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Bloomy',
  description: 'Privacy Policy for Bloomy app',
}

export default function PrivacyPage() {
  return (
    <div className="legal-content">
      <h1>Privacy Policy</h1>
      <p className="subtitle">Last updated: January 2025</p>

      <p>
        At Bloomy, we believe your personal information belongs to you. This Privacy Policy
        explains how we collect, use, and protect your data when you use our app.
      </p>

      <h2>Information We Collect</h2>
      <p>
        Bloomy is designed with privacy in mind. We collect minimal data necessary to provide
        you with a personalized experience:
      </p>
      <ul>
        <li>
          <strong>Account Information:</strong> Your name (optional) and preferences you set
          within the app.
        </li>
        <li>
          <strong>Usage Data:</strong> Basic analytics about how you use the app, such as which
          features you use and your streak count. This data is stored locally on your device.
        </li>
        <li>
          <strong>Device Information:</strong> Basic device information for app compatibility
          and crash reporting.
        </li>
      </ul>

      <h2>What We Don&apos;t Collect</h2>
      <ul>
        <li>We do not collect or store your location data.</li>
        <li>We do not sell your personal information to third parties.</li>
        <li>We do not track you across other apps or websites.</li>
        <li>We do not use your data for targeted advertising.</li>
      </ul>

      <h2>Data Storage</h2>
      <p>
        Your preferences and progress are stored locally on your device using Apple&apos;s
        secure storage mechanisms. We do not have access to this data unless you explicitly
        choose to share it with us for support purposes.
      </p>

      <h2>Third-Party Services</h2>
      <p>We may use the following third-party services:</p>
      <ul>
        <li>
          <strong>Apple App Store:</strong> For app distribution and in-app purchases.
        </li>
        <li>
          <strong>Analytics:</strong> Anonymous, aggregated analytics to improve the app
          experience.
        </li>
      </ul>

      <h2>Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access the personal data we hold about you.</li>
        <li>Request deletion of your data.</li>
        <li>Export your data in a portable format.</li>
        <li>Opt out of analytics collection.</li>
      </ul>

      <h2>Children&apos;s Privacy</h2>
      <p>
        Bloomy is not intended for children under 13 years of age. We do not knowingly collect
        personal information from children under 13.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of any changes
        by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot;
        date.
      </p>

      <h2>GDPR Rights (European Users)</h2>
      <p>
        If you are located in the European Economic Area (EEA), you have additional rights under
        the General Data Protection Regulation (GDPR):
      </p>
      <ul>
        <li><strong>Right of Access:</strong> You can request a copy of your personal data.</li>
        <li><strong>Right to Rectification:</strong> You can request correction of inaccurate data.</li>
        <li><strong>Right to Erasure:</strong> You can request deletion of your data (&quot;right to be forgotten&quot;).</li>
        <li><strong>Right to Portability:</strong> You can request your data in a machine-readable format.</li>
        <li><strong>Right to Object:</strong> You can object to processing of your data.</li>
        <li><strong>Right to Withdraw Consent:</strong> You can withdraw consent at any time.</li>
      </ul>
      <p>
        To exercise any of these rights, please contact us at the email address below. We will
        respond to your request within 30 days.
      </p>

      <h2>Data Retention</h2>
      <p>
        Your data is stored locally on your device and is retained until you delete the app or
        clear the app data. We do not retain any personal data on our servers.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at:{' '}
        <a href="mailto:privacy@bloomyapp.app" style={{ color: 'var(--sage-green)' }}>
          privacy@bloomyapp.app
        </a>
      </p>
    </div>
  )
}
