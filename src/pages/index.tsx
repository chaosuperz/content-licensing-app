import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-gray-900 p-6" style={{ backgroundColor: '#fdf2f8' }}>
      <h1 className="text-4xl font-bold mb-4 text-center">License your content. Get rewarded.</h1>
      <p className="text-lg mb-8 text-center max-w-xl text-gray-700">
        Protect your videos, posts, and images using AI + Story Protocol. No blockchain wallet needed (for now).
      </p>
      <Link href="/signup">
        <Button className="text-lg px-6 py-3 bg-green-500 hover:bg-green-600">Start Licensing</Button>
      </Link>
    </div>
  );
}
