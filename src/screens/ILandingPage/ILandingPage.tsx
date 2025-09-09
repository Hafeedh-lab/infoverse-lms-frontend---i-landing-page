import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { SearchBar } from "../../components/ui/search-bar";

const howItWorksSteps = [
  {
    title: "Sign Up",
    subtitle: "Choose Your Course",
    image: "https://c.animaapp.com/mfbjddyn8jUtGn/img/image-6.png",
  },
  {
    title: "Enrol for the Courses",
    subtitle: "Secure Your Spot",
    image: "https://c.animaapp.com/mfbjddyn8jUtGn/img/image-7.png",
    overlayImage: "https://c.animaapp.com/mfbjddyn8jUtGn/img/image-8.png",
  },
  {
    title: "Start learning",
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
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <div className="bg-white min-h-screen w-full" data-model-id="160:1713">
      <div className="max-w-[1920px] mx-auto bg-[#f9f9f9] rounded-[20px] overflow-hidden">
        {/* Header & Hero */}
        <header className="bg-gradient-to-r from-primary to-secondary text-white">
          <div className="sticky top-0 z-50 bg-primary/90 backdrop-blur-sm">
            <div className="container mx-auto flex items-center justify-between py-4">
              <a href="#" className="font-bold text-xl">
                Infoverse
              </a>
              <button
                className="md:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <div
                className={
                  (menuOpen ? "flex" : "hidden") +
                  " absolute left-0 right-0 top-full flex-col bg-primary px-4 pb-4 md:static md:flex md:w-auto md:flex-row md:items-center md:gap-6 md:bg-transparent md:p-0"
                }
              >
                <a href="#" className="py-2 hover:text-accent transition-colors">
                  Home
                </a>
                <a href="#" className="py-2 hover:text-accent transition-colors">
                  Subscriptions
                </a>
                <div className="mt-2 flex flex-col gap-2 md:mt-0 md:flex-row md:items-center md:gap-4">
                  <Button variant="ghost" className="text-white hover:text-accent">
                    Log in
                  </Button>
                  <Button variant="accent">Sign up</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto grid items-center gap-8 py-16 md:grid-cols-2">
            <div className="space-y-6 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold">
                Infoverse Digital-Ed
              </h1>
              <h2 className="font-serif text-3xl md:text-5xl font-bold">
                Unlock a universe of knowledge. Your potential is waiting.
              </h2>
              <p className="text-lg md:text-xl">
                Your personalized path to exam success.
              </p>
              <SearchBar className="mx-auto md:mx-0" />
              <Button variant="accent" className="mt-4">
                Explore Courses
              </Button>
            </div>
            <div className="mx-auto w-full max-w-md">
              <img
                className="w-full rounded-2xl object-cover shadow"
                alt="Student studying"
                src="https://c.animaapp.com/mfbjddyn8jUtGn/img/pexels-leticia-alvares-1805702-30539351-edited-1.png"
              />
            </div>
          </div>
        </header>

        {/* How It Works Section */}
        <section className="py-16 px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-bold">How It Works</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {howItWorksSteps.map((step, index) => (
              <Card
                key={index}
                className="p-6 text-center animate-fade-in"
                style={{ animationDelay: `${200 + index * 200}ms` }}
              >
                <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-accent/10">
                  <img src={step.image} alt={step.title} className="h-24 w-24 object-cover" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.subtitle}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Ready to Get that A Section */}
        <section className="py-16 px-8 text-center">
          <div className="mb-8">
            <h2 className="text-3xl md:text-5xl font-bold">Ready to Get that A?</h2>
          </div>
          <div className="mb-8">
            <img
              className="mx-auto w-full max-w-4xl rounded-2xl object-cover shadow"
              alt="Success visualization"
              src="https://c.animaapp.com/mfbjddyn8jUtGn/img/image-10.png"
            />
          </div>
          <Button variant="accent" size="lg">
            Sign Up Today
          </Button>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-bold">What Learners Say</h2>
            <p className="text-muted-foreground">Trusted Voices</p>
          </div>
          <div className="grid max-w-6xl mx-auto gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${200 + index * 200}ms` }}
              >
                <CardContent className="flex h-full flex-col items-center justify-between p-6 text-center">
                  <p className="mb-4 text-lg">{testimonial.text}</p>
                  <div>
                    <img
                      src={testimonial.avatar}
                      alt={`${testimonial.name} avatar`}
                      className="mx-auto mb-2 h-16 w-16 rounded-full object-cover"
                    />
                    <p className="font-bold">{testimonial.name}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-primary text-white">
          <div className="container mx-auto grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center gap-4">
              <img
                className="h-20 w-20 rounded-full object-cover"
                alt="Company logo"
                src="https://c.animaapp.com/mfbjddyn8jUtGn/img/with-bg-1.png"
              />
              <span className="text-xl font-bold">Infoverse</span>
            </div>
            <div>
              <p className="mb-2 font-semibold">Contact</p>
              <ul className="space-y-1 text-sm">
                <li>United Kingdom: +447412858175</li>
                <li>West Africa: +2349032840916</li>
                <li>Email: info@infoversedigitaleducation.net</li>
              </ul>
            </div>
            <div>
              <p className="mb-2 font-semibold">Links</p>
              <ul className="space-y-1 text-sm">
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="hover:text-accent">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
