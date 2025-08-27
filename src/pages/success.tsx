import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface LicenseData {
  link?: string;
  remix?: boolean;
  commercial?: boolean;
  price?: string;
  user?: { name: string; email: string };
}

export default function Success() {
  const [licenseData, setLicenseData] = useState<LicenseData>({});

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const data = localStorage.getItem('license');
      if (data) {
        setLicenseData(JSON.parse(data));
      }
    }
  }, []);

  return (
    <div className="min-h-screen text-gray-900 p-6" style={{ backgroundColor: '#fdf2f8' }}>
      <div className="max-w-xl mx-auto py-12">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="text-3xl font-bold mb-2">License Created Successfully!</h1>
          <p className="text-gray-600">Your content is now protected on the blockchain</p>
        </div>

        <div className="bg-white rounded-lg p-6 mb-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">License Details</h2>
          <div className="space-y-3">
            {licenseData.link && (
              <p className="flex justify-between">
                <span>🔗 Link:</span>
                <span className="text-gray-600 break-all">{licenseData.link}</span>
              </p>
            )}
            <p className="flex justify-between">
              <span>🔄 Remix allowed:</span>
              <span className="text-gray-600">{licenseData.remix ? 'Yes' : 'No'}</span>
            </p>
            <p className="flex justify-between">
              <span>💼 Commercial use:</span>
              <span className="text-gray-600">{licenseData.commercial ? 'Yes' : 'No'}</span>
            </p>
            <p className="flex justify-between">
              <span>💰 Price:</span>
              <span className="text-gray-600">{licenseData.price}</span>
            </p>
            {licenseData.user && (
              <p className="flex justify-between">
                <span>👤 Creator:</span>
                <span className="text-gray-600">{licenseData.user.name}</span>
              </p>
            )}
          </div>
        </div>

        <div className="bg-green-100 border border-green-300 rounded-lg p-6 mb-6">
          <div className="text-center">
            <div className="text-2xl mb-2">🧠</div>
            <div className="text-xl font-bold mb-1 text-green-800">Creator Score: 87 / 100</div>
            <div className="text-lg text-green-700">You earned <strong>100 CREATR tokens</strong></div>
            <p className="text-sm text-green-600 mt-2">
              Your content quality and licensing choices earned you bonus tokens!
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/license" className="flex-1">
            <Button className="w-full bg-gray-600 hover:bg-gray-700">
              Create Another License
            </Button>
          </Link>
          <Link href="/" className="flex-1">
            <Button className="w-full bg-green-500 hover:bg-green-600">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
