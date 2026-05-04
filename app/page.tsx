'use client';

import { useState } from 'react';
import DomeGallery from '@/components/DomeGallery';
import InteractionFlow from '@/components/InteractionFlow';

export default function Home() {
  const [showGallery, setShowGallery] = useState(false);

  const userImages = [
    'pic1.jpg',
    'pic2.jpg',
    'pic3.jpg',
    'pic4.jpg',
    'pic5.jpg',
    'pic6.jpg',
    'pic7.jpg',
    'pic8.jpg',
    'pic1.jpg',
    'pic6.jpg',
    'pic1.jpg',
    'pic2.jpg',
    'pic6.jpg',
    'pic4.jpg',
    'pic5.jpg',
  ];

  return (
    <main className="w-screen h-screen bg-[#060010]">
      {!showGallery ? (
        <InteractionFlow onFlowComplete={() => setShowGallery(true)} />
      ) : (
        <>
          <audio src="/pretty.mp3" autoPlay loop className="hidden" />
          <DomeGallery
            images={userImages}
            fit={0.8}
            minRadius={600}
            maxVerticalRotationDeg={0}
            segments={34}
            dragDampening={2}
            grayscale={false}
            autoRotationSpeed={0.1}
          />
        </>
      )}
    </main>
  );
}
