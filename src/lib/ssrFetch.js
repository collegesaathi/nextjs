import Listing from "@/pages/api/Listing";

export async function fetchDetails(context, type) {
    try {
        const { slug } = context.query;
        if (!slug) return { notFound: true };

        const main = new Listing();
        let res;

        if (type === "course") {
            res = await main.CourseGet(slug);
        } else if (type === "university") {
            res = await main.UniveristyGet(slug);
        } else {
            return { notFound: true };
        }

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
