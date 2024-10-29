"use client"
import React from 'react';

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full border-4 border-t-4 border-gray-200 border-t-blue-500 w-16 h-16"></div>
  </div>
);

export default LoadingSpinner;
