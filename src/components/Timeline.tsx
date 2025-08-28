"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { getImagePath } from "@/lib/imagePath";

interface TimelineProps {
  milestones: {
    date: string;
    title: string;
    description: string;
    image: string;
    url?: string;
  }[];
}

export default function Timeline({ milestones }: TimelineProps) {
  // Sort milestones by date (oldest first)
  const sortedMilestones = [...milestones].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA.getTime() - dateB.getTime();
  });

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Instructions */}
      <div className="text-center mb-12">
        <p className="text-gray-400 text-sm sm:text-base">
          Our journey from the beginning to today
        </p>
      </div>

      {/* Vertical Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-purple-400 to-purple-300 sm:transform sm:-translate-x-1/2"></div>

        {/* Timeline Items */}
        <div className="space-y-8 sm:space-y-10">
          {sortedMilestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
              }`}
            >
              {/* Date Badge - Just above the timeline dot (centered with cards) */}
              <div className="absolute left-4 sm:left-1/2 top-20 sm:top-28 sm:transform sm:-translate-x-1/2 z-20">
                <div className="bg-purple-600 text-white px-3 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-lg border-2 border-purple-400 whitespace-nowrap transform -translate-y-8">
                  {milestone.date}
                </div>
              </div>

              {/* Timeline Node - Centered with cards */}
              <div className="absolute left-4 sm:left-1/2 top-24 sm:top-32 w-4 h-4 bg-purple-500 rounded-full border-4 border-gray-900 shadow-lg shadow-purple-500/50 sm:transform sm:-translate-x-1/2 z-10"></div>

              {/* Content Card */}
              <div className={`w-full sm:w-5/12 ml-7 mr-6 sm:ml-0 sm:mr-0 ${
                index % 2 === 0 ? 'sm:mr-auto sm:pr-8' : 'sm:ml-auto sm:pl-8'
              }`}>
                {milestone.url ? (
                  <a
                    href={milestone.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-[1.025] hover:shadow-2xl hover:shadow-purple-500/20 mt-8 sm:mt-0 cursor-pointer"
                  >
                    {/* Image */}
                    <div className="relative h-48 sm:h-56 overflow-hidden">
                      <Image
                        src={getImagePath(milestone.image)}
                        alt={milestone.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      {/* Link indicator */}
                      <div className="absolute top-4 right-4 w-8 h-8 bg-purple-500/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="group bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-[1.025] hover:shadow-2xl hover:shadow-purple-500/20 mt-8 sm:mt-0">
                    {/* Image */}
                    <div className="relative h-48 sm:h-56 overflow-hidden">
                      <Image
                        src={getImagePath(milestone.image)}
                        alt={milestone.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Connecting Line for Mobile */}
              <div className="sm:hidden absolute left-4 top-4 w-8 h-0.5 bg-purple-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Timeline End Dot */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.25, delay: 0.1 }}
          className="relative mt-8 sm:mt-10 flex justify-center"
        >
          <div className="absolute left-4 sm:left-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-gray-900 shadow-lg shadow-purple-500/50 sm:transform sm:-translate-x-1/2"></div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="relative mt-12 sm:mt-16"
        >
          <div className="text-center bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-lg rounded-2xl p-8 sm:p-10 border border-purple-500/20">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Be Part of Our Next Milestone
            </h3>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              Shape the future with blockchain. 
              Start your journey now.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300"
            >
              Join ABC Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
