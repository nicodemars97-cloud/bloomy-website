import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Bloomy',
  description: 'Privacy Policy for Bloomy app',
}

export default function PrivacyPage() {
  return (
    <div className="legal-content">
      <h1>Privacy Policy</h1>
      <p className="subtitle">Last updated: January 2026</p>

      <p>
        Bloomy (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy.
        This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application.
      </p>

      <h2>Data We Collect</h2>

      <h3>1. Device Identifiers</h3>
      <p>
        We collect anonymous device identifiers to understand how users interact with the app and improve our service.
        This data is not linked to your identity.
      </p>

      <h3>2. Usage Data</h3>
      <p>
        We collect anonymous analytics about how you use the app (screens viewed, features used, buttons tapped).
        This helps us improve the user experience. This data is not linked to your identity.
      </p>

      <h3>3. Purchase History</h3>
      <p>
        If you subscribe to Bloomy Premium, we process your purchase through Apple&apos;s App Store.
        We receive confirmation of your subscription status but never see your payment details.
      </p>

      <h3>4. Diagnostic Data</h3>
      <p>
        We collect crash reports and performance data to identify and fix bugs.
        This data is not linked to your identity.
      </p>

      <h2>Third-Party Services</h2>
      <p>We use the following services:</p>
      <ul>
        <li>
          <strong>Amplitude:</strong> Analytics to understand app usage patterns
        </li>
        <li>
          <strong>RevenueCat:</strong> Subscription management
        </li>
        <li>
          <strong>Firebase Crashlytics:</strong> Crash reporting and diagnostics
        </li>
      </ul>
      <p>
        These services may collect device identifiers and usage data as described in their respective privacy policies.
      </p>

      <h2>Data Storage</h2>
      <p>
        Your personal content (blooms you create, favorites, preferences) is stored locally on your device
        using Apple&apos;s secure storage. We do not have access to this data.
      </p>

      <h2>What We Don&apos;t Do</h2>
      <ul>
        <li>We don&apos;t sell your data to third parties</li>
        <li>We don&apos;t use your data for advertising</li>
        <li>We don&apos;t track you across other apps or websites</li>
        <li>We don&apos;t collect your name, email, or personal information</li>
        <li>We don&apos;t access your photos, contacts, or location</li>
      </ul>

      <h2>Your Rights</h2>
      <p>
        You can delete all your data at any time by uninstalling the app.
        Since most data is stored locally on your device, uninstalling removes it completely.
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

      <h2>Children&apos;s Privacy</h2>
      <p>
        Bloomy is suitable for all ages (4+). We do not knowingly collect personal information from children.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of any changes
        by posting the new policy on this page and updating the &quot;Last updated&quot; date.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy, please contact us at:{' '}
        <a href="mailto:support@bloomyapp.app" style={{ color: 'var(--sage-green)' }}>
          support@bloomyapp.app
        </a>
      </p>

      <p style={{ marginTop: '3rem', fontSize: '0.9rem', color: '#666' }}>
        © 2026 Bloomy. All rights reserved.
      </p>
    </div>
  )
}
