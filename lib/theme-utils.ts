import { siteConfig } from "./site-config"

/**
 * Utility functions to access theme values in components
 */

// Get theme colors
export const getThemeColor = (colorPath: string) => {
  const keys = colorPath.split('.')
  let value: any = siteConfig.theme.colors
  
  for (const key of keys) {
    value = value?.[key]
  }
  
  return value || ''
}

// Get theme spacing
export const getThemeSpacing = (size: keyof typeof siteConfig.theme.spacing) => {
  return siteConfig.theme.spacing[size]
}

// Get theme border radius
export const getThemeBorderRadius = (size: keyof typeof siteConfig.theme.borderRadius) => {
  return siteConfig.theme.borderRadius[size]
}

// Get theme shadow
export const getThemeShadow = (size: keyof typeof siteConfig.theme.shadows) => {
  return siteConfig.theme.shadows[size]
}

// Generate CSS custom properties from theme
export const generateThemeCSS = () => {
  const { theme } = siteConfig
  
  return `
    :root {
      /* Colors */
      --color-primary: ${theme.colors.primary};
      --color-secondary: ${theme.colors.secondary};
      --color-accent: ${theme.colors.accent};
      --color-background: ${theme.colors.background};
      --color-surface: ${theme.colors.surface};
      --color-border: ${theme.colors.border};
      --color-text-primary: ${theme.colors.text.primary};
      --color-text-secondary: ${theme.colors.text.secondary};
      --color-text-muted: ${theme.colors.text.muted};
      --color-success: ${theme.colors.success};
      --color-warning: ${theme.colors.warning};
      --color-error: ${theme.colors.error};
      
      /* Typography */
      --font-primary: ${theme.fonts.primary};
      --font-heading: ${theme.fonts.heading};
      --font-mono: ${theme.fonts.mono};
      
      /* Spacing */
      --spacing-xs: ${theme.spacing.xs};
      --spacing-sm: ${theme.spacing.sm};
      --spacing-md: ${theme.spacing.md};
      --spacing-lg: ${theme.spacing.lg};
      --spacing-xl: ${theme.spacing.xl};
      --spacing-2xl: ${theme.spacing["2xl"]};
      
      /* Border Radius */
      --radius-sm: ${theme.borderRadius.sm};
      --radius-md: ${theme.borderRadius.md};
      --radius-lg: ${theme.borderRadius.lg};
      --radius-xl: ${theme.borderRadius.xl};
      
      /* Shadows */
      --shadow-sm: ${theme.shadows.sm};
      --shadow-md: ${theme.shadows.md};
      --shadow-lg: ${theme.shadows.lg};
      --shadow-xl: ${theme.shadows.xl};
      
      /* Animation */
      --animation-fast: ${theme.animation.fast};
      --animation-normal: ${theme.animation.normal};
      --animation-slow: ${theme.animation.slow};
    }
  `
} 