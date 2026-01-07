import Listing from "@/pages/api/Listing";

export async function fetchDetails(context, type) {
  try {
    const query = context?.query || {};
    const params = context?.params || {};
console.log("SSR TYPE:", type);
console.log("QUERY:", context.query);
console.log("PARAMS:", context.params);

    const universitySlug =
      query?.universitySlug || params?.universitySlug || null;

    const courseSlug =
      query?.courseSlug || params?.courseSlug || null;

    const specializationSlug =
      query?.specializationSlug || params?.specializationSlug || null;

    const main = new Listing();
    let res;

    switch (type) {
      case "course":
        if (!courseSlug) return { notFound: true };
        res = await main.CourseGet(courseSlug.trim());
        break;

      case "university":
        if (!universitySlug) return { notFound: true };
        res = await main.UniveristyGet(universitySlug.trim());
        break;

      case "specialisation":
        if (!specializationSlug) return { notFound: true };
        res = await main.SpecializationGet(specializationSlug.trim());
        break;

      default:
        return { notFound: true };
    }

    console.log("SSR Response Status:", res?.status);
    console.log("SSR Data:", res?.data);

    // If API returned proper data
    if (res?.data?.data) {
      return {
        props: {
          data: res.data.data,
        },
      };
    }

    // If API format is different
    if (res?.data) {
      return {
        props: {
          data: res.data,
        },
      };
    }

    // If empty
    return { notFound: true };
  } catch (err) {
    console.error("SSR Error:", err?.message || err);
    return { notFound: true };
  }
}
