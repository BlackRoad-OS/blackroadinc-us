import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
                Building the Infrastructure for Human-AI Collaboration
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                BlackRoad OS, Inc. is a Delaware C-Corporation developing transparent,
                accountable AI orchestration systems.
              </p>

              {/* Key Stats */}
              <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4">
                <div>
                  <div className="text-4xl font-semibold text-blue-800">2024</div>
                  <div className="mt-1 text-sm text-gray-600">Founded</div>
                </div>
                <div>
                  <div className="text-4xl font-semibold text-blue-800">MN</div>
                  <div className="mt-1 text-sm text-gray-600">Headquarters</div>
                </div>
                <div>
                  <div className="text-4xl font-semibold text-blue-800">DE</div>
                  <div className="mt-1 text-sm text-gray-600">C-Corp</div>
                </div>
                <div>
                  <div className="text-4xl font-semibold text-blue-800">AI</div>
                  <div className="mt-1 text-sm text-gray-600">Infrastructure</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/about"
                  className="rounded-md bg-blue-800 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
                >
                  Learn More
                </Link>
                <Link
                  href="/careers"
                  className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-800 transition-colors"
                >
                  View Opportunities →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What We're Building */}
        <section className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-4xl font-semibold tracking-tight text-gray-900">
                The Operating System for AI
              </h2>
            </div>

            <div className="mx-auto mt-16 max-w-7xl">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {/* BlackRoad OS */}
                <div className="bg-white p-8 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    BlackRoad OS
                  </h3>
                  <p className="text-gray-600 mb-4">
                    The core platform — transparent AI orchestration with governance built in.
                  </p>
                  <a
                    href="https://blackroad.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-800 hover:text-blue-700"
                  >
                    blackroad.io →
                  </a>
                </div>

                {/* Lucidia */}
                <div className="bg-white p-8 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Lucidia
                  </h3>
                  <p className="text-gray-600 mb-4">
                    The AI companion — built on BlackRoad OS, designed for collaboration.
                  </p>
                  <a
                    href="https://lucidia.earth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-800 hover:text-blue-700"
                  >
                    lucidia.earth →
                  </a>
                </div>

                {/* Vertical Packs */}
                <div className="bg-white p-8 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Vertical Packs
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Purpose-built solutions for education, finance, legal, and creative work.
                  </p>
                  <a
                    href="https://docs.blackroad.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-800 hover:text-blue-700"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-4xl font-semibold tracking-tight text-gray-900">
                Different by Design
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-800 text-white font-semibold">
                      T
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Transparency</h3>
                    <p className="mt-2 text-gray-600">
                      Every AI decision is traceable and explainable
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-800 text-white font-semibold">
                      C
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Consent</h3>
                    <p className="mt-2 text-gray-600">
                      Explicit delegation, not implicit permission
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-800 text-white font-semibold">
                      A
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Accountability</h3>
                    <p className="mt-2 text-gray-600">
                      Append-only ledger — nothing hidden, nothing erased
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-800 text-white font-semibold">
                      H
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Human-First</h3>
                    <p className="mt-2 text-gray-600">
                      AI serves human goals, not the reverse
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-4xl font-semibold tracking-tight text-gray-900">
                Leadership
              </h2>
            </div>

            <div className="mx-auto max-w-3xl">
              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <div className="flex flex-col items-center text-center">
                  <div className="h-32 w-32 rounded-full bg-gradient-to-br from-blue-800 to-blue-600 mb-6 flex items-center justify-center text-white text-4xl font-semibold">
                    AA
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Alexa Louise Amundson
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Founder & Chief Architect
                  </p>
                  <p className="mt-6 text-gray-600 max-w-2xl">
                    Background spanning financial services (FINRA Series 7, 63, 65), real estate,
                    and enterprise technology. Building AI infrastructure oriented toward community
                    benefit rather than extraction.
                  </p>
                  <div className="mt-6 flex gap-4">
                    <a
                      href="https://linkedin.com/in/alexa-amundson"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-blue-800 hover:text-blue-700"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com/BlackRoad-OS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-blue-800 hover:text-blue-700"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* For Investors */}
        <section className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-6">
                Partner With Us
              </h2>
              <p className="text-lg text-gray-600 mb-10">
                We're building critical infrastructure for the AI era. If you're interested in
                learning more about BlackRoad OS and our vision, we'd love to connect.
              </p>
              <Link
                href="/investors/contact"
                className="rounded-md bg-blue-800 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors inline-block"
              >
                Investor Inquiry
              </Link>
            </div>
          </div>
        </section>

        {/* Careers */}
        <section className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-6">
                Join the Mission
              </h2>
              <p className="text-lg text-gray-600 mb-10">
                We're looking for builders who believe AI can be different — transparent,
                accountable, and oriented toward human flourishing.
              </p>
              <Link
                href="/careers"
                className="rounded-md bg-blue-800 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors inline-block"
              >
                View All Opportunities
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
