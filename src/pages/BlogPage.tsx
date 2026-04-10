import { useEffect, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { ExternalLink } from "lucide-react";
import {
  fetchMediumPosts,
  getPostExcerpt,
  isDevlogPost,
  MEDIUM_CONFIG,
  type MediumPost,
} from "@/lib/medium";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Footer } from "@/components/portfolio/Footer";

const BlogPostCard = ({
  post,
  typeLabel,
}: {
  post: MediumPost;
  typeLabel: "BLOG" | "DEVLOG";
}) => {
  return (
    <article className="section-enter-soft modern-card sheen-hover bg-[#050506] p-8 transition-all duration-500">
      {post.thumbnail && (
        <div className="mb-6 overflow-hidden border border-white/10 bg-black/30">
          <img
            src={post.thumbnail}
            alt={post.title}
            className="h-40 w-full object-cover opacity-90"
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

      <h3 className="text-xl font-bold text-white mb-4 leading-snug">{post.title}</h3>

      <p className="text-sm text-white/55 mb-7 line-clamp-4 leading-relaxed">
        {getPostExcerpt(post.content, 190)}
      </p>

      <div className="pt-6 border-t border-white/5 flex items-center justify-between">
        <span className="text-white/35 text-xs">
          {post.categories.slice(0, 2).join(" • ") || typeLabel.toLowerCase()}
        </span>
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
    </article>
  );
};

const BlogPage = () => {
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
      <header className="sticky top-0 z-40 bg-[#050506]/90 md:bg-[#050506]/80 md:backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
          <a
            href="/"
            data-cursor-preview="Go Home"
            className="text-sm font-mono-display text-white/70 hover:text-white transition-colors"
          >
            ← HOME
          </a>

          <div className="text-sm md:text-base font-mono-display text-white/80 tracking-wide">
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
          className="hidden md:inline-flex items-center bg-white text-black text-xs font-bold tracking-wider px-4 py-2 rounded-full border-2 border-white hover:bg-white/90 transition-colors"
          >
            OPEN MEDIUM ↗
          </a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pt-9 pb-14 md:pt-[3.25rem] md:pb-20">
        <div className="section-enter-soft mb-10 rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.03] via-white/[0.01] to-transparent px-5 py-4 md:px-6 md:py-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[11px] font-mono-display tracking-[0.18em] text-white/45">
                WRITING HUB // BLOG + DEVLOG
              </p>
              <h1 className="mt-2 text-2xl font-black tracking-tight text-white md:text-3xl">
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

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-0 lg:divide-x lg:divide-white/10">
          <section id="Blog" className="lg:pr-6 xl:pr-8">
            <div className="section-enter-soft mb-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-[10px] font-mono-display tracking-[0.16em] text-white/85">
                  BLOG CATEGORY
                </span>
                <span className="text-[10px] font-mono-display tracking-[0.14em] text-white/60">
                  {isLoading ? "LOADING..." : `${blogPosts.length} POSTS`}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white">
                Blog
              </h2>
              <p className="mt-3 text-sm text-white/55 max-w-2xl">
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
                  <BlogPostCard key={post.link} post={post} typeLabel="BLOG" />
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
            <div className="section-enter-soft mb-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-[10px] font-mono-display tracking-[0.16em] text-white/85">
                  DEVLOG CATEGORY
                </span>
                <span className="text-[10px] font-mono-display tracking-[0.14em] text-white/60">
                  {isLoading ? "LOADING..." : `${devlogPosts.length} POSTS`}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white">
                Devlog
              </h2>
              <p className="mt-3 text-sm text-white/55 max-w-2xl">
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
                  <BlogPostCard key={post.link} post={post} typeLabel="DEVLOG" />
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

      <Footer />
    </div>
  );
};

export default BlogPage;
