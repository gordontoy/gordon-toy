import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <Link href="/" className="foot-logo">
        Gordon Toy
      </Link>
      <span className="foot-copy">
        © {year} Gordon Toy · Melbourne, Australia
      </span>
    </footer>
  );
}
