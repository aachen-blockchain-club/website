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
        <div className="relative h-48 w-full">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
            <p className="text-gray-400 text-sm">
              {formattedDate} at {event.time}
            </p>
            <p className="text-gray-400 text-sm">{event.location}</p>
          </div>
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
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

        <p className="text-gray-300 mb-4">{event.description}</p>

        {event.status === "upcoming" && event.registrationLink && (
          <Link
            href={event.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-full text-sm transition-colors duration-300"
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
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Events
        </h1>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Join us for exciting blockchain events, workshops, and meetups in
          Aachen.
        </p>

        {/* Toggle Button */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-full p-1 bg-purple-900/50">
            <button
              onClick={() => setShowUpcoming(true)}
              className={`px-6 py-2 rounded-full text-sm transition-all duration-300 ${
                showUpcoming
                  ? "bg-purple-600 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setShowUpcoming(false)}
              className={`px-6 py-2 rounded-full text-sm transition-all duration-300 ${
                !showUpcoming
                  ? "bg-purple-600 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Past Events
            </button>
          </div>
        </div>

        {/* Events Section */}
        <section>
          <h2 className="text-2xl font-bold mb-8 text-purple-400">
            {showUpcoming ? "Upcoming Events" : "Past Events"}
          </h2>
          {displayedEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {displayedEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <p className="text-gray-400 text-center">
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
