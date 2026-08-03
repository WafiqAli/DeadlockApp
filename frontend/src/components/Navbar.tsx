import { Sun } from "lucide-react";

const Navbar = () => {
  return (
    <div>
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
    </div>
  );
};

export default Navbar;
