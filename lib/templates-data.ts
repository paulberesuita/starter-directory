export interface Template {
  id: number
  name: string
  slug: string  // URL-friendly version of name
  description: string
  price: string
  category: string
  // New fields for detail page
  fullDescription: string
  features: string[]
  gallery: string[]  // Array of image URLs
  demoUrl?: string   // Optional demo URL
  tags: string[]     // Additional tags for better search
  lastUpdated: string
}

export const templates: Template[] = [
  {
    id: 1,
    name: "SaaS Dashboard Pro",
    slug: "saas-dashboard-pro",
    description: "A comprehensive dashboard template for SaaS applications with analytics, user management, and billing features.",
    fullDescription: "Transform your SaaS application with this comprehensive dashboard template. Built with modern design principles and packed with essential features for managing users, analytics, and billing. This template provides everything you need to create a professional admin interface that your users will love.",
    price: "$89",
    category: "Dashboard",
    features: [
      "User management system",
      "Advanced analytics dashboard", 
      "Billing and subscription management",
      "Real-time notifications",
      "Dark/light mode toggle",
      "Mobile responsive design",
      "API integration ready",
      "Role-based permissions"
    ],
    gallery: [
      "/images/templates/duck.png",
      "/images/templates/duck.png", 
      "/images/templates/duck.png"
    ],
    demoUrl: "https://demo.example.com/saas-dashboard",
    tags: ["SAAS", "RESPONSIVE", "FREE", "REAL ESTATE"],
    lastUpdated: "2024-01-15"
  },
  {
    id: 2,
    name: "E-commerce Marketplace",
    slug: "ecommerce-marketplace",
    description: "Full-featured marketplace template with product listings, shopping cart, and payment integration.",
    fullDescription: "Launch your online marketplace with this feature-rich e-commerce template. Includes everything from product management to secure payment processing, making it perfect for multi-vendor platforms.",
    price: "$129",
    category: "E-commerce",
    features: [
      "Multi-vendor support",
      "Product catalog management",
      "Shopping cart and checkout",
      "Payment gateway integration",
      "Order tracking system",
      "Review and rating system",
      "Inventory management",
      "SEO optimized"
    ],
    gallery: [
      "/images/templates/duck.png",
      "/images/templates/duck.png",
      "/images/templates/duck.png"
    ],
    demoUrl: "https://demo.example.com/marketplace",
    tags: ["SAAS", "RESPONSIVE", "FREE", "REAL ESTATE"],
    lastUpdated: "2024-01-10"
  },
  {
    id: 3,
    name: "Task Management System",
    slug: "task-management-system",
    description: "Collaborative task management app with kanban boards, team features, and project tracking.",
    fullDescription: "Boost your team's productivity with this comprehensive task management system. Features kanban boards, time tracking, and collaboration tools to keep your projects on track.",
    price: "$79",
    category: "Productivity",
    features: [
      "Kanban board interface",
      "Team collaboration tools",
      "Time tracking",
      "Project templates",
      "File attachments",
      "Due date reminders",
      "Progress reporting",
      "Integration capabilities"
    ],
    gallery: [
      "/images/templates/duck.png",
      "/images/templates/duck.png"
    ],
    demoUrl: "https://demo.example.com/task-management",
    tags: ["SAAS", "RESPONSIVE", "FREE", "REAL ESTATE"],
    lastUpdated: "2024-01-12"
  },
  {
    id: 4,
    name: "Real Estate Platform",
    slug: "real-estate-platform",
    description: "Property listing and management system with search filters, maps, and agent profiles.",
    fullDescription: "Create a professional real estate platform with advanced property search, interactive maps, and comprehensive agent management features.",
    price: "$149",
    category: "Real Estate",
    features: [
      "Property listing management",
      "Advanced search filters",
      "Interactive map integration",
      "Agent profile pages",
      "Virtual tour support",
      "Lead management system",
      "Mortgage calculator",
      "Mobile app ready"
    ],
    gallery: [
      "/images/templates/duck.png",
      "/images/templates/duck.png",
      "/images/templates/duck.png"
    ],
    demoUrl: "https://demo.example.com/real-estate",
    tags: ["SAAS", "RESPONSIVE", "FREE", "REAL ESTATE"],
    lastUpdated: "2024-01-08"
  },
  {
    id: 5,
    name: "Learning Management System",
    slug: "learning-management-system",
    description: "Online course platform with video lessons, quizzes, and student progress tracking.",
    fullDescription: "Build your online education platform with this comprehensive LMS template. Perfect for creating and selling courses with built-in student management.",
    price: "$119",
    category: "Education",
    features: [
      "Course creation tools",
      "Video streaming support",
      "Quiz and assessment system",
      "Student progress tracking",
      "Certificate generation",
      "Discussion forums",
      "Payment integration",
      "Mobile learning app"
    ],
    gallery: [
      "/images/templates/lms-1.jpg",
      "/images/templates/lms-2.jpg"
    ],
    demoUrl: "https://demo.example.com/lms",
    tags: ["SAAS", "RESPONSIVE", "FREE", "REAL ESTATE"],
    lastUpdated: "2024-01-14"
  },
  {
    id: 6,
    name: "Social Network Starter",
    slug: "social-network-starter",
    description: "Social media template with user profiles, posts, comments, and friend connections.",
    fullDescription: "Launch your social media platform with this feature-rich template including user profiles, social feeds, and community features.",
    price: "$99",
    category: "Social",
    features: [
      "User profile management",
      "Social feed and posts",
      "Friend/follow system",
      "Real-time messaging",
      "Photo and video sharing",
      "Group communities",
      "Privacy controls",
      "Content moderation"
    ],
    gallery: [
      "/images/templates/social-1.jpg",
      "/images/templates/social-2.jpg"
    ],
    demoUrl: "https://demo.example.com/social",
    tags: ["social", "community", "networking", "messaging"],
    lastUpdated: "2024-01-11"
  },
  {
    id: 7,
    name: "Job Board Platform",
    slug: "job-board-platform",
    description: "Job listing website with employer dashboards, applicant tracking, and resume management.",
    fullDescription: "Create a professional job board with comprehensive features for both job seekers and employers. Includes applicant tracking and resume management.",
    price: "$109",
    category: "Recruitment",
    features: [
      "Job posting and management",
      "Applicant tracking system",
      "Resume database",
      "Company profiles",
      "Advanced search filters",
      "Application management",
      "Email notifications",
      "Analytics dashboard"
    ],
    gallery: [
      "/images/templates/jobboard-1.jpg",
      "/images/templates/jobboard-2.jpg"
    ],
    demoUrl: "https://demo.example.com/jobs",
    tags: ["jobs", "recruitment", "careers", "hr"],
    lastUpdated: "2024-01-09"
  },
  {
    id: 8,
    name: "Booking & Scheduling",
    slug: "booking-scheduling",
    description: "Appointment booking system for services with calendar integration and payment processing.",
    fullDescription: "Streamline your service business with this comprehensive booking system. Features calendar management, payment processing, and customer management.",
    price: "$89",
    category: "Booking",
    features: [
      "Online appointment booking",
      "Calendar management",
      "Payment processing",
      "Customer database",
      "Automated reminders",
      "Service catalog",
      "Staff scheduling",
      "Reporting tools"
    ],
    gallery: [
      "/images/templates/booking-1.jpg",
      "/images/templates/booking-2.jpg"
    ],
    demoUrl: "https://demo.example.com/booking",
    tags: ["booking", "appointments", "calendar", "services"],
    lastUpdated: "2024-01-13"
  },
  {
    id: 9,
    name: "CRM Dashboard",
    slug: "crm-dashboard", 
    description: "Customer relationship management tool with contact management and sales pipeline tracking.",
    fullDescription: "Manage your customer relationships effectively with this comprehensive CRM template. Track leads, manage contacts, and optimize your sales process.",
    price: "$139",
    category: "Business",
    features: [
      "Contact management",
      "Sales pipeline tracking",
      "Lead scoring system",
      "Email integration",
      "Task automation",
      "Reporting and analytics",
      "Team collaboration",
      "Mobile CRM app"
    ],
    gallery: [
      "/images/templates/crm-1.jpg",
      "/images/templates/crm-2.jpg"
    ],
    demoUrl: "https://demo.example.com/crm",
    tags: ["crm", "sales", "contacts", "business"],
    lastUpdated: "2024-01-07"
  },
  {
    id: 10,
    name: "Portfolio Showcase",
    slug: "portfolio-showcase",
    description: "Beautiful portfolio template for creatives with project galleries and contact forms.",
    fullDescription: "Showcase your creative work with this stunning portfolio template. Perfect for designers, photographers, and creative professionals.",
    price: "$59",
    category: "Portfolio",
    features: [
      "Project gallery system",
      "Image optimization",
      "Contact form integration",
      "Blog functionality",
      "SEO optimization",
      "Social media integration",
      "Testimonials section",
      "Mobile responsive"
    ],
    gallery: [
      "/images/templates/portfolio-1.jpg",
      "/images/templates/portfolio-2.jpg"
    ],
    demoUrl: "https://demo.example.com/portfolio",
    tags: ["portfolio", "creative", "gallery", "showcase"],
    lastUpdated: "2024-01-16"
  },
  {
    id: 11,
    name: "Healthcare Portal",
    slug: "healthcare-portal",
    description: "Patient management system with appointment scheduling, medical records, and telemedicine features.",
    fullDescription: "Modern healthcare platform with comprehensive patient management, telemedicine capabilities, and secure medical record storage.",
    price: "$179",
    category: "Healthcare",
    features: [
      "Patient management system",
      "Appointment scheduling",
      "Electronic health records",
      "Telemedicine platform",
      "Prescription management",
      "Insurance integration",
      "HIPAA compliance",
      "Medical billing"
    ],
    gallery: [
      "/images/templates/healthcare-1.jpg",
      "/images/templates/healthcare-2.jpg"
    ],
    demoUrl: "https://demo.example.com/healthcare",
    tags: ["healthcare", "medical", "telemedicine", "patients"],
    lastUpdated: "2024-01-05"
  },
  {
    id: 12,
    name: "Event Management",
    slug: "event-management",
    description: "Event planning platform with ticketing, attendee management, and venue booking capabilities.",
    fullDescription: "Complete event management solution with ticketing system, attendee tracking, and comprehensive venue management features.",
    price: "$99",
    category: "Events",
    features: [
      "Event creation and management",
      "Ticketing system",
      "Attendee registration",
      "Venue booking",
      "Payment processing",
      "Check-in system",
      "Event analytics",
      "Marketing tools"
    ],
    gallery: [
      "/images/templates/events-1.jpg",
      "/images/templates/events-2.jpg"
    ],
    demoUrl: "https://demo.example.com/events",
    tags: ["events", "ticketing", "venues", "conferences"],
    lastUpdated: "2024-01-06"
  },
  {
    id: 13,
    name: "Fitness Tracker",
    slug: "fitness-tracker",
    description: "Workout and nutrition tracking app with progress charts, meal planning, and community features.",
    fullDescription: "Comprehensive fitness platform with workout tracking, nutrition planning, and social features to help users achieve their health goals.",
    price: "$69",
    category: "Health & Fitness",
    features: [
      "Workout tracking",
      "Nutrition logging",
      "Progress analytics",
      "Meal planning",
      "Exercise library",
      "Social challenges",
      "Personal trainer chat",
      "Goal setting"
    ],
    gallery: [
      "/images/templates/fitness-1.jpg",
      "/images/templates/fitness-2.jpg"
    ],
    demoUrl: "https://demo.example.com/fitness",
    tags: ["fitness", "health", "workouts", "nutrition"],
    lastUpdated: "2024-01-04"
  },
  {
    id: 14,
    name: "Inventory Management",
    slug: "inventory-management",
    description: "Stock control system with barcode scanning, supplier management, and automated reordering.",
    fullDescription: "Advanced inventory management system with real-time stock tracking, supplier integration, and automated reordering capabilities.",
    price: "$119",
    category: "Business",
    features: [
      "Real-time stock tracking",
      "Barcode scanning",
      "Supplier management",
      "Automated reordering",
      "Warehouse management",
      "Purchase order system",
      "Inventory reports",
      "Multi-location support"
    ],
    gallery: [
      "/images/templates/inventory-1.jpg",
      "/images/templates/inventory-2.jpg"
    ],
    demoUrl: "https://demo.example.com/inventory",
    tags: ["inventory", "warehouse", "stock", "management"],
    lastUpdated: "2024-01-03"
  },
  {
    id: 15,
    name: "Newsletter Platform",
    slug: "newsletter-platform",
    description: "Email marketing tool with subscriber management, campaign analytics, and template builder.",
    fullDescription: "Professional email marketing platform with advanced segmentation, automation, and comprehensive analytics for your campaigns.",
    price: "$89",
    category: "Marketing",
    features: [
      "Email template builder",
      "Subscriber management",
      "Campaign automation",
      "A/B testing",
      "Analytics dashboard",
      "List segmentation",
      "Delivery optimization",
      "API integrations"
    ],
    gallery: [
      "/images/templates/newsletter-1.jpg",
      "/images/templates/newsletter-2.jpg"
    ],
    demoUrl: "https://demo.example.com/newsletter",
    tags: ["email", "marketing", "newsletters", "campaigns"],
    lastUpdated: "2024-01-02"
  },
  {
    id: 16,
    name: "Project Collaboration",
    slug: "project-collaboration",
    description: "Team collaboration workspace with file sharing, video calls, and project timelines.",
    fullDescription: "Complete project collaboration platform with real-time communication, file sharing, and comprehensive project management tools.",
    price: "$109",
    category: "Productivity",
    features: [
      "Team workspaces",
      "File sharing and storage",
      "Video conferencing",
      "Project timelines",
      "Real-time collaboration",
      "Document editing",
      "Task assignment",
      "Progress tracking"
    ],
    gallery: [
      "/images/templates/collaboration-1.jpg",
      "/images/templates/collaboration-2.jpg"
    ],
    demoUrl: "https://demo.example.com/collaboration",
    tags: ["collaboration", "teams", "projects", "workspace"],
    lastUpdated: "2024-01-01"
  }
]

// Helper function to find template by slug
export function getTemplateBySlug(slug: string): Template | undefined {
  return templates.find(template => template.slug === slug)
}

// Helper function to get related templates (same category)
export function getRelatedTemplates(templateId: number, limit: number = 3): Template[] {
  const template = templates.find(t => t.id === templateId)
  if (!template) return []
  
  return templates
    .filter(t => t.id !== templateId && t.category === template.category)
    .slice(0, limit)
} 