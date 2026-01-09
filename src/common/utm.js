
export function getUTMParams() {
  if (typeof window === "undefined") return {};
 
  const params = new URLSearchParams(window.location.search);
 
  return {
    utm_source: params.get("utm_source") || "Direct",
    utm_medium: params.get("utm_medium") || "",
    utm_campaign: params.get("utm_campaign") || "Website pages",
    utm_content: params.get("utm_content") || "",
    utm_term: params.get("utm_term") || ""
  };
}