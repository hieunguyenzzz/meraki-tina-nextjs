"use client";

import React from "react";

interface TinaFieldProps {
  name: string;
  children: React.ReactNode;
}

// Placeholder TinaField component - will be replaced with actual TinaCMS integration
export const TinaField: React.FC<TinaFieldProps> = ({ name, children }) => {
  return (
    <div data-tina-field={name} className="tina-field">
      {children}
    </div>
  );
};