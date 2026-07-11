import React from 'react'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, EyeOff, Loader2, CheckCircle2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

function Login() {
const { login } = useAuth();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [toast, setToast] = useState(null); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);


    
    try {
      // Connect your actual endpoint here:
      // const res = await fetch('/api/v1/auth/login', { ... })
 
      // Simulated API Delay & Response
      await new Promise((resolve) => setTimeout(resolve, 1200));
 
      // Simulated validation — reject obviously-too-short passwords so the
      // error state actually gets exercised in this demo.
      if (formData.password.length < 4) {
        throw new Error('Password must be at least 4 characters.');
      }
 
      // Extract name dynamically from the typed email (e.g., "alex.dev@gmail.com" -> "Alex Dev")
      const emailPrefix = formData.email.split('@')[0];
      const dynamicName = emailPrefix
        .split(/[._-]/) // Split by dots, underscores, or hyphens
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
        .join(' ');
 
      const fakeToken = "jwt-access-token-example";
      const fakeUser = {
        id: "u-secure-1",
        email: formData.email,
        name: dynamicName || "User", // Fallback if formatting goes sideways
        role: "user"
      };
 
      // Persist the fake session so a page refresh doesn't log the user out.
      // If AuthContext already handles this internally, these two lines are
      // redundant and safe to remove.
      localStorage.setItem('auth_token', fakeToken);
      localStorage.setItem('auth_user', JSON.stringify(fakeUser));
 
      login(fakeToken, fakeUser);
 
      // Show a brief "Signed in as {name}" toast before redirecting.
      setToast({ name: fakeUser.name });
      setTimeout(() => {
        navigate('/');
      }, 1200);
    } catch (err) {
      setError(err.message || 'Invalid email or password. Please try again.');
      setIsSubmitting(false);
    }
  };
  return (
    
        <div className="relative flex min-h-[80vh] items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Toast */}
      {toast && (
        <div className="fixed top-4 right-4 z-50 flex items-center gap-2 rounded-md border bg-background px-4 py-3 shadow-lg animate-in fade-in slide-in-from-top-2">
          <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
          <span className="text-sm font-medium">Signed in as {toast.name}</span>
        </div>
      )}
 
      <Card className="w-full max-w-md shadow-lg border-muted">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold tracking-tight text-center">
            Welcome back
          </CardTitle>
          <CardDescription className="text-center">
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
 
        <form onSubmit={handleSubmit}>
          <CardContent className="grid gap-4">
            {error && (
              <div className="p-3 text-sm font-medium text-destructive bg-destructive/10 rounded-md border border-destructive/20">
                {error}
              </div>
            )}
 
            <div className="grid gap-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full focus-visible:ring-[#0E1733]"
              />
            </div>
 
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <a href="#forgot" className="text-xs text-[#0E1733] hover:text-[#F98603] hover:underline font-medium">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="pr-10 focus-visible:ring-[#0E1733]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
          </CardContent>
 
          <CardFooter className="flex flex-col gap-4 mt-2">
            <Button
              type="submit"
              className="w-full font-medium bg-[#0E1733] hover:bg-[#0E1733]/90 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing In...
                </>
              ) : (
                'Sign In'
              )}
            </Button>
 
            <p className="text-sm text-center text-muted-foreground w-full">
              Don't have an account?{' '}
              <Link to="/register" className="font-medium text-[#0E1733] hover:text-[#F98603] hover:underline border-none p-0 cursor-pointer inline">
                Sign up
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>

    
  )
}

export default Login;