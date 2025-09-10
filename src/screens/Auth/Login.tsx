import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Checkbox } from "../../components/ui/checkbox";
import { Separator } from "../../components/ui/separator";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { HERO_GRADIENT } from "../../lib/gradients";

export const Login = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    global?: string;
    success?: string;
  }>({});

  const validate = () => {
    const newErrors: { email?: string; password?: string } = {};
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors({ ...validationErrors, global: "Please fix the errors below" });
      return;
    }
    setErrors({});
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setErrors({ success: "Logged in successfully!" });
    }, 1500);
  };

  const emailId = "email";
  const passwordId = "password";

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="flex items-center justify-center p-6 sm:p-12 order-1 lg:order-2">
        <Card className="w-full max-w-md rounded-2xl shadow-lg animate-fade-up">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Welcome Back</CardTitle>
            <CardDescription className="text-center">
              Sign in to continue your journey
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {errors.global && (
                <div
                  role="alert"
                  className="p-3 text-sm text-destructive bg-destructive/10 border border-destructive rounded-md"
                >
                  {errors.global}
                </div>
              )}
              {errors.success && (
                <div
                  role="status"
                  className="p-3 text-sm text-green-600 bg-green-100 border border-green-200 rounded-md"
                >
                  {errors.success}
                </div>
              )}
              <div className="space-y-2">
                <label htmlFor={emailId} className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id={emailId}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  aria-describedby={errors.email ? "email-error" : undefined}
                  disabled={loading}
                  className="h-12 rounded-xl"
                />
                {errors.email && (
                  <p id="email-error" className="text-sm text-destructive mt-1">
                    {errors.email}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label htmlFor={passwordId} className="text-sm font-medium">
                  Password
                </label>
                <div className="relative">
                  <Input
                    id={passwordId}
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    aria-describedby={errors.password ? "password-error" : undefined}
                    disabled={loading}
                    className="h-12 rounded-xl pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute inset-y-0 right-3 flex items-center text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring rounded-full"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    <span className="sr-only">
                      {showPassword ? "Hide password" : "Show password"}
                    </span>
                  </button>
                </div>
                {errors.password && (
                  <p id="password-error" className="text-sm text-destructive mt-1">
                    {errors.password}
                  </p>
                )}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={remember}
                    onCheckedChange={(checked) => setRemember(Boolean(checked))}
                  />
                  <label htmlFor="remember" className="text-sm">
                    Keep me signed in
                  </label>
                </div>
                <a href="#" className="text-sm text-primary hover:underline">
                  Forgot password?
                </a>
              </div>
              <Button
                type="submit"
                className="w-full h-12 rounded-xl"
                disabled={loading}
              >
                {loading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                Log in
              </Button>
              <div className="flex items-center gap-2">
                <Separator className="flex-1" />
                <span className="text-sm text-muted-foreground">OR</span>
                <Separator className="flex-1" />
              </div>
              <Button
                type="button"
                variant="outline"
                className="w-full h-12 rounded-xl flex items-center justify-center gap-3"
                disabled={loading}
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt=""
                  className="h-5 w-5"
                />
                Continue with Google
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
      <div
        className={`${HERO_GRADIENT} relative order-2 lg:order-1 flex items-center justify-center p-8 text-white`}
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:20px_20px]" />
        <div className="relative z-10 text-center space-y-4 max-w-md animate-fade-in">
          <h2 className="text-3xl font-bold">Infoverse LMS</h2>
          <p className="text-lg">Your journey to success starts here.</p>
          <img
            src="https://c.animaapp.com/mfdtd9diDt6snj/img/with-bg-1.png"
            alt="Infoverse logo"
            className="w-24 h-24 mx-auto rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
