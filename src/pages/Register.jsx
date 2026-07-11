import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, EyeOff, Loader2, CheckCircle2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const { register } = useAuth();
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
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
 
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
 
    setIsSubmitting(true);

        try {
      // No backend yet — using mock data for now.
      // Swap this block for a real fetch('/api/v1/auth/register', ...) once
      // the backend exists.
 
      await new Promise((resolve) => setTimeout(resolve, 1200));
 
      const fakeToken = "jwt-access-token-example";
      const fakeUser = { id: "u-secure-2", email: formData.email, name: formData.name, role: "user" };
 
      // register() (from AuthContext) already persists to localStorage.
      register(fakeToken, fakeUser);
 
      // Show a brief "Account created" toast before redirecting.
      setToast({ name: fakeUser.name });
      setTimeout(() => {
        navigate('/login');
      }, 1200);
    } catch (err) {
      setError(err.message || 'Failed to create an account. Please try again.');
      setIsSubmitting(false);
    }
  };
  return (
       <div className="relative flex min-h-[80vh] items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Toast */}
      {toast && (
        <div className="fixed top-4 right-4 z-50 flex items-center gap-2 rounded-md border bg-background px-4 py-3 shadow-lg animate-in fade-in slide-in-from-top-2">
          <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
          <span className="text-sm font-medium">Account created for {toast.name}</span>
        </div>
      )}
 
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold tracking-tight text-center">
            Create an account
          </CardTitle>
          <CardDescription className="text-center">
            Enter your details below to set up your profile
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
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                required
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
                className="field-input"
              />
            </div>
 
            <div className="field-group">
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
                className="field-input"
              />
            </div>
 
            <div className="field-group">
              <Label htmlFor="password">Password</Label>
              <div className="password-wrapper">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="field-input password-input"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="password-toggle"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
 
            <div className="field-group">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type={showPassword ? 'text' : 'password'}
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                disabled={isSubmitting}
                className="field-input"
              />
            </div>
          </CardContent>
 
          <CardFooter className="card-footer">
            <Button
              type="submit"
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="spinner" />
                  Creating Account...
                </>
              ) : (
                'Create Account'
              )}
            </Button>
 
            <p className="footer-text">
              Already have an account?{' '}
              <Link to="/login" className="footer-link">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>

  )
}

export default Register