import { Sun } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Deadlock</h1>
      <ul>
        <li>Home</li>
        <li>Heroes</li>
        <li>Items</li>
        <input type="text" placeholder="Search player..." />
        <button>
          <Sun />
        </button>
        <button>Sign in</button>
      </ul>
    </nav>
  );
};

export default Navbar;
