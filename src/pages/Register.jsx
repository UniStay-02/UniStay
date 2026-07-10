import React from 'react'
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
      const res = await fetch('/api/v1/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

         const data = await res.json();
 
      // The server decides if the account can be created — not the client.
      if (!res.ok) {
        throw new Error(data.message || 'Failed to create an account.');
      }
 
      // Expecting the backend to return something like:
      // { token: "...", user: { id, email, name, role } }
      const { token, user } = data;
 
      // Persist the real session so a page refresh doesn't log the user out.
      // If AuthContext already handles this internally, these two lines are
      // redundant and safe to remove.
      localStorage.setItem('auth_token', token);
      localStorage.setItem('auth_user', JSON.stringify(user));
 
      register(token, user);
 
      // Show a brief "Signed in as {name}" toast before redirecting.
      setToast({ name: user.name });
      setTimeout(() => {
        navigate('/login');
      }, 1200);
    } catch (err) {
      setError(err.message || 'Failed to create an account. Please try again.');
      setIsSubmitting(false);
    }
  };
  return (
    <div>


    </div>
  )
}

export default Register