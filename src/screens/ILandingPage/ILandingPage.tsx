import React from "react";
import Navbar from "../../components/Navbar";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../../components/ui/card";
import {
  BookOpen,
  Play,
  Users,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Comprehensive Courses",
    description: "Explore a variety of subjects crafted by experts.",
  },
  {
    icon: Play,
    title: "Interactive Lessons",
    description: "Engaging video content and quizzes keep you involved.",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Learn with peers and mentors from around the world.",
  },
];

export const ILandingPage = (): JSX.Element => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary to-secondary py-20 text-center text-white">
          <div className="container space-y-6">
            <h1 className="font-serif text-5xl md:text-6xl">Infoverse Digital-Ed</h1>
            <p className="mx-auto max-w-2xl text-lg md:text-xl">
              Unlock a universe of knowledge. Your personalized path to exam success.
            </p>
            <Button
              size="lg"
              className="rounded-full bg-accent px-8 py-4 text-white transition-colors hover:bg-accent/90"
            >
              Get Started
            </Button>
          </div>
        </section>

        <section id="features" className="container py-16">
          <h2 className="mb-10 text-center text-3xl font-semibold">Features</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => (
              <Card
                key={title}
                className="h-full text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <CardHeader>
                  <Icon className="mx-auto h-12 w-12 text-primary" aria-hidden="true" />
                  <CardTitle className="mt-4 text-xl">{title}</CardTitle>
                  <CardDescription className="text-base">{description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <footer className="bg-primary py-8 text-white">
        <div className="container grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-2 text-lg font-semibold">Infoverse</h3>
            <p className="text-sm leading-relaxed">
              United Kingdom: +447412858175
              <br />
              West Africa: +2349032840916
              <br />
              Email: info@infoversedigitaleducation.net
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Help
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  aria-label={Icon.name}
                  className="transition-colors hover:text-secondary"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-xs">
          &copy; {new Date().getFullYear()} Infoverse Digital-Ed
        </p>
      </footer>
    </div>
  );
};
