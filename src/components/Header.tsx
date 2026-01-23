'use client'

import React from 'react'
import Link from 'next/link'
import BloomyMark from './BloomyMark'

export default function Header() {
  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: 'rgba(252, 250, 247, 0.8)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.04)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 64,
        }}
      >
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <BloomyMark size="small" showHalo={false} />
          <span
            style={{
              fontSize: '1.125rem',
              fontWeight: 600,
              letterSpacing: '-0.01em',
            }}
          >
            Bloomy
          </span>
        </Link>

        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 32,
          }}
        >
          <Link
            href="/support"
            style={{
              fontSize: '0.9375rem',
              color: 'var(--text-secondary)',
              transition: 'color 0.2s',
            }}
          >
            Support
          </Link>
        </nav>
      </div>
    </header>
  )
}
