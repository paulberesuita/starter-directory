'use client'

import { siteConfig } from '@/lib/site-config'
import { resolveTailwindColor } from '@/lib/tailwind-colors'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Generate CSS variables from site config, resolving Tailwind class names to CSS values
  const cssVariables = `
    :root {
      /* Card styling from config */
      --card-border: ${resolveTailwindColor(siteConfig.theme.components.card.border)};
      --card-border-hover: ${resolveTailwindColor(siteConfig.theme.components.card.borderHover)};
      --card-background: ${resolveTailwindColor(siteConfig.theme.components.card.background)};
      --card-radius: ${siteConfig.theme.components.card.borderRadius};
      
      /* Colors from config */
      --color-primary: ${resolveTailwindColor(siteConfig.theme.colors.primary)};
      --color-secondary: ${resolveTailwindColor(siteConfig.theme.colors.secondary)};
      --color-accent: ${resolveTailwindColor(siteConfig.theme.colors.accent)};
      --color-background: ${resolveTailwindColor(siteConfig.theme.colors.background)};
      --color-surface: ${resolveTailwindColor(siteConfig.theme.colors.surface)};
      --color-border: ${resolveTailwindColor(siteConfig.theme.colors.border)};
      
      /* Text colors */
      --color-text-primary: ${resolveTailwindColor(siteConfig.theme.colors.text.primary)};
      --color-text-secondary: ${resolveTailwindColor(siteConfig.theme.colors.text.secondary)};
      --color-text-muted: ${resolveTailwindColor(siteConfig.theme.colors.text.muted)};
      
      /* State colors */
      --color-success: ${resolveTailwindColor(siteConfig.theme.colors.success)};
      --color-warning: ${resolveTailwindColor(siteConfig.theme.colors.warning)};
      --color-error: ${resolveTailwindColor(siteConfig.theme.colors.error)};
      
      /* Animation */
      --animation-fast: ${siteConfig.theme.animation.fast};
      --animation-normal: ${siteConfig.theme.animation.normal};
      --animation-slow: ${siteConfig.theme.animation.slow};
    }
  `

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: cssVariables }} />
      {children}
    </>
  )
} 