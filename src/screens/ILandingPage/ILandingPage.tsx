import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { SearchBar } from "../../components/ui/search-bar";
import {
  Menu,
  BookOpen,
  Users,
  Award,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";

const features = [
  {
    title: "Interactive Courses",
    icon: BookOpen,
    description: "Engaging lessons that adapt to your pace.",
  },
  {
    title: "Expert Tutors",
    icon: Users,
    description: "Learn from experienced educators.",
  },
  {
    title: "Certification",
    icon: Award,
    description: "Earn credentials to showcase your skills.",
  },
];

export const ILandingPage = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-white/90 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <a href="#" className="text-xl font-bold text-primary">
            Infoverse
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#"
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              Home
            </a>
            <a
              href="#"
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              Subscriptions
            </a>
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost">Log In</Button>
            <Button className="bg-secondary text-white hover:bg-secondary/90">
              Sign Up
            </Button>
          </div>
          <button
            className="md:hidden rounded-md p-2 text-foreground transition-colors hover:bg-muted focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
        <div
          className={`${menuOpen ? "block" : "hidden"} md:hidden border-t bg-white`}
        >
          <nav className="container flex flex-col gap-2 py-4">
            <a
              href="#"
              className="py-1 text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              Home
            </a>
            <a
              href="#"
              className="py-1 text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              Subscriptions
            </a>
            <div className="mt-2 flex gap-2">
              <Button variant="ghost" className="flex-1">
                Log In
              </Button>
              <Button className="flex-1 bg-secondary text-white hover:bg-secondary/90">
                Sign Up
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary to-secondary py-24 text-white">
        <div className="container flex flex-col items-center gap-10 text-center md:flex-row md:text-left">
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl font-bold leading-tight md:text-6xl">
              Infoverse Digital-Ed
            </h1>
            <p className="text-lg md:text-xl">
              Unlock a universe of knowledge. Your potential is waiting.
            </p>
            <div className="mx-auto w-full md:mx-0">
              <SearchBar />
            </div>
            <Button className="mt-4 rounded-full bg-secondary px-8 py-4 text-lg font-medium text-white shadow transition-colors hover:bg-secondary/90">
              Explore Courses
            </Button>
          </div>
          <img
            src="https://c.animaapp.com/mfbjddyn8jUtGn/img/pexels-leticia-alvares-1805702-30539351-edited-1.png"
            alt="Student studying"
            className="flex-1 max-w-md rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-center text-3xl font-semibold">Features</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="text-center transition-shadow hover:shadow-lg"
              >
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <feature.icon
                    className="h-12 w-12 text-primary"
                    aria-hidden="true"
                  />
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-12 text-white">
        <div className="container grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Subscriptions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <p className="text-sm">info@example.com</p>
            <p className="text-sm">+1 (555) 123-4567</p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Twitter" className="hover:text-secondary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-secondary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-secondary">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} Infoverse Digital-Ed. All rights reserved.
        </p>
      </footer>
    </div>
  );
};
