import { useMemo } from "react";
import { Calendar, ExternalLink, Newspaper } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import {
  fetchMediumPosts,
  getPostExcerpt,
  isDevlogPost,
  MEDIUM_CONFIG,
  type MediumPost,
} from "@/lib/medium";

const PostCard = ({
  post,
  categoryLabel,
}: {
  post: MediumPost;
  categoryLabel: "DEVLOG" | "BLOG";
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
        <span className="px-2 py-1 border border-white/10 text-[10px] font-mono-display text-white/45">
          {categoryLabel}
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
        {getPostExcerpt(post.content, 180)}
      </p>

      <div className="pt-6 border-t border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white/35 text-xs">
          <Calendar className="w-3 h-3" />
          {post.categories.slice(0, 2).join(" • ") || categoryLabel.toLowerCase()}
        </div>
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

export const Devlog = () => {
  const { data: posts = [], isLoading, isError, error } = useQuery({
    queryKey: ["medium-posts", MEDIUM_CONFIG.username],
    queryFn: () => fetchMediumPosts(MEDIUM_CONFIG.username),
    staleTime: 1000 * 60 * 15,
  });

  const { devlogPosts, blogPosts } = useMemo(() => {
    const devlogs = posts.filter((post) => isDevlogPost(post));
    const blogs = posts.filter((post) => !isDevlogPost(post));
    return { devlogPosts: devlogs, blogPosts: blogs };
  }, [posts]);

  const mediumProfileLink = `https://medium.com/@${MEDIUM_CONFIG.username}`;

  return (
    <section id="devlog" className="py-[4.4rem] bg-[#050506]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 pb-8 border-b border-white/10 section-enter-soft">
          <span className="text-xs font-mono-display text-white/40 mb-4 block">
            005 // DEVLOG_AND_BLOG
          </span>
          <h2 className="text-6xl md:text-8xl font-black text-white brutalist-text">
            Writing
            <br />
            <span className="text-white/30">Hub</span>
          </h2>
        </div>

        <div className="mb-12 flex flex-wrap gap-4 items-center justify-between">
          <p className="text-white/55 text-sm md:text-base">
            Devlog and Blog are on one page, split by category.
          </p>
          <a
            href={mediumProfileLink}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-preview="Open Medium Profile"
            className="inline-flex items-center gap-3 px-5 py-3 border border-white/10 hover:border-white/25 transition-colors"
          >
            <Newspaper className="w-4 h-4 text-white" />
            <span className="text-white">Open Medium</span>
            <ExternalLink className="w-4 h-4 text-white/40" />
          </a>
        </div>

        {isError && (
          <div className="border border-white/10 bg-white/[0.02] px-6 py-5 text-sm text-white/70 mb-10">
            Could not load Medium posts right now.
            {error instanceof Error ? ` ${error.message}` : ""}
          </div>
        )}

        <div className="mb-12">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-2xl md:text-3xl font-black text-white">Devlog</h3>
            <span className="text-xs font-mono-display text-white/40">
              {isLoading ? "..." : `${devlogPosts.length} POSTS`}
            </span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {(isLoading ? [0, 1, 2] : devlogPosts.slice(0, 6)).map((post, index) =>
              typeof post === "number" ? (
                <div key={index} className="bg-[#050506] p-8 space-y-4">
                  <div className="h-3 w-20 bg-white/10 rounded animate-pulse" />
                  <div className="h-6 w-4/5 bg-white/10 rounded animate-pulse" />
                  <div className="h-4 w-full bg-white/5 rounded animate-pulse" />
                </div>
              ) : (
                <PostCard key={post.link} post={post} categoryLabel="DEVLOG" />
              )
            )}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-2xl md:text-3xl font-black text-white">Blog</h3>
            <span className="text-xs font-mono-display text-white/40">
              {isLoading ? "..." : `${blogPosts.length} POSTS`}
            </span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {(isLoading ? [0, 1, 2] : blogPosts.slice(0, 6)).map((post, index) =>
              typeof post === "number" ? (
                <div key={index} className="bg-[#050506] p-8 space-y-4">
                  <div className="h-3 w-20 bg-white/10 rounded animate-pulse" />
                  <div className="h-6 w-4/5 bg-white/10 rounded animate-pulse" />
                  <div className="h-4 w-full bg-white/5 rounded animate-pulse" />
                </div>
              ) : (
                <PostCard key={post.link} post={post} categoryLabel="BLOG" />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
