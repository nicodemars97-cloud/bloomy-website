'use client'

import React from 'react'
import BloomyMark from '@/components/BloomyMark'

// App Store link - Update this once your app is live
const APP_STORE_URL = 'https://apps.apple.com/app/bloomy-daily-wellness/id6740092874'

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

          {/* App Store Button */}
          <div
            style={{
              display: 'flex',
              gap: 16,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
                background: '#000',
                color: '#fff',
                padding: '14px 28px',
                borderRadius: 12,
                textDecoration: 'none',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.7rem', opacity: 0.9 }}>Download on the</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 600, marginTop: -2 }}>App Store</div>
              </div>
            </a>
          </div>

          {/* Free badge */}
          <p
            style={{
              marginTop: 16,
              fontSize: '0.875rem',
              color: 'var(--text-tertiary)',
            }}
          >
            Free to download • Premium features available
          </p>
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

      {/* How it works */}
      <section className="section">
        <div className="container text-center">
          <h2 style={{ marginBottom: 20 }}>How it works</h2>
          <p
            style={{
              maxWidth: 500,
              margin: '0 auto 48px',
            }}
          >
            Simple. Beautiful. Intentional.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 32,
              maxWidth: 800,
              margin: '0 auto',
            }}
          >
            <StepCard number="1" title="Open" description="Start your day with Bloomy" />
            <StepCard number="2" title="Read" description="Discover your daily Bloom" />
            <StepCard number="3" title="Act" description="Try the suggested action" />
          </div>
        </div>
      </section>

      {/* Widget Section */}
      <section
        className="section"
        style={{
          background: 'white',
        }}
      >
        <div className="container text-center">
          <h2 style={{ marginBottom: 20 }}>Beautiful widgets</h2>
          <p
            style={{
              maxWidth: 500,
              margin: '0 auto 32px',
            }}
          >
            See your daily Bloom right on your home screen or lock screen. No need to open the app.
          </p>

          {/* Widget preview placeholder */}
          <div
            style={{
              display: 'flex',
              gap: 24,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <div
              style={{
                width: 170,
                height: 170,
                borderRadius: 24,
                background: 'linear-gradient(135deg, #FAFAF8 0%, rgba(157, 180, 160, 0.08) 100%)',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                padding: 16,
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: 'var(--sage-green)',
                  }}
                />
                <span style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)' }}>Your Bloom</span>
              </div>
              <p style={{ fontSize: '0.85rem', fontWeight: 500, lineHeight: 1.4, margin: 0 }}>
                Focus is saying no to good ideas.
              </p>
              <span style={{ fontSize: '0.65rem', color: 'var(--text-tertiary)' }}>5d</span>
            </div>

            <div
              style={{
                width: 364,
                height: 170,
                borderRadius: 24,
                background: 'linear-gradient(135deg, #FAFAF8 0%, rgba(157, 180, 160, 0.08) 100%)',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                padding: 16,
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: 'var(--sage-green)',
                  }}
                />
                <span style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)' }}>Your daily Bloom</span>
              </div>
              <div>
                <p style={{ fontSize: '1rem', fontWeight: 600, lineHeight: 1.4, margin: '0 0 8px 0' }}>
                  Breathe before you act. It changes everything.
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                  → Take a 30-second pause right now.
                </p>
              </div>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)' }}>🔥 12 days</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="section"
        style={{
          textAlign: 'center',
        }}
      >
        <div className="container">
          <BloomyMark size="medium" />
          <h2 style={{ marginTop: 24, marginBottom: 16 }}>Start your journey</h2>
          <p
            style={{
              maxWidth: 400,
              margin: '0 auto 32px',
            }}
          >
            Download Bloomy today and discover a calmer, more intentional way to grow.
          </p>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{
              minWidth: 200,
            }}
          >
            Download Free
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

function StepCard({
  number,
  title,
  description,
}: {
  number: string
  title: string
  description: string
}) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: '50%',
          background: 'var(--sage-green)',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.25rem',
          fontWeight: 600,
          margin: '0 auto 16px',
        }}
      >
        {number}
      </div>
      <h3 style={{ marginBottom: 8, fontSize: '1.25rem' }}>{title}</h3>
      <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>{description}</p>
    </div>
  )
}
