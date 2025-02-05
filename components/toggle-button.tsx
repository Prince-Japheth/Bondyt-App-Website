"use client";

import * as React from "react";
import { useRouter } from 'next/navigation'; // Changed from 'next/router'
import { cn } from "@/lib/utils";
import { Loader } from "@/components/loader"; // Import the Loader component

interface ToggleButtonProps {
  options: string[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export function ToggleButton({ options, defaultValue, onChange }: ToggleButtonProps) {
  const [selected, setSelected] = React.useState(defaultValue || options[0]);
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();

  const handleClick = (option: string) => {
    if (selected === option) return;
    setIsAnimating(true);
    setSelected(option);
    onChange?.(option);

    // Trigger navigation after animation completes
    setTimeout(() => {
      setIsLoading(true);
      setTimeout(() => {
        if (option === "Merchant") {
          router.push('/merchant');
        }
      }, 1000); // Simulate a brief delay before navigation
    }, 300);
  };

  return (
    <>
      {isLoading && <Loader />}
      <div className={`flex w-full max-w-xl overflow-hidden rounded-full bg-black mx-auto p-2 ${isLoading ? "hidden" : ""}`}>
        {options.map((option) => (
          <button
            key={option}
            onClick={() => handleClick(option)}
            className={cn(
              "flex-1 px-6 py-4 text-center transition-all rounded-full",
              selected === option ? "text-white" : "text-white",
              isAnimating && option === "Merchant" ? "animate-slide" : ""
            )}
            style={{
              background: selected === option
                ? "linear-gradient(88.1deg, #F878FF 83.01%, #CD8DFE 99.66%)"
                : "",
            }}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
}
