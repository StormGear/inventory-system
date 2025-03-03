import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-gray-800 animate-bounce">404</h1>
                <h2 className="text-4xl font-semibold text-gray-600 mt-4">Page Not Found</h2>
                <p className="text-gray-500 mt-4 mb-8">
                    Oops! The page you&apos;re looking for doesn&apos;t exist.
                </p>
                <Link 
                    href="/" 
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg
                                         hover:bg-blue-700 transition-colors duration-300
                                         transform hover:scale-105"
                >
                    Return Home
                </Link>
            </div>
        </div>
    );
}