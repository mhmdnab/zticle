// app/about/page.tsx
export default function AboutPage() {
  return (
    <>
      {/* Hero Section with gradient overlay */}
      <section className="relative overflow-hidden text-center py-21.75 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-[#76B947] to-[#94C973] mix-blend-multiply opacity-90" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Zticle
          </h1>
          <p className="text-lg md:text-xl text-gray-100">
            We’re the Gen Z newsroom that keeps it real—no corporate fluff, no
            jargon. Zticle is your daily scroll of micro-articles on culture,
            tech, mental health, hustle hacks and hot takes. We speak your
            language (TikTok energy included) and serve up bite-sized reads that
            stick.
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
            To equip every twenty-something with high-voltage insights and zero
            BS. We craft snackable, scroll-ready content that helps you level up
            your life and career—while having fun on the way. Learn fast, think
            sharp, live loud.
          </p>
        </div>
        <div className="relative flex-1 bg-[#94C973] p-8 rounded-2xl shadow-lg hover:-rotate-1 transition-transform">
          <h2 className="text-2xl font-semibold mb-2 text-[#2F5233]">
            Our Vision
          </h2>
          <p className="text-[#2F5233]">
            A world where learning doesn’t feel like homework. We want Zticle to
            be the digital hangout for Gen Z creators, rebels, and curious
            minds—where every click feels like chatting with your smartest
            friend. Together, we build a community that’s bold, supportive, and
            forever curious.
          </p>
        </div>
      </section>
      {/* Team Section with fun hover pop */}
      <section className="bg-[#2F5233] text-white py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Meet the Authors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-xl mx-auto">
          {["Mohamad", "Adam"].map((name) => (
            <div
              key={name}
              className="relative bg-white text-[#2F5233] p-6 rounded-xl shadow-xl hover:scale-105 transition-transform"
            >
              <div className="h-32 w-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                {name.charAt(0)}
              </div>
              <h3 className="text-xl font-medium mb-1">{name} Naboulsi</h3>
              <p className="italic text-sm">Co-Founder</p>
              <span className="absolute top-2 right-2 text-xl opacity-20">
                ⭐
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
