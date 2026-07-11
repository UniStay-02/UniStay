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
       <div className="register-page">
      {/* Toast */}
      {toast && (
        <div className="toast">
          <CheckCircle2 className="toast-icon" />
          <span className="toast-text">Account created for {toast.name}</span>
        </div>
      )}
 
      <Card className="card">
        <CardHeader className="card-header">
          <CardTitle className="card-title">
            Create an account
          </CardTitle>
          <CardDescription className="card-description">
            Enter your details below to set up your profile
          </CardDescription>
        </CardHeader>
 
        <form onSubmit={handleSubmit}>
          <CardContent className="card-content">
            {error && (
              <div className="error-banner">
                {error}
              </div>
            )}
 
            <div className="field-group">
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