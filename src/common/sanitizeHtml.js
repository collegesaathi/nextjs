export function sanitizeHtml(htmlString = "") {
  if (!htmlString) return "";

  return htmlString
    // 1️⃣ &nbsp; → normal space
    .replace(/&nbsp;/g, " ")

    // 2️⃣ Remove empty <p> or <p><br></p>
    .replace(/<p>(\s|&nbsp;|<br\s*\/?>)*<\/p>/gi, "")

    // 3️⃣ Remove multiple <br>
    .replace(/(<br\s*\/?>\s*){2,}/gi, "<br>")

    // 4️⃣ Trim extra whitespace
    .trim();
}
