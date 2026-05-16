type KeywordCarouselProps = {
  items: string[];
  className?: string;
  itemClassName?: string;
  compact?: boolean;
};

export function KeywordCarousel({
  items,
  className = "",
  itemClassName = "",
  compact = false,
}: KeywordCarouselProps) {
  const repeated = [...items, ...items, ...items];

  return (
    <div className={`keyword-loop-shell ${className}`}>
      <div className={`keyword-loop-track ${compact ? "keyword-loop-track-compact" : ""}`}>
        {repeated.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className={`keyword-loop-item ${itemClassName}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
