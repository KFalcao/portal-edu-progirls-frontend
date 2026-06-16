import highlightMainBg from "../../assets/highlight-main-bg.png";
import type { Highlight } from "./highlightsTypes";

type HighlightCardProps = {
  highlight: Highlight;
  size?: "large" | "compact";
};

const variantStyles = {
  lime: {
    mainCard: "border-lime-card",
    compactCard: "highlight-card-compact-lime",
    compactCategoryBadge:
      "flex h-[24px] w-[111px] items-center justify-center rounded-[100px] bg-lime-card font-ibm-plex-sans text-[14px] font-[500] leading-[100%] tracking-normal text-neutral-900",
    compactAreaBadge:
      "flex h-[24px] w-[74px] items-center justify-center rounded-[100px] border border-lime-card font-ibm-plex-sans text-[14px] font-[500] leading-[100%] tracking-[0.04em] text-lime-card capitalize",
    date: "text-lime-card",
  },
  purple: {
    mainCard: "border-lime-card",
    compactCard: "highlight-card-compact-purple",
    compactCategoryBadge:
      "flex h-[24px] w-[111px] items-center justify-center rounded-[100px] bg-highlight-purple-border font-ibm-plex-sans text-[14px] font-[500] leading-[100%] tracking-normal text-text",
    compactAreaBadge:
      "flex h-[24px] w-[74px] items-center justify-center rounded-[100px] border border-highlight-purple-border font-ibm-plex-sans text-[14px] font-[500] leading-[100%] tracking-[0.04em] text-highlight-purple-border capitalize",
    date: "text-highlight-purple-border",
  },
};

export function HighlightCard({
  highlight,
  size = "compact",
}: HighlightCardProps) {
  const styles = variantStyles[highlight.variant];
  const isLarge = size === "large";

  return (
    <article
      className={[
        "relative flex overflow-hidden border-[1.2px]",
        isLarge ? styles.mainCard : styles.compactCard,
        isLarge
          ? "h-[489px] w-full max-w-[650px] flex-col rounded-[28px] p-0"
          : "h-[151px] w-full rounded-[28px] px-[25px] pt-[24px] lg:w-[498px]",
      ].join(" ")}
    >
      {isLarge && (
        <>
          <div
            className="absolute inset-0 rounded-[28px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${highlightMainBg})` }}
          />

          <div className="highlight-main-overlay absolute inset-0 rounded-[28px]" />
        </>
      )}

      <div
        className={
          isLarge
            ? "relative z-10 flex h-full flex-col justify-end px-[31px] pb-[31px]"
            : "relative z-10"
        }
      >
        <div
          className={
            isLarge
              ? "mb-[26px] flex flex-wrap gap-[13px]"
              : "mb-[10px] flex flex-wrap gap-[10px]"
          }
        >
          <span
            className={
              isLarge
                ? "flex h-[32px] w-[117px] items-center justify-center rounded-[100px] border border-lime-card font-ibm-plex-sans text-[18px] font-[500] leading-[100%] tracking-normal text-lime-card"
                : styles.compactCategoryBadge
            }
          >
            {highlight.category}
          </span>

          <span
            className={
              isLarge
                ? "flex h-[32px] w-[81px] items-center justify-center rounded-[100px] bg-lime-card font-ibm-plex-sans text-[18px] font-[500] leading-[100%] tracking-normal text-neutral-850"
                : styles.compactAreaBadge
            }
          >
            {highlight.area}
          </span>
        </div>

        <h3
          className={[
            "font-ibm-plex-sans text-text",
            isLarge
              ? "w-full max-w-[584px] text-[24px] font-[500] leading-[100%] tracking-normal"
              : "h-[42px] w-full max-w-[448px] overflow-hidden text-[16px] font-[500] leading-[100%] tracking-normal capitalize",
          ].join(" ")}
        >
          {highlight.title}
        </h3>

        {isLarge && (
          <p className="mt-[20px] w-full max-w-[584px] font-ibm-plex-sans text-[16px] font-[400] leading-[100%] tracking-normal text-neutral-200">
            {highlight.description}
          </p>
        )}

        <time
          className={
            isLarge
              ? "mt-[31px] block font-space-mono text-[12px] font-[400] uppercase leading-[100%] tracking-[0.12em] text-lime-card"
              : [
                  "mt-[13px] block font-space-mono text-[12px] font-[400] uppercase leading-[100%] tracking-[0.12em]",
                  styles.date,
                ].join(" ")
          }
        >
          {highlight.date}
        </time>
      </div>
    </article>
  );
}