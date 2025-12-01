import { MdOutlineStarPurple500, MdStarHalf, MdStarBorder } from "react-icons/md";

function StarRating({ rating = 0 }) {

    const full = Math.floor(rating); 
    const decimal = rating % 1;

    let totalFull = full;
    let half = 0;

    // ⭐ Case 1: decimal < 0.5 → force 0.5 result
    if (decimal > 0 && decimal < 0.5) {
        half = 1;                         // half star
    }
    // ⭐ Case 2: decimal === 0.5 → show 3.5 (half)
    else if (decimal === 0.5) {
        half = 1;
    }
    // ⭐ Case 3: decimal > 0.5 → next full star
    else if (decimal > 0.5) {
        totalFull = full + 1;
    }

    const empty = 5 - (totalFull + half);

    return (
        <div className="inline-flex items-center gap-[1px]">

            {/* Full Stars */}
            {[...Array(totalFull)].map((_, i) => (
                <MdOutlineStarPurple500 key={`f-${i}`} size={22} className="text-[#c1ac15]" />
            ))}

            {/* Half Star */}
            {half === 1 && <MdStarHalf size={22} className="text-[#c1ac15]" />}

            {/* Gray Stars */}
            {[...Array(empty)].map((_, i) => (
                <MdStarBorder key={`e-${i}`} size={22} className="text-gray-300" />
            ))}
        </div>
    );
}

export default StarRating;
