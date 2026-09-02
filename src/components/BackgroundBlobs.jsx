import React from 'react';

export default function BackgroundBlobs() {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-red-900/20 blur-[120px] mix-blend-screen animate-blob"></div>
      <div className="absolute top-[20%] right-[-10%] w-[30vw] h-[30vw] rounded-full bg-rose-900/20 blur-[100px] mix-blend-screen animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-pink-900/10 blur-[150px] mix-blend-screen animate-blob animation-delay-4000"></div>
    </div>
  );
}
