"use client"

import React, { useEffect } from 'react';

interface TelegramHeaderColorProps {
  color?: string;
  gradient?: { color: string };
}

const TelegramHeaderColor: React.FC<TelegramHeaderColorProps> = ({ 
  color = '#000', 
  gradient 
}) => {
  useEffect(() => {

    if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
      try {
        if (gradient) {
          window.Telegram.WebApp.setHeaderColor(gradient.color);
        } else {
          window.Telegram.WebApp.setHeaderColor(color);
        }
      } catch (error) {
        console.error('Error setting Telegram Mini App header color:', error);
      }
    }
  }, [color, gradient]);
  return null;
};

export default TelegramHeaderColor;
