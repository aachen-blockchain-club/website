import Link from "next/link";
import CryptoBackground from "@/components/CryptoBackground";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white">
      <CryptoBackground />
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center px-4 sm:px-6">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

        <div className="relative z-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Aachen Blockchain Club
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-gray-300">
            empowering Aachen, one block at a time
          </p>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-400">
            Your gateway to the world of blockchain technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/events"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition-all duration-300 text-center"
            >
              Upcoming Events
            </Link>
            <Link
              href="/about"
              className="w-full sm:w-auto px-6 py-3 rounded-full border border-purple-600 hover:bg-purple-600/20 transition-all duration-300 text-center"
            >
              Meet the Team
            </Link>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-64 sm:w-96 h-64 sm:h-96 -top-32 sm:-top-48 -left-32 sm:-left-48 bg-purple-500/30 rounded-full blur-3xl animate-blob" />
          <div className="absolute w-64 sm:w-96 h-64 sm:h-96 -bottom-32 sm:-bottom-48 -right-32 sm:-right-48 bg-blue-500/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-purple-400">
          Member Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-lg">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-purple-400">
              Learn
            </h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Access educational resources and workshops led by blockchain
              experts. Dive deep into research and hands-on experiences with
              cutting-edge technology.
            </p>
          </div>
          <div className="p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-lg">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-purple-400">
              Connect
            </h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Network with fellow blockchain enthusiasts and industry
              professionals. Join a dynamic community focused on blockchain
              innovation.
            </p>
          </div>
          <div className="p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-lg">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-purple-400">
              Build
            </h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Participate in hackathons, gain hands-on experience with
              blockchain projects, and develop your career in the blockchain
              field.
            </p>
          </div>
        </div>
      </div>

      {/* Latest Updates Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-400">
          Latest Updates
        </h2>
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-4 text-purple-400">
            Real World Assets (RWAs)- Key bridge between decentralized and
            traditional finance
          </h3>
          <p className="text-gray-300 mb-4">
            Explore how Web 3.0, Blockchain, and RWAs are transforming the
            financial landscape. Join us in understanding the bridge between
            decentralized and traditional finance.
          </p>
          <Link
            href="/blog"
            className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
          >
            Read more →
          </Link>
        </div>
      </div>
    </div>
  );
}
