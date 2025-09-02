import Image from "next/image";
import { getImagePath } from "@/lib/imagePath";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Events
        </h1>
        <p className="text-center text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto text-base sm:text-lg">
          Discover our upcoming blockchain events, workshops and meetups. Perfect for blockchain enthusiasts and newcomers.
        </p>

        <section className="flex justify-center">
          <div className="w-full max-w-4xl">
            <iframe
              src="https://lu.ma/embed/calendar/cal-2JCUcakabQvW2Ou/events?lt=dark"
              width="100%"
              height="600"
              frameBorder="0"
              style={{ border: "1px solid #a855f7", borderRadius: "4px" }}
              allowFullScreen={true}
              aria-hidden="true"
              tabIndex={0}
            />
          </div>
        </section>

        <section className="flex flex-col items-center mt-12 sm:mt-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Join Our WhatsApp Community
          </h2>
          <p className="text-center text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto text-base sm:text-lg">
            Be the first to know about new events, join our WhatsApp community to stay in the loop.
          </p>
          <div className="w-full max-w-md flex justify-center">
            <div className="relative w-64 h-64 border border-purple-500 rounded-lg overflow-hidden">
              <Image
                src={getImagePath("/images/whatsapp.svg")}
                alt="Join Aachen Blockchain Club WhatsApp Community"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
