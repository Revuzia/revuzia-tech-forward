import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Handle authentication logic here
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-md mx-auto">
          <Card className="bg-card/95 backdrop-blur-sm border-border/50 shadow-2xl shadow-brand/10">
            <CardHeader className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-brand to-accent rounded-full mx-auto flex items-center justify-center">
                <div className="w-8 h-8 bg-black rounded border-2 border-white flex items-center justify-center transform rotate-12">
                  <span className="text-white font-mono font-bold text-lg">R</span>
                </div>
              </div>
              <CardTitle className="text-3xl font-bold text-white font-poppins">Join Revuzia</CardTitle>
              <CardDescription className="text-foreground/80 font-poppins text-lg">
                Sign up for exclusive tech insights and reviews
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Tabs defaultValue="signin" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-muted/20">
                  <TabsTrigger value="signin" className="data-[state=active]:bg-brand data-[state=active]:text-black font-poppins">Sign In</TabsTrigger>
                  <TabsTrigger value="signup" className="data-[state=active]:bg-brand data-[state=active]:text-black font-poppins">Sign Up</TabsTrigger>
                </TabsList>
                
                <TabsContent value="signin" className="space-y-4 mt-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white font-poppins">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="bg-muted/10 border-border text-white placeholder:text-muted-foreground"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-white font-poppins">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        className="bg-muted/10 border-border text-white placeholder:text-muted-foreground"
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-brand hover:bg-brand/90 text-black font-poppins font-semibold"
                      disabled={isLoading}
                    >
                      {isLoading ? "Signing in..." : "Sign In"}
                    </Button>
                  </form>
                </TabsContent>
                
                <TabsContent value="signup" className="space-y-4 mt-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="signup-email" className="text-white font-poppins">Email</Label>
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="Enter your email"
                        className="bg-muted/10 border-border text-white placeholder:text-muted-foreground"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-password" className="text-white font-poppins">Password</Label>
                      <Input
                        id="signup-password"
                        type="password"
                        placeholder="Create a password"
                        className="bg-muted/10 border-border text-white placeholder:text-muted-foreground"
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-brand hover:bg-brand/90 text-black font-poppins font-semibold"
                      disabled={isLoading}
                    >
                      {isLoading ? "Creating account..." : "Sign Up"}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
              
              <div className="text-center">
                <Link 
                  to="/" 
                  className="inline-flex items-center text-brand hover:text-brand/80 transition-colors font-poppins"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Auth;