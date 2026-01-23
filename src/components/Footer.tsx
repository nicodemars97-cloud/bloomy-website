'use client'

import React from 'react'
import Link from 'next/link'
import BloomyMark from './BloomyMark'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(0, 0, 0, 0.04)',
        padding: '48px 0',
        marginTop: 'auto',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 24,
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <BloomyMark size="small" showHalo={false} />
            <span
              style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
              }}
            >
              Bloomy
            </span>
          </div>

          {/* Links */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 32,
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <Link
              href="/privacy"
              style={{
                fontSize: '0.875rem',
                color: 'var(--text-tertiary)',
                transition: 'color 0.2s',
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              style={{
                fontSize: '0.875rem',
                color: 'var(--text-tertiary)',
                transition: 'color 0.2s',
              }}
            >
              Terms of Use
            </Link>
            <Link
              href="/support"
              style={{
                fontSize: '0.875rem',
                color: 'var(--text-tertiary)',
                transition: 'color 0.2s',
              }}
            >
              Support
            </Link>
          </nav>

          {/* Copyright */}
          <p
            style={{
              fontSize: '0.8125rem',
              color: 'var(--text-tertiary)',
              marginTop: 8,
            }}
          >
            &copy; {currentYear} Bloomy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
