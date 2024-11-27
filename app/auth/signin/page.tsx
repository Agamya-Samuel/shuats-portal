'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function SignIn() {
  const router = useRouter();
  const [error, setError] = useState('');
  
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await signIn('credentials', {
        email: formData.get('email'),
        password: formData.get('password'),
        redirect: false,
      });

      if (response?.error) {
        setError(response.error);
      } else {
        router.push('/');
        router.refresh();
      }
		} catch (error) {
			setError(`An error occurred during sign in: ${error}`);
		}
	}

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
      <div className="bg-white/5 p-8 rounded-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>
        
        {error && (
          <div className="bg-red-500/10 text-red-500 p-3 rounded-md mb-4">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm mb-2">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              className="w-full bg-white/10"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm mb-2">
              Password
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              className="w-full bg-white/10"
            />
          </div>
          
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
} 