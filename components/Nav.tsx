import Link from "next/link";

export default function Nav() {
  return (
    <nav aria-label="Primary navigation">
      <Link href="/" className="nav-logo">
        Gordon <span>Toy</span>
      </Link>
      <ul className="nav-links" role="list">
        <li>
          <Link href="/#about">About</Link>
        </li>
        <li>
          <Link href="/#services">Services</Link>
        </li>
        <li>
          <Link href="/blog">Writing</Link>
        </li>
        <li>
          <Link href="/#contact">Contact</Link>
        </li>
      </ul>
      <Link href="/#contact" className="nav-cta">
        Get in Touch
      </Link>
    </nav>
  );
}
