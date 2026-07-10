import React from 'react'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, EyeOff, Loader2, CheckCircle2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

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
    <div>

    </div>
  )
}

export default Login