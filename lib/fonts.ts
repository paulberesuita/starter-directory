import { Inter, JetBrains_Mono } from 'next/font/google'

// Google Fonts - these work without any external files
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
})

// Font combinations you can use
export const fontCombinations = {
  // Option 1: Inter (Google Fonts - free, works immediately)
  inter: {
    primary: inter.variable,
    mono: jetbrainsMono.variable,
    className: `${inter.variable} ${jetbrainsMono.variable}`,
  },
}

// Export the configuration you want to use
export const currentFontConfig = fontCombinations.inter

/*
// Uncomment and use these when you have the actual font files:

import localFont from 'next/font/local'

// For Satoshi (download from https://www.fontshare.com/fonts/satoshi)
export const satoshi = localFont({
  src: [
    {
      path: '../public/fonts/Satoshi-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Satoshi-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Satoshi-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Satoshi-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-satoshi',
  display: 'swap',
})

// For Geist (download from https://vercel.com/font)
export const geist = localFont({
  src: [
    {
      path: '../public/fonts/GeistVF.woff2',
      weight: '100 900',
      style: 'normal',
    },
  ],
  variable: '--font-geist',
  display: 'swap',
})

// Add these to fontCombinations when you have the files:
satoshi: {
  primary: satoshi.variable,
  mono: jetbrainsMono.variable,
  className: `${satoshi.variable} ${jetbrainsMono.variable}`,
},

geist: {
  primary: geist.variable,
  mono: jetbrainsMono.variable,
  className: `${geist.variable} ${jetbrainsMono.variable}`,
},
*/ 