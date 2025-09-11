import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: totalSteps }, (_, index) => (
        <div
          key={index}
          className={`h-1 rounded-full transition-all duration-300 ${
            index < currentStep
              ? 'w-6 bg-primary-600'
              : index === currentStep
              ? 'w-8 bg-primary-600'
              : 'w-2 bg-gray-300'
          }`}
        />
      ))}
    </div>
  );
}