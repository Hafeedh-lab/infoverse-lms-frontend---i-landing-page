import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import SearchBar from "../../components/ui/search-bar";

const howItWorksSteps = [
  {
    title: "Sign Up",
    subtitle: "Choose Your Course",
    image: "https://c.animaapp.com/mfbjddyn8jUtGn/img/image-6.png",
  },
  {
    title: "Enroll",
    subtitle: "Secure Your Spot",
    image: "https://c.animaapp.com/mfbjddyn8jUtGn/img/image-7.png",
  },
  {
    title: "Start Learning",
    subtitle: "Begin Your Journey",
    image: "https://c.animaapp.com/mfbjddyn8jUtGn/img/image-9.png",
  },
];

const testimonials = [
  {
    name: "Lorem M.A",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    avatar: "https://c.animaapp.com/mfbjddyn8jUtGn/img/image-13.png",
  },
  {
    name: "Ipsum O",
    text: "Lorem ipsum dolor sit amet.",
    avatar: "https://c.animaapp.com/mfbjddyn8jUtGn/img/image-13.png",
  },
  {
    name: "Sit A",
    text: "Lorem ipsum dolor sit amet, consectetur.",
    avatar: "https://c.animaapp.com/mfbjddyn8jUtGn/img/image-12.png",
  },
];

const footerLinks = [
  { text: "Terms", href: "#" },
  { text: "Privacy", href: "#" },
  { text: "Help", href: "#" },
];

export const ILandingPage = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur">
        <nav className="container flex items-center justify-between py-4">
          <a href="#" className="text-xl font-bold text-primary">
            Infoverse
          </a>

          <button
            className="md:hidden"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((p) => !p)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <ul className="hidden items-center gap-6 md:flex">
            <li>
              <a href="#" className="transition-colors hover:text-primary">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-primary">
                Subscriptions
              </a>
            </li>
          </ul>

          <div className="hidden items-center gap-4 md:flex">
            <Button variant="ghost">Log In</Button>
            <Button>Sign Up</Button>
          </div>
        </nav>
        {menuOpen && (
          <div className="md:hidden border-t bg-white">
            <ul className="flex flex-col gap-2 p-4">
              <li>
                <a href="#" className="block py-2 hover:text-primary">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 hover:text-primary">
                  Subscriptions
                </a>
              </li>
              <li className="pt-2">
                <Button className="w-full">Sign Up</Button>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container grid items-center gap-8 py-24 md:grid-cols-2">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold md:text-5xl">Infoverse Digital-Ed</h1>
            <p className="text-lg md:text-xl">
              Unlock a universe of knowledge. Your potential is waiting.
            </p>
            <SearchBar />
            <Button className="mt-4">Explore Courses</Button>
          </div>
          <img
            src="https://c.animaapp.com/mfbjddyn8jUtGn/img/pexels-leticia-alvares-1805702-30539351-edited-1.png"
            alt="Student studying"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* How it works */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-semibold">How It Works</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {howItWorksSteps.map((step) => (
              <Card key={step.title} className="p-6 text-center">
                <img
                  src={step.image}
                  alt={step.title}
                  className="mx-auto mb-4 h-20 w-20"
                />
                <CardContent className="space-y-2 p-0">
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-semibold">Ready to Get that A?</h2>
          <p className="mb-8 text-muted-foreground">
            Your personalized path to exam success.
          </p>
          <Button>Sign Up Today</Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-semibold">
            What Learners Say
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name} className="p-6 text-center">
                <CardContent className="space-y-4 p-0">
                  <p className="text-sm text-muted-foreground">{t.text}</p>
                  <div className="flex flex-col items-center gap-2">
                    <img
                      src={t.avatar}
                      alt=""
                      className="h-16 w-16 rounded-full"
                    />
                    <p className="font-semibold">{t.name}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 bg-primary text-white">
        <div className="container grid gap-8 py-12 md:grid-cols-3">
          <div>
            <img
              src="https://c.animaapp.com/mfbjddyn8jUtGn/img/with-bg-1.png"
              alt="Infoverse logo"
              className="mb-4 h-20 w-20 rounded-full"
            />
            <p className="text-sm">© 2024 Infoverse Digital-Ed</p>
          </div>
          <div>
            <h3 className="mb-4 font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>United Kingdom: +447412858175</li>
              <li>West Africa: +2349032840916</li>
              <li>Email: info@infoversedigitaleducation.net</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold">Links</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.map((link) => (
                <li key={link.text}>
                  <a href={link.href} className="hover:underline">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ILandingPage;
