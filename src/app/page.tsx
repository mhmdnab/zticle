import ArticlesPreview from "@/components/ArticlesPreview";
import HeroSection from "@/components/Hero";
import AboutTeaser from "@/components/About";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutTeaser />
      <ArticlesPreview />
    </div>
  );
}
