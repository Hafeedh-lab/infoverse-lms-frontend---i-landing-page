import React from "react";
import { Search } from "lucide-react";
import { cn } from "../lib/utils";

export interface SearchBarProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(
  ({ className, placeholder = "Search...", ...props }, ref) => (
    <div className={cn("relative", className)}>
      <label htmlFor="site-search" className="sr-only">
        Search
      </label>
      <input
        id="site-search"
        ref={ref}
        type="search"
        placeholder={placeholder}
        className="w-full rounded-full border border-border bg-white py-2 pl-4 pr-10 text-sm shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
        {...props}
      />
      <Search className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
    </div>
  )
);

SearchBar.displayName = "SearchBar";

export default SearchBar;
