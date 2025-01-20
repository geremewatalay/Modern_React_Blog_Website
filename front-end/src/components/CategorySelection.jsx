import React from 'react';

const CategorySelection = ({ onSelectCategory, activeCategory }) => {
  const categories = ["Startups", "Security", "AI", "Apps", "Tech"];

  return (
    <div className="px-4 mb-8 lg:space-x-4 flex flex-wrap items-center border-b-2 py-5 text-gray-900 font-semibold">
      <button 
        className={`lg:ml-12 ${activeCategory === "All" ? "active-button" : ""}`}
        onClick={() => onSelectCategory(null)}
      >
        All
      </button>
      {
        categories.map((category) => (
          <button 
            className={`mr-2 space-x-15 ${activeCategory === category ? "active-button" : ""}`}
            key={category}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </button>
        ))
      }
    </div>
  );
};

export default CategorySelection;
