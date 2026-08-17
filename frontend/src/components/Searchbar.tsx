import { Search } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

type searchBarProps = {
  placeholder?: string;
  size?: "sm" | "md" | "lg";
  setSearchQuery?: Dispatch<SetStateAction<string>>;
};

const Searchbar = ({
  placeholder = "Search...",
  size = "md",
  setSearchQuery,
}: searchBarProps) => {
  const sizeClasses = {
    sm: "h-11 max-w-xs w-full",
    md: "h-11 max-w-lg w-full",
    lg: "h-14 max-w-2xl w-full shrink-0",
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (setSearchQuery) {
      setSearchQuery(event.target.value);
    }
  };

  return (
    <div className={`relative ${sizeClasses[size]}`}>
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5" />
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleInputChange}
        className={`input-light w-full h-full py-3 pl-12 pr-4`}
      />
    </div>
  );
};

export default Searchbar;
