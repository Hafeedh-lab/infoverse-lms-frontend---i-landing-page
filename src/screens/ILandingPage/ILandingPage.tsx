import React, { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  Menu,
  BookOpen,
  Users,
  Award,
  Twitter,
  Facebook,
  Instagram,
  Mail,
  Phone,
  Clock,
  TrendingUp,
  Shield,
  Zap,
  Search,
  ChevronDown,
  Star,
  ArrowRight,
  CheckCircle,
  Target,
  Sparkles,
} from "lucide-react";

interface Feature {
  title: string;
  icon: React.ElementType;
  description: string;
  gradient: string;
}

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

interface Stat {
  value: string;
  label: string;
  icon: React.ElementType;
}

const features: Feature[] = [
  {
    title: "Interactive Courses",
    icon: BookOpen,
    description:
      "Engaging lessons with real-time feedback, quizzes, and hands-on projects that adapt to your learning pace",
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    title: "Expert Instructors",
    icon: Users,
    description:
      "Learn from industry leaders and certified professionals with years of real-world experience",
    gradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    title: "Verified Certificates",
    icon: Award,
    description:
      "Earn industry-recognized certificates to showcase your skills and boost your career prospects",
    gradient: "from-green-500/10 to-emerald-500/10",
  },
  {
    title: "Flexible Learning",
    icon: Clock,
    description:
      "Study at your own pace with 24/7 access to course materials from any device, anywhere",
    gradient: "from-orange-500/10 to-red-500/10",
  },
  {
    title: "Track Progress",
    icon: TrendingUp,
    description:
      "Monitor your learning journey with detailed analytics and personalized recommendations",
    gradient: "from-indigo-500/10 to-blue-500/10",
  },
  {
    title: "Lifetime Support",
    icon: Shield,
    description:
      "Get assistance from our dedicated support team and vibrant community whenever you need help",
    gradient: "from-teal-500/10 to-cyan-500/10",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Lorem M.A",
    role: "Software Developer",
    content:
      "Infoverse transformed my career. The interactive courses and expert instructors helped me land my dream job in just 6 months!",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Ipsum O",
    role: "Marketing Manager",
    content:
      "The flexibility of learning at my own pace while working full-time was exactly what I needed. Highly recommend!",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Sit A",
    role: "Data Analyst",
    content:
      "Great content and amazing community support. The certification I earned helped me get a promotion!",
    rating: 4,
    avatar: "https://i.pravatar.cc/150?img=8",
  },
];

const stats: Stat[] = [
  { value: "50K+", label: "Active Learners", icon: Users },
  { value: "1,200+", label: "Expert Courses", icon: BookOpen },
  { value: "95%", label: "Success Rate", icon: Target },
];

