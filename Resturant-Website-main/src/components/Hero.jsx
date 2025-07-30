import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  // Higher quality, more appetizing restaurant image from Unsplash
  const unsplashImageUrl = "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative h-screen max-h-[800px] overflow-hidden font-sans">
      {/* Background image with gradient overlay */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src={unsplashImageUrl}
          alt="Elegant restaurant table setting"
          className="w-full h-full object-cover"
          onLoad={() => setLoaded(true)}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30" />
      </div>

      {/* Content with animation */}
      <div className="relative h-full flex items-center">
        <div
          className={`container mx-auto px-4 text-white transition-all duration-1000 delay-300 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium mb-4 leading-snug">
            <span className="block text-amber-300 font-normal">Savor the</span>
            <span className="block font-serif italic">Finest Cuisine</span>
          </h1>

          <p className="text-lg sm:text-xl max-w-lg mb-8 font-light tracking-wide">
            Where every dish tells a story of passion, quality, and culinary artistry.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/menu"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-md text-base font-medium transition-all duration-300 hover:scale-[1.02] shadow-lg text-center"
            >
              Explore Our Menu
            </Link>
            <Link to={`/reserve`} className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-md text-base font-medium transition-all duration-300 hover:scale-[1.02]">
              Reserve Your Table
            </Link>
          </div>
        </div>
      </div>

      {/* Scrolling indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}