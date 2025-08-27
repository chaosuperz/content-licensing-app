import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Registering() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/success');
    }, 3000);
    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen text-gray-900" style={{ backgroundColor: '#fdf2f8' }}>
      <div className="text-center">
        <div className="text-2xl mb-4 animate-pulse">🔗</div>
        <div className="text-xl mb-2">Registering on-chain...</div>
        <div className="text-sm text-gray-600">This may take a few moments</div>
        <div className="mt-4 w-16 h-1 bg-gray-300 mx-auto rounded-full overflow-hidden">
          <div className="h-full bg-green-500 animate-pulse rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
