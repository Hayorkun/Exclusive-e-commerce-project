import { Star } from "lucide-react";

const displayStar = (rating) => {
  const count = Math.round(rating);
  return (
    <div className="flex items-center justify-start">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={12}
          strokeWidth={0}
          className={i < count ? "fill-amber-300" : "fill-gray-300"}
        />
      ))}
    </div>
  );
};

export default displayStar;