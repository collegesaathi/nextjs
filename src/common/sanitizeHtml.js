export function sanitizeHtml(htmlString = "") {
  if (!htmlString) return "";
  return htmlString
    .replace(/&nbsp;/g, " ")   // non-breaking space → normal space
    .replace(/_+/g, "_");      // optional: multiple underscores normalize
}
