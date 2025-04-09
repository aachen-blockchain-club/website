"use client";

import Image from "next/image";
import { events } from "@/data/events";
import { Event } from "@/types/event";
import Link from "next/link";
import { useState } from "react";

const EventCard = ({ event }: { event: Event }) => {
  const eventDate = new Date(event.date);
  const formattedDate = eventDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-300">
      {event.image && (
        <div className="relative h-40 sm:h-48 w-full">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 mb-3 sm:mb-4">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
              {event.title}
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm">
              {formattedDate} at {event.time}
            </p>
            <p className="text-gray-400 text-xs sm:text-sm">{event.location}</p>
          </div>
          <span
            className={`self-start px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
              event.type === "workshop"
                ? "bg-blue-500/20 text-blue-400"
                : event.type === "meetup"
                ? "bg-green-500/20 text-green-400"
                : event.type === "conference"
                ? "bg-purple-500/20 text-purple-400"
                : "bg-orange-500/20 text-orange-400"
            }`}
          >
            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
          </span>
        </div>

        <p className="text-gray-300 text-sm sm:text-base mb-4">
          {event.description}
        </p>

        {event.status === "upcoming" && event.registrationLink && (
          <Link
            href={event.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto text-center px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-full text-sm transition-colors duration-300"
          >
            Register Now
          </Link>
        )}
      </div>
    </div>
  );
};

export default function EventsPage() {
  const [showUpcoming, setShowUpcoming] = useState(true);
  const upcomingEvents = events.filter((event) => event.status === "upcoming");
  const pastEvents = events.filter((event) => event.status === "past");

  const displayedEvents = showUpcoming ? upcomingEvents : pastEvents;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Events
        </h1>
        <p className="text-center text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto text-base sm:text-lg">
          Join us for exciting blockchain events, workshops, and meetups.
        </p>

        {/* Filter Toggle */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="inline-flex rounded-full bg-white/5 p-1">
            <button
              onClick={() => setShowUpcoming(true)}
              className={`px-4 py-2 text-sm rounded-full transition-colors duration-300 ${
                showUpcoming
                  ? "bg-purple-600 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setShowUpcoming(false)}
              className={`px-4 py-2 text-sm rounded-full transition-colors duration-300 ${
                !showUpcoming
                  ? "bg-purple-600 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Past
            </button>
          </div>
        </div>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-purple-400">
            {showUpcoming ? "Upcoming Events" : "Past Events"}
          </h2>
          {displayedEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {displayedEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <p className="text-gray-400 text-center text-base sm:text-lg">
              {showUpcoming
                ? "No upcoming events at the moment. Check back soon!"
                : "No past events to display."}
            </p>
          )}
        </section>
      </div>
    </div>
  );
}
