import { Sun } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between border border-border h-20 px-8 bg-navbar font-medium">
      <div className="flex gap-8">
        <h1 className="text-2xl font-medium">DEADLOCK.GG</h1>
        <ul className="flex gap-8 text-common-text items-center">
          <li>Home</li>
          <li>Heroes</li>
          <li>Items</li>
        </ul>
      </div>
      <div className="flex gap-8 text-common-text">
        <input
          type="text"
          placeholder="Search player..."
          className="input-light p-1.5"
        />
        <button className="button-light px-2">
          <Sun />
        </button>
        <button className="button-light px-5 py-2">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
