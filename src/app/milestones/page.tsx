import { milestones } from "@/data/milestones";
import Timeline from "@/components/Timeline";

export default function MilestonesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Club History Section */}
        <section className="mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Our Journey
          </h1>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            Explore key milestones which have shaped Aachen Blockchain Club
            into what it is today.
          </p>
          <Timeline milestones={milestones} />
        </section>
      </div>
    </div>
  );
}
