"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

interface TimelineProps {
  milestones: {
    id: number;
    date: string;
    title: string;
    description: string;
    image: string;
  }[];
}

const PlayIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M8 5v14l11-7z" />
  </svg>
);

const PauseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
);

const ResetIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M12 5V2L7 7l5 5V9c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" />
  </svg>
);

export default function Timeline({ milestones }: TimelineProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const progressInterval = useRef<number | null>(null);
  const lastUpdateTime = useRef<number>(Date.now());

  // Smooth auto-play functionality
  useEffect(() => {
    if (isPlaying) {
      const animate = () => {
        const now = Date.now();
        const deltaTime = now - lastUpdateTime.current;
        lastUpdateTime.current = now;

        setProgress((prev) => {
          // Calculate smooth progress based on time elapsed
          const increment = (deltaTime / 30) * 0.25; // Adjust speed here
          const newProgress = prev + increment;

          if (newProgress >= 100) {
            setIsPlaying(false);
            return 100;
          }

          const newIndex = Math.floor((newProgress / 100) * milestones.length);
          if (newIndex !== activeIndex && newIndex < milestones.length) {
            setActiveIndex(newIndex);
          }

          return newProgress;
        });

        if (isPlaying) {
          progressInterval.current = requestAnimationFrame(animate);
        }
      };

      lastUpdateTime.current = Date.now();
      progressInterval.current = requestAnimationFrame(animate);
    }

    return () => {
      if (progressInterval.current) {
        cancelAnimationFrame(progressInterval.current);
      }
    };
  }, [isPlaying, milestones.length, activeIndex]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setProgress(value);
    setActiveIndex(Math.floor((value / 100) * milestones.length));
    setIsPlaying(false);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    lastUpdateTime.current = Date.now();
  };

  const handleReset = () => {
    setProgress(0);
    setActiveIndex(0);
    setIsPlaying(true);
    lastUpdateTime.current = Date.now();
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 py-12">
      {/* Main Content */}
      <div className="relative h-[500px] mb-8 sm:mb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute inset-0 flex flex-col sm:flex-row gap-8 sm:gap-16 items-center"
          >
            <motion.div
              className="w-full sm:w-1/2 relative h-[200px] sm:h-full rounded-3xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Image
                src={milestones[activeIndex].image}
                alt={milestones[activeIndex].title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </motion.div>
            <div className="w-full sm:w-1/2 p-4 sm:p-8 space-y-4 sm:space-y-6">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-purple-400 text-lg sm:text-xl font-medium"
              >
                {milestones[activeIndex].date}
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                className="text-2xl sm:text-4xl font-bold text-white"
              >
                {milestones[activeIndex].title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="text-gray-300 text-base sm:text-xl leading-relaxed"
              >
                {milestones[activeIndex].description}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Timeline Controls */}
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Bar */}
        <div className="relative h-24 flex items-center">
          <div className="absolute left-0 right-0 h-1.5 bg-gray-700 rounded-full">
            <motion.div
              className="absolute left-0 h-full bg-purple-500 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
            {milestones.map((_, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1, type: "spring" }}
                className={`absolute w-4 h-4 -mt-[5px] rounded-full cursor-pointer transition-all duration-300 hover:scale-150
                  ${index <= activeIndex ? "bg-purple-500" : "bg-gray-600"}`}
                style={{ left: `${(index / (milestones.length - 1)) * 100}%` }}
                onClick={() => {
                  setActiveIndex(index);
                  setProgress((index / (milestones.length - 1)) * 100);
                  setIsPlaying(false);
                }}
              />
            ))}
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleSliderChange}
            className="absolute w-full appearance-none bg-transparent cursor-pointer"
            style={{
              height: "24px",
              WebkitAppearance: "none",
              background: "transparent",
            }}
          />
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-6 mt-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleReset}
            className="p-4 rounded-full bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 transition-colors"
          >
            <ResetIcon />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePlayPause}
            className="p-4 rounded-full bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 transition-colors"
          >
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </motion.button>
        </div>
      </div>
    </div>
  );
}
