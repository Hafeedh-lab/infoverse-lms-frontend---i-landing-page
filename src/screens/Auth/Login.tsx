import React, { useState } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Checkbox } from "../../components/ui/checkbox";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";
import { HERO_GRADIENT } from "../../constants/gradients";

export const LoginPage = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [globalError, setGlobalError] = useState<string | null>(null);

  const validate = () => {
    const newErrors: { email?: string; password?: string } = {};
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setGlobalError("Please fix the errors below.");
      return;
    }
    setGlobalError(null);
    setLoading(true);
    // Fake async login
    setTimeout(() => {
      setLoading(false);
      alert("Logged in!");
    }, 1500);
  };

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Gradient / Brand Panel */}
      <div
        className={`flex flex-1 items-center justify-center p-8 text-white order-2 md:order-1 ${HERO_GRADIENT}`}
      >
        <div className="text-center space-y-6 max-w-md animate-fade-in">
          <h2 className="text-4xl font-bold">Welcome Back to Infoverse</h2>
          <p className="text-white/90">
            Continue your journey to success!
          </p>
        </div>
      </div>

      {/* Form Panel */}
      <div className="flex flex-1 items-center justify-center p-6 md:p-12 order-1 md:order-2 bg-white">
        <Card className="w-full max-w-md shadow-lg rounded-2xl animate-fade-up">
          <CardHeader className="space-y-2 text-center">
            <CardTitle className="text-3xl font-bold">Log In</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {globalError && (
                <div
                  role="alert"
                  className="rounded-md bg-destructive/10 p-3 text-sm text-destructive"
                >
                  {globalError}
                </div>
              )}

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className="h-12 rounded-2xl focus-visible:ring-primary"
                />
                {errors.email && (
                  <p id="email-error" className="text-sm text-destructive">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-foreground">
                  Password
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    aria-describedby={errors.password ? "password-error" : undefined}
                    className="h-12 rounded-2xl pr-10 focus-visible:ring-primary"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground hover:text-foreground focus:outline-none"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    <span className="sr-only">
                      {showPassword ? "Hide password" : "Show password"}
                    </span>
                  </button>
                </div>
                {errors.password && (
                  <p id="password-error" className="text-sm text-destructive">
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm">
                  <Checkbox
                    id="remember"
                    checked={remember}
                    onCheckedChange={(checked) => setRemember(Boolean(checked))}
                    className="h-4 w-4 rounded-[4px]"
                  />
                  <span>Keep me signed in</span>
                </label>
                <a
                  href="#"
                  className="text-sm text-primary hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              <Button
                type="submit"
                className="w-full h-12 rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={loading}
              >
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Log In
              </Button>

              <div className="flex items-center gap-2">
                <Separator className="flex-1" />
                <span className="text-xs text-muted-foreground">OR</span>
                <Separator className="flex-1" />
              </div>

              <Button
                type="button"
                variant="outline"
                className="w-full h-12 rounded-2xl"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google" className="h-5 w-5" />
                Continue with Google
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Not a member yet?{" "}
                <a href="#" className="text-primary hover:underline">
                  Sign Up
                </a>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
