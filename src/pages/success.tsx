import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { TALLY_CONFIG, TallyData } from '@/config/sheets';

interface LicenseData {
  link?: string;
  remix?: boolean;
  commercial?: boolean;
  price?: string;
  user?: { name: string; email: string };
}

export default function Success() {
  const [licenseData, setLicenseData] = useState<LicenseData>({});
  const [dataSent, setDataSent] = useState(false);
  const [dataStatus, setDataStatus] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const data = localStorage.getItem('license');
      if (data) {
        const parsedData = JSON.parse(data);
        setLicenseData(parsedData);
        
        // Send data to Tally form
        sendToTally(parsedData);
      }
    }
  }, []);

  const sendToTally = async (data: LicenseData) => {
    try {
      setDataStatus('Sending data to Tally form...');
      
      console.log('Sending data to Tally form:', {
        name: data.user?.name || '',
        email: data.user?.email || '',
        link: data.link || '',
        remix: data.remix || false,
        commercial: data.commercial || false,
        price: data.price || '',
        creatorScore: '87',
        tokensEarned: '100'
      });

      // Tally forms use a POST request with form data
      const formData = new FormData();
      formData.append(TALLY_CONFIG.FIELDS.NAME, data.user?.name || '');
      formData.append(TALLY_CONFIG.FIELDS.EMAIL, data.user?.email || '');
      formData.append(TALLY_CONFIG.FIELDS.LINK, data.link || '');
      formData.append(TALLY_CONFIG.FIELDS.REMIX, data.remix ? 'Yes' : 'No');
      formData.append(TALLY_CONFIG.FIELDS.COMMERCIAL, data.commercial ? 'Yes' : 'No');
      formData.append(TALLY_CONFIG.FIELDS.PRICE, data.price || '');
      formData.append(TALLY_CONFIG.FIELDS.CREATOR_SCORE, '87');
      formData.append(TALLY_CONFIG.FIELDS.TOKENS_EARNED, '100');

      const response = await fetch(TALLY_CONFIG.FORM_URL, {
        method: 'POST',
        body: formData,
      });

      console.log('Tally form response status:', response.status);
      console.log('Tally form response:', response);

      if (response.ok) {
        setDataSent(true);
        setDataStatus('✅ Data sent successfully to Tally form!');
        console.log('Data sent to Tally form successfully');
      } else {
        const errorText = await response.text();
        console.error('Failed to send data to Tally form:', response.status, errorText);
        setDataStatus(`❌ Failed to send data (${response.status}): ${errorText}`);
      }
    } catch (error) {
      console.error('Error sending data to Tally form:', error);
      setDataStatus(`❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  return (
    <div className="min-h-screen text-gray-900 p-6" style={{ backgroundColor: '#fdf2f8' }}>
      <div className="max-w-xl mx-auto py-12">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="text-3xl font-bold mb-2">License Created Successfully!</h1>
          <p className="text-gray-600">Your content is now protected on the blockchain</p>
          
          {/* Data Status Display */}
          <div className="mt-4 p-3 bg-blue-100 border border-blue-300 rounded-lg">
            <p className="text-blue-700 text-sm">{dataStatus}</p>
          </div>
          
          {dataSent && (
            <div className="mt-4 p-3 bg-green-100 border border-green-300 rounded-lg">
              <p className="text-green-700 text-sm">✅ Your data has been saved to our records via Tally</p>
            </div>
          )}
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
