"use client";

import dynamic from "next/dynamic";
import { useWindowSize } from "react-use";

const ReactConfetti = dynamic(() => import("react-confetti"), {
  ssr: false,
});

export default function Success() {
  const { width, height } = useWindowSize();
  console.log({ width, height });

  return (
    <>
      <ReactConfetti width={width} height={height} />
      <div className="flex flex-col items-center justify-center h-screen gap-3 font-[family-name:var(--font-geist-sans)]">
        <div className="text-5xl font-semibold">Payment Successful! 🎉</div>
        <div className="text-3xl font-medium">Thanks for paying! 😀</div>
      </div>
    </>
  );
}
