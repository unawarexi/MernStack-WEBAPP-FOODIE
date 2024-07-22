// CategoriesSection.jsx
import React, { useEffect } from "react";

const CategoriesSection = ({
  ActiveCategory,
  selectedCategory,
  categories,
}) => {
  return (
    <section className="flex flex-wrap gap-4 items-center justify-center">
      {Array.isArray(categories) && categories.length > 0 ? (
        categories.map((item) => {
          const isActive = item.strCategory === ActiveCategory;
          const bgColor = isActive
            ? "bg-amber-500 text-[#fff] font-bold"
            : "bg-black/10 text-neutral-600 ";

          return (
            <section
              key={item.idCategory}
              className={`rounded-lg p-2 flex flex-col items-center ${bgColor} transition duration-300 ease-in-out hover:bg-amber-400 cursor-pointer`}
              onClick={() => selectedCategory(item.strCategory)}
            >
              <img
                src={item.strCategoryThumb}
                alt={item.strCategory}
                className="rounded-full md:w-20 md:h-20 w-16 h-16 mb-2 object-contain"
              />
              <div className=" text-sm text-center">{item.strCategory}</div>
            </section>
          );
        })
      ) : (
        <p>No categories available.</p>
      )}
    </section>
  );
};

export default CategoriesSection;
