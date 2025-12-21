export default function About() {
  return (
    <div className="w-full bg-black bg-gradient-to-b from-black via-slate-950 to-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-amber-500/20 to-yellow-600/20 border border-amber-500/30 rounded-full">
            <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">Our Journey</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent mb-6">
            Securing Rwanda, One Lock at a Time
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed px-4">
            Your trusted partner in professional lock and door solutions, delivering security and peace of mind since 2020
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Main Story Card */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-slate-900 to-black rounded-2xl shadow-2xl shadow-black/50 p-10 border border-slate-800/50 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              {/* Our Story */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 flex items-center justify-center shadow-lg shadow-amber-500/30">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-white">Our Story</h2>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Founded in 2020, Banks Lock & Door Solution emerged from a critical need in Rwanda's security industry. What started as a mission to provide reliable, professional-grade security solutions has grown into a trusted name throughout Kigali and beyond.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  We specialize in residential and commercial lock installations, emergency lockout services, master key systems, and comprehensive door hardware solutions. Our certified technicians bring years of expertise to every job, ensuring your property is secured to the highest standards.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Today, we serve hundreds of satisfied clients—from homeowners to large commercial properties—building lasting relationships through quality workmanship and unwavering reliability.
                </p>
                <div className="pt-4">
                  <div className="flex items-center gap-6 text-sm text-gray-400 flex-wrap">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></div>
                      <span className="font-semibold">Est. 2020</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></div>
                      <span className="font-semibold">500+ Projects</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-amber-600 animate-pulse"></div>
                      <span className="font-semibold">24/7 Service</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-yellow-600 to-amber-400 flex items-center justify-center shadow-lg shadow-yellow-600/30">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-white">Why Choose Us?</h2>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-800 group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-yellow-600 flex items-center justify-center mr-4 transition-all duration-300 shadow-lg group-hover:shadow-amber-500/30">
                      <svg className="w-4 h-4 text-amber-400 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <div>
                      <span className="text-white font-semibold block mb-1">Certified Professionals</span>
                      <span className="text-gray-400 text-sm">Expert technicians trained in the latest security systems and techniques</span>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-800 group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-yellow-600 flex items-center justify-center mr-4 transition-all duration-300 shadow-lg group-hover:shadow-amber-500/30">
                      <svg className="w-4 h-4 text-amber-400 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <div>
                      <span className="text-white font-semibold block mb-1">Premium Quality Products</span>
                      <span className="text-gray-400 text-sm">International brands and high-grade materials that stand the test of time</span>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-800 group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-yellow-600 flex items-center justify-center mr-4 transition-all duration-300 shadow-lg group-hover:shadow-amber-500/30">
                      <svg className="w-4 h-4 text-amber-400 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <div>
                      <span className="text-white font-semibold block mb-1">24/7 Emergency Response</span>
                      <span className="text-gray-400 text-sm">Locked out? We're here anytime, day or night, to help you</span>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-800 group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-yellow-600 flex items-center justify-center mr-4 transition-all duration-300 shadow-lg group-hover:shadow-amber-500/30">
                      <svg className="w-4 h-4 text-amber-400 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <div>
                      <span className="text-white font-semibold block mb-1">Competitive & Fair Pricing</span>
                      <span className="text-gray-400 text-sm">Transparent quotes with no hidden fees—quality security at fair rates</span>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-800 group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-yellow-600 flex items-center justify-center mr-4 transition-all duration-300 shadow-lg group-hover:shadow-amber-500/30">
                      <svg className="w-4 h-4 text-amber-400 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <div>
                      <span className="text-white font-semibold block mb-1">Warranty & Support</span>
                      <span className="text-gray-400 text-sm">All installations backed by warranty and ongoing support</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-slate-800/50">
              <div className="text-center group cursor-pointer">
                <div className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  500+
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Installations</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  98%
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Satisfaction Rate</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  4.9★
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Customer Rating</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  24/7
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Available</div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Services Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-gray-400 text-lg">Comprehensive security solutions for every need</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-slate-900 to-black p-8 rounded-2xl border border-slate-800/50 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/20">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-amber-500/20 to-yellow-600/20 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Residential Services</h3>
              <p className="text-gray-300 leading-relaxed">Home lock installations, upgrades, rekeying, and emergency lockout services.</p>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-black p-8 rounded-2xl border border-slate-800/50 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/20">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-amber-500/20 to-yellow-600/20 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Commercial Solutions</h3>
              <p className="text-gray-300 leading-relaxed">Master key systems, access control, panic bars, and high-security commercial locks.</p>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-black p-8 rounded-2xl border border-slate-800/50 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/20">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-amber-500/20 to-yellow-600/20 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Smart Lock Systems</h3>
              <p className="text-gray-300 leading-relaxed">Digital locks, biometric systems, and smart home security integration.</p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-slate-900 to-black p-10 rounded-2xl border border-slate-800/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                To provide exceptional security solutions that protect what matters most to our clients. We're committed to delivering professional service, expert installations, and reliable support that gives you complete peace of mind.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-black p-10 rounded-2xl border border-slate-800/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-yellow-600 to-amber-500 flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                To be Rwanda's most trusted name in security solutions, recognized for our unwavering commitment to quality, innovation, and customer satisfaction. We envision a safer Rwanda where every property is secured with the highest standards of protection.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
