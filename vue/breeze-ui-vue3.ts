// ============================================================
// BreezeUI Design Tokens — Vue 3 TypeScript
// Version: 1.0.0
// Date: 2026-04-20
// Output: Hermes01
// ============================================================

// Token namespace: breeze-

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
    xs:     '0 1px 2px rgba(30,58,95,0.05)',
    sm:     '0 2px 6px rgba(30,58,95,0.08)',
    md:     '0 4px 16px rgba(30,58,95,0.1)',
    lg:     '0 8px 28px rgba(30,58,95,0.12)',
    xl:     '0 16px 48px rgba(30,58,95,0.15)',
    inner:  'inset 0 1px 3px rgba(30,58,95,0.06)',
    float:  '0 8px 32px rgba(30,58,95,0.12)',
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

  // Font sizes
  fontSize: {
    '2xs': '0.625rem',
    xs:    '0.75rem',
    sm:    '0.875rem',
    base:  '1rem',
    lg:    '1.125rem',
    xl:    '1.25rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    '4xl': '2.5rem',
    '5xl': '3rem',
  },

  // Font weights
  fontWeight: {
    light:    '300',
    normal:   '400',
    medium:   '500',
    semibold: '600',
    bold:     '700',
  },

  // Spacing (4px base)
  space: {
    '0': '0',
    px:  '0.0625rem',
    '0-5': '0.125rem',
    '1': '0.25rem',
    '1-5': '0.375rem',
    '2': '0.5rem',
    '2-5': '0.625rem',
    '3': '0.75rem',
    '3-5': '0.875rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '7': '1.75rem',
    '8': '2rem',
    '9': '2.25rem',
    '10': '2.5rem',
    '12': '3rem',
    '14': '3.5rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '32': '8rem',
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
    base:      '0',
    raised:    '10',
    dropdown:  '100',
    sticky:    '200',
    fixed:     '300',
    modal:     '400',
    toast:     '500',
    tooltip:   '600',
  },

  // Component sizes
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
    bgInput:      '#162236',
    bgHover:      '#1D2E44',
    bgActive:     '#253650',
    textPrimary:  '#E8F4FC',
    textSecondary: '#8FAFC8',
    border:       'rgba(74,159,255,0.2)',
    borderHover:  'rgba(74,159,255,0.5)',
  },
  warm: {
    accentPrimary:   '#FF9F43',
    accentSecondary: '#FFD93D',
    accentWarm:      '#FF6B6B',
    glowPrimary:     '0 4px 16px rgba(255,159,67,0.3)',
  },
  dream: {
    accentPrimary:   '#8B5CF6',
    accentSecondary: '#EC4899',
    accentTertiary:  '#06B6D4',
    glowPrimary:      '0 4px 16px rgba(139,92,246,0.3)',
  },
} as const

// Component class name generators
export const breezeComponents = {
  button: {
    base:     'bz-btn',
    primary:  'bz-btn--primary',
    secondary:'bz-btn--secondary',
    outline:  'bz-btn--outline',
    ghost:    'bz-btn--ghost',
    soft:     'bz-btn--soft',
    danger:   'bz-btn--danger',
    warm:     'bz-btn--warm',
    xs:       'bz-btn--xs',
    sm:       'bz-btn--sm',
    lg:       'bz-btn--lg',
    xl:       'bz-btn--xl',
    icon:     'bz-btn--icon',
    loading:  'bz-btn--loading',
    pill:     'bz-btn--pill',
  },
  input: {
    base:     'bz-input',
    wrapper:  'bz-input-wrapper',
    label:    'bz-label',
    error:    'bz-input--error',
    errorMsg: 'bz-error-msg',
    sm:       'bz-input--sm',
    lg:       'bz-input--lg',
    group:    'bz-input-group',
  },
  card: {
    base:     'bz-card',
    flat:     'bz-card--flat',
    header:   'bz-card__header',
    title:    'bz-card__title',
    body:     'bz-card__body',
    footer:   'bz-card__footer',
  },
  badge: {
    base:     'bz-badge',
    primary:  'bz-badge--primary',
    success:  'bz-badge--success',
    warning:  'bz-badge--warning',
    danger:   'bz-badge--danger',
    gold:     'bz-badge--gold',
    dot:      'bz-badge--dot',
    pill:     'bz-badge--pill',
  },
  modal: {
    overlay:  'bz-modal-overlay',
    base:     'bz-modal',
    header:   'bz-modal__header',
    title:    'bz-modal__title',
    body:     'bz-modal__body',
    footer:   'bz-modal__footer',
  },
  toast: {
    container: 'bz-toast-container',
    base:      'bz-toast',
    success:   'bz-toast--success',
    error:     'bz-toast--error',
    warning:   'bz-toast--warning',
    info:      'bz-toast--info',
    icon:      'bz-toast__icon',
    content:   'bz-toast__content',
    title:     'bz-toast__title',
    msg:       'bz-toast__msg',
    close:     'bz-toast__close',
  },
  progress: {
    base:    'bz-progress',
    bar:     'bz-progress__bar',
    sm:      'bz-progress--sm',
    md:      'bz-progress--md',
    lg:      'bz-progress--lg',
  },
  tabs: {
    base:       'bz-tabs',
    tab:        'bz-tab',
    active:     'bz-tab--active',
    pill:       'bz-tabs--pill',
  },
  avatar: {
    base:   'bz-avatar',
    xs:     'bz-avatar--xs',
    sm:     'bz-avatar--sm',
    md:     'bz-avatar--md',
    lg:     'bz-avatar--lg',
    xl:     'bz-avatar--xl',
  },
  skeleton: {
    base:  'bz-skeleton',
    wave:  'bz-skeleton-wave',
    pulse: 'bz-skeleton-pulse',
  },
} as const

