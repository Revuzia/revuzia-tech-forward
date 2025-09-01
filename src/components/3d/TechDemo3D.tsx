import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import HolographicDisplay from './HolographicDisplay';

export default function TechDemo3D() {
  const [activeDemo, setActiveDemo] = useState('holographic');

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-heading bg-gradient-primary bg-clip-text text-transparent">
            3D Tech Showcase
          </CardTitle>
          <CardDescription className="text-lg">
            Interactive 3D elements powered by React Three Fiber
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <Tabs value={activeDemo} onValueChange={setActiveDemo} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="holographic">Holographic</TabsTrigger>
              <TabsTrigger value="geometric">Geometric</TabsTrigger>
              <TabsTrigger value="tech-models">Tech Models</TabsTrigger>
              <TabsTrigger value="interactive">Interactive</TabsTrigger>
            </TabsList>
            
            <TabsContent value="holographic" className="space-y-4">
              <div className="text-center space-y-2">
                <h3 className="text-xl font-semibold">Holographic Display</h3>
                <p className="text-muted-foreground">
                  Floating 3D objects with holographic materials and effects
                </p>
              </div>
              <HolographicDisplay />
            </TabsContent>
            
            <TabsContent value="geometric" className="space-y-4">
              <div className="text-center space-y-2">
                <h3 className="text-xl font-semibold">Geometric Shapes</h3>
                <p className="text-muted-foreground">
                  Rotating dodecahedrons and wireframe spheres
                </p>
              </div>
              <div className="h-[600px] bg-gradient-to-br from-background to-muted rounded-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl">🔮</div>
                  <p className="text-muted-foreground">Geometric shapes demo</p>
                  <p className="text-sm text-muted-foreground/70">
                    This would showcase rotating dodecahedrons and wireframe spheres
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="tech-models" className="space-y-4">
              <div className="text-center space-y-2">
                <h3 className="text-xl font-semibold">3D Tech Models</h3>
                <p className="text-muted-foreground">
                  Interactive 3D models of tech devices and components
                </p>
              </div>
              <div className="h-[600px] bg-gradient-to-br from-background to-muted rounded-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl">📱</div>
                  <p className="text-muted-foreground">3D Tech Models</p>
                  <p className="text-sm text-muted-foreground/70">
                    Interactive 3D models of phones, laptops, and other tech
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="interactive" className="space-y-4">
              <div className="text-center space-y-2">
                <h3 className="text-xl font-semibold">Interactive Elements</h3>
                <p className="text-muted-foreground">
                  Click, drag, and interact with 3D objects
                </p>
              </div>
              <div className="h-[600px] bg-gradient-to-br from-background to-muted rounded-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl">🎮</div>
                  <p className="text-muted-foreground">Interactive 3D Elements</p>
                  <p className="text-sm text-muted-foreground/70">
                    Fully interactive 3D scenes with physics and animations
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-6 flex justify-center">
            <Button variant="outline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Back to Top
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Features Showcase</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-primary">✨ Holographic Effects</h4>
              <p className="text-sm text-muted-foreground">
                Transparent materials with emissive properties creating holographic appearances
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-primary">🔄 Auto-Rotation</h4>
              <p className="text-sm text-muted-foreground">
                Smooth automatic rotation with manual override controls
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-primary">🎮 Interactive Controls</h4>
              <p className="text-sm text-muted-foreground">
                Drag to rotate, scroll to zoom, full orbit controls
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-primary">💎 Geometric Shapes</h4>
              <p className="text-sm text-muted-foreground">
                Complex 3D geometries including dodecahedrons and wireframes
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-primary">🌟 Particle Effects</h4>
              <p className="text-sm text-muted-foreground">
                Floating ambient particles with dynamic animations
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-primary">🎨 Material Effects</h4>
              <p className="text-sm text-muted-foreground">
                Distortion materials, emissive lighting, and transparency
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}