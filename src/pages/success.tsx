import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { GOOGLE_SHEETS_CONFIG, SheetData } from '@/config/sheets';

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
        
        // Send data to Google Sheets
        sendToGoogleSheets(parsedData);
      }
    }
  }, []);

  const sendToGoogleSheets = async (data: LicenseData) => {
    try {
      setDataStatus('Sending data to Google Sheets...');
      
      console.log('Sending data to Google Sheets:', {
        name: data.user?.name || '',
        email: data.user?.email || '',
        link: data.link || '',
        remix: data.remix || false,
        commercial: data.commercial || false,
        price: data.price || '',
        creatorScore: '87',
        tokensEarned: '100'
      });

      const response = await fetch(GOOGLE_SHEETS_CONFIG.SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.user?.name || '',
          email: data.user?.email || '',
          link: data.link || '',
          remix: data.remix || false,
          commercial: data.commercial || false,
          price: data.price || '',
          creatorScore: '87',
          tokensEarned: '100'
        } as SheetData),
      });

      console.log('Google Sheets response status:', response.status);
      console.log('Google Sheets response:', response);

      if (response.ok) {
        const responseData = await response.text();
        console.log('Google Sheets response data:', responseData);
        
        setDataSent(true);
        setDataStatus('✅ Data sent successfully to Google Sheets!');
        console.log('Data sent to Google Sheets successfully');
      } else {
        const errorText = await response.text();
        console.error('Failed to send data to Google Sheets:', response.status, errorText);
        setDataStatus(`❌ Failed to send data (${response.status}): ${errorText}`);
      }
    } catch (error) {
      console.error('Error sending data to Google Sheets:', error);
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
              <p className="text-green-700 text-sm">✅ Your data has been saved to our records</p>
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
