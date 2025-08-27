import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
  color: string;
  type: 'network' | 'explosion';
  connections?: number[];
}

interface ParticleSystemProps {
  className?: string;
}

const ParticleSystem: React.FC<ParticleSystemProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const colors = [
    'hsl(var(--primary))',
    'hsl(var(--accent))',
    'hsl(var(--brand))',
    '#00ff88',
    '#ff0088',
    '#0088ff'
  ];

  const createNetworkParticle = (x: number, y: number): Particle => ({
    id: Date.now() + Math.random(),
    x,
    y,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5,
    size: Math.random() * 3 + 1,
    life: 1,
    maxLife: 1,
    color: colors[Math.floor(Math.random() * colors.length)],
    type: 'network',
    connections: []
  });

  const createExplosionParticle = (x: number, y: number): Particle => {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 8 + 2;
    return {
      id: Date.now() + Math.random(),
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      size: Math.random() * 4 + 2,
      life: 1,
      maxLife: 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      type: 'explosion'
    };
  };

  const initializeNetworkParticles = (canvas: HTMLCanvasElement) => {
    const particles: Particle[] = [];
    const numParticles = 30;
    
    for (let i = 0; i < numParticles; i++) {
      particles.push(createNetworkParticle(
        Math.random() * canvas.width,
        Math.random() * canvas.height
      ));
    }
    
    particlesRef.current = particles;
  };

  const createExplosion = (x: number, y: number) => {
    const explosionParticles = Array.from({ length: 15 }, () => 
      createExplosionParticle(x, y)
    );
    particlesRef.current.push(...explosionParticles);
  };

  const updateParticles = (canvas: HTMLCanvasElement) => {
    const particles = particlesRef.current;
    
    particles.forEach((particle, index) => {
      if (particle.type === 'network') {
        // Network particles move slowly and bounce off walls
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;
        
        // Keep particles within bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        
        // Update connections
        particle.connections = [];
        particles.forEach((other, otherIndex) => {
          if (other.type === 'network' && index !== otherIndex) {
            const dx = particle.x - other.x;
            const dy = particle.y - other.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 120) {
              particle.connections!.push(otherIndex);
            }
          }
        });
      } else {
        // Explosion particles fade and fall
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += 0.1; // gravity
        particle.vx *= 0.99; // air resistance
        particle.life -= 0.02;
        
        if (particle.life <= 0) {
          particles.splice(index, 1);
        }
      }
    });
  };

  const drawParticles = (ctx: CanvasRenderingContext2D) => {
    const particles = particlesRef.current;
    
    // Draw connections first
    particles.forEach(particle => {
      if (particle.type === 'network' && particle.connections) {
        particle.connections.forEach(connectionIndex => {
          const connected = particles[connectionIndex];
          if (connected && connected.type === 'network') {
            const dx = particle.x - connected.x;
            const dy = particle.y - connected.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const opacity = 1 - (distance / 120);
            
            ctx.strokeStyle = `rgba(0, 255, 136, ${opacity * 0.3})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(connected.x, connected.y);
            ctx.stroke();
          }
        });
      }
    });
    
    // Draw particles
    particles.forEach(particle => {
      const alpha = particle.type === 'explosion' ? particle.life : 1;
      
      // Create glow effect
      ctx.shadowColor = particle.color;
      ctx.shadowBlur = particle.size * 3;
      
      ctx.fillStyle = particle.color.includes('hsl') 
        ? particle.color.replace(')', `, ${alpha})`)
        : particle.color + Math.floor(alpha * 255).toString(16).padStart(2, '0');
      
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
      
      // Reset shadow for next particle
      ctx.shadowBlur = 0;
    });
  };

  const animate = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    
    if (!canvas || !ctx) return;
    
    // Clear canvas with fade effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    updateParticles(canvas);
    drawParticles(ctx);
    
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

  const handleClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    createExplosion(x, y);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Add some extra particles when hovering
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      for (let i = 0; i < 5; i++) {
        particlesRef.current.push(createNetworkParticle(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        ));
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const updateCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      
      // Reinitialize particles when canvas resizes
      initializeNetworkParticles(canvas);
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
      className={`absolute inset-0 pointer-events-auto cursor-crosshair ${className}`}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ 
        background: 'transparent',
        filter: isHovered ? 'brightness(1.2)' : 'brightness(1)'
      }}
    />
  );
};

export default ParticleSystem;
