'use client'

import { Metadata } from 'next'
import BloomyMark from '@/components/BloomyMark'

export default function SupportPage() {
  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 680 }}>
        {/* Header */}
        <div className="text-center" style={{ marginBottom: 60 }}>
          <BloomyMark size="medium" />
          <h1 style={{ marginTop: 24, marginBottom: 16 }}>Support</h1>
          <p>
            We&apos;re here to help. Reach out to us with any questions, feedback, or issues.
          </p>
        </div>

        {/* Contact Cards */}
        <div
          style={{
            display: 'grid',
            gap: 24,
          }}
        >
          {/* General Support */}
          <div className="card">
            <h3 style={{ marginBottom: 8 }}>General Support</h3>
            <p style={{ marginBottom: 16, fontSize: '1rem' }}>
              Questions about using Bloomy? Need help with a feature? We&apos;re happy to assist.
            </p>
            <a
              href="mailto:support@bloomyapp.app"
              className="btn btn-primary"
              style={{ display: 'inline-flex' }}
            >
              Email Support
            </a>
          </div>

          {/* Bug Reports */}
          <div className="card">
            <h3 style={{ marginBottom: 8 }}>Bug Reports</h3>
            <p style={{ marginBottom: 16, fontSize: '1rem' }}>
              Found a bug? Please include your device model, iOS version, and steps to reproduce
              the issue.
            </p>
            <a
              href="mailto:support@bloomyapp.app?subject=Bug Report"
              className="btn btn-secondary"
              style={{ display: 'inline-flex' }}
            >
              Report a Bug
            </a>
          </div>

          {/* Feedback */}
          <div className="card">
            <h3 style={{ marginBottom: 8 }}>Feedback & Suggestions</h3>
            <p style={{ marginBottom: 16, fontSize: '1rem' }}>
              Have an idea to make Bloomy better? We love hearing from our users.
            </p>
            <a
              href="mailto:support@bloomyapp.app?subject=Feedback"
              className="btn btn-secondary"
              style={{ display: 'inline-flex' }}
            >
              Send Feedback
            </a>
          </div>

          {/* Business Inquiries */}
          <div className="card">
            <h3 style={{ marginBottom: 8 }}>Business Inquiries</h3>
            <p style={{ marginBottom: 16, fontSize: '1rem' }}>
              Press, partnerships, or other business matters.
            </p>
            <a
              href="mailto:support@bloomyapp.app?subject=Business Inquiry"
              className="btn btn-secondary"
              style={{ display: 'inline-flex' }}
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div style={{ marginTop: 80 }}>
          <h2 className="text-center" style={{ marginBottom: 40 }}>
            Frequently Asked Questions
          </h2>

          <div style={{ display: 'grid', gap: 24 }}>
            <FAQItem
              question="How do I restore my purchases?"
              answer="Go to Settings in the app, then tap 'Restore Purchases'. This will restore any premium features you've previously purchased."
            />
            <FAQItem
              question="Can I use Bloomy offline?"
              answer="Yes! Once you've loaded a Bloom, it's available offline. However, you'll need an internet connection to receive new daily content."
            />
            <FAQItem
              question="How do I cancel my subscription?"
              answer="Subscriptions are managed through the App Store. Go to Settings > Apple ID > Subscriptions on your device to manage or cancel your subscription."
            />
            <FAQItem
              question="Is my data private?"
              answer="Absolutely. Your data is stored locally on your device. We don't have access to your personal information. See our Privacy Policy for more details."
            />
            <FAQItem
              question="What languages is Bloomy available in?"
              answer="Bloomy is currently available in English and French. More languages are coming soon!"
            />
          </div>
        </div>

        {/* Response Time Notice */}
        <div
          className="text-center"
          style={{
            marginTop: 60,
            padding: 24,
            background: 'rgba(157, 180, 160, 0.08)',
            borderRadius: 16,
          }}
        >
          <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', margin: 0 }}>
            We typically respond to all inquiries within 24-48 hours.
            <br />
            Thank you for your patience.
          </p>
        </div>
      </div>
    </div>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div
      style={{
        padding: '20px 24px',
        background: 'white',
        borderRadius: 12,
        border: '1px solid rgba(0, 0, 0, 0.04)',
      }}
    >
      <h4
        style={{
          fontSize: '1rem',
          fontWeight: 600,
          marginBottom: 8,
        }}
      >
        {question}
      </h4>
      <p
        style={{
          fontSize: '0.9375rem',
          color: 'var(--text-secondary)',
          margin: 0,
          lineHeight: 1.6,
        }}
      >
        {answer}
      </p>
    </div>
  )
}
