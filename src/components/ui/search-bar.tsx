import * as React from "react";
import { cn } from "../../lib/utils";

interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(
  ({ className, label = "Search", id = "site-search", ...props }, ref) => {
    return (
      <div className={cn("w-full max-w-md", className)}>
        <label htmlFor={id} className="sr-only">
          {label}
        </label>
        <input
          id={id}
          ref={ref}
          type="search"
          className="w-full rounded-full border border-border bg-background px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-shadow"
          placeholder={label}
          {...props}
        />
      </div>
    );
  }
);
SearchBar.displayName = "SearchBar";
