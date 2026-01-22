const rawUrl = process.env.SITE_URL || "http://localhost:8080";

export default {
  title: process.env.SITE_TITLE || "",
  url: rawUrl.endsWith("/") ? rawUrl.slice(0, -1) : rawUrl,
};
