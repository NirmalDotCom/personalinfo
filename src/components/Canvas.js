import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';


const CanvasComponent = () => {
  const toggleMode = useSelector((state) => state.themeSlice.toggleMode);
  const canvasRef = useRef(null);
  const pixelSize = 20; // Size of each "pixel"
  const transitionDuration = 1000; // Transition should complete within 1 second
  const updateInterval = 50; // How often to update pixels (in milliseconds)
  const canvasWidth = window.innerWidth;
  const canvasHeight = window.innerHeight - (window.innerHeight * 0.08); // Adjust for navbar, assuming 8vh nav

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // Calculate total pixels and updates needed
    const totalPixels = (canvasWidth * canvasHeight) / (pixelSize * pixelSize);
    const totalUpdates = transitionDuration / updateInterval;
    const pixelsPerUpdate = totalPixels / totalUpdates;

    let updatesCount = 0;

    // Function to transition pixels
    const transitionPixels = () => {
      for (let i = 0; i < pixelsPerUpdate; i++) {
        const x = Math.floor(Math.random() * canvasWidth / pixelSize) * pixelSize;
        const y = Math.floor(Math.random() * canvasHeight / pixelSize) * pixelSize;

        // Set the pixel color based on the theme mode
        ctx.fillStyle = toggleMode ? 'black' : 'white';
        ctx.fillRect(x, y, pixelSize, pixelSize);
      }
      
      updatesCount++;
      
      // Check if the transition should complete
      if (updatesCount >= totalUpdates) {
        clearInterval(intervalId);
      }
    };

    const intervalId = setInterval(transitionPixels, updateInterval);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [canvasWidth, canvasHeight, pixelSize, transitionDuration, updateInterval, toggleMode]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: '8vh',
        left: 0,
        width: '100vw',
        height: 'calc(100vh - 8vh)',
        zIndex: 1 // Ensure it doesn't overlay interactive elements
      }}
    />
  );
};

export default CanvasComponent;
