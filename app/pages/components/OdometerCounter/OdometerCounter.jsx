"use client";

import React, { useState, useEffect } from 'react';

/**
 * Custom Odometer Component
 * Replaces react-odometerjs with a lightweight, SSR-compatible counter animation
 */
const OdometerCounter = ({ value, duration = 2000, format = null }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const startValue = 0;
    const targetValue = typeof value === 'string' ? parseInt(value.replace(/,/g, '')) : value;
    const steps = 60;
    const increment = Math.ceil(targetValue / steps);
    let current = startValue;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        setDisplayValue(targetValue);
        clearInterval(timer);
      } else {
        setDisplayValue(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, duration]);

  // Format the number with commas
  const formatNumber = (num) => {
    if (format === '(,ddd)') {
      return num.toLocaleString('en-US');
    }
    return num.toLocaleString('en-US');
  };

  return <span>{formatNumber(displayValue)}</span>;
};

/**
 * Odometer Component (compatible with react-odometerjs API)
 * Usage: <Odometer value={1234} format="(,ddd)" />
 */
export const Odometer = ({ value, format = null, ...props }) => {
  return <OdometerCounter value={value} format={format} {...props} />;
};

export default OdometerCounter;