export const ILandingPage = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-gray-50 to-white overflow-x-hidden">
      {/* Enhanced Header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100"
            : "bg-white/80 backdrop-blur-md border-b border-gray-100/50"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-xl">I</span>
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Infoverse
              </span>
            </a>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {["Home", "Courses", "Features", "Success Stories", "Pricing"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="relative text-gray-700 font-medium hover:text-primary transition-colors group"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
                  </a>
                )
              )}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <Button variant="ghost" className="hover:text-primary transition-all">
                Log In
              </Button>
              <Button className="relative bg-gradient-to-r from-primary to-secondary text-white hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-full px-8 overflow-hidden group">
                <span className="relative z-10">Start Free Trial</span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-gray-100`}
        >
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-2">
            {["Home", "Courses", "Features", "Success Stories", "Pricing"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="py-2 text-gray-700 hover:text-primary transition-colors font-medium"
                >
                  {item}
                </a>
              )
            )}
            <div className="flex gap-2 mt-4">
              <Button variant="outline" className="flex-1">
                Log In
              </Button>
              <Button className="flex-1 bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg">
                Sign Up
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
          <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-700" />
          <div className="absolute w-64 h-64 bg-secondary/20 rounded-full blur-2xl top-1/2 left-1/3 animate-float" />
        </div>

        <div className="container mx-auto px-6 relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-white space-y-8 animate-fade-up">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm border border-white/30">
                <Sparkles className="w-4 h-4 mr-2 text-yellow-300" />
                <span className="text-sm font-medium">New courses added weekly</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Unlock a Universe of{" "}
                <span className="relative">
                  Knowledge
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 300 20"
                    fill="none"
                  >
                    <path
                      d="M5 15C100 5 200 5 295 15"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      opacity="0.5"
                    />
                  </svg>
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-xl">
                Your potential is waiting. Join thousands of learners transforming their careers with personalized education.
              </p>

              {/* Enhanced Search Bar */}
              <div className="relative max-w-lg">
                <input
                  type="text"
                  placeholder="Search for courses, topics, or skills..."
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  className={`w-full px-6 py-4 pr-32 rounded-full bg-white/95 text-gray-800 placeholder-gray-500 shadow-2xl transition-all duration-300 ${
                    searchFocused ? "ring-4 ring-white/30 scale-105" : ""
                  }`}
                />
                <Button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-secondary text-white rounded-full px-6 hover:shadow-lg transition-all">
                  <Search className="w-4 h-4 mr-2" />
                  Explore
                </Button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 pt-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="text-3xl font-bold flex items-center gap-2">
                      <stat.icon className="w-6 h-6 text-white/80" />
                      {stat.value}
                    </div>
                    <div className="text-white/80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image with Floating Elements */}
            <div className="relative animate-fade-in lg:block hidden">
              <div className="relative z-10">
                <img
                  src="https://c.animaapp.com/mfbjddyn8jUtGn/img/pexels-leticia-alvares-1805702-30539351-edited-1.png"
                  alt="Students learning"
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />

                {/* Floating Card 1 */}
                <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Certified</div>
                      <div className="text-sm text-gray-600">Courses</div>
                    </div>
                  </div>
                </div>

                {/* Floating Card 2 */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 animate-float delay-1000">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <img
                          key={i}
                          src={`https://i.pravatar.cc/40?img=${i}`}
                          className="w-8 h-8 rounded-full border-2 border-white"
                          alt=""
                        />
                      ))}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Live Classes</div>
                      <div className="text-sm text-gray-600">Join now</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white/60" />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started in three simple steps and begin your learning journey today
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Sign Up",
                desc: "Create your free account and explore our course catalog",
                icon: Search,
              },
              {
                step: "2",
                title: "Enroll",
                desc: "Choose from thousands of courses that match your goals",
                icon: Target,
              },
              {
                step: "3",
                title: "Start Learning",
                desc: "Begin your journey with expert instructors and earn certificates",
                icon: Zap,
              },
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform">
                    <item.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">
                    {item.step}. {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
                {index < 2 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-4 w-8 h-8 text-gray-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Why Choose Infoverse?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of online learning with our cutting-edge platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Get that A? Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get that A?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Join thousands of successful learners achieving their goals
            </p>

            {/* Success Metric Circle */}
            <div className="inline-block mb-12">
              <div className="relative w-48 h-48">
                <svg className="w-48 h-48 transform -rotate-90">
                  <circle
                    cx="96"
                    cy="96"
                    r="88"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="96"
                    cy="96"
                    r="88"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray="553"
                    strokeDashoffset="50"
                    strokeLinecap="round"
                    className="animate-pulse"
                  />
                  <defs>
                    <linearGradient id="gradient">
                      <stop offset="0%" stopColor="#3ba0ae" />
                      <stop offset="100%" stopColor="#e8704f" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl font-bold text-white">91.5</span>
                </div>
              </div>
              <p className="text-gray-300 mt-4">Average Success Score</p>
            </div>

            <Button className="px-12 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all">
              Sign Up Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section id="success-stories" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              What Learners Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by thousands of successful students worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50"
              >
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand Column */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">I</span>
                </div>
                <span className="text-2xl font-bold">Infoverse</span>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering learners worldwide with quality education and certification.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {["About Us", "Courses", "Instructors", "Success Stories", "Blog"].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                {["Help Center", "Contact Us", "Privacy Policy", "Terms of Service", "Refund Policy"].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  info@infoverse.com
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  +1 (555) 123-4567
                </li>
              </ul>
            </div>
          </div>
          <p className="text-center text-gray-500 mt-8">
            &copy; {new Date().getFullYear()} Infoverse Digital-Ed. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

