import Listing from "@/pages/api/Listing";

export async function fetchDetails(context, type) {
    try {
        const { universitySlug, courseSlug, specializationSlug } = context.query;
        console.log("context.query", context.query.specializationSlug)
        const main = new Listing();
        let res;
        if (type === "course") {
            if (!courseSlug) return { notFound: true };
            res = await main.CourseGet(courseSlug);

        } else if (type === "university") {
            if (!universitySlug) return { notFound: true };
            res = await main.UniveristyGet(universitySlug);

        } else if (type === "specialisation") {
            if (!specializationSlug) return { notFound: true };
            res = await main.SpecializationGet(specializationSlug);
        } else {
            return { notFound: true };
        }

        console.log("SSR Response:", res);

        if (res?.data) {
            return {
                props: {
                    data: res.data.data || res.data,
                },
            };
        }

        return { notFound: true };
    } catch (err) {
        console.error("SSR Error:", err.message);
        return { notFound: true };
    }
}
