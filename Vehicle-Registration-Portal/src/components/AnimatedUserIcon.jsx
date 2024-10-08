import React from 'react';
import { motion } from 'framer-motion';

const AnimatedUserIcon = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        width="200" // Adjust width as needed
        height="200" // Adjust height as needed
        className="text-blue-500" // Change color as needed
      >
        {/* Animated Path for User Icon */}
        <motion.path
          d="M32 32C39.3 32 45 36.7 45 42C45 45.9 43.3 49.5 40.7 52.2C37.5 55.4 32.8 58 32 58C31.2 58 26.5 55.4 23.3 52.2C20.7 49.5 19 45.9 19 42C19 36.7 24.7 32 32 32Z" // Example user icon path
          fill="transparent"
          stroke="red" // Change stroke color as needed
          strokeWidth="2" // Adjust stroke width
          strokeDasharray="300" // Set to the approximate length of the path
          strokeDashoffset="300" // Start with the line hidden
          animate={{
            strokeDashoffset: [300, 0], // Animate from hidden to visible
            opacity: [0, 1], // Fade in effect
          }}
          transition={{
            duration: 2, // Duration of the animation
            ease: "easeInOut", // Easing function
            repeat: Infinity, // Repeat the animation indefinitely
            repeatType: "loop", // Loop type
          }}
        />
        <motion.path
          d="M32 8C26.5 8 22 12.5 22 18C22 23.5 26.5 28 32 28C37.5 28 42 23.5 42 18C42 12.5 37.5 8 32 8Z" // Example head path
          fill="transparent"
          stroke="red" // Change stroke color as needed
          strokeWidth="2" // Adjust stroke width
          strokeDasharray="200" // Set to the approximate length of the path
          strokeDashoffset="200" // Start with the line hidden
          animate={{
            strokeDashoffset: [200, 0], // Animate from hidden to visible
            opacity: [0, 1], // Fade in effect
          }}
          transition={{
            duration: 2, // Duration of the animation
            ease: "easeInOut", // Easing function
            repeat: Infinity, // Repeat the animation indefinitely
            repeatType: "loop", // Loop type
          }}
        />
      </svg>
    </div>
  );
};

export default AnimatedUserIcon;
