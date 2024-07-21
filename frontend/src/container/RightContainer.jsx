import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  HeroSection,
  RecipesSection,
} from "../components/RightSection/ExportRight";
import axios from "axios";

import { CategoriesContext } from "../context/ContextProvider";

function RightContainer() {
  const { categories, meals, selectedCategory, ActiveCategory } =
    useContext(CategoriesContext);
  // const [meals, setMeals] = useState([]);
  // const API_GET_RECIPES = "https://themealdb.com/api/json/v1/1/filter.php?c=";

  // // Function to fetch recipes data
  // const getRecipes = async (category = "beef") => {
  //   try {
  //     // Fetch data from API
  //     const getRecipeUrl = `${API_GET_RECIPES}${category}`; // don't add space for concat
  //     const response = await axios.get(getRecipeUrl);

  //     // Check if response data is valid and update state accordinglys
  //     if (response && response.data && response.data.meals) {
  //       setMeals(response.data.meals);
  //     } else {
  //       console.log("Error: Invalid response data");
  //     }
  //   } catch (error) {
  //     console.log("Error: ", error.message);
  //   }
  // };

  // useEffect(() => {
  //   getRecipes();
  // }, []);

  // const selectCategory = (category) => {
  //   setActiveCategory(category);
  //   getRecipes(category);
  //   setMeals([]);
  // };

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
