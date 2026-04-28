import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/components/ui/button";
import { Badge } from "@/shared/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

interface Props {
  title: string;
  content: string;
  badges?: string[];
  backgroundImageSrc?: string;
  backgroundImageAlt?: string;
  link?: string;
  linkText?: string;
}

export function InformationCard({
  className,
  title,
  content,
  link,
  linkText,
  badges,
  backgroundImageSrc,
  backgroundImageAlt,
  ...props
}: React.ComponentProps<"div"> & Props) {
  return (
    <Card
      className={cn("overflow-hidden", className)}
      style={{
        background:
          "radial-gradient(closest-corner at 50% 2em, color-mix(in oklab,var(--primary)40%,transparent), transparent 30%",
      }}
      {...props}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <div className="flex w-full flex-wrap justify-center mt-4 -mb-2 gap-2">
          {badges &&
            badges.slice(0, 3).map((badge) => (
              <Badge key={badge} variant="outline">
                {badge}
              </Badge>
            ))}
        </div>
      </CardHeader>
      <CardContent className="h-full relative">
        <CardDescription>{content}</CardDescription>
        {backgroundImageSrc && backgroundImageAlt && (
          <Image
            src={backgroundImageSrc}
            alt={backgroundImageAlt}
            width={400}
            height={225}
            className="absolute inset-0 -z-900 aspect-video cover opacity-25 mt-4 bg-cover bg-center"
          />
        )}
      </CardContent>
      {link && (
        <CardFooter>
          <Button className="w-full" variant={"secondary"} asChild>
            <Link href={link}>{linkText || "→ :continue"}</Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
