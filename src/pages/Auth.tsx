import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/components/AuthProvider";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { signUp, signIn, user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast({
        title: "Password mismatch",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const { error } = await signUp(email, password);
      if (error) {
        if (error.message.includes("already registered")) {
          toast({
            title: "Account exists",
            description: "This email is already registered. Please sign in instead.",
            variant: "destructive",
          });
        } else {
          toast({
            title: "Sign up failed",
            description: error.message,
            variant: "destructive",
          });
        }
      } else {
        toast({
          title: "Welcome to Revuzia!",
          description: "Please check your email to confirm your account.",
        });
        navigate("/");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
    }
    setIsLoading(false);
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const { error } = await signIn(email, password);
      if (error) {
        toast({
          title: "Sign in failed",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Welcome back!",
          description: "You've successfully signed in.",
        });
        navigate("/");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background gradient and effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-brand/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_70%)]"></div>
      
      {/* Floating tech elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-tech-element animate-float-1">
          <div className="w-3 h-3 bg-brand/30 rounded-full blur-sm"></div>
        </div>
        <div className="floating-tech-element animate-float-2">
          <div className="w-2 h-2 bg-accent/40 rounded-full blur-sm"></div>
        </div>
        <div className="floating-tech-element animate-float-3">
          <div className="w-4 h-4 bg-brand/20 rounded-full blur-sm"></div>
        </div>
      </div>
      
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
                
                <TabsContent value="signin">
                  <form onSubmit={handleSignIn} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="signin-email">Email</Label>
                      <Input
                        id="signin-email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="bg-background border-border focus:border-brand"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signin-password">Password</Label>
                      <Input
                        id="signin-password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="bg-background border-border focus:border-brand"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-brand to-accent hover:from-brand/90 hover:to-accent/90 text-black font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 font-poppins"
                      disabled={isLoading}
                    >
                      {isLoading ? "Signing in..." : "Sign In"}
                    </Button>
                  </form>
                </TabsContent>
                
                <TabsContent value="signup">
                  <form onSubmit={handleSignUp} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="signup-email">Email</Label>
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="bg-background border-border focus:border-brand"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-password">Password</Label>
                      <Input
                        id="signup-password"
                        type="password"
                        placeholder="Create a password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="bg-background border-border focus:border-brand"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm Password</Label>
                      <Input
                        id="confirm-password"
                        type="password"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className="bg-background border-border focus:border-brand"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-brand to-accent hover:from-brand/90 hover:to-accent/90 text-black font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 font-poppins"
                      disabled={isLoading}
                    >
                      {isLoading ? "Creating account..." : "Sign Up"}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
              
              <div className="mt-8 text-center">
                <Link to="/" className="text-brand hover:text-accent transition-colors duration-300 font-poppins font-medium">
                  ← Back to Home
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Auth;