import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import cuisines from "../../constants/Cuisines";

const SideBarItems = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);

  const toggleCategory = (index) => {
    setActiveCategory(index === activeCategory ? null : index);
    setActiveSubcategory(null); // Reset subcategory when category changes
  };

  const toggleSubcategory = (index) => {
    setActiveSubcategory(index === activeSubcategory ? null : index);
  };

  return (
    <div className="space-y-2">
      {cuisines.map((category, categoryIndex) => (
        <div key={categoryIndex} className="border-b border-gray-300">
          <div
            className={`flex items-center justify-between p-2 cursor-pointer ${
              categoryIndex === activeCategory
                ? "bg-amber-500 text-white"
                : "bg-gray-400"
            }`}
            onClick={() => toggleCategory(categoryIndex)}
          >
            <h3 className="text-lg">{category.category}</h3>
            {categoryIndex === activeCategory ? (
              <FaChevronUp />
            ) : (
              <FaChevronDown />
            )}
          </div>

          {/* ---------------- sub category ------------- */}
          {categoryIndex === activeCategory && (
            <div className="pl-4 ">
              {category.subcategories.map((subcategory, subcategoryIndex) => (
                <div
                  key={subcategoryIndex}
                  className="border-b border-gray-200 mb-2 start-0"
                >
                  <div
                    className={`flex items-center justify-between p-2 cursor-pointer ${
                      subcategoryIndex === activeSubcategory
                        ? "bg-white text-black"
                        : "bg-gray-200"
                    }`}
                    onClick={() => toggleSubcategory(subcategoryIndex)}
                  >
                    <h4 className="text-md">
                      {subcategory.icon} {subcategory.name}
                    </h4>
                    {subcategoryIndex === activeSubcategory ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </div>

                  {/* ----------------- sub region --------------- */}
                  {subcategoryIndex === activeSubcategory &&
                    subcategory.subregions && (
                      <ul className="pl-2 pr-2 space-y-1 py-2">
                        {subcategory.subregions.map(
                          (subregion, subregionIndex) => (
                            <li
                              key={subregionIndex}
                              className="flex items-center space-x-2 p-2 bg-gray-100 rounded"
                            >
                              {subregion.icon} <span>{subregion.name}</span>
                            </li>
                          )
                        )}
                      </ul>
                    )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SideBarItems;
