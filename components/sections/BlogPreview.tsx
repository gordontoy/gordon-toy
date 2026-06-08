import Link from "next/link";
import Reveal from "@/components/Reveal";
import DataCenterGraphic from "@/components/DataCenterGraphic";
import { getAllPosts, formatDate } from "@/lib/posts";

export default function BlogPreview() {
  const posts = getAllPosts();
  if (posts.length === 0) return null;

  // Prefer a flagged featured post, otherwise the most recent.
  const featured = posts.find((p) => p.featured) ?? posts[0];
  const rest = posts.filter((p) => p.slug !== featured.slug).slice(0, 4);

  return (
    <div id="blog">
      <section id="blog-section" aria-labelledby="blog-h">
        <div className="blog-wrap">
          <div className="blog-header">
            <div>
              <span className="eyebrow">Writing</span>
              <h2 id="blog-h">
                Recent <em>Work</em>
              </h2>
            </div>
            <Link href="/blog" className="btn btn-outline">
              All Posts →
            </Link>
          </div>

          <Reveal className="blog-grid">
            <Link
              href={`/blog/${featured.slug}`}
              className="post featured"
              aria-label={`Read: ${featured.title}`}
            >
              <DataCenterGraphic />
              <span className="post-cat">{featured.category} · Featured</span>
              <h3>{featured.title}</h3>
              <p>{featured.excerpt}</p>
              <div className="post-footer">
                <span className="post-date">
                  {formatDate(featured.date)} · {featured.readingTime}
                </span>
                <span className="post-link" aria-hidden="true">
                  Read
                </span>
              </div>
            </Link>

            <div className="blog-stack">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="post"
                >
                  <span className="post-cat">{post.category}</span>
                  <h3>{post.title}</h3>
                  <div className="post-footer">
                    <span className="post-date">{formatDate(post.date)}</span>
                    <span className="post-link" aria-hidden="true">
                      Read
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
