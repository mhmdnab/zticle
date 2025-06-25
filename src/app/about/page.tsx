// app/about/page.tsx
export default function AboutPage() {
  return (
    <>
      {/* Hero Section with gradient overlay */}
      <section className="relative overflow-hidden text-center py-21.75 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-[#76B947] to-[#94C973] mix-blend-multiply opacity-90" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            About Zticle
          </h1>
          <p className="text-lg md:text-xl text-gray-100">
            We’re passionate about sharing high-octane insights on web
            development, design, and tech trends—because learning should be fun!
          </p>
        </div>
        {/* Floating circles */}
        <div className="absolute top-10 left-5 w-20 h-20 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full"></div>
      </section>

      {/* Mission & Vision with angled cards */}
      <section className="flex flex-col md:flex-row mx-4 md:mx-12 gap-6 my-12">
        <div className="relative flex-1 bg-[#B1D8B7] p-8 rounded-2xl shadow-lg hover:rotate-1 transition-transform">
          <h2 className="text-2xl font-semibold mb-2 text-[#2F5233]">
            Our Mission
          </h2>
          <p className="text-[#2F5233]">
            To deliver high-quality, accessible content that empowers developers
            of all levels to grow their skills—and have fun along the way.
          </p>
        </div>
        <div className="relative flex-1 bg-[#94C973] p-8 rounded-2xl shadow-lg hover:-rotate-1 transition-transform">
          <h2 className="text-2xl font-semibold mb-2 text-[#2F5233]">
            Our Vision
          </h2>
          <p className="text-[#2F5233]">
            To become the go-to playground for web tech tutorials, fostering a
            vibrant, supportive community that loves to learn.
          </p>
        </div>
      </section>
    </>
  );
}
