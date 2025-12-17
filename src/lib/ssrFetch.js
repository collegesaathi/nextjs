import Listing from "@/pages/api/Listing";

export async function fetchDetails(context, type) {
    try {
        const { slug } = context.query;

        if (!slug) {
            return { notFound: true };
        }

        const main = new Listing();
        let res;

        switch (type) {
            case "course":
                res = await main.CourseGet(slug);
                break;

            case "university":
                res = await main.UniveristyGet(slug);
                break;

            default:
                return { notFound: true };
        }

        if (res?.data?.status && res?.data?.data) {
            return {
                props: {
                    data: res.data.data,
                },
            };
        }

        return { notFound: true };
    } catch (error) {
        console.error("SSR Error:", error);
        return { notFound: true };
    }
}
