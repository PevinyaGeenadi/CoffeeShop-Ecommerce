import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

interface ItemProps {
  id: string;
  name: string;
  image: string;
  category: string;
  old_price: number;
  new_price: number;
}

const Item: React.FC<ItemProps> = ({
  id,
  name,
  image,
  category,
  old_price,
  new_price,
}) => {
  // Calculate discount percentage
  const discountPercentage = Math.round(((old_price - new_price) / old_price) * 100);
  
  return (
    <div className="rounded-xl overflow-hidden bg-white hover:translate-y-[-5px] transition-all duration-300 h-full flex flex-col shadow-lg hover:shadow-xl">
      {/* Product Image Section */}
      <div className="relative overflow-hidden h-64">
        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
            {discountPercentage}% OFF
          </span>
        )}
        
        {/* Product Image */}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          onClick={() => window.scrollTo(0, 0)}
        />
        
        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Link
            to={`/product/${id}`}
            className="bg-white text-gray-800 p-3 rounded-full transform hover:scale-110 transition-all duration-300"
          >
            <FaSearch className="text-lg" />
          </Link>
        </div>
      </div>
      
      {/* Product Info Section */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Category */}
        <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">
          {category}'s Coffee
        </span>
        
        {/* Product Name */}
        <h2 className="font-bold text-lg text-gray-800 mb-2 truncate">
          {name}
        </h2>
        
        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex mr-2">
            <FaStar className="text-yellow-400 text-sm" />
            <FaStar className="text-yellow-400 text-sm" />
            <FaStar className="text-yellow-400 text-sm" />
            <FaStarHalfStroke className="text-yellow-400 text-sm" />
            <FaRegStar className="text-yellow-400 text-sm" />
          </div>
          <span className="text-xs text-gray-500">24k reviews</span>
        </div>
        
        {/* Price */}
        <div className="flex items-center mb-4">
          <span className="font-bold text-lg text-gray-800">${new_price}.00</span>
          {old_price > new_price && (
            <span className="text-sm text-gray-500 line-through ml-2">
              ${old_price}.00
            </span>
          )}
        </div>
        
        {/* Buttons */}
        <div className="mt-auto flex gap-2">
          <button className="flex-1 bg-gray-900 hover:bg-gray-800 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300">
            Add to Cart
          </button>
          <Link to={`/product/${id}`} className="flex items-center justify-center p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-300">
            <FaHeart className="text-gray-400 hover:text-red-500 transition-colors duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;