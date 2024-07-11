"use client"

import React, { useState, useEffect } from "react";
import "./Branded.css";

const Branded = () => {
  const logos = [
    "https://i.ibb.co/cwnWwVF/01Logo.png",
    "https://i.ibb.co/6Y973Mj/02Logo.png",
    "https://i.ibb.co/XSDvz8z/03Logo.png",
    "https://i.ibb.co/PY7Dg72/04Logo.png",
    "/brand (1).jpg",
    "/brand (1).png",
    "/brand (2).png",
    "/brand (3).png",
    "/brand (4).png",
    "/brand (5).png",
    "/brand (6).png",
    "/brand (7).png",
    "/brand (8).png",
    "/brand (9).png",
    "/brand (10).png",
    "/brand (11).png",
    "/brand (12).png",
    "/brand (13).png",
    "/brand (14).png",
    "/brand (15).png",
    "/brand (16).png",
    "/brand (17).png",
    "/brand (18).png",
    "/brand (19).png",
    "/brand (20).png",
    "/brand (21).png",
    "/brand (22).png",
    "/brand (23).png",
    "/brand (24).png",
    "/brand (25).png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClasses, setAnimationClasses] = useState(Array(logos.length).fill(''));

  useEffect(() => {
    const interval = setInterval(() => {
      const newAnimationClasses = [...animationClasses];
      for (let i = 0; i < 8; i++) {
        newAnimationClasses[(currentIndex + i) % logos.length] = 'spin-out';
      }
      setAnimationClasses(newAnimationClasses);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 8) % logos.length);
        const resetAnimationClasses = newAnimationClasses.map((_, i) => (i >= currentIndex && i < currentIndex + 8) ? 'spin-in' : '');
        setAnimationClasses(resetAnimationClasses);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, animationClasses, logos.length]);

  const currentLogos = logos.slice(currentIndex, currentIndex + 8);

  return (
    <div className="logos-container">
      {currentLogos.map((logo, index) => (
        <div key={index} className={`logo-item ${animationClasses[(currentIndex + index) % logos.length]}`}>
          <img src={logo} alt={`Logo ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Branded;
