import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ExternalLink, X } from "lucide-react";
import {
  fetchMediumPosts,
  getPostExcerpt,
  isDevlogPost,
  MEDIUM_CONFIG,
  type MediumPost,
} from "@/lib/medium";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Footer } from "@/components/portfolio/Footer";
import { CustomCursor } from "@/components/portfolio/CustomCursor";

const BlogPostCard = ({
  post,
  typeLabel,
  onPreview,
}: {
  post: MediumPost;
  typeLabel: "BLOG" | "DEVLOG";
  onPreview: (post: MediumPost) => void;
}) => {
  return (
    <article className="modern-card sheen-hover bg-[#050506] p-[clamp(1rem,1.6vw,2rem)] transition-all duration-500">
      {post.thumbnail && (
        <div className="mb-6 overflow-hidden border border-white/10 bg-black/30">
          <img
            src={post.thumbnail}
            alt={post.title}
            className="aspect-video w-full object-cover opacity-90"
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        </div>
      )}

      <div className="flex items-center justify-between mb-5">
        <span className="px-2 py-1 border border-white/10 text-[10px] font-mono-display text-white/45 tracking-wider">
          {typeLabel}
        </span>
        <span className="text-[10px] font-mono-display text-white/35 tracking-wider">
          {new Date(post.pubDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </span>
      </div>

      <h3 className="mb-4 text-[clamp(1.05rem,1.15vw,1.35rem)] font-bold leading-snug text-white">{post.title}</h3>

      <p className="mb-7 text-[clamp(0.8rem,0.65vw,0.95rem)] leading-relaxed text-white/55 line-clamp-4">
        {getPostExcerpt(post.content, 190)}
      </p>

      <div className="pt-6 border-t border-white/5 flex items-center justify-between">
        <span className="text-white/35 text-xs">
          {post.categories.slice(0, 2).join(" • ") || typeLabel.toLowerCase()}
        </span>
        <div className="flex items-center gap-3">
          <button
            type="button"
            data-cursor-preview="Open Quick Preview"
            className="text-white/50 hover:text-white text-sm inline-flex items-center gap-1 transition-colors"
            onClick={() => onPreview(post)}
          >
            Quick Preview
          </button>
          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-preview="Read On Medium"
            className="text-white/50 hover:text-white text-sm inline-flex items-center gap-1 transition-colors"
          >
            Read On Medium
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </article>
  );
};

const BlogPage = () => {
  const [previewPost, setPreviewPost] = useState<MediumPost | null>(null);
  const { data: posts = [], isLoading, isError, error } = useQuery({
    queryKey: ["medium-posts", MEDIUM_CONFIG.username],
    queryFn: () => fetchMediumPosts(MEDIUM_CONFIG.username),
    staleTime: 1000 * 60 * 15,
  });

  const { blogPosts, devlogPosts } = useMemo(() => {
    const devlog = posts.filter((post) => isDevlogPost(post));
    const blog = posts.filter((post) => !isDevlogPost(post));
    return { blogPosts: blog, devlogPosts: devlog };
  }, [posts]);

  useEffect(() => {
    const siteUrl = window.location.origin;
    const canonicalUrl = `${siteUrl}/blog`;
    const defaultTitle = "Parsa Ghaei | Game Developer & Designer";

    const upsertMeta = (selector: string, attributes: Record<string, string>) => {
      let element = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement("meta");
        document.head.appendChild(element);
      }
      Object.entries(attributes).forEach(([key, value]) => {
        element?.setAttribute(key, value);
      });
    };

    const upsertCanonical = (url: string) => {
      let element = document.head.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", "canonical");
        document.head.appendChild(element);
      }
      element.setAttribute("href", url);
    };

    document.title = "Blog & Devlog | Parsa Ghaei";
    upsertMeta("meta[name='description']", {
      name: "description",
      content:
        "Blog and Devlog posts by Parsa Ghaei, loaded from Medium. Read technical writeups, devlogs, and game development insights.",
    });
    upsertMeta("meta[property='og:title']", {
      property: "og:title",
      content: "Blog & Devlog | Parsa Ghaei",
    });
    upsertMeta("meta[property='og:description']", {
      property: "og:description",
      content:
        "Latest Blog and Devlog posts by Parsa Ghaei, synced from Medium.",
    });
    upsertMeta("meta[property='og:url']", {
      property: "og:url",
      content: canonicalUrl,
    });
    upsertCanonical(canonicalUrl);

    const existingScript = document.getElementById("blog-structured-data");
    if (existingScript) {
      existingScript.remove();
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Parsa Ghaei Blog",
      url: canonicalUrl,
      blogPost: posts.slice(0, 20).map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        datePublished: post.pubDate,
        url: post.link,
        keywords: post.categories.join(", "),
      })),
    };

    const script = document.createElement("script");
    script.id = "blog-structured-data";
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById("blog-structured-data");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
      document.title = defaultTitle;
    };
  }, [posts]);

  useEffect(() => {
    if (!previewPost) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPreviewPost(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [previewPost]);

  useEffect(() => {
    const targetId = decodeURIComponent(window.location.hash.replace("#", ""));
    if (!targetId) {
      return;
    }

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#050506] text-white">
      <ScrollProgress />
      <CustomCursor />
      <header className="sticky top-0 z-40 bg-[#050506]/90 md:bg-[#050506]/80 md:backdrop-blur-lg border-b border-white/10">
        <div className="relative max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
          <a
            href="/"
            data-cursor-preview="Go Home"
            className="text-sm font-mono-display text-white/70 hover:text-white transition-colors"
          >
            ← HOME
          </a>

          <div className="absolute left-1/2 -translate-x-1/2 text-sm md:text-base font-mono-display text-white/80 tracking-wide">
            [
            <a href="/blog" data-cursor-preview="Open Blog Category" className="mx-2 hover:text-white transition-colors">
              Blog
            </a>
            |
            <a
              href="/blog#Devlog"
              data-cursor-preview="Open Devlog Category"
              className="mx-2 hover:text-white transition-colors"
            >
              Devlog
            </a>
            ]
          </div>

          <a
            href={`https://medium.com/@${MEDIUM_CONFIG.username}`}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-preview="Open Medium Profile"
            className="inline-flex md:hidden items-center bg-white text-black text-[10px] font-bold tracking-wider px-3 py-2 rounded-full border-2 border-white hover:bg-white/90 transition-colors"
          >
            MEDIUM ↗
          </a>
          <a
            href={`https://medium.com/@${MEDIUM_CONFIG.username}`}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-preview="Open Medium Profile"
            className="hidden md:inline-flex items-center bg-white text-black text-xs font-bold tracking-wider px-4 py-2 rounded-full border-2 border-white hover:bg-white/90 transition-colors"
          >
            OPEN MEDIUM ↗
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-[clamp(1rem,2.2vw,1.5rem)] pt-[clamp(1.5rem,3.2vw,3.25rem)] pb-[clamp(3rem,6vw,5rem)]">
        <div className="mb-[clamp(1.5rem,2.8vw,2.5rem)] rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.03] via-white/[0.01] to-transparent px-[clamp(1rem,1.8vw,1.5rem)] py-[clamp(0.9rem,1.4vw,1.25rem)]">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[11px] font-mono-display tracking-[0.18em] text-white/45">
                WRITING HUB // BLOG + DEVLOG
              </p>
              <h1 className="mt-2 text-[clamp(1.4rem,2.2vw,1.9rem)] font-black tracking-tight text-white">
                Split View Reading
              </h1>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-mono-display tracking-wide">
              <span className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-white/85">
                BLOG: {isLoading ? "..." : `${blogPosts.length} POSTS`}
              </span>
              <span className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-white/85">
                DEVLOG: {isLoading ? "..." : `${devlogPosts.length} POSTS`}
              </span>
            </div>
          </div>
        </div>

        {isError && (
          <div className="mb-8 border border-white/10 bg-white/[0.02] px-6 py-5 text-sm text-white/70">
            Could not load Medium posts.
            {error instanceof Error ? ` ${error.message}` : ""}
            <br />
            Verify <code className="text-white/90">MEDIUM_CONFIG.username</code> and Medium/RSS availability.
          </div>
        )}

        <div className="grid gap-[clamp(1.5rem,3vw,2.5rem)] lg:grid-cols-2 lg:gap-0 lg:divide-x lg:divide-white/10">
          <section id="Blog" className="lg:pr-6 xl:pr-8">
            <div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6">
            <div className="mb-3 flex items-center justify-between gap-3">
                <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-[10px] font-mono-display tracking-[0.16em] text-white/85">
                  BLOG CATEGORY
                </span>
                <span className="text-[10px] font-mono-display tracking-[0.14em] text-white/60">
                  {isLoading ? "LOADING..." : `${blogPosts.length} POSTS`}
                </span>
              </div>
              <h2 className="text-[clamp(1.45rem,2.7vw,2.25rem)] font-black text-white">
                Blog
              </h2>
              <p className="mt-2 text-xs md:text-sm text-white/55 max-w-2xl">
                Articles, thoughts, and general notes from my learning path.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-px bg-white/10 border border-white/10">
              {(isLoading ? [0, 1, 2] : blogPosts).map((post, index) =>
                typeof post === "number" ? (
                <div key={index} className="bg-[#050506] p-8 space-y-4">
                  <div className="h-3 w-24 bg-white/10 rounded animate-pulse" />
                  <div className="h-7 w-4/5 bg-white/10 rounded animate-pulse" />
                  <div className="h-4 w-full bg-white/5 rounded animate-pulse" />
                </div>
              ) : (
                  <BlogPostCard
                    key={post.link}
                    post={post}
                    typeLabel="BLOG"
                    onPreview={setPreviewPost}
                  />
              )
              )}
            </div>
            {!isLoading && blogPosts.length === 0 && (
              <div className="mt-4 border border-white/10 bg-white/[0.02] px-6 py-5 text-sm text-white/60">
                No Blog posts found yet. New posts will appear here automatically.
              </div>
            )}
          </section>

          <section id="Devlog" className="lg:pl-6 xl:pl-8">
            <div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6">
            <div className="mb-3 flex items-center justify-between gap-3">
                <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-[10px] font-mono-display tracking-[0.16em] text-white/85">
                  DEVLOG CATEGORY
                </span>
                <span className="text-[10px] font-mono-display tracking-[0.14em] text-white/60">
                  {isLoading ? "LOADING..." : `${devlogPosts.length} POSTS`}
                </span>
              </div>
              <h2 className="text-[clamp(1.45rem,2.7vw,2.25rem)] font-black text-white">
                Devlog
              </h2>
              <p className="mt-2 text-xs md:text-sm text-white/55 max-w-2xl">
                Build updates, progress logs, and development milestones.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-px bg-white/10 border border-white/10">
              {(isLoading ? [0, 1, 2] : devlogPosts).map((post, index) =>
                typeof post === "number" ? (
                <div key={index} className="bg-[#050506] p-8 space-y-4">
                  <div className="h-3 w-24 bg-white/10 rounded animate-pulse" />
                  <div className="h-7 w-4/5 bg-white/10 rounded animate-pulse" />
                  <div className="h-4 w-full bg-white/5 rounded animate-pulse" />
                </div>
              ) : (
                  <BlogPostCard
                    key={post.link}
                    post={post}
                    typeLabel="DEVLOG"
                    onPreview={setPreviewPost}
                  />
              )
              )}
            </div>
            {!isLoading && devlogPosts.length === 0 && (
              <div className="mt-4 border border-white/10 bg-white/[0.02] px-6 py-5 text-sm text-white/60">
                No Devlog posts detected. Add a devlog tag/title keyword and they will be grouped here.
              </div>
            )}
          </section>
        </div>
      </main>

      {previewPost && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-4 backdrop-blur-sm"
          onClick={() => setPreviewPost(null)}
        >
          <div
            className="w-full max-w-2xl rounded-2xl border border-white/15 bg-[#0b0b0d] p-5 md:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-5 flex items-start justify-between gap-3">
              <span className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-[10px] font-mono-display tracking-[0.14em] text-white/75">
                PREVIEW MODE
              </span>
              <button
                type="button"
                className="rounded-lg border border-white/10 p-2 text-white/60 transition-colors hover:text-white"
                onClick={() => setPreviewPost(null)}
                aria-label="Close preview"
                data-cursor-preview="Close Preview"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {previewPost.thumbnail && (
              <div className="mb-4 overflow-hidden rounded-xl border border-white/10">
                <img
                  src={previewPost.thumbnail}
                  alt={previewPost.title}
                  className="h-36 w-full object-cover md:h-40"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}

            <h3 className="text-xl md:text-2xl font-black text-white leading-tight line-clamp-2">
              {previewPost.title}
            </h3>
            <p className="mt-2 text-xs font-mono-display text-white/55">
              {new Date(previewPost.pubDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {previewPost.categories.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-mono-display tracking-[0.12em] text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-4 text-sm text-white/80 leading-relaxed line-clamp-5">
              {getPostExcerpt(previewPost.content, 260)}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                data-cursor-preview="Close Preview"
                className="inline-flex items-center rounded-full border border-white/20 px-5 py-2.5 text-xs font-bold tracking-wider text-white/75 transition-colors hover:text-white"
                onClick={() => setPreviewPost(null)}
              >
                CLOSE
              </button>
              <a
                href={previewPost.link}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-preview="Continue Reading on Medium"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white bg-white px-5 py-2.5 text-xs font-bold tracking-wider text-black transition-colors hover:bg-white/90"
              >
                CONTINUE ON MEDIUM
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default BlogPage;
