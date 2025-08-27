import { useState } from 'react';
import { useRouter } from 'next/router';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Signup() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    localStorage.setItem('user', JSON.stringify({ name, email }));
    router.push('/license');
  };

  return (
    <div className="min-h-screen text-gray-900 p-6" style={{ backgroundColor: '#fdf2f8' }}>
      <div className="max-w-md mx-auto py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign up to license your content</h2>
        <div className="space-y-4">
          <Input 
            placeholder="Your name" 
            className="border-gray-300 bg-white text-gray-900" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          <Input 
            placeholder="Email address" 
            className="border-gray-300 bg-white text-gray-900" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <Button 
            onClick={handleSubmit} 
            className="w-full bg-green-500 hover:bg-green-600"
            disabled={!name || !email}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
