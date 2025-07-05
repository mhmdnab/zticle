import Link from "next/link";

export default function AboutTeaser() {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 py-14 md:py-20 bg-gradient-to-br from-[#B1D8B7] via-[#94C973] to-[#B1D8B7] rounded-2xl mx-auto max-w-3xl shadow-xl overflow-hidden my-12">
      {/* Decorative background blob */}
      <div
        className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-[#76B947] opacity-20 blur-2xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-12 -right-16 w-60 h-60 rounded-full bg-[#2F5233] opacity-10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#2F5233] mb-3 tracking-tight text-center">
          About Zticle
        </h2>
        <p className="text-[#2F5233]/90 text-base md:text-lg text-center mb-8 max-w-xl font-medium">
          Your Gen Z guide for real-life wins—covering self-care, hustle hacks,
          money moves, digital detox, and everything in between.
          <span className="block mt-2 text-[#2F5233]/80 font-normal">
            All the advice you actually need, minus the cringe.
          </span>
        </p>
        <Link
          href="/about"
          className="bg-[#76B947] hover:bg-[#2F5233] transition px-8 py-3 rounded-xl text-white text-lg font-semibold shadow-lg mt-2"
        >
          Learn More →
        </Link>
      </div>
    </section>
  );
}
