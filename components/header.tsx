import { SearchBar } from "@/components/search-bar"
import { siteConfig } from "@/lib/site-config"

interface HeaderProps {
  onSearch?: (query: string) => void
}

export function Header({ onSearch }: HeaderProps) {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold">{siteConfig.site.name}</h1>
            {siteConfig.features.search && onSearch && (
              <SearchBar 
                onSearch={onSearch} 
                placeholder={siteConfig.search.placeholder}
                className="w-64"
              />
            )}
          </div>
          <nav>
            <ul className="flex space-x-6">
              {siteConfig.navigation.main.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    className="text-sm font-medium hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
} 