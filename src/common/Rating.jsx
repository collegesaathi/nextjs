import { MdOutlineStarPurple500, MdStarHalf } from "react-icons/md";

function StarRating({ rating = 0, size = 24 }) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.25 && rating % 1 <= 0.75;

    return (
        <div className="inline-flex items-center gap-[1px]">
            {[...Array(fullStars)].map((_, index) => (
                <MdOutlineStarPurple500
                    key={`full-${index}`}
                    size={size}
                    className="text-[#FBAD33]"
                />
            ))}

            {hasHalfStar && (
                <MdStarHalf size={size} className="text-[#FBAD33]" />
            )}
        </div>
    );
}

export default StarRating;
