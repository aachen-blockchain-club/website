import Image from "next/image";
import Link from "next/link";
import CryptoBackground from "@/components/CryptoBackground";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white">
      <CryptoBackground />
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Aachen Blockchain Club
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-300">
            empowering Aachen, one block at a time
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-400">
            Your gateway to the world of blockchain technology
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/events"
              className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition-all duration-300"
            >
              Upcoming Events
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 rounded-full border border-purple-600 hover:bg-purple-600/20 transition-all duration-300"
            >
              Meet the Team
            </Link>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 -top-48 -left-48 bg-purple-500/30 rounded-full blur-3xl animate-blob" />
          <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-blue-500/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-400">
          Member Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg">
            <h3 className="text-xl font-bold mb-4 text-purple-400">Learn</h3>
            <p className="text-gray-300">
              Access educational resources and workshops led by blockchain
              experts. Dive deep into research and hands-on experiences with
              cutting-edge technology.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg">
            <h3 className="text-xl font-bold mb-4 text-purple-400">Connect</h3>
            <p className="text-gray-300">
              Network with fellow blockchain enthusiasts and industry
              professionals. Join a dynamic community focused on blockchain
              innovation.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg">
            <h3 className="text-xl font-bold mb-4 text-purple-400">Build</h3>
            <p className="text-gray-300">
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
