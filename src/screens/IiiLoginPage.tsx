import React, { useState } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Input } from "../components/ui/input";
import { Separator } from "../components/ui/separator";
import { cn } from "../lib/utils";

const HERO_GRADIENT = "bg-gradient-to-br from-primary via-primary/90 to-secondary";

interface FormErrors {
  email?: string;
  password?: string;
  general?: string;
  success?: string;
}

const OAuthButton = (): JSX.Element => (
  <Button
    type="button"
    variant="outline"
    className="w-full flex items-center justify-center gap-2"
  >
    <img
      src="https://c.animaapp.com/mfdtd9diDt6snj/img/2702602-1.png"
      alt="Google"
      className="h-5 w-5"
    />
    Continue with Google
  </Button>
);

interface FormFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  error?: string;
}

const FormField = ({ id, label, error, className, ...props }: FormFieldProps) => (
  <div className="space-y-2">
    <label htmlFor={id} className="block text-sm font-medium">
      {label}
    </label>
    <Input
      id={id}
      aria-describedby={error ? `${id}-error` : undefined}
      className={cn(
        "focus-visible:ring-primary",
        error && "border-red-500 focus-visible:ring-red-500",
        className,
      )}
      {...props}
    />
    {error ? (
      <p id={`${id}-error`} className="text-sm text-red-600">
        {error}
      </p>
    ) : null}
  </div>
);

export const IiiLoginPage = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = () => {
    const newErrors: FormErrors = {};
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      setErrors({});
      setTimeout(() => {
        setLoading(false);
        setErrors({ success: "Signed in successfully! Redirecting..." });
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Form Section */}
      <div className="flex flex-1 items-center justify-center p-6 order-1 md:order-2">
        <Card className="w-full max-w-md shadow-lg rounded-2xl animate-fade-up">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">Log in to Infoverse</CardTitle>
            <CardDescription>Continue your journey to success!</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              {errors.general && (
                <div
                  role="alert"
                  className="p-3 text-sm text-red-600 bg-red-50 rounded-md"
                >
                  {errors.general}
                </div>
              )}
              {errors.success && (
                <div
                  role="status"
                  className="p-3 text-sm text-green-600 bg-green-50 rounded-md"
                >
                  {errors.success}
                </div>
              )}

              <FormField
                id="email"
                label="Email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errors.email}
              />

              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    aria-describedby={
                      errors.password ? "password-error" : undefined
                    }
                    className={cn(
                      "pr-10 focus-visible:ring-primary",
                      errors.password &&
                        "border-red-500 focus-visible:ring-red-500",
                    )}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                    <span className="sr-only">
                      {showPassword ? "Hide password" : "Show password"}
                    </span>
                  </button>
                </div>
                {errors.password ? (
                  <p id="password-error" className="text-sm text-red-600">
                    {errors.password}
                  </p>
                ) : null}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={remember}
                    onCheckedChange={(c) => setRemember(Boolean(c))}
                  />
                  <label htmlFor="remember" className="text-sm">
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

              <Button type="submit" disabled={loading} className="w-full">
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Log In
              </Button>

              <div className="flex items-center gap-2">
                <Separator className="flex-1" />
                <span className="text-xs text-muted-foreground">OR</span>
                <Separator className="flex-1" />
              </div>

              <OAuthButton />
            </form>
          </CardContent>
          <CardFooter className="justify-center text-sm">
            Not a member yet?
            <a href="#" className="ml-1 text-primary hover:underline">
              Sign Up
            </a>
          </CardFooter>
        </Card>
      </div>

      {/* Brand Section */}
      <div
        className={cn(
          "relative flex flex-1 items-center justify-center p-8 text-white order-2 md:order-1",
          HERO_GRADIENT,
        )}
      >
        <div
          className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Zz48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IndoaXRlIi8+PGNpcmNsZSBjeD0iMyIgY3k9IjMiIHI9IjEiIGZpbGw9IiNmZmYiLz48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxIiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPg==')] bg-repeat pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative z-10 text-center md:text-left space-y-6 max-w-md">
          <img
            src="https://c.animaapp.com/mfdtd9diDt6snj/img/with-bg-1.png"
            alt="Infoverse logo"
            className="w-24 h-24 rounded-full mx-auto md:mx-0"
          />
          <h2 className="text-3xl font-bold">Welcome to Infoverse</h2>
          <p className="text-lg opacity-90">
            Learn, grow, and reach your goals with us.
          </p>
        </div>
      </div>
    </div>
  );
};