// Animation class names
export const breezeAnimations = {
  fadeIn:       'bz-animate-fade-in',
  slideUp:      'bz-animate-slide-up',
  slideDown:    'bz-animate-slide-down',
  scaleIn:      'bz-animate-scale-in',
  slideLeft:    'bz-animate-slide-left',
  slideRight:   'bz-animate-slide-right',
  bounceIn:     'bz-animate-bounce-in',
  stagger:      'bz-stagger',
  cardHover:    'bz-card-hover',
  cardGlow:    'bz-card-glow',
  lift:         'bz-lift',
  float:        'bz-float',
  breathe:      'bz-breathe',
  pulse:        'bz-pulse',
  ripple:       'bz-ripple',
  spinner:      'bz-spinner',
  skeletonWave: 'bz-skeleton-wave',
} as const

// CSS custom properties installer for Vue
export function installBreezeTokens(root: HTMLElement) {
  const root2 = root || document.documentElement

  // Backgrounds
  root2.style.setProperty('--breeze-bg-primary',    breezeTokens.colors.bgPrimary)
  root2.style.setProperty('--breeze-bg-secondary',  breezeTokens.colors.bgSecondary)
  root2.style.setProperty('--breeze-bg-elevated',   breezeTokens.colors.bgElevated)
  root2.style.setProperty('--breeze-bg-overlay',      breezeTokens.colors.bgOverlay)
  root2.style.setProperty('--breeze-bg-input',       breezeTokens.colors.bgInput)
  root2.style.setProperty('--breeze-bg-hover',       breezeTokens.colors.bgHover)
  root2.style.setProperty('--breeze-bg-active',      breezeTokens.colors.bgActive)
  root2.style.setProperty('--breeze-bg-subtle',      breezeTokens.colors.bgSubtle)

  // Accents
  root2.style.setProperty('--breeze-accent-primary',   breezeTokens.colors.accentPrimary)
  root2.style.setProperty('--breeze-accent-secondary', breezeTokens.colors.accentSecondary)
  root2.style.setProperty('--breeze-accent-tertiary',  breezeTokens.colors.accentTertiary)
  root2.style.setProperty('--breeze-accent-warm',       breezeTokens.colors.accentWarm)

  // Functional
  root2.style.setProperty('--breeze-success', breezeTokens.colors.success)
  root2.style.setProperty('--breeze-warning', breezeTokens.colors.warning)
  root2.style.setProperty('--breeze-danger',  breezeTokens.colors.danger)
  root2.style.setProperty('--breeze-info',    breezeTokens.colors.info)

  // Text
  root2.style.setProperty('--breeze-text-primary',   breezeTokens.colors.textPrimary)
  root2.style.setProperty('--breeze-text-secondary', breezeTokens.colors.textSecondary)
  root2.style.setProperty('--breeze-text-tertiary',  breezeTokens.colors.textTertiary)
  root2.style.setProperty('--breeze-text-inverse',   breezeTokens.colors.textInverse)
  root2.style.setProperty('--breeze-text-muted',    breezeTokens.colors.textMuted)
}
