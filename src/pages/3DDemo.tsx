import React from 'react';
import { Helmet } from 'react-helmet-async';
import TechDemo3D from '@/components/3d/TechDemo3D';

export default function ThreeDDemo() {
  return (
    <>
      <Helmet>
        <title>3D Technology Showcase | REVUZIA</title>
        <meta name="description" content="Experience cutting-edge 3D technology with interactive holographic displays, rotating geometric objects, and immersive tech models powered by React Three Fiber." />
        <meta name="keywords" content="3D technology, holographic display, interactive 3D, React Three Fiber, geometric objects, tech visualization" />
        <link rel="canonical" href="/3d-demo" />
      </Helmet>
      
      <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4 py-8">
          <TechDemo3D />
        </div>
      </main>
    </>
  );
}