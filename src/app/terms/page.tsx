import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use - Bloomy',
  description: 'Terms of Use for Bloomy app',
}

export default function TermsPage() {
  return (
    <div className="legal-content">
      <h1>Terms of Use</h1>
      <p className="subtitle">Last updated: January 2025</p>

      <p>
        Welcome to Bloomy. By using our app, you agree to these Terms of Use. Please read them
        carefully.
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By downloading, installing, or using Bloomy, you agree to be bound by these Terms of
        Use. If you do not agree to these terms, please do not use the app.
      </p>

      <h2>2. Description of Service</h2>
      <p>
        Bloomy is a wellness application that provides daily inspirational content consisting
        of thoughts and suggested actions. The app is intended for personal, non-commercial use
        only.
      </p>

      <h2>3. User Accounts</h2>
      <p>
        Bloomy does not require an account to use. Your preferences and data are stored locally
        on your device. You are responsible for maintaining the security of your device.
      </p>

      <h2>4. Content</h2>
      <p>
        All content provided through Bloomy, including but not limited to text, graphics, and
        user interface design, is owned by Bloomy or its licensors and is protected by
        copyright and other intellectual property laws.
      </p>
      <p>You may not:</p>
      <ul>
        <li>Copy, modify, or distribute our content without permission.</li>
        <li>Use our content for commercial purposes.</li>
        <li>Attempt to reverse engineer or extract source code from the app.</li>
      </ul>

      <h2>5. Wellness Disclaimer</h2>
      <p>
        <strong>Important:</strong> Bloomy is designed for general wellness and mindfulness
        purposes only. It is not a substitute for professional medical advice, diagnosis, or
        treatment.
      </p>
      <ul>
        <li>
          Always seek the advice of your physician or qualified health provider with any
          questions you may have regarding a medical condition.
        </li>
        <li>
          Never disregard professional medical advice or delay in seeking it because of
          something you have read in this app.
        </li>
        <li>
          If you are experiencing a mental health crisis, please contact a mental health
          professional or emergency services immediately.
        </li>
      </ul>

      <h2>6. Subscriptions and Purchases</h2>
      <p>
        Bloomy may offer premium features through in-app purchases or subscriptions. All
        purchases are processed through Apple&apos;s App Store and are subject to Apple&apos;s
        terms and conditions.
      </p>
      <ul>
        <li>Subscriptions automatically renew unless cancelled before the renewal date.</li>
        <li>You can manage subscriptions in your App Store account settings.</li>
        <li>Refund requests should be directed to Apple.</li>
      </ul>

      <h2>7. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Bloomy shall not be liable for any indirect,
        incidental, special, consequential, or punitive damages, or any loss of profits or
        revenues.
      </p>

      <h2>8. Changes to Terms</h2>
      <p>
        We reserve the right to modify these Terms of Use at any time. We will notify users of
        any material changes through the app or website. Continued use of the app after changes
        constitutes acceptance of the new terms.
      </p>

      <h2>9. Termination</h2>
      <p>
        We reserve the right to terminate or suspend access to our service at any time, without
        prior notice, for conduct that we believe violates these Terms or is harmful to other
        users, us, or third parties.
      </p>

      <h2>10. Governing Law</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the laws of France,
        without regard to its conflict of law provisions.
      </p>

      <h2>11. Contact</h2>
      <p>
        For any questions about these Terms of Use, please contact us at:{' '}
        <a href="mailto:legal@bloomy.app" style={{ color: 'var(--sage-green)' }}>
          legal@bloomy.app
        </a>
      </p>
    </div>
  )
}
