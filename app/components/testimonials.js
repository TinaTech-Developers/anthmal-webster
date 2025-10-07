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
      image: "/images/client1.jpg",
      signature: "Chipo M.",
    },
    {
      name: "Brian T.",
      title: "CEO, Total Impact Holdings",
      feedback:
        "They treat every engagement with utmost professionalism. You can feel the integrity and quality in everything they do.",
      image: "/images/client2.jpg",
      signature: "Brian T.",
    },
    {
      name: "Dr. Phillipa K.",
      title: "Head of Operations, Capitalfoods",
      feedback:
        "The team doesn’t just deliver reports — they deliver insight. Anthmal Webster has been instrumental in our growth journey.",
      image: "/images/client3.jpg",
      signature: "Dr. Phillipa K.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const text = testimonials[current].feedback;

    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;
      if (index === text.length) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, [current]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
      setDisplayedText("");
    }, 12000);

    return () => clearInterval(timer);
  }, []);

  const t = testimonials[current];

  return (
    <section className="relative h-[600px] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero.jpg" // Replace with your preferred background
        alt="background"
        fill
        className="object-cover object-center brightness-75"
      />
      {/* Optional overlay for readability */}
      <div className="absolute inset-0 bg-black/25 pointer-events-none"></div>

      {/* Testimonial card */}
      <div className="relative z-10 max-w-md w-full bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center text-center">
        <p className="text-gray-800 text-lg md:text-xl italic leading-relaxed mb-8 min-h-[120px]">
          “{displayedText}”
        </p>

        <div className="flex flex-col items-center">
          <div className="relative w-20 h-20 mb-2">
            <Image
              src={t.image}
              alt={t.name}
              fill
              className="rounded-full object-cover border-4 border-[#B71C1C]/40 shadow-md"
            />
          </div>
          <p className="text-[#B71C1C] font-handwriting text-lg">
            {t.signature}
          </p>
          <p className="text-gray-600 text-sm mt-1">{t.title}</p>
        </div>
      </div>

      {/* Optional subtle accent */}
      <div className="absolute bottom-8 w-24 h-1 bg-[#B71C1C] rounded-full mx-auto"></div>
    </section>
  );
}
