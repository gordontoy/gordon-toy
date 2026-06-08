import Link from "next/link";

export default function NotFound() {
  return (
    <div className="article" style={{ textAlign: "center" }}>
      <span className="eyebrow">Error 404</span>
      <h1 style={{ marginBottom: 20 }}>Page Not Found</h1>
      <p className="article-end-text" style={{ margin: "0 auto 32px" }}>
        The page you are looking for has moved, or never existed.
      </p>
      <div className="btn-row" style={{ justifyContent: "center" }}>
        <Link href="/" className="btn btn-primary">
          Home
        </Link>
        <Link href="/blog" className="btn btn-outline">
          Read the Writing
        </Link>
      </div>
    </div>
  );
}
