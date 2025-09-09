import * as React from "react";
import { Search } from "lucide-react";

export const SearchBar = (): JSX.Element => {
  return (
    <form className="w-full" role="search">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative max-w-md">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
          <Search className="h-4 w-4" aria-hidden="true" />
        </span>
        <input
          id="search"
          type="search"
          placeholder="Search courses"
          className="w-full rounded-full border border-input bg-white py-2 pl-10 pr-4 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary transition"
        />
      </div>
    </form>
  );
};
