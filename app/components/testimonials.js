"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function TypingTestimonial() {
  const testimonials = [
    {
      name: "Chipo M.",
      title: "Finance Director, Zenith Group",
      feedback:
        "Anthmal Webster’s guidance redefined our entire approach to compliance and reporting. Their expertise is unmatched.",
      image:
        "https://cdn.vectorstock.com/i/1000v/09/40/user-flat-red-color-icon-vector-6080940.jpg",
      signature: "Chipo M.",
    },
    {
      name: "Brian T.",
      title: "CEO, Total Impact Holdings",
      feedback:
        "They treat every engagement with utmost professionalism. You can feel the integrity and quality in everything they do.",
      image:
        "https://cdn.vectorstock.com/i/1000v/09/40/user-flat-red-color-icon-vector-6080940.jpg",
      signature: "Brian T.",
    },
    {
      name: "Dr. Phillipa K.",
      title: "Head of Operations, Capitalfoods",
      feedback:
        "The team doesn’t just deliver reports — they deliver insight. Anthmal Webster has been instrumental in our growth journey.",
      image:
        "https://cdn.vectorstock.com/i/1000v/09/40/user-flat-red-color-icon-vector-6080940.jpg",
      signature: "Dr. Phillipa K.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  // Typing effect
  useEffect(() => {
    const text = testimonials[current].feedback;
    let index = 0;
    setDisplayedText("");

    const typing = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index++;
      if (index >= text.length) clearInterval(typing);
    }, 50);

    return () => clearInterval(typing);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  // Switch testimonial every 12 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 12000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const t = testimonials[current];

  return (
    <section className="relative h-[600px] flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <Image
        src="/hero.jpg"
        alt="background"
        fill
        priority
        className="object-cover object-center brightness-75"
      />
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      {/* Testimonial card */}
      <div className="relative z-10 max-w-md w-full bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-10 flex flex-col items-center text-center transition-all duration-500 hover:scale-[1.02]">
        <p className="text-gray-800 text-lg md:text-xl italic leading-relaxed mb-8 min-h-[120px]">
          “{displayedText}”<span className="animate-pulse">|</span>
        </p>

        <div className="flex flex-col items-center">
          <div className="relative w-20 h-20 mb-3">
            <Image
              src={t.image}
              alt={t.name}
              fill
              className="rounded-full object-cover border-4 border-[#B71C1C]/40 shadow-md"
            />
          </div>
          <p className="text-[#B71C1C] font-medium text-lg">{t.signature}</p>
          <p className="text-gray-600 text-sm mt-1">{t.title}</p>
        </div>
      </div>

      <div className="absolute bottom-8 w-24 h-1 bg-[#B71C1C] rounded-full mx-auto animate-pulse" />
    </section>
  );
}
