import { Search } from "lucide-react";
import React from "react";

interface SearchBarProps {
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "Search courses" }) => {
  return (
    <form role="search" className="w-full max-w-md">
      <label htmlFor="site-search" className="sr-only">
        Search courses
      </label>
      <div className="flex items-center rounded-full border border-border bg-white shadow-sm focus-within:ring-2 focus-within:ring-primary">
        <input
          id="site-search"
          type="search"
          placeholder={placeholder}
          className="flex-1 rounded-full px-4 py-2 text-sm text-foreground placeholder:text-gray-400 focus:outline-none"
        />
        <button
          type="submit"
          className="p-2 text-primary hover:text-primary/80 focus-visible:outline-none"
          aria-label="Submit search"
        >
          <Search className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
