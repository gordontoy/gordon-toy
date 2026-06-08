import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, getPostSlugs, formatDate } from "@/lib/posts";

interface Params {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Not found — Gordon Toy" };

  return {
    title: `${post.title} — Gordon Toy`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <>
      <div className="article-bg" aria-hidden="true" />
      <article className="article">
      <Link href="/blog" className="article-back">
        ← All Posts
      </Link>

      <header className="article-head">
        <span className="post-cat">{post.category}</span>
        <h1>{post.title}</h1>
        <div className="article-meta">
          <span>{formatDate(post.date)}</span>
          <span className="dot">·</span>
          <span>{post.readingTime} read</span>
          <span className="dot">·</span>
          <span>Gordon Toy</span>
        </div>
      </header>

      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      <div className="article-end">
        <p className="article-end-text">
          Have a brief that needs this kind of thinking? Start a conversation.
        </p>
        <Link href="/#contact" className="btn btn-primary">
          Get in Touch
        </Link>
      </div>
    </article>
    </>
  );
}
