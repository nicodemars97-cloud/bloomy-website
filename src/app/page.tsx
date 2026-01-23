'use client'

import React from 'react'
import BloomyMark from '@/components/BloomyMark'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          minHeight: 'calc(100vh - 64px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '80px 24px',
        }}
      >
        <div
          style={{
            maxWidth: 720,
          }}
        >
          {/* Bloomy Mark */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: 40,
            }}
          >
            <BloomyMark size="hero" animated />
          </div>

          {/* Headline */}
          <h1
            style={{
              marginBottom: 20,
            }}
          >
            One thought.
            <br />
            One action.
            <br />
            Every day.
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
              maxWidth: 520,
              margin: '0 auto 40px',
              lineHeight: 1.6,
            }}
          >
            A minimalist wellness ritual that actually fits your life. No overwhelm, no noise — just what matters.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: 'flex',
              gap: 16,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="#testflight"
              className="btn btn-primary"
              style={{
                minWidth: 200,
              }}
            >
              Join TestFlight
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="section"
        style={{
          background: 'white',
        }}
      >
        <div className="container">
          <h2
            className="text-center"
            style={{
              marginBottom: 60,
            }}
          >
            Designed for real life
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 32,
              maxWidth: 1000,
              margin: '0 auto',
            }}
          >
            {/* Feature 1 */}
            <FeatureCard
              icon="🌱"
              title="30 seconds, max"
              description="One thought to reflect on. One action to try. That's it. No courses, no subscriptions to content overload."
            />

            {/* Feature 2 */}
            <FeatureCard
              icon="✨"
              title="Curated, not generated"
              description="Every Bloom is thoughtfully crafted, not mass-produced by algorithms. Quality over quantity, always."
            />

            {/* Feature 3 */}
            <FeatureCard
              icon="🌿"
              title="No guilt, no pressure"
              description="Missed a day? That's okay. Bloomy meets you where you are, without streaks that punish or notifications that nag."
            />
          </div>
        </div>
      </section>

      {/* Screenshot Section */}
      <section className="section">
        <div className="container text-center">
          <h2 style={{ marginBottom: 20 }}>Simple. Beautiful. Intentional.</h2>
          <p
            style={{
              maxWidth: 500,
              margin: '0 auto 48px',
            }}
          >
            An app that respects your time and your attention. Light, fast, and distraction-free.
          </p>

          {/* Screenshot Placeholder */}
          <div
            style={{
              maxWidth: 320,
              margin: '0 auto',
              aspectRatio: '9 / 16',
              borderRadius: 32,
              background: 'linear-gradient(180deg, var(--bg-card) 0%, rgba(157, 180, 160, 0.1) 100%)',
              border: '1px solid rgba(0, 0, 0, 0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)',
            }}
          >
            <div style={{ textAlign: 'center', padding: 40 }}>
              <BloomyMark size="large" />
              <p
                style={{
                  marginTop: 24,
                  fontSize: '0.875rem',
                  color: 'var(--text-tertiary)',
                }}
              >
                App screenshot coming soon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="section"
        style={{
          background: 'white',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <BloomyMark size="medium" />
          <h2 style={{ marginTop: 24, marginBottom: 16 }}>Ready to start?</h2>
          <p
            style={{
              maxWidth: 400,
              margin: '0 auto 32px',
            }}
          >
            Join our TestFlight beta and be among the first to experience Bloomy.
          </p>
          <a href="#testflight" className="btn btn-primary">
            Join TestFlight
          </a>
        </div>
      </section>
    </>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string
  title: string
  description: string
}) {
  return (
    <div
      className="card"
      style={{
        textAlign: 'center',
        padding: '40px 32px',
      }}
    >
      <div
        style={{
          fontSize: '2.5rem',
          marginBottom: 16,
        }}
      >
        {icon}
      </div>
      <h3 style={{ marginBottom: 12 }}>{title}</h3>
      <p
        style={{
          fontSize: '1rem',
          lineHeight: 1.6,
        }}
      >
        {description}
      </p>
    </div>
  )
}
