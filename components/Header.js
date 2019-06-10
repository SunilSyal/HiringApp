import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, NavItem, NavLink } from "reactstrap";

export default function Header() {
  return (
    <div className="mb-3">
      <Nav pills>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/feedback">New Candidate</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/about">Link</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}
