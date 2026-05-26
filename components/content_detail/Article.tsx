import type { ANNOUNCEMENT, NEWS } from "@/lib/types/DataTypes";
import { isNEWS } from "@/lib/types/DataTypes";
import { NewsBadge } from "../NewsBadge";
import ArrowLink from "../ArrowLink";
import Image from "next/image";

export function Article({ article }: { article: ANNOUNCEMENT | NEWS }) {
  const news = isNEWS(article) ? article : null;

  return (
    <article>
      {/* Date + NewsBadge */}
      <div className="mb-4 flex items-center gap-3">
        <span className="bg-primary block h-0.5 w-7 rounded-full" />
        <span className="text-primary text-xs font-bold tracking-widest uppercase">
          {article.date}
        </span>
        {news?.type && <NewsBadge BADGE_NEWS_TYPE={news.type} />}
      </div>

      {/* Title */}
      <h1 className="text-foreground mb-6 font-serif text-4xl leading-tight font-extrabold tracking-tight md:text-5xl">
        {article.title}
      </h1>

      {/* Lead / highlighted quote */}
      <div className="border-primary bg-background-gray text-foreground mb-7 rounded-r-xl border-l-4 px-5 py-4 text-base leading-relaxed">
        {article.description}
      </div>

      {/* TODO: Bu Image üzerinde çalış. Slug değeri değiştirilecek */}
      {/* Hero image placeholder */}
      <div className="mb-7 flex overflow-hidden shadow-lg">
        {article.headline_image && (
          <Image
            src={article.headline_image}
            alt={article.title}
            loading="eager"
            className="rounded-xl object-cover object-center"
            sizes="(max-width: 768px) 100vw, 33vw"
            width={640}
            height={640}
          />
        )}
      </div>

      {/* Body */}
      <div className="space-y-4">
        {article.mainText.map((paragraph, i) => (
          <p key={i} className="text-foreground/85 text-base leading-[1.8]">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Divider + Back link */}
      <hr className="border-border my-8" />
      <ArrowLink text={"Geri Dön"} href="/news" isArrowLeft />
    </article>
  );
}
