import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  Loader2,
  HelpCircle,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Input } from "../components/ui/input";
import { Separator } from "../components/ui/separator";

// Reusable gradient used across the site
const BRAND_GRADIENT =
  "bg-gradient-to-br from-primary via-primary/90 to-secondary";

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const FormField = ({
  id,
  label,
  type,
  error,
  className,
  children,
  ...props
}: FormFieldProps) => (
  <div className="space-y-1">
    <label htmlFor={id} className="text-sm font-medium text-gray-700">
      {label}
    </label>
    <div className="relative">
      <Input
        id={id}
        type={type}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`h-12 rounded-2xl text-base ${className ?? ""}`}
        {...props}
      />
      {children}
    </div>
    {error && (
      <p id={`${id}-error`} className="text-sm text-destructive">
        {error}
      </p>
    )}
  </div>
);

const OAuthButton = () => (
  <Button
    type="button"
    variant="outline"
    className="w-full h-12 rounded-2xl flex items-center justify-center gap-2"
  >
    <img
      src="https://c.animaapp.com/mfdtd9diDt6snj/img/2702602-1.png"
      alt="Google icon"
      className="w-5 h-5"
    />
    Continue with Google
  </Button>
);

export const IiiLoginPage = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [globalError, setGlobalError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    const newErrors: Record<string, string> = {};
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    setErrors(newErrors);
    if (Object.keys(newErrors).length) return;

    setLoading(true);
    setGlobalError(null);
    setSuccess(false);

    // Simulate authentication request
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <main className="min-h-screen flex flex-col lg:grid lg:grid-cols-2">
      {/* Brand / Illustration Panel */}
      <section
        className={`${BRAND_GRADIENT} order-2 lg:order-1 flex items-center justify-center p-8 text-white relative overflow-hidden rounded-t-3xl lg:rounded-none`}
      >
        <div
          className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:16px_16px]"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-sm text-center space-y-6 animate-fade-up">
          <img
            src="https://c.animaapp.com/mfdtd9diDt6snj/img/with-bg-1.png"
            alt="Infoverse logo"
            className="w-24 h-24 mx-auto rounded-full shadow-lg"
          />
          <h2 className="text-3xl font-bold">Welcome Back!</h2>
          <p className="text-lg text-white/90">
            Continue your journey to success!
          </p>
        </div>
      </section>

      {/* Form Panel */}
      <section className="order-1 lg:order-2 flex flex-col items-center justify-center p-6 sm:p-12 space-y-6">
        <Card className="w-full max-w-md rounded-2xl shadow-lg animate-fade-up">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Log In</CardTitle>
          </CardHeader>
          <CardContent>
            {globalError && (
              <div
                role="alert"
                className="mb-6 flex items-center gap-2 rounded-2xl bg-destructive/10 p-3 text-sm text-destructive"
              >
                <AlertCircle className="h-4 w-4" />
                <span>{globalError}</span>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <FormField
                id="email"
                label="Email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errors.email}
              />
              <FormField
                id="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={errors.password}
              >
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 rounded-md p-1 text-gray-500 hover:text-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </FormField>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={remember}
                    onCheckedChange={(checked) => setRemember(Boolean(checked))}
                  />
                  <label htmlFor="remember" className="text-sm text-gray-600">
                    Keep me signed in
                  </label>
                </div>
                <a
                  href="#"
                  className="text-sm text-primary hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12 rounded-2xl"
              >
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Log In
              </Button>
              {success && (
                <p className="flex items-center gap-1 text-sm text-green-600">
                  <CheckCircle className="h-4 w-4" />
                  Logged in!
                </p>
              )}
              <div className="flex items-center gap-2">
                <Separator className="flex-1" />
                <span className="text-xs text-muted-foreground">OR</span>
                <Separator className="flex-1" />
              </div>
              <OAuthButton />
              <p className="text-center text-sm text-muted-foreground">
                Not a member yet?{" "}
                <a href="#" className="text-primary hover:underline">
                  Sign Up
                </a>
              </p>
            </form>
          </CardContent>
        </Card>

        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
          >
            <HelpCircle className="h-4 w-4" /> Help
          </a>
        </div>
      </section>
    </main>
  );
};

