"use client";

import { useEffect, useState } from "react";
// If you want to use react-icons, uncomment these imports:
// import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function Countdown() {
  // Set your actual event date and time for the graduation project discussion
  // The user initially asked for "Monday 18/8/2025" and "12:30 PM"
  // Let's make sure the targetDate matches this if possible.
  // Note: August 18, 2025 is a Monday.
  const targetDate = new Date("2025-08-18T12:30:00"); // Monday, August 18, 2025 at 12:30 PM

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime(); // Use .getTime() for reliable comparison

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [targetDate]); // Add targetDate to dependency array to re-run effect if it changes (though here it's constant)

  return (
    // Outer container for the entire card (countdown + details)
    <div className="bg-gray-800/80 backdrop-blur-sm p-8  rounded-2xl shadow-xl text-center text-white max-w-md mx-auto border border-cyan-700">

      {/* Countdown Section */}
      <div className="text-4xl sm:text-5xl px-12 font-extrabold flex justify-center items-baseline gap-4 mb-6 text-neon font-Orbitron animate-pulse-light">
        <div className="relative">
          {timeLeft.days}
          <span className="block text-sm font-normal text-gray-400 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full">أيام</span>
        </div>
        <div className="text-gray-500">:</div>
        <div className="relative">
          {timeLeft.hours}
          <span className="block text-sm font-normal text-gray-400 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full">ساعات</span>
        </div>
        <div className="text-gray-500">:</div>
        <div className="relative">
          {timeLeft.minutes}
          <span className="block text-sm font-normal text-gray-400 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full">دقائق</span>
        </div>
        <div className="text-gray-500">:</div>
        <div className="relative">
          {timeLeft.seconds}
          <span className="block text-sm font-normal text-gray-400 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full">ثواني</span>
        </div>
      </div>

      {/* Visual Separator */}
      <div className="border-t border-cyan-700 pt-6 mt-6">
        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-cyan-400 font-Orbitron uppercase tracking-wider">
موعد مناقشة المشروع        </h3>

        {/* Event Details Section */}
        <div className="space-y-4 text-left">
          {/* Date */}
          <div className="flex items-center gap-4 p-3 bg-gray-700/50 rounded-lg shadow-inner border border-gray-600">
            <span className="text-cyan-400 text-2xl">🗓️</span> {/* Or <FaCalendarAlt className="text-cyan-400 text-2xl" /> */}
            <p className="text-lg sm:text-xl font-medium">الاثنين 18/8/2025</p>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4 p-3 bg-gray-700/50 rounded-lg shadow-inner border border-gray-600">
            <span className="text-cyan-400 text-2xl">📍</span> {/* Or <FaMapMarkerAlt className="text-cyan-400 text-2xl" /> */}
            <p className="text-lg sm:text-xl font-medium">المدرج العاشر - البناء الأحمر</p>
          </div>

          {/* Time */}
          <div className="flex items-center gap-4 p-3 bg-gray-700/50 rounded-lg shadow-inner border border-gray-600">
            <span className="text-cyan-400 text-2xl">⏰</span> {/* Or <FaClock className="text-cyan-400 text-2xl" /> */}
            <p className="text-lg sm:text-xl font-medium">12:30 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}