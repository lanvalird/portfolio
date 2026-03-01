import { SOCIAL_LINKS } from "@/shared/config/social-links";
import { Button } from "@/shared/components/ui/button";

export const dynamic = "force-static";
export const revalidate = 86_400; // 24 часа

export default function LinksPage() {
  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* Заголовок */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">lanvalird</h1>
          <p className="text-muted-foreground">Опенсорс-разработчик · Ссылки на проекты и соцсети</p>
        </div>

        {/* Сетка ссылок (только текст) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SOCIAL_LINKS.map((link) => (
            <Button
              key={link.id}
              variant="outline"
              className="h-auto py-4 px-6 hover:scale-105 transition-transform"
              asChild
            >
              <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                {link.name}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </main>
  );
}
