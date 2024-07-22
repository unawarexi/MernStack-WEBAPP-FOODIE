import { createContext, useEffect, useState } from "react";
import axios from "axios";

// Create the CategoriesContext to hold the global state
const CategoriesContext = createContext();

const ContextProvider = ({ children }) => {
  /**
   * State to hold the active category
   * State to hold the list of categories
   * State to hold the list of meals
   *
   * tips, study state management and applications
   */
  const [ActiveCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);

  /** ------------------------ API ENDPOINTS TO GET DATA
   * API endpoints to get categories
   * API endpoint to get meals filtered by category
   *
   * tips: read axios, error,  handling here
   */
  const API_GET_CATEGORIES = import.meta.API_GET_CATEGORIES;
  const API_GET_RECIPES = import.meta.API_GET_RECIPES;

  //---------------------------- Function to fetch categories from the API
  const getCategories = async () => {
    try {
      const response = await axios.get(API_GET_CATEGORIES);
      if (response && response.data && response.data.categories) {
        // Update the categories state with fetched data
        setCategories(response.data.categories);
      } else {
        console.log("Error: Invalid response data");
      }
    } catch (error) {
      console.log("Error:", error.message);
    }
  };

  //---------------------- Function to fetch meals for a SPECIFIC category from the API
  const getRecipes = async (category = "Beef") => {
    try {
      const getRecipeUrl = `${API_GET_RECIPES}${category}`;
      const response = await axios.get(getRecipeUrl);
      if (response && response.data && response.data.meals) {
        // Update the meals state with fetched data
        setMeals(response.data.meals);
      } else {
        console.log("Error: Invalid response data");
      }
    } catch (error) {
      console.log("Error:", error.message);
    }
  };

  //------------------ useEffect to fetch categories and default recipes when the component mounts
  useEffect(() => {
    getCategories();
    getRecipes();
  }, []);

  // Function to handle category selection
  const selectedCategory = (category) => {
    // Update the active category
    setActiveCategory(category);
    // Fetch recipes for the selected category
    getRecipes(category);
    // Clear the current meals list
    setMeals([]);
  };

  return (
    // Provide the context values to children components
    <CategoriesContext.Provider
      value={{ ActiveCategory, categories, meals, selectedCategory }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};

export { CategoriesContext, ContextProvider };
