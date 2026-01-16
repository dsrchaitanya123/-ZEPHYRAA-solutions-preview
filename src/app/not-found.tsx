import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <h2 className="text-4xl font-bold mb-4">404 - Page Not Found</h2>
      <p className="text-slate-600 dark:text-slate-400 mb-8">
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        href="/" 
        className="px-6 py-3 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 transition"
      >
        Return Home
      </Link>
    </div>
  )
}