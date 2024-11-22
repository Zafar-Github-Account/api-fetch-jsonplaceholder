import Link from 'next/link';

const Page = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Link href="/api/external">
        <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-md transition-all duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Welcome to the Homepage API
        </button>
      </Link>
    </div>
  );
};

export default Page;
