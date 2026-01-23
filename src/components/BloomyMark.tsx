'use client'

import React from 'react'

interface BloomyMarkProps {
  size?: 'small' | 'medium' | 'large' | 'hero'
  showHalo?: boolean
  animated?: boolean
  className?: string
}

const sizes = {
  small: { dot: 12, halo: 24, stroke: 2 },
  medium: { dot: 20, halo: 40, stroke: 3 },
  large: { dot: 32, halo: 64, stroke: 5 },
  hero: { dot: 48, halo: 96, stroke: 8 },
}

export default function BloomyMark({
  size = 'medium',
  showHalo = true,
  animated = false,
  className = '',
}: BloomyMarkProps) {
  const { dot, halo, stroke } = sizes[size]
  const sageGreen = 'rgb(157, 180, 160)'

  return (
    <div
      className={`bloomy-mark ${animated ? 'animated' : ''} ${className}`}
      style={{
        position: 'relative',
        width: halo + stroke,
        height: halo + stroke,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {showHalo && (
        <div
          style={{
            position: 'absolute',
            width: halo,
            height: halo,
            borderRadius: '50%',
            border: `${stroke}px solid ${sageGreen}`,
            opacity: 0.3,
          }}
        />
      )}
      <div
        style={{
          width: dot,
          height: dot,
          borderRadius: '50%',
          backgroundColor: sageGreen,
        }}
      />
      <style jsx>{`
        .bloomy-mark.animated {
          animation: breathe 3s ease-in-out infinite;
        }
        @keyframes breathe {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  )
}
