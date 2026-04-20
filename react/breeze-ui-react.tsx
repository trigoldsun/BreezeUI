// ============================================================
// BreezeUI Design Tokens — React / TypeScript
// Version: 1.0.0
// Date: 2026-04-20
// Output: Hermes01
// ============================================================

export const breezeTokens = {
  // Colors
  colors: {
    // Backgrounds
    bgPrimary:    '#F8FAFE',
    bgSecondary:  '#EEF3FA',
    bgElevated:   '#FFFFFF',
    bgOverlay:    '#DDE5F0',
    bgInput:      '#F0F5FC',
    bgHover:      '#E8F0FB',
    bgActive:     '#DDE8F5',
    bgSubtle:     '#F5F8FE',

    // Accents
    accentPrimary:   '#4A9FFF',
    accentSecondary: '#36D399',
    accentTertiary:  '#FF9F43',
    accentWarm:      '#FF6B9D',

    // Functional
    success: '#22C55E',
    warning: '#F59E0B',
    danger:  '#EF4444',
    info:    '#4A9FFF',

    // Pastel
    pastelBlue:   '#DBEAFE',
    pastelGreen:  '#D1FAE5',
    pastelOrange: '#FEF3C7',
    pastelPink:   '#FCE7F3',
    pastelGray:   '#F1F5F9',

    // Text
    textPrimary:   '#1E3A5F',
    textSecondary: '#5A7A9A',
    textTertiary: '#94A8BE',
    textInverse:  '#FFFFFF',
    textMuted:    '#7C9AB8',
    textLink:     '#4A9FFF',
  },

  // Border
  border: {
    default: 'rgba(74,159,255,0.15)',
    hover:   'rgba(74,159,255,0.4)',
    focus:   '#4A9FFF',
    active:  'rgba(54,211,153,0.5)',
    subtle:  'rgba(74,159,255,0.08)',
  },

  // Shadow
  shadow: {
    xs:    '0 1px 2px rgba(30,58,95,0.05)',
    sm:    '0 2px 6px rgba(30,58,95,0.08)',
    md:    '0 4px 16px rgba(30,58,95,0.1)',
    lg:    '0 8px 28px rgba(30,58,95,0.12)',
    xl:    '0 16px 48px rgba(30,58,95,0.15)',
    inner: 'inset 0 1px 3px rgba(30,58,95,0.06)',
    float: '0 8px 32px rgba(30,58,95,0.12)',
  },

  // Glow
  glow: {
    primary:   '0 4px 16px rgba(74,159,255,0.25)',
    secondary: '0 4px 16px rgba(54,211,153,0.2)',
    success:   '0 4px 12px rgba(34,197,94,0.25)',
    warning:   '0 4px 12px rgba(245,158,11,0.25)',
    danger:    '0 4px 12px rgba(239,68,68,0.25)',
    warm:      '0 4px 16px rgba(255,107,157,0.2)',
  },

  // Typography
  font: {
    display: "'Nunito', 'Noto Sans SC', system-ui, sans-serif",
    body:    "'DM Sans', 'PingFang SC', 'Microsoft YaHei', system-ui, sans-serif",
    mono:    "'JetBrains Mono', 'Fira Code', monospace",
  },

  // Spacing
  space: {
    0: '0',
    px:  '0.0625rem',
    '0-5': '0.125rem',
    1: '0.25rem',
    '1-5': '0.375rem',
    2: '0.5rem',
    '2-5': '0.625rem',
    3: '0.75rem',
    '3-5': '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
  },

  // Border radius
  radius: {
    none:  '0',
    sm:    '6px',
    md:    '12px',
    lg:    '18px',
    xl:    '24px',
    '2xl': '32px',
    full:  '9999px',
  },

  // Duration
  duration: {
    instant: '0ms',
    fast:    '100ms',
    normal:  '180ms',
    slow:    '280ms',
    slower:  '400ms',
    slowest: '600ms',
  },

  // Easing
  ease: {
    default: 'cubic-bezier(0.4, 0, 0.2, 1)',
    in:      'cubic-bezier(0.4, 0, 1, 1)',
    out:     'cubic-bezier(0, 0, 0.2, 1)',
    inOut:   'cubic-bezier(0.4, 0, 0.2, 1)',
    spring:  'cubic-bezier(0.34, 1.3, 0.64, 1)',
    smooth:  'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  },

  // Z-index
  zIndex: {
    base:     '0',
    raised:   '10',
    dropdown: '100',
    sticky:   '200',
    fixed:    '300',
    modal:    '400',
    toast:    '500',
    tooltip:  '600',
  },

  // Sizes
  size: {
    height: {
      xs:   '26px',
      sm:   '34px',
      md:   '42px',
      lg:   '50px',
      xl:   '58px',
      xxl:  '66px',
    },
    width: {
      sm:   '80px',
      md:   '120px',
      lg:   '200px',
      xl:   '280px',
      full: '100%',
    },
  },
} as const

// Theme overrides
export const breezeThemes = {
  dark: {
    bgPrimary:    '#0F1B2D',
    bgSecondary:  '#162236',
    bgElevated:   '#1D2E44',
    bgOverlay:    '#253650',
    textPrimary:  '#E8F4FC',
    textSecondary: '#8FAFC8',
    border:       'rgba(74,159,255,0.2)',
    borderHover:  'rgba(74,159,255,0.5)',
  },
  warm: {
    accentPrimary:   '#FF9F43',
    accentSecondary: '#FFD93D',
    glowPrimary:     '0 4px 16px rgba(255,159,67,0.3)',
  },
  dream: {
    accentPrimary:   '#8B5CF6',
    accentSecondary: '#EC4899',
    glowPrimary:     '0 4px 16px rgba(139,92,246,0.3)',
  },
} as const

// Button Component
import React from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'soft' | 'danger' | 'warm'
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  icon?: React.ReactNode
  pill?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  icon,
  pill = false,
  children,
  className = '',
  disabled,
  ...props
}) => {
  const classes = [
    'bz-btn',
    `bz-btn--${variant}`,
    `bz-btn--${size}`,
    loading && 'bz-btn--loading',
    pill && 'bz-btn--pill',
    icon && !children && 'bz-btn--icon',
    className,
  ].filter(Boolean).join(' ')

  return (
    <button className={classes} disabled={disabled || loading} {...props}>
      {icon && <span className="bz-btn__icon">{icon}</span>}
      {children}
    </button>
  )
}

