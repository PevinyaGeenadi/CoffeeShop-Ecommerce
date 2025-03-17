const ProductDescription = () => {
    return (
      <div className="mt-20">
        <div className="flex gap-3 mb-4">
          <button className="btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36">
            Description
          </button>
          <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">
            Ingredients
          </button>
          <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">
            Brew Guide
          </button>
        </div>
        <div className="flex flex-col pb-16">
          <p className="text-sm">
            Indulge in the rich and bold flavors of our handcrafted coffee, made
            from the finest Arabica beans. Every sip delivers a smooth and
            aromatic experience, whether you prefer it black or with a splash of
            creamy milk. Our expertly roasted beans ensure a perfect balance of
            flavor, body, and aroma.
          </p>
          <p className="text-sm">
            At Starbucks, we are passionate about quality. From sourcing
            sustainable coffee beans to brewing the perfect cup, we take pride in
            every detail. Enjoy your coffee just the way you like it—hot, iced, or
            blended into a refreshing Frappuccino.
          </p>
        </div>
      </div>
    );
  };
  
  export default ProductDescription;
  