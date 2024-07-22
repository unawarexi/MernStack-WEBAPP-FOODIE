import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  HeroSection,
  RecipesSection,
} from "../components/RightSection/ExportRight";

import { CategoriesContext } from "../context/ContextProvider";

function RightContainer() {
  const { categories, meals, selectedCategory, ActiveCategory } =
    useContext(CategoriesContext);

  return (
    <section className="items-center justify-center flex-1  flex-col w-full p-2">
      {/* ------------- Categories Section --------------- */}
      <HeroSection />

      {/* ------------- Meals Section --------------- */}
      {meals.length > 0 && (
        <RecipesSection
          categories={categories}
          meals={meals}
          selectedCategory={selectedCategory}
        />
      )}
    </section>
  );
}

export default RightContainer;
