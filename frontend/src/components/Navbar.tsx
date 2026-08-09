import { Moon } from "lucide-react";
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between border border-border h-20 px-8 bg-navbar font-medium">
      <div className="flex gap-8">
        <h1 className="text-2xl font-display font-bold text-primary-dark">
          DEADLOCK.<span className="text-gold-accent">GG</span>
        </h1>
        <ul className="flex gap-8 text-common-text items-center">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="heroes">
            <li>Heroes</li>
          </Link>
          <Link to="items">
            <li>Items</li>
          </Link>
        </ul>
      </div>
      <div className="flex items-center gap-8 text-common-text">
        <Searchbar placeholder="Search player..." size="sm" />
        <button className="button-light p-3">
          <Moon />
        </button>
        <button className="button-light px-10 py-3 whitespace-nowrap">
          Sign in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
