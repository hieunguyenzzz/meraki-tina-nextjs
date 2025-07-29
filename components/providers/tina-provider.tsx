"use client";

import React from "react";

interface TinaWrapperProps {
  children: React.ReactNode;
}

// Simplified wrapper for now - TinaCMS integration will be completed later
export const TinaWrapper: React.FC<TinaWrapperProps> = ({ children }) => {
  return <>{children}</>;
};