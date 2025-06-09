# Supabase Setup Guide

This guide will help you set up Supabase for your bubble templates directory project.

## 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new account or sign in
2. Click "New Project"
3. Fill in your project details:
   - Name: `bubble-templates` (or your preferred name)
   - Database Password: (generate a strong password)
   - Region: Choose the closest to your users
4. Click "Create new project"

## 2. Set Up Environment Variables

Create a `.env.local` file in your project root with the following variables:

```bash
# Get these from your Supabase project settings
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

To find these values:
1. Go to your Supabase project dashboard
2. Click on "Settings" in the sidebar
3. Click on "API"
4. Copy the "Project URL" and "anon public" key

## 3. Create the Database Schema

1. In your Supabase dashboard, go to the "SQL Editor"
2. Create a new query
3. Copy and paste the contents of `supabase-schema.sql`
4. Click "Run" to execute the schema

This will create:
- `templates` table with all necessary columns
- Indexes for better performance
- Row Level Security policies
- Search functionality with full-text search

## 4. Migrate Your Existing Data

To migrate your existing template data to Supabase:

1. Make sure your environment variables are set up correctly
2. In your project, temporarily uncomment the last line in `lib/migrate-data.ts`:
   ```typescript
   migrateTemplatesToSupabase()
   ```
3. Run the development server: `npm run dev`
4. Visit any page to trigger the migration
5. Check your Supabase dashboard > Table Editor > templates to see the migrated data
6. Comment out the migration line again to prevent duplicate entries

## 5. Verify Setup

1. Start your development server: `npm run dev`
2. Visit `http://localhost:3000`
3. You should see your templates loaded from Supabase
4. Try searching to test the search functionality

## 6. Optional: Enable Real-time (for future features)

If you plan to add real-time features:

1. Go to Database > Replication in your Supabase dashboard
2. Enable replication for the `templates` table

## Database Schema

The templates table includes:

- `id`: Unique identifier (TEXT, Primary Key)
- `name`: Template name (TEXT, Required)
- `description`: Short description (TEXT, Required)
- `full_description`: Detailed description (TEXT, Required)
- `category`: Template category (TEXT, Required)
- `tags`: Array of tags (TEXT[], Optional)
- `price`: Template price (DECIMAL, Required)
- `demo_url`: Demo URL (TEXT, Optional)
- `purchase_url`: Purchase URL (TEXT, Optional)
- `last_updated`: Last update date (TEXT, Required)
- `features`: Array of features (TEXT[], Optional)
- `gallery`: Array of image URLs (TEXT[], Optional)
- `created_at`: Creation timestamp (TIMESTAMP, Auto)
- `updated_at`: Update timestamp (TIMESTAMP, Auto)

## Security

The setup includes:
- Row Level Security (RLS) enabled
- Public read access to templates
- Authenticated user access for modifications (you can customize this)

## Next Steps

- Consider setting up Supabase Storage for template images
- Implement user authentication if you need admin features
- Set up automated backups in your Supabase project settings 