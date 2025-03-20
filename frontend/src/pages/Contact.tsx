import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto py-16 px-6 text-center pt-28">
      {/* Add color and margin to heading */}
      <h2 className="text-4xl font-bold text-green-800 mb-6">
        Contact Us
      </h2>
      <p className="text-gray-700 mb-8">
        Have questions or want to get in touch? We'd love to hear from you!
      </p>

      <div className="grid md:grid-cols-2 gap-8 text-left">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-green-900">Visit Us</h3>
            <p className="text-gray-700">123 Coffee Street, London, UK</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-green-900">Call Us</h3>
            <p className="text-gray-700">+44 1234 567890</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-green-900">Email Us</h3>
            <p className="text-gray-700">hello@Roastoriacoffeeshop.com</p>
          </div>
        </div>

        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-lg" />
          <textarea placeholder="Your Message" className="w-full p-3 border border-gray-300 rounded-lg h-32"></textarea>
          <button type="submit" className="w-full bg-green-900 text-white py-3 px-6 rounded-lg hover:bg-green-800 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
