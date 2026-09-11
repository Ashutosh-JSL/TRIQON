import { Star } from "lucide-react";

interface RatingBadgeProps {
  rating?: string;
  reviews?: string;
}

export default function RatingBadge({
  rating = "4.9/5",
  reviews = "18,000+ Learner Ratings",
}: RatingBadgeProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <div
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#EDE9FE]"
        aria-hidden="true"
      >
        <Star className="h-4 w-4 fill-[#6D4AFF] text-[#6D4AFF]" />
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-bold text-gray-900 sm:text-base">
          {rating}
        </span>

        <span
          className="text-sm tracking-wide text-orange-500"
          aria-label="5 out of 5 stars"
        >
          ★★★★★
        </span>

        <span className="text-sm text-gray-500 sm:text-base">
          {reviews}
        </span>
      </div>
    </div>
  );
}