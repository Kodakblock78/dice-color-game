'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import bgImage from '../public/9999520.jpg';

export default function LandingPage() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const timeout = setTimeout(() => setOpacity(0), 5000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="h-screen w-full flex items-center justify-center relative">
      <Image 
        src={bgImage} 
        alt="Casino Background" 
        layout="fill" 
        objectFit="cover" 
        quality={100} 
        priority
      />
      <div 
        className="absolute bg-black bg-opacity-50 p-10 rounded-2xl text-white text-center transition-opacity duration-3000" 
        style={{ opacity }}
      >
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Casino</h1>
        <p className="text-lg">Experience the thrill of gambling with style.</p>
      </div>
    </div>
  );
}
