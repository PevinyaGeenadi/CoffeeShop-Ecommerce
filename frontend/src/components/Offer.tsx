import img9 from "../assets/gallery/img7.jpeg";

const Offer = () => {
  return (
    <section className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto py-16 px-4">
      <div className="flex-1">
        <span className="text-green-900 font-bold uppercase mb-2 block">FEATURED</span>
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
        
        <p className="text-gray-700 mb-4">
          Consistently roasted, perfectly brewed coffee prepared with expertise 
          and love. Our baristas strive to craft each cup with precision and care, 
          ensuring a memorable flavor profile. At Sapone, we pride ourselves in 
          sourcing high-quality, fair-traded beans that are carefully selected 
          from small farms all over the world.
        </p>
        
        <button className="mt-4 bg-green-900 text-white py-3 px-6 rounded-full hover:bg-green-700 transition-colors">
          Why Us Story
        </button>
      </div>
      
      <div className="flex-1">
        <div className="rounded-lg overflow-hidden">
        <img 
          src={img9} 
          alt="Coffee with latte art" 
          className="w-full h-auto object-cover aspect-[4/3] rounded-lg" 
        />
        </div>
      </div>
    </section>
  );
};


export default Offer

