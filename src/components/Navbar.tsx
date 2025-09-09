import React, { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import SearchBar from "./SearchBar";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Subscriptions", href: "#subscriptions" },
];

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <nav className="container flex items-center justify-between py-4">
        <div className="flex items-center space-x-4">
          <span className="text-xl font-bold text-primary">Infoverse</span>
          <div className="hidden md:block">
            <SearchBar className="w-72" />
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <Button variant="ghost">Log in</Button>
          <Button>Sign up</Button>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="container flex flex-col space-y-4 py-4">
            <SearchBar />
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <Button variant="ghost">Log in</Button>
            <Button>Sign up</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
