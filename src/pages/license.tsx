import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

export default function License() {
  const router = useRouter();
  const [link, setLink] = useState('');
  const [remix, setRemix] = useState(false);
  const [commercial, setCommercial] = useState(false);
  const [price, setPrice] = useState('Free');
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleSubmit = () => {
    const licenseData = { link, remix, commercial, price, user };
    localStorage.setItem('license', JSON.stringify(licenseData));
    router.push('/registering');
  };

  return (
    <div className="min-h-screen text-gray-900 p-6" style={{ backgroundColor: '#fdf2f8' }}>
      <div className="max-w-xl mx-auto py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Welcome, {user.name || 'creator'}! Let's license your content.</h2>
        
        <div className="space-y-6">
          <Input 
            placeholder="Paste social media link..." 
            className="border-gray-300 bg-white text-gray-900" 
            value={link} 
            onChange={(e) => setLink(e.target.value)} 
          />
          
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="remix" 
                checked={remix} 
                onCheckedChange={(checked) => setRemix(checked as boolean)} 
              />
              <label htmlFor="remix" className="text-sm font-medium">Allow Remix</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="commercial" 
                checked={commercial} 
                onCheckedChange={(checked) => setCommercial(checked as boolean)} 
              />
              <label htmlFor="commercial" className="text-sm font-medium">Allow Commercial Use</label>
            </div>
          </div>
          
          <select 
            className="w-full p-3 bg-white text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)}
          >
            <option>Free</option>
            <option>0.01 ETH</option>
            <option>1 USDC</option>
          </select>
          
          <Button 
            onClick={handleSubmit} 
            className="w-full bg-green-500 hover:bg-green-600"
            disabled={!link}
          >
            Simulate Registration
          </Button>
        </div>
      </div>
    </div>
  );
}
