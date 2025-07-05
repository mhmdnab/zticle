import ArticlesPreview from "@/components/ArticlesPreview";
import HeroSection from "@/components/Hero";
import AboutTeaser from "@/components/AboutTeaser";
import DailyPoll from "@/components/DailyPoll";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutTeaser />
      <section className="relative flex flex-col items-center justify-center min-h-[75vh] py-20 px-2 bg-gradient-to-b from-[#E6F8EC] via-[#CFE8D8] to-white overflow-hidden">
        {/* Soft radial patterns for modern touch */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-25"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse at 80% 10%, #B1D8B7 0%, transparent 60%), radial-gradient(ellipse at 20% 100%, #94C973 0%, transparent 65%)",
          }}
        />
        {/* Optional: fade at top/bottom */}
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#B1D8B7]/50 to-transparent z-10" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#B1D8B7]/40 to-transparent z-10" />

        {/* Optional: Section Header */}
        <div className="relative z-20 mb-10 flex flex-col items-center">
          <span className="text-4xl mb-2">🗳️</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#2F5233] tracking-tight mb-2">
            Community Poll
          </h2>
          <p className="text-[#2F5233]/70 text-base max-w-xl text-center">
            Vote and instantly see what everyone thinks. New question every day!
          </p>
        </div>

        {/* Your poll card */}
        <div className="relative z-20 w-full flex justify-center">
          <DailyPoll />
        </div>
      </section>
      <ArticlesPreview />
    </div>
  );
}
