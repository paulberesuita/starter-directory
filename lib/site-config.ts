export const siteConfig = {
  // Site Information
  site: {
    name: "ACME",
    title: "ACME - Premium Templates Marketplace",
    description: "Browse our collection of professionally designed templates",
    url: "https://acme.com",
  },

  // Navigation
  navigation: {
    main: [
      { label: "Templates", href: "#" },
      { label: "Categories", href: "#" },
      { label: "About", href: "#" },
    ],
  },

  // Search Configuration
  search: {
    enabled: true,
    placeholder: "Search templates...",
    fuzzyThreshold: 0.3, // 0 = exact match, 1 = very fuzzy
    searchableFields: ["name", "description", "fullDescription", "category", "features", "tags"],
    showResultCount: true,
  },

  // Template/Product Display
  templates: {
    currency: "$",
    gridColumns: {
      mobile: 1,      // grid-cols-1
      tablet: 2,      // md:grid-cols-2
      desktop: 3,     // lg:grid-cols-3
      wide: 4,        // xl:grid-cols-4
    },
    card: {
      showPrice: true,
      showDescription: true,
      buttonText: "Get Template",
      buttonSize: "sm" as const, // "sm" | "default" | "lg"
    },
  },

  // Theme Configuration
  theme: {
    // Colors using Tailwind color class names
    colors: {
      primary: "blue-600",     // Main brand color (buttons, links)
      secondary: "gray-500",   // Secondary text color
      accent: "blue-500",      // Accent color for highlights
      background: "white",     // Page background
      surface: "gray-100",        // Card backgrounds
      border: "gray-200",      // Border colors
      text: {
        primary: "gray-900",   // Main text color
        secondary: "gray-500", // Muted text color
        muted: "gray-400",     // Very light text
      },
      success: "green-500",    // Success states
      warning: "yellow-500",   // Warning states
      error: "red-500",        // Error states
    },

    // Typography - Modern font options
    fonts: {
      // Option 1: Satoshi (premium modern font)
      primary: '"Satoshi", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      heading: '"Satoshi", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      
      // Option 2: Inter (Google Fonts - very popular)
      // primary: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      // heading: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      
      // Option 3: Geist (Vercel's font - very modern)
      // primary: '"Geist", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      // heading: '"Geist", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      
      // Option 4: System fonts (no external loading required)
      // primary: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
      // heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
      
      // Monospace for code
      mono: '"JetBrains Mono", "Fira Code", "SF Mono", Consolas, monospace',
    },

    // Font weights and sizes
    typography: {
      weights: {
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
      },
      sizes: {
        xs: "0.75rem",      // 12px
        sm: "0.875rem",     // 14px
        base: "1rem",       // 16px
        lg: "1.125rem",     // 18px
        xl: "1.25rem",      // 20px
        "2xl": "1.5rem",    // 24px
        "3xl": "1.875rem",  // 30px
        "4xl": "2.25rem",   // 36px
        "5xl": "3rem",      // 48px
      },
      lineHeight: {
        tight: "1.25",
        normal: "1.5",
        relaxed: "1.75",
      },
    },

    // Spacing & Layout
    spacing: {
      xs: "0.25rem",     // 4px
      sm: "0.5rem",      // 8px
      md: "1rem",        // 16px
      lg: "1.5rem",      // 24px
      xl: "2rem",        // 32px
      "2xl": "3rem",     // 48px
    },

    // Border Radius
    borderRadius: {
      none: "0",
      sm: "0.25rem",     // 4px
      md: "0.375rem",    // 6px
      lg: "0.5rem",      // 8px
      xl: "0.75rem",     // 12px
      full: "9999px",    // Fully rounded
    },

    // Shadows
    shadows: {
      sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    },

    // Animation
    animation: {
      fast: "150ms",
      normal: "200ms", 
      slow: "300ms",
    },

    // Component-specific styling (using Tailwind color class names)
    components: {
      card: {
        background: "gray-50",
        border: "gray-200",         // Very light gray for subtle borders
        borderHover: "gray-500",    // Medium light gray for hover state
        borderRadius: "0.5rem",
        shadow: "0 1px 3px 0 rgb(0 0 0 / 0.1)",
        hoverShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
      },
      button: {
        borderRadius: "0.375rem",
        fontWeight: "500",
        padding: {
          sm: "0.5rem 0.75rem",
          md: "0.625rem 1rem", 
          lg: "0.75rem 1.5rem",
        },
      },
      header: {
        background: "#ffffff",
        border: "#e5e7eb",
        height: "80px",
      },
    },
  },

  // Feature Flags
  features: {
    search: true,
    categories: true,
    detailPages: true,
    pageTransitions: true,
    // Future features
    favorites: false,
    userAccounts: false,
    reviews: false,
  },

  // Detail page configuration
  detailPage: {
    enableGallery: true,
    enableFeatures: true,
    enableDemo: true,
    enableRelatedTemplates: true,
    maxGalleryImages: 3,
    relatedTemplatesCount: 3,
    transition: {
      duration: 300,
      ease: 'ease-in-out',
    },
    buttonText: {
      viewDemo: 'View Live Demo',
      backToTemplates: 'Back to Templates',
      purchase: 'Purchase Template',
    },
  },

  // Content
  content: {
    hero: {
      title: "Browse Templates",
      subtitle: "Choose from our collection of professionally designed templates",
    },
    noResults: {
      title: "No templates found matching",
      clearButton: "Clear search",
    },
  },
} 