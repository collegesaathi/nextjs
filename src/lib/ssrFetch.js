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

        }
        else if (type === "specialisation") {
            res = await main.SpecializationGet(slug);

        }
        else {
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


// Add this to your fetcher file
export async function fetchComparisonDetails(context) {
    try {
        const { slug } = context.query;

        if (!slug) return { notFound: true };

        const main = new Listing();

        // HUME LOOP NAHI CHALANA! 
        // Backend ko poora "uni1-vs-uni2" slug ek baar mein bhej do
        const response = await main.CompareUniversities(slug);

        // Debug karne ke liye check karein
        console.log("Backend Response:", response.data);

        if (!response.data || !response.data.status) {
            return { notFound: true };
        }

        return {
            props: {
                // Backend se { universities: [], count: 0 } aa raha hai
                compareData: response.data, 
            },
        };
    } catch (err) {
        console.error("SSR Comparison Error:", err.message);
        return { notFound: true }; // Agar API fail hui toh 404 dikhega
    }
}
