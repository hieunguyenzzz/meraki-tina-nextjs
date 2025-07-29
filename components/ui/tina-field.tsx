"use client";

import React from "react";
import { tinaField } from "tinacms/dist/react";

interface TinaFieldProps {
  name: string;
  children: React.ReactNode;
  data?: any;
}

export const TinaField: React.FC<TinaFieldProps> = ({ name, children, data }) => {
  // If no data is provided, just return the children without tina attributes
  if (!data) {
    return <>{children}</>;
  }

  // Create a wrapper that passes the data-tina-field attribute to the child
  const tinaFieldAttribute = tinaField(data, name);
  
  // Ensure children is a valid React element
  if (!React.isValidElement(children)) {
    return <>{children}</>;
  }
  
  return React.cloneElement(
    children,
    {
      'data-tina-field': tinaFieldAttribute,
      className: `${children.props.className || ''} tina-field`.trim()
    }
  );
};