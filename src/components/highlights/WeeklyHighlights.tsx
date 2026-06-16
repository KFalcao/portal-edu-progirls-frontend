import { useState } from "react";
import { HighlightCard } from "./HighlightCard";
import { weeklyHighlights } from "./highlightsData";

const HIGHLIGHTS_LINK = "/conteudos?tag=destaque";

export function WeeklyHighlights() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const mainHighlight = weeklyHighlights[0];
  const sideHighlights = weeklyHighlights.slice(1);

  return (
    <section className="relative bg-transparent py-12 md:py-20 lg:py-[86px]">
      <div
        className="weekly-highlights-line weekly-highlights-line--top weekly-highlights-line--lime"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-[1176px] px-5 md:px-8 lg:px-0">
        <header className="mb-8 flex items-center justify-between gap-4 md:mb-10">
          <h2 className="font-ibm-plex-sans text-[20px] font-[400] leading-[100%] tracking-[0.1em] text-text sm:text-[24px] md:text-[28px]">
            Destaques da{" "}
            <span className="font-[600] text-lime">Semana</span>
          </h2>

          <a
            href={HIGHLIGHTS_LINK}
            className="font-space-mono text-[12px] font-[400] uppercase leading-[100%] tracking-[0.09em] text-purple-link sm:text-[14px] md:text-[18px]"
          >
            Ver todos →
          </a>
        </header>

        {/* Desktop */}
        <div className="hidden lg:grid lg:grid-cols-[650px_498px] lg:gap-[28px]">
          <HighlightCard highlight={mainHighlight} size="large" />

          <div className="grid gap-[18px]">
            {sideHighlights.map((highlight) => (
              <HighlightCard
                key={highlight.id}
                highlight={highlight}
                size="compact"
              />
            ))}
          </div>
        </div>

        {/* Mobile/tablet */}
        <div className="lg:hidden">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeSlideIndex * 100}%)` }}
            >
              <div className="min-w-full">
                <HighlightCard highlight={mainHighlight} size="large" />
              </div>

              <div className="min-w-full">
                <div className="grid gap-[26px]">
                  {sideHighlights.map((highlight) => (
                    <HighlightCard
                      key={highlight.id}
                      highlight={highlight}
                      size="compact"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {[0, 1].map((slideIndex) => (
              <button
                key={slideIndex}
                type="button"
                aria-label={`Mostrar grupo de destaques ${slideIndex + 1}`}
                onClick={() => setActiveSlideIndex(slideIndex)}
                className={[
                  "h-3 w-3 rounded-full border border-lime transition-colors",
                  activeSlideIndex === slideIndex ? "bg-lime" : "bg-transparent",
                ].join(" ")}
              />
            ))}
          </div>
        </div>
      </div>

      <div
        className="weekly-highlights-line weekly-highlights-line--bottom weekly-highlights-line--purple"
        aria-hidden="true"
      />
    </section>
  );
}