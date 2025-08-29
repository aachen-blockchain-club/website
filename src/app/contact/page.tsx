export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <section className="mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Contact Us
          </h1>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            Get in touch with the Aachen Blockchain Club. We'd love to hear from you!
          </p>
          
          <div className="flex justify-center">
            <div className="bg-purple-100 rounded-lg shadow-lg" style={{ width: '640px', height: '800px' }}>
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSee_vnufQsCanbgZVfsA9ItPpTK43k_nLy_ZpHBM-RYgBXjZw/viewform?embedded=true" 
                width="640" 
                height="900" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0}
                className="border-0 rounded-lg w-full h-full"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
