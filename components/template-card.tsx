import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Template } from "@/lib/templates-data"
import { siteConfig } from "@/lib/site-config"

interface TemplateCardProps {
  template: Template
}

export function TemplateCard({ template }: TemplateCardProps) {
  return (
    <Link href={`/template/${template.slug}`} className="block group">
      <Card className="h-full flex flex-col shadow-none border transition-all duration-200 template-card cursor-pointer">
        <CardHeader>
          <CardTitle className="text-lg group-hover:text-gray-600 transition-colors">
            {template.name}
          </CardTitle>
          {siteConfig.templates.card.showDescription && (
            <CardDescription className="mt-2">
              {template.description}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent className="flex-grow">
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          {siteConfig.templates.card.showPrice && (
            <span className="text-xl">
              {siteConfig.templates.currency}{template.price.replace('$', '')}
            </span>
          )}
          <Button 
            size={siteConfig.templates.card.buttonSize}
            className="bg-black text-white hover:bg-gray-800 pointer-events-none"
          >
            {siteConfig.templates.card.buttonText}
          </Button>
        </CardFooter>
      </Card>
    </Link>
  )
} 