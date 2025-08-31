import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AudioPlayer from "@/components/AudioPlayer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const AIPodcasts = () => {
  const podcastData = [
    {
      title: "AI Unleashed: Geopolitics, Jobs, and the Race for Tomorrow's Tech",
      audioUrl: "https://pub-4f1ef9f21cb54c8186d298f94b3277fe.r2.dev/Revuzia-Audio/AI_Unleashed__Geopolitics%2C_Jobs%2C_and_the_Race_for_Tomorrow_s_Tech.m4a",
      image: "/lovable-uploads/3bf09d33-1258-46ba-babc-143c450079de.png",
      author: {
        name: "Revuzia AI",
        avatar: "",
      },
      duration: "45:20",
    },
    {
      title: "AI's Wild West: Fake Content, Financial Fights, and Failing Safety",
      audioUrl: "https://pub-4f1ef9f21cb54c8186d298f94b3277fe.r2.dev/Revuzia-Audio/AI_s_Wild_West__Fake_Content%2C_Financial_Fights%2C_and_Failing_Safety.m4a",
      image: "/lovable-uploads/4bd7c322-2c67-44ee-b0dd-07a2a91f95e0.png",
      author: {
        name: "Revuzia AI",
        avatar: "",
      },
      duration: "38:15",
    },
    {
      title: "AI's Rapid Ascent: Billions, Space, and the Global Race for Dominance",
      audioUrl: "https://pub-4f1ef9f21cb54c8186d298f94b3277fe.r2.dev/Revuzia-Audio/AI_s_Rapid_Ascent__Billions%2C_Space%2C_and_the_Global_Race_for_Dominance.m4a",
      image: "/lovable-uploads/75c66acd-a1fa-4912-9cb0-ba0121e8debb.png",
      author: {
        name: "Revuzia AI",
        avatar: "",
      },
      duration: "42:30",
    },
    {
      title: "AI's Cutting Edge: Data Wars, Deepfakes, and the Justice System",
      audioUrl: "https://pub-4f1ef9f21cb54c8186d298f94b3277fe.r2.dev/Revuzia-Audio/AI_s_Cutting_Edge__Data_Wars%2C_Deepfakes%2C_and_the_Justice_System.m4a",
      image: "/lovable-uploads/9edee9f8-dbe2-4df6-a792-4c9c7b92a989.png",
      author: {
        name: "Revuzia AI",
        avatar: "",
      },
      duration: "41:15",
    },
    {
      title: "AI's Immediate Impact: Job Market Shock, Psychological Peril, and Siri's Stealthy Evolution",
      audioUrl: "https://pub-4f1ef9f21cb54c8186d298f94b3277fe.r2.dev/Revuzia-Audio/AI_s_Immediate_Impact__Job_Market_Shock%2C_Psychological_Peril%2C_and_Siri_s_Stealthy_Evolution.m4a",
      image: "/lovable-uploads/ac76f32b-e603-4aea-84ef-eaef30d438db.png",
      author: {
        name: "Revuzia AI",
        avatar: "",
      },
      duration: "39:45",
    },
    {
      title: "The AI Paradox: From DHL's 'Ja' Flub to Billionaire Battles and Your Digital Future",
      audioUrl: "https://pub-4f1ef9f21cb54c8186d298f94b3277fe.r2.dev/Revuzia-Audio/The_AI_Paradox__From_DHL_s__Ja__Flub_to_Billionaire_Battles_and_Your_Digital_Future.m4a",
      image: "/lovable-uploads/ed9a9afc-a628-4392-b866-ebd5dd3d98f2.png",
      author: {
        name: "Revuzia AI",
        avatar: "",
      },
      duration: "44:12",
    },
    {
      title: "AI's Trillion-Dollar Tangle: Copyright, Warships, and K-12 Coders",
      audioUrl: "https://pub-4f1ef9f21cb54c8186d298f94b3277fe.r2.dev/Revuzia-Audio/AI_s_Trillion-Dollar_Tangle__Copyright%2C_Warships%2C_and_K-12_Coders.m4a",
      image: "/lovable-uploads/1dd03894-c52e-40fe-96c1-08f89456a11c.png",
      author: {
        name: "Revuzia AI",
        avatar: "",
      },
      duration: "46:33",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">AI Podcasts</h1>
          <p className="text-xl text-muted-foreground">Listen to the latest AI news and insights from our expert analysis</p>
        </div>

        <Carousel className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {podcastData.map((podcast, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3">
                <AudioPlayer
                  title={podcast.title}
                  audioUrl={podcast.audioUrl}
                  image={podcast.image}
                  author={podcast.author}
                  duration={podcast.duration}
                  isLarge={true}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </main>

      <Footer />
    </div>
  );
};

export default AIPodcasts;