import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use - Bloomy - Citation du jour',
  description: 'Terms of Use for Bloomy - Citation du jour app',
}

export default function TermsPage() {
  return (
    <div className="legal-content">
      <h1>Terms of Use</h1>
      <p className="subtitle">Last updated: January 2026</p>

      <p>
        Welcome to Bloomy - Citation du jour. By downloading, accessing, or using the Bloomy - Citation du jour mobile application
        (&quot;App&quot;), you agree to be bound by these Terms of Use (&quot;Terms&quot;).
        Please read them carefully.
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By using Bloomy - Citation du jour, you confirm that you have read, understood, and agree to these Terms.
        If you do not agree, please do not use the App.
      </p>

      <h2>2. Description of Service</h2>
      <p>
        Bloomy - Citation du jour is a wellness application that provides daily inspirational quotes and micro-actions
        to help you cultivate positive habits. The App offers both free and premium subscription features.
      </p>

      <h2>3. User Accounts</h2>
      <p>
        Bloomy - Citation du jour does not require account creation. Your preferences and data are stored locally
        on your device. You are responsible for maintaining the security of your device.
      </p>

      <h2>4. Subscriptions and Payments</h2>
      <h3>4.1 Bloomy Premium</h3>
      <p>
        Bloomy - Citation du jour offers premium features through auto-renewable subscriptions. Subscription options include:
      </p>
      <ul>
        <li>Weekly subscription</li>
        <li>Annual subscription</li>
        <li>Lifetime access (one-time purchase)</li>
      </ul>

      <h3>4.2 Billing</h3>
      <p>
        All payments are processed through Apple&apos;s App Store. Your subscription will automatically
        renew unless cancelled at least 24 hours before the end of the current period. Your Apple ID
        account will be charged for renewal within 24 hours prior to the end of the current period.
      </p>

      <h3>4.3 Cancellation</h3>
      <p>
        You can manage and cancel your subscription at any time through your Apple ID Account Settings.
        Cancellation will take effect at the end of the current billing period.
      </p>

      <h3>4.4 Refunds</h3>
      <p>
        Refund requests are handled by Apple according to their refund policies.
        Visit <a href="https://support.apple.com/en-us/HT204084" style={{ color: 'var(--sage-green)' }}>Apple Support</a> for
        more information.
      </p>

      <h2>5. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the App for any unlawful purpose</li>
        <li>Attempt to reverse engineer, decompile, or disassemble the App</li>
        <li>Remove any copyright or proprietary notices from the App</li>
        <li>Transfer, sublicense, or sell access to the App</li>
        <li>Use automated systems to access the App</li>
      </ul>

      <h2>6. Intellectual Property</h2>
      <p>
        All content in the App, including but not limited to text, graphics, logos, icons, images,
        and software, is the property of Bloomy - Citation du jour or its content suppliers and is protected by
        international copyright laws. The compilation of all content is the exclusive property of Bloomy - Citation du jour.
      </p>

      <h2>7. User-Generated Content</h2>
      <p>
        You may create personal blooms and save favorites within the App. You retain ownership of
        any content you create. By using the sharing features, you grant Bloomy a non-exclusive
        license to display watermarked versions of shared content.
      </p>

      <h2>8. Disclaimer of Warranties</h2>
      <p>
        The App is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind,
        either express or implied. We do not guarantee that the App will be uninterrupted,
        secure, or error-free.
      </p>
      <p>
        <strong>Health Disclaimer:</strong> Bloomy - Citation du jour is designed for general wellness purposes only.
        The content is not intended to be a substitute for professional medical advice, diagnosis,
        or treatment. Always seek the advice of qualified health providers with any questions
        regarding a medical condition.
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Bloomy - Citation du jour shall not be liable for any indirect,
        incidental, special, consequential, or punitive damages, or any loss of profits or revenues,
        whether incurred directly or indirectly, or any loss of data, use, goodwill, or other
        intangible losses resulting from your use of the App.
      </p>

      <h2>10. Modifications to the Service</h2>
      <p>
        We reserve the right to modify, suspend, or discontinue the App (or any part thereof)
        at any time, with or without notice. We shall not be liable to you or any third party
        for any modification, suspension, or discontinuance of the App.
      </p>

      <h2>11. Changes to Terms</h2>
      <p>
        We may update these Terms from time to time. We will notify you of any changes by posting
        the new Terms on this page and updating the &quot;Last updated&quot; date. Your continued use
        of the App after such changes constitutes acceptance of the new Terms.
      </p>

      <h2>12. Governing Law</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the laws of France,
        without regard to its conflict of law provisions.
      </p>

      <h2>13. Contact Us</h2>
      <p>
        If you have any questions about these Terms, please contact us at:{' '}
        <a href="mailto:support@bloomyapp.app" style={{ color: 'var(--sage-green)' }}>
          support@bloomyapp.app
        </a>
      </p>

      <h2>14. Apple-Specific Terms</h2>
      <p>
        These Terms are between you and Bloomy - Citation du jour only, not with Apple. Apple has no obligation
        to furnish any maintenance and support services with respect to the App. Apple is not
        responsible for addressing any claims relating to the App. Apple and Apple&apos;s subsidiaries
        are third-party beneficiaries of these Terms.
      </p>

      <p style={{ marginTop: '3rem', fontSize: '0.9rem', color: '#666' }}>
        © 2026 Bloomy - Citation du jour. All rights reserved.
      </p>
    </div>
  )
}
