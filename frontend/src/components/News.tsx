

const News = () => {
  return (
    <section className="bg-gray-200 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zm0 16a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-green-900 mb-3">Stay Brewed In</h2>
          <p className="text-lg text-gray-700 mb-6">Subscribe for insider perks, seasonal announcements, and coffee masterclass invitations.</p>
        </div>
        
        <div className="mb-10">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="bg-green-800 text-white text-xs uppercase tracking-wider px-2 py-1 rounded-full">Latest</span>
                <span className="ml-2 text-gray-500 text-sm">March 15, 2025</span>
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Spring Season Blend Now Available</h3>
              <p className="text-gray-600 mb-4">Our limited-edition Spring Season Blend features bright notes of citrus and floral undertones. Perfect for those sunny morning moments.</p>
              <a href="#" className="text-green-800 font-medium hover:text-green-700 flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-bold text-green-900 mb-4">Never Miss a Drop</h3>
          <p className="text-gray-600 mb-6">Join our newsletter for exclusive offers, brewing tips, and be the first to know about new seasonal releases.</p>
          
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <button 
              type="submit" 
              className="bg-green-800 hover:bg-green-900 text-white font-bold px-6 py-3 rounded-r-full transition duration-200"
            >
              Subscribe
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-3">By subscribing, you agree to receive marketing communications from us. Don't worry, we respect your inbox.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition duration-200">
            <div className="flex items-center mb-3">
              <svg className="w-5 h-5 text-green-800 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <h4 className="font-bold text-green-900">Coffee Masterclass</h4>
            </div>
            <p className="text-gray-600 text-sm">Join our upcoming masterclass where our expert baristas will teach you the art of pour-over coffee brewing.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition duration-200">
            <div className="flex items-center mb-3">
              <svg className="w-5 h-5 text-green-800 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              <h4 className="font-bold text-green-900">Sustainability Initiatives</h4>
            </div>
            <p className="text-gray-600 text-sm">Learn about our new eco-friendly coffee cups and our commitment to reducing our environmental footprint.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;