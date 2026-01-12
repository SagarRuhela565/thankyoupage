"use client";

import React, { useEffect, useState } from "react";

interface LoaderProps {
  onFinish: () => void;
  duration?: number; // total duration in seconds
}

const ThankLoader: React.FC<LoaderProps> = ({ onFinish, duration = 10 }) => {
  const messages = [
    "Processing your request...",
    "Hold on, we're submitting your data...",
    "Almost there...",
    "Validating your information...",
    "Just a moment..."
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    // calculate interval based on duration / number of messages
    const messageInterval = (duration * 400) / messages.length;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, messageInterval);

    // finish loader after total duration
    const timeout = setTimeout(() => {
      clearInterval(interval);
      onFinish();
    }, duration * 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onFinish, duration, messages.length]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      {/* Spinner */}
      <div className="w-10 h-10 border-5 border-gray-300 border-t-gray-400 rounded-full animate-spin mb-4"></div>
      {/* Message */}
      <p className="text-gray-700 text-lg text-center px-4">{messages[index]}</p>
    </div>
  );
};

export default ThankLoader;
