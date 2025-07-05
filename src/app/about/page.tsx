// app/about/page.tsx
import React from "react";

const authors = [
  {
    name: "Mohamad Naboulsi",
    role: "Co-Founder",
    initial: "M",
    star: true,
  },
  {
    name: "Adam Naboulsi",
    role: "Co-Founder",
    initial: "A",
    star: true,
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[45vh] px-4 py-16 bg-gradient-to-br from-[#B1D8B7] via-[#94C973] to-[#B1D8B7]">
        {/* Decorative Blobs */}
        <div
          className="absolute top-10 left-10 w-24 h-24 rounded-full bg-[#76B947] opacity-20 blur-2xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-[#2F5233] opacity-10 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        {/* Content */}
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#2F5233] mb-6 drop-shadow">
            About Zticle
          </h1>
          <p className="text-[#2F5233]/90 text-lg md:text-xl font-medium">
            We’re the Gen Z newsroom that keeps it real—no corporate fluff, no
            jargon.
            <br />
            <span className="text-[#2F5233]/80 font-normal">
              Zticle is your daily scroll of micro-articles on culture, tech,
              mental health, hustle hacks and hot takes. We speak your language
              (TikTok energy included) and serve up bite-sized reads that stick.
            </span>
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="w-full bg-white py-10 px-2">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Mission */}
          <div className="flex-1 bg-[#B1D8B7] bg-opacity-70 rounded-2xl shadow-md p-7">
            <h2 className="text-2xl font-bold text-[#2F5233] mb-2">
              Our Mission
            </h2>
            <p className="text-[#2F5233]/80 font-medium">
              To equip every twenty-something with high-voltage insights and
              zero BS. We craft snackable, scroll-ready content that helps you
              level up your life and career—while having fun on the way. Learn
              fast, think sharp, live loud.
            </p>
          </div>
          {/* Vision */}
          <div className="flex-1 bg-[#94C973] bg-opacity-70 rounded-2xl shadow-md p-7">
            <h2 className="text-2xl font-bold text-[#2F5233] mb-2">
              Our Vision
            </h2>
            <p className="text-[#2F5233]/80 font-medium">
              A world where learning doesn’t feel like homework. We want Zticle
              to be the digital hangout for Gen Z creators, rebels, and curious
              minds—where every click feels like chatting with your smartest
              friend. Together, we build a community that’s bold, supportive,
              and forever curious.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Authors */}
      <section className="w-full bg-[#2F5233] py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-12 text-center">
            Meet the Authors
          </h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            {authors.map((author) => (
              <div
                key={author.name}
                className="bg-white rounded-2xl shadow-xl flex flex-col items-center p-8 min-w-[230px] max-w-xs w-full"
              >
                <div className="relative mb-4">
                  <div className="bg-[#B1D8B7] text-[#2F5233] text-4xl font-bold w-20 h-20 rounded-full flex items-center justify-center">
                    {author.initial}
                  </div>
                  {author.star && (
                    <span
                      className="absolute top-0 right-0 text-[#76B947] text-2xl"
                      title="Co-Founder"
                    >
                      ⭐
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-[#2F5233] mb-1">
                  {author.name}
                </h3>
                <span className="text-[#76B947] italic text-base">
                  {author.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
