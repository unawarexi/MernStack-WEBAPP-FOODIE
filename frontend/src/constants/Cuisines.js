const cuisines = [
  {
    category: "Regions",
    subcategories: [
      {
        name: "Africa",
        icon: "🌍",
        subregions: [
          { name: "North Africa", icon: "🕌" },
          { name: "West Africa", icon: "🥘" },
          { name: "East Africa", icon: "🍛" },
          { name: "Central Africa", icon: "🍲" },
          { name: "Southern Africa", icon: "🍖" },
        ],
      },
      {
        name: "Asia",
        icon: "🌏",
        subregions: [
          { name: "East Asia", icon: "🍜" },
          { name: "South Asia", icon: "🍛" },
          { name: "Southeast Asia", icon: "🍲" },
          { name: "Central Asia", icon: "🍖" },
          { name: "Western Asia", icon: "🥙" },
        ],
      },
      {
        name: "Europe",
        icon: "🌍",
        subregions: [
          { name: "Northern Europe", icon: "🍞" },
          { name: "Southern Europe", icon: "🍝" },
          { name: "Eastern Europe", icon: "🥟" },
          { name: "Western Europe", icon: "🥖" },
          { name: "Central Europe", icon: "🥨" },
        ],
      },
      {
        name: "North America",
        icon: "🌎",
        subregions: [
          { name: "USA", icon: "🍔" },
          { name: "Canada", icon: "🥞" },
          { name: "Mexico", icon: "🌮" },
          { name: "Caribbean", icon: "🍹" },
        ],
      },
      {
        name: "South America",
        icon: "🌎",
        subregions: [
          { name: "Brazil", icon: "🥩" },
          { name: "Argentina", icon: "🍖" },
          { name: "Peru", icon: "🍲" },
          { name: "Colombia", icon: "🍛" },
        ],
      },
      {
        name: "Australia",
        icon: "🌏",
        subregions: [
          { name: "Australia", icon: "🍖" },
          { name: "New Zealand", icon: "🍷" },
        ],
      },
      {
        name: "Antarctica",
        icon: "❄️",
        subregions: [],
      },
    ],
  },
  {
    category: "Culture",
    subcategories: [
      { name: "Italian", icon: "🍝" },
      { name: "Chinese", icon: "🥡" },
      { name: "Japanese", icon: "🍣" },
      { name: "Indian", icon: "🍛" },
      { name: "French", icon: "🥖" },
      { name: "Mexican", icon: "🌮" },
      { name: "Nigerian", icon: "🍝" },
      { name: "English", icon: "🍛" },
      { name: "Middle Eastern", icon: "🥙" },
    ],
  },
  {
    category: "Health Preferences",
    subcategories: [
      { name: "Vegetarian", icon: "🥗" },
      { name: "Vegan", icon: "🥬" },
      { name: "Gluten-Free", icon: "🍞" },
      { name: "Keto", icon: "🥓" },
      { name: "Paleo", icon: "🍖" },
      { name: "Low Carb", icon: "🥚" },
    ],
  },
  {
    category: "Lifestyle Preferences",
    subcategories: [
      { name: "Organic", icon: "🌿" },
      { name: "Farm-to-Table", icon: "🚜" },
      { name: "Fast Food", icon: "🍔" },
      { name: "Street Food", icon: "🍢" },
      { name: "Fine Dining", icon: "🍷" },
      { name: "Casual Dining", icon: "🍽️" },
    ],
  },
];

export default cuisines;
