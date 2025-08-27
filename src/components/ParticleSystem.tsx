import React, { useEffect, useRef, useState } from 'react';

interface Node {
  id: number;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  vx: number;
  vy: number;
  size: number;
  connections: number[];
  pulse: number;
  color: string;
  type: 'primary' | 'secondary' | 'data';
}

interface ParticleSystemProps {
  className?: string;
}

const CyberpunkNetwork: React.FC<ParticleSystemProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const timeRef = useRef(0);
  const [isActive, setIsActive] = useState(false);

  const createNode = (x: number, y: number, type: 'primary' | 'secondary' | 'data'): Node => {
    const colors = {
      primary: '#00ff88',
      secondary: '#ff0088', 
      data: '#0088ff'
    };

    return {
      id: Date.now() + Math.random(),
      x,
      y,
      targetX: x,
      targetY: y,
      vx: 0,
      vy: 0,
      size: type === 'primary' ? 8 : type === 'secondary' ? 6 : 4,
      connections: [],
      pulse: Math.random() * Math.PI * 2,
      color: colors[type],
      type
    };
  };

  const initializeNetwork = (canvas: HTMLCanvasElement) => {
    const nodes: Node[] = [];
    
    // Create primary nodes (fewer, larger)
    for (let i = 0; i < 8; i++) {
      nodes.push(createNode(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        'primary'
      ));
    }
    
    // Create secondary nodes
    for (let i = 0; i < 15; i++) {
      nodes.push(createNode(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        'secondary'
      ));
    }
    
    // Create data nodes (smaller, more numerous)
    for (let i = 0; i < 25; i++) {
      nodes.push(createNode(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        'data'
      ));
    }
    
    // Establish connections
    nodes.forEach((node, index) => {
      nodes.forEach((other, otherIndex) => {
        if (index !== otherIndex) {
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Connection probability based on node types and distance
          let maxDistance = 150;
          if (node.type === 'primary' && other.type === 'primary') maxDistance = 200;
          if (node.type === 'data' && other.type === 'data') maxDistance = 80;
          
          if (distance < maxDistance && Math.random() > 0.7) {
            node.connections.push(otherIndex);
          }
        }
      });
    });
    
    nodesRef.current = nodes;
  };

  const updateNodes = (canvas: HTMLCanvasElement, time: number) => {
    const nodes = nodesRef.current;
    const mouse = mouseRef.current;
    
    nodes.forEach(node => {
      // Gentle orbital movement
      node.targetX += Math.sin(time * 0.001 + node.id) * 0.5;
      node.targetY += Math.cos(time * 0.0008 + node.id) * 0.3;
      
      // Mouse interaction - attraction/repulsion
      const dx = mouse.x - node.x;
      const dy = mouse.y - node.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 150) {
        const force = (150 - distance) / 150;
        if (isActive) {
          // Attraction when active
          node.targetX += dx * force * 0.02;
          node.targetY += dy * force * 0.02;
        } else {
          // Gentle repulsion
          node.targetX -= dx * force * 0.01;
          node.targetY -= dy * force * 0.01;
        }
      }
      
      // Keep nodes within bounds with elastic boundaries
      const margin = 50;
      if (node.targetX < margin) node.targetX = margin + (margin - node.targetX) * 0.1;
      if (node.targetX > canvas.width - margin) node.targetX = canvas.width - margin - (node.targetX - (canvas.width - margin)) * 0.1;
      if (node.targetY < margin) node.targetY = margin + (margin - node.targetY) * 0.1;
      if (node.targetY > canvas.height - margin) node.targetY = canvas.height - margin - (node.targetY - (canvas.height - margin)) * 0.1;
      
      // Smooth movement
      node.vx += (node.targetX - node.x) * 0.05;
      node.vy += (node.targetY - node.y) * 0.05;
      node.vx *= 0.85;
      node.vy *= 0.85;
      
      node.x += node.vx;
      node.y += node.vy;
      
      // Update pulse for glow effect
      node.pulse += 0.05;
    });
  };

  const drawConnections = (ctx: CanvasRenderingContext2D, time: number) => {
    const nodes = nodesRef.current;
    
    nodes.forEach((node, index) => {
      node.connections.forEach(connectionIndex => {
        const connected = nodes[connectionIndex];
        if (!connected) return;
        
        const dx = node.x - connected.x;
        const dy = node.y - connected.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Dynamic line properties
        const maxDistance = node.type === 'primary' ? 200 : 150;
        const opacity = Math.max(0, 1 - (distance / maxDistance));
        const pulse = Math.sin(time * 0.003 + index * 0.1) * 0.3 + 0.7;
        
        // Gradient line
        const gradient = ctx.createLinearGradient(node.x, node.y, connected.x, connected.y);
        gradient.addColorStop(0, `${node.color}${Math.floor(opacity * pulse * 100).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, `${connected.color}${Math.floor(opacity * pulse * 100).toString(16).padStart(2, '0')}`);
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = node.type === 'primary' ? 2 : 1;
        ctx.setLineDash([]);
        
        // Add glow effect
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 3;
        
        ctx.beginPath();
        ctx.moveTo(node.x, node.y);
        ctx.lineTo(connected.x, connected.y);
        ctx.stroke();
        
        // Data flow particles along connections
        if (Math.random() > 0.95) {
          const progress = (time * 0.002) % 1;
          const flowX = node.x + (connected.x - node.x) * progress;
          const flowY = node.y + (connected.y - node.y) * progress;
          
          ctx.shadowBlur = 5;
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(flowX, flowY, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      });
    });
    
    ctx.shadowBlur = 0;
  };

  const drawNodes = (ctx: CanvasRenderingContext2D, time: number) => {
    const nodes = nodesRef.current;
    
    nodes.forEach(node => {
      const pulse = Math.sin(node.pulse) * 0.3 + 1;
      const size = node.size * pulse;
      
      // Outer glow
      const glowSize = size * 3;
      const glowGradient = ctx.createRadialGradient(
        node.x, node.y, 0,
        node.x, node.y, glowSize
      );
      glowGradient.addColorStop(0, `${node.color}40`);
      glowGradient.addColorStop(1, `${node.color}00`);
      
      ctx.fillStyle = glowGradient;
      ctx.beginPath();
      ctx.arc(node.x, node.y, glowSize, 0, Math.PI * 2);
      ctx.fill();
      
      // Main node
      ctx.shadowColor = node.color;
      ctx.shadowBlur = 10;
      ctx.fillStyle = node.color;
      ctx.beginPath();
      ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
      ctx.fill();
      
      // Inner highlight
      ctx.shadowBlur = 0;
      ctx.fillStyle = '#ffffff60';
      ctx.beginPath();
      ctx.arc(node.x - size * 0.3, node.y - size * 0.3, size * 0.3, 0, Math.PI * 2);
      ctx.fill();
    });
  };

  const animate = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    
    if (!canvas || !ctx) return;
    
    timeRef.current += 16;
    
    // Clear with fade effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    updateNodes(canvas, timeRef.current);
    drawConnections(ctx, timeRef.current);
    drawNodes(ctx, timeRef.current);
    
    animationFrameRef.current = requestAnimationFrame(animate);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  };

  const handleMouseEnter = () => setIsActive(true);
  const handleMouseLeave = () => setIsActive(false);

  const handleClick = () => {
    // Reorganize network on click
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    nodesRef.current.forEach(node => {
      node.targetX = Math.random() * canvas.width;
      node.targetY = Math.random() * canvas.height;
      node.pulse = Math.random() * Math.PI * 2;
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const updateCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initializeNetwork(canvas);
    };
    
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    
    animate();
    
    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-auto cursor-none ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ 
        background: 'transparent',
        filter: isActive ? 'brightness(1.3) contrast(1.1)' : 'brightness(1)'
      }}
    />
  );
};

export default CyberpunkNetwork;