// Input Component
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  className = '',
  id,
  ...props
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`

  return (
    <div className="bz-input-wrapper">
      {label && <label htmlFor={inputId} className="bz-label">{label}</label>}
      <input
        id={inputId}
        className={`bz-input ${error ? 'bz-input--error' : ''} ${className}`}
        {...props}
      />
      {error && <span className="bz-error-msg">{error}</span>}
      {helperText && !error && <span className="bz-helper-text">{helperText}</span>}
    </div>
  )
}

// Card Component
interface CardProps {
  children: React.ReactNode
  flat?: boolean
  hover?: boolean
  className?: string
  onClick?: () => void
}

export const Card: React.FC<CardProps> = ({
  children,
  flat = false,
  hover = false,
  className = '',
  onClick,
}) => {
  const classes = [
    'bz-card',
    flat && 'bz-card--flat',
    hover && 'bz-card-hover',
    onClick && 'bz-card-hover',
    className,
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  )
}

// Badge Component
type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'gold' | 'soft'
type BadgeSize = 'default' | 'dot' | 'pill'

interface BadgeProps {
  children?: React.ReactNode
  variant?: BadgeVariant
  size?: BadgeSize
  className?: string
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  size = 'default',
  children,
  className = '',
}) => {
  const classes = [
    'bz-badge',
    variant !== 'default' && `bz-badge--${variant}`,
    size !== 'default' && `bz-badge--${size}`,
    className,
  ].filter(Boolean).join(' ')

  return <span className={classes}>{children}</span>
}

// Spinner Component
type SpinnerSize = 'sm' | 'md' | 'lg' | 'xl'

interface SpinnerProps {
  size?: SpinnerSize
  dual?: boolean
  glow?: boolean
  className?: string
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  dual = false,
  glow = false,
  className = '',
}) => {
  const classes = [
    'bz-spinner',
    `bz-spinner--${size}`,
    dual && 'bz-spinner--dual',
    glow && 'bz-spinner--glow',
    className,
  ].filter(Boolean).join(' ')

  return <div className={classes} />
}

// Progress Component
type ProgressSize = 'sm' | 'md' | 'lg'
type ProgressColor = 'default' | 'success' | 'warning' | 'danger' | 'secondary'

interface ProgressProps {
  value: number
  max?: number
  size?: ProgressSize
  color?: ProgressColor
  indeterminate?: boolean
  showShimmer?: boolean
  className?: string
}

export const Progress: React.FC<ProgressProps> = ({
  value,
  max = 100,
  size = 'md',
  color = 'default',
  indeterminate = false,
  showShimmer = true,
  className = '',
}) => {
  const classes = [
    'bz-progress',
    `bz-progress--${size}`,
    color !== 'default' && `bz-progress--${color}`,
    indeterminate && 'bz-progress--indeterminate',
    showShimmer && !indeterminate && 'bz-progress-sweep',
    className,
  ].filter(Boolean).join(' ')

  const percentage = Math.min(100, Math.max(0, (value / max) * 100))

  return (
    <div className={classes}>
      <div
        className="bz-progress__bar"
        style={{ width: indeterminate ? undefined : `${percentage}%` }}
      />
    </div>
  )
}

// Avatar Component
type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface AvatarProps {
  src?: string
  alt?: string
  name?: string
  size?: AvatarSize
  className?: string
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  name,
  size = 'md',
  className = '',
}) => {
  const classes = ['bz-avatar', `bz-avatar--${size}`, className].filter(Boolean).join(' ')

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <div className={classes}>
      {src ? (
        <img src={src} alt={alt || name} />
      ) : (
        <span>{name ? getInitials(name) : ''}</span>
      )}
    </div>
  )
}

// Skeleton Component
interface SkeletonProps {
  width?: string | number
  height?: string | number
  variant?: 'wave' | 'pulse'
  className?: string
}

export const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height,
  variant = 'wave',
  className = '',
}) => {
  const classes = ['bz-skeleton', `bz-skeleton--${variant}`, className]
    .filter(Boolean).join(' ')

  const style: React.CSSProperties = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  }

  return <div className={classes} style={style} />
}

// Theme provider
export const BreezeProvider: React.FC<{ children: React.ReactNode; theme?: 'light' | 'dark' | 'warm' | 'dream' }> = ({ children }) => {
  React.useEffect(() => {
    const theme = document.documentElement.getAttribute('data-theme')
    if (!theme) {
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }, [])
  return <>{children}</>
}
