export type MediumPost = {
  title: string;
  link: string;
  pubDate: string;
  content: string;
  categories: string[];
  thumbnail?: string;
};

const envFeaturedPostLinks = [
  import.meta.env.VITE_MEDIUM_FEATURED_POST_1,
  import.meta.env.VITE_MEDIUM_FEATURED_POST_2,
  import.meta.env.VITE_MEDIUM_FEATURED_POST_3,
]
  .map((link) => (typeof link === "string" ? link.trim() : ""))
  .filter((link): link is string => Boolean(link));

// select featured posts and username
export const MEDIUM_CONFIG = {
  username: (import.meta.env.VITE_MEDIUM_USERNAME || "yourusername").trim(),
  featuredPostLinks:
    envFeaturedPostLinks.length > 0
      ? envFeaturedPostLinks
      : [
          "https://medium.com/@yourusername/first-post-slug",
          "https://medium.com/@yourusername/second-post-slug",
          "https://medium.com/@yourusername/third-post-slug",
        ],
  featuredCount: 3,
  devlogTags: ["devlog", "development-log", "logbook", "journey"],
};

type Rss2JsonItem = {
  title?: string;
  link?: string;
  pubDate?: string;
  content?: string;
  description?: string;
  categories?: string[];
  thumbnail?: string;
};

type Rss2JsonResponse = {
  status: "ok" | "error";
  items?: Rss2JsonItem[];
  message?: string;
};

const normalizePost = (item: Rss2JsonItem): MediumPost | null => {
  if (!item.title || !item.link || !item.pubDate) {
    return null;
  }

  return {
    title: item.title,
    link: item.link,
    pubDate: item.pubDate,
    content: item.content || item.description || "",
    categories: (item.categories || []).map((category) =>
      category.toLowerCase().trim()
    ),
    thumbnail: item.thumbnail,
  };
};

export const stripHtml = (value: string) => {
  return value.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
};

export const isDevlogPost = (post: MediumPost) => {
  const title = post.title.toLowerCase();
  if (title.includes("devlog")) {
    return true;
  }

  const configuredDevlogTags = MEDIUM_CONFIG.devlogTags.map((tag) =>
    tag.toLowerCase().trim()
  );

  return post.categories.some((category) =>
    configuredDevlogTags.includes(category)
  );
};

export const fetchMediumPosts = async (username: string) => {
  if (!username || username.trim() === "" || username === "yourusername") {
    throw new Error(
      "Medium username is not configured. Set VITE_MEDIUM_USERNAME in .env or MEDIUM_CONFIG.username in src/lib/medium.ts."
    );
  }

  const feedUrl = `https://medium.com/feed/@${username}`;
  const endpoint = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`;

  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error("Failed to fetch Medium feed");
  }

  const data = (await response.json()) as Rss2JsonResponse;
  if (data.status !== "ok" || !data.items) {
    throw new Error(data.message || "Invalid Medium feed response");
  }

  return data.items
    .map(normalizePost)
    .filter((post): post is MediumPost => Boolean(post))
    .sort(
      (leftPost, rightPost) =>
        new Date(rightPost.pubDate).getTime() -
        new Date(leftPost.pubDate).getTime()
    );
};

export const getFeaturedPosts = (posts: MediumPost[]) => {
  const preferredPosts = MEDIUM_CONFIG.featuredPostLinks
    .map((link) => posts.find((post) => post.link === link))
    .filter((post): post is MediumPost => Boolean(post));

  if (preferredPosts.length >= MEDIUM_CONFIG.featuredCount) {
    return preferredPosts.slice(0, MEDIUM_CONFIG.featuredCount);
  }

  const fallbackPosts = posts.filter(
    (post) => !isDevlogPost(post) && !preferredPosts.some((p) => p.link === post.link)
  );

  return [...preferredPosts, ...fallbackPosts].slice(0, MEDIUM_CONFIG.featuredCount);
};
