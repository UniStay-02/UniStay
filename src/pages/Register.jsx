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

  
  return (
    <div>


    </div>
  )
}

export default Register