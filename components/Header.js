import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  return (
    <div className="mb-3">
      <Link href="/">
        <a>Home</a>
      </Link>
      {/* To be fixed - Need to use NavItem for menu*/}
      <Link href="/feedback">
        <a>New Candidate</a>
      </Link>
      <Link href="/about">
        <a>Link</a>
      </Link>
    </div>
  );
}
