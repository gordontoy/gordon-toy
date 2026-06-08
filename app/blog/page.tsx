import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { getAllPosts, formatDate } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing — Gordon Toy",
  description:
    "Essays and analysis on markets, data, politics, and communication by Gordon Toy.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="blog-index">
      <span className="eyebrow">Writing</span>
      <h2>
        All <em>Posts</em>
      </h2>

      <Reveal className="posts-list">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="post">
            <span className="post-cat">{post.category}</span>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <div className="post-footer">
              <span className="post-date">
                {formatDate(post.date)} · {post.readingTime}
              </span>
              <span className="post-link" aria-hidden="true">
                Read
              </span>
            </div>
          </Link>
        ))}
      </Reveal>
    </div>
  );
}
