import React, { useEffect, useRef } from 'react';

const GlobeAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions with higher pixel density for retina displays
    const setCanvasDimensions = () => {
      const pixelRatio = window.devicePixelRatio || 1;
      const width = canvas.clientWidth * pixelRatio;
      const height = canvas.clientHeight * pixelRatio;
      
      canvas.width = width;
      canvas.height = height;
      ctx.scale(pixelRatio, pixelRatio);
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Globe parameters
    const points: {x: number, y: number, z: number, connections: number[], velocity: {x: number, y: number, z: number}}[] = [];
    const numPoints = 200; // Increased number of points
    const radius = Math.min(canvas.width, canvas.height) * 0.35;
    const connectionDistance = radius * 0.45;
    const maxConnections = 5; // Limit connections per point
    
    // Create points on the sphere with random velocities
    for (let i = 0; i < numPoints; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      // Add small random velocities for point movement
      points.push({
        x,
        y,
        z,
        connections: [],
        velocity: {
          x: (Math.random() - 0.5) * 0.2,
          y: (Math.random() - 0.5) * 0.2,
          z: (Math.random() - 0.5) * 0.2
        }
      });
    }
    
    // Find optimal connections
    for (let i = 0; i < points.length; i++) {
      const distances: {index: number, distance: number}[] = [];
      
      for (let j = 0; j < points.length; j++) {
        if (i !== j) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dz = points[i].z - points[j].z;
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
          
          if (distance < connectionDistance) {
            distances.push({ index: j, distance });
          }
        }
      }
      
      // Sort by distance and take closest points
      distances.sort((a, b) => a.distance - b.distance);
      const closestPoints = distances.slice(0, maxConnections);
      
      points[i].connections = closestPoints.map(p => p.index);
    }
    
    // Animation parameters
    let rotation = 0;
    const rotationSpeed = 0.0003;
    const pulseSpeed = 0.02;
    let pulsePhase = 0;
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update rotation and pulse
      rotation += rotationSpeed;
      pulsePhase += pulseSpeed;
      
      // Center the globe
      const centerX = canvas.clientWidth / 2;
      const centerY = canvas.clientHeight / 2;
      
      // Update point positions with velocities
      for (const point of points) {
        point.x += point.velocity.x;
        point.y += point.velocity.y;
        point.z += point.velocity.z;
        
        // Keep points on the sphere surface
        const distance = Math.sqrt(point.x * point.x + point.y * point.y + point.z * point.z);
        const scale = radius / distance;
        point.x *= scale;
        point.y *= scale;
        point.z *= scale;
      }
      
      // Draw connections with gradient effect
      ctx.lineWidth = 0.5;
      for (let i = 0; i < points.length; i++) {
        const point = points[i];
        
        // Rotate point around Y axis
        const cosR = Math.cos(rotation);
        const sinR = Math.sin(rotation);
        const x = point.x * cosR + point.z * sinR;
        const z = point.z * cosR - point.x * sinR;
        
        for (const connIndex of point.connections) {
          const connPoint = points[connIndex];
          const connX = connPoint.x * cosR + connPoint.z * sinR;
          const connZ = connPoint.z * cosR - connPoint.x * sinR;
          
          // Calculate opacity based on z position and pulse
          const avgZ = (z + connZ) / 2;
          const distanceFactor = Math.max(0, (avgZ + radius) / (radius * 2));
          const pulseOpacity = 0.3 + Math.sin(pulsePhase) * 0.1;
          const opacity = distanceFactor * pulseOpacity;
          
          // Create gradient for connection
          const gradient = ctx.createLinearGradient(
            centerX + x,
            centerY + point.y,
            centerX + connX,
            centerY + connPoint.y
          );
          gradient.addColorStop(0, `rgba(56, 182, 255, ${opacity})`);
          gradient.addColorStop(1, `rgba(0, 148, 255, ${opacity})`);
          
          ctx.beginPath();
          ctx.moveTo(centerX + x, centerY + point.y);
          ctx.lineTo(centerX + connX, centerY + connPoint.y);
          ctx.strokeStyle = gradient;
          ctx.stroke();
        }
      }
      
      // Draw points with glow effect
      for (let i = 0; i < points.length; i++) {
        const point = points[i];
        
        const cosR = Math.cos(rotation);
        const sinR = Math.sin(rotation);
        const x = point.x * cosR + point.z * sinR;
        const z = point.z * cosR - point.x * sinR;
        
        // Calculate point opacity and size
        const distanceFactor = Math.max(0, (z + radius) / (radius * 2));
        const pulseOpacity = 0.5 + Math.sin(pulsePhase) * 0.2;
        const opacity = distanceFactor * pulseOpacity;
        const size = Math.max(1.5, 3 * distanceFactor);
        
        // Draw glow
        const gradient = ctx.createRadialGradient(
          centerX + x,
          centerY + point.y,
          0,
          centerX + x,
          centerY + point.y,
          size * 2
        );
        gradient.addColorStop(0, `rgba(56, 182, 255, ${opacity})`);
        gradient.addColorStop(1, 'rgba(56, 182, 255, 0)');
        
        ctx.beginPath();
        ctx.arc(centerX + x, centerY + point.y, size * 2, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Draw point
        ctx.beginPath();
        ctx.arc(centerX + x, centerY + point.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 182, 255, ${opacity})`;
        ctx.fill();
      }
      
      // Draw outer glow
      const outerGlow = ctx.createRadialGradient(
        centerX,
        centerY,
        radius * 0.8,
        centerX,
        centerY,
        radius * 1.5
      );
      outerGlow.addColorStop(0, 'rgba(56, 182, 255, 0.03)');
      outerGlow.addColorStop(1, 'rgba(56, 182, 255, 0)');
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.5, 0, Math.PI * 2);
      ctx.fillStyle = outerGlow;
      ctx.fill();
      
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full"
      style={{ maxWidth: '100%', maxHeight: '100%' }}
    />
  );
};

export default GlobeAnimation;