import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AudioPlayer from "@/components/AudioPlayer";
import aiPodcast1 from "@/assets/ai-podcast-1.jpg";
import aiPodcast2 from "@/assets/ai-podcast-2.jpg";
import aiPodcast3 from "@/assets/ai-podcast-3.jpg";

const AIPodcasts = () => {
  const podcastData = [
    {
      title: "AI Unleashed: Geopolitics, Jobs, and the Race for Tomorrow's Tech",
      audioUrl: "https://pub-4f1ef9f21cb54c8186d298f94b3277fe.r2.dev/Revuzia-Audio/AI_Unleashed__Geopolitics%2C_Jobs%2C_and_the_Race_for_Tomorrow_s_Tech.m4a",
      image: aiPodcast1,
      author: {
        name: "Revuzia AI",
        avatar: "",
      },
      duration: "45:20",
    },
    {
      title: "AI's Wild West: Fake Content, Financial Fights, and Failing Safety",
      audioUrl: "https://pub-4f1ef9f21cb54c8186d298f94b3277fe.r2.dev/Revuzia-Audio/AI_s_Wild_West__Fake_Content%2C_Financial_Fights%2C_and_Failing_Safety.m4a",
      image: aiPodcast2,
      author: {
        name: "Revuzia AI",
        avatar: "",
      },
      duration: "38:15",
    },
    {
      title: "AI's Rapid Ascent: Billions, Space, and the Global Race for Dominance",
      audioUrl: "https://pub-4f1ef9f21cb54c8186d298f94b3277fe.r2.dev/Revuzia-Audio/AI_s_Rapid_Ascent__Billions%2C_Space%2C_and_the_Global_Race_for_Dominance.m4a",
      image: aiPodcast3,
      author: {
        name: "Revuzia AI",
        avatar: "",
      },
      duration: "42:30",
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {podcastData.map((podcast, index) => (
            <AudioPlayer
              key={index}
              title={podcast.title}
              audioUrl={podcast.audioUrl}
              image={podcast.image}
              author={podcast.author}
              duration={podcast.duration}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AIPodcasts;