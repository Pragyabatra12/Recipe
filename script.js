const recipes = [
    { 
        name: "Chana Masala", 
        ingredients: ["Chickpeas", "Onion", "Tomato", "Ginger", "Garlic", "Spices", "Coriander Leaves"], 
        method: "Saute onions, tomatoes, and spices. Add cooked chickpeas. Simmer until flavors meld. Serve with rice or naan." 
    },
    { 
        name: "Palak Paneer", 
        ingredients: ["Spinach", "Paneer", "Onion", "Tomato", "Ginger", "Garlic", "Green Chilies", "Cream", "Spices", "Coriander Leaves"], 
        method: "Blanch spinach. Puree with garlic, ginger, and green chilies. Saute with spices and paneer. Add cream and simmer until thickened." 
    },
    { 
        name: "Dal Tadka", 
        ingredients: ["Lentils", "Onion", "Tomato", "Ginger", "Garlic", "Spices", "Coriander Leaves"], 
        method: "Pressure cook lentils with turmeric and salt. Temper with cumin seeds, garlic, and red chilies. Serve hot with rice." 
    },
    { 
        name: "Vegetable Biryani", 
        ingredients: ["Basmati Rice", "Mixed Vegetables", "Onion", "Tomato", "Ginger", "Garlic", "Spices", "Saffron", "Mint Leaves", "Fried Onions"], 
        method: "Cook basmati rice with vegetables and spices. Layer with fried onions, mint, and saffron-infused milk. Dum cook until aromatic." 
    },
    { 
        name: "Matar Paneer", 
        ingredients: ["Paneer", "Green Peas", "Onion", "Tomato", "Ginger", "Garlic", "Spices", "Cream", "Coriander Leaves"], 
        method: "Saute onions, tomatoes, and spices. Add peas and paneer. Simmer until flavors meld. Serve hot with roti or rice." 
    },
    { 
        name: "Baingan Bharta", 
        ingredients: ["Eggplant", "Onion", "Tomato", "Ginger", "Garlic", "Green Chilies", "Spices", "Coriander Leaves"], 
        method: "Roast eggplant until charred. Peel and mash. Saute with onions, tomatoes, and spices. Serve hot with roti or rice." 
    },
    { 
        name: "Vegetable Pulao", 
        ingredients: ["Basmati Rice", "Mixed Vegetables", "Onion", "Tomato", "Ginger", "Garlic", "Spices", "Mint Leaves", "Coriander Leaves"], 
        method: "Saute onions, tomatoes, and spices. Add mixed vegetables and cooked rice. Stir-fry until well combined. Serve hot with raita." 
    },
    { 
        name: "Rajma Masala", 
        ingredients: ["Kidney Beans", "Onion", "Tomato", "Ginger", "Garlic", "Spices", "Coriander Leaves"], 
        method: "Pressure cook kidney beans with tomatoes, onions, and spices. Garnish with cilantro. Serve hot with rice." 
    },
    { 
        name: "Cabbage Thoran", 
        ingredients: ["Cabbage", "Coconut", "Mustard Seeds", "Curry Leaves", "Green Chilies", "Ginger", "Garlic", "Spices"], 
        method: "Saute cabbage with mustard seeds, curry leaves, coconut, and spices. Serve hot with rice or roti." 
    },
    { 
        name: "Chole Bhature", 
        ingredients: ["Chickpeas", "Onion", "Tomato", "Ginger", "Garlic", "Spices", "Coriander Leaves", "Flour", "Yogurt"], 
        method: "Pressure cook chickpeas with onions, tomatoes, and spices. Serve hot with deep-fried bread (bhature) and pickle." 
    },
    { 
        name: "Vegetable Korma", 
        ingredients: ["Mixed Vegetables", "Onion", "Tomato", "Ginger", "Garlic", "Spices", "Coconut Milk", "Coriander Leaves"], 
        method: "Saute onions, tomatoes, and spices. Add mixed vegetables and coconut milk. Simmer until vegetables are tender. Serve hot with rice or naan." 
    },
    { 
        name: "Aloo Gobi", 
        ingredients: ["Potato", "Cauliflower", "Onion", "Tomato", "Ginger", "Garlic", "Spices", "Coriander Leaves"], 
        method: "Saute onions, garlic, ginger, and spices. Add potatoes and cauliflower. Cook until tender. Garnish with cilantro." 
    },
    { 
        name: "Paneer Tikka Masala", 
        ingredients: ["Paneer", "Bell Peppers", "Onion", "Tomato", "Ginger", "Garlic", "Spices", "Cream", "Coriander Leaves"], 
        method: "Grill marinated paneer until charred. Saute with onions, tomatoes, and spices. Finish with cream. Serve hot with rice or naan." 
    },
    { 
        name: "Veggie Pizza", 
        ingredients: ["Pizza Dough", "Tomato Sauce", "Mixed Vegetables", "Cheese", "Herbs"], 
        method: "Spread pizza dough with tomato sauce. Top with mixed vegetables, cheese, and herbs. Bake until crust is golden and cheese is melted." 
    },
    { 
        name: "Vegetable Manchurian", 
        ingredients: ["Mixed Vegetables", "Flour", "Ginger", "Garlic", "Soy Sauce", "Spices", "Spring Onions"], 
        method: "Shape mixed vegetable balls. Deep fry until golden brown. Saute with garlic, ginger, soy sauce, and spices. Serve hot with fried rice." 
    },
    { 
        name: "Masoor Dal", 
        ingredients: ["Red Lentils", "Onion", "Tomato", "Ginger", "Garlic", "Spices", "Coriander Leaves"], 
        method: "Boil red lentils with turmeric and salt. Temper with mustard seeds, garlic, and curry leaves. Serve hot with rice or roti." 
    },
    { 
        name: "Aloo Paratha", 
        ingredients: ["Potatoes", "Whole Wheat Flour", "Ghee", "Spices"], 
        method: "Stuff dough with spiced mashed potatoes. Roll out and cook on a griddle with ghee until golden brown. Serve hot with yogurt or pickle." 
    },
    { 
        name: "Vegetable Samosa", 
        ingredients: ["Flour", "Potatoes", "Peas", "Spices", "Oil"], 
        method: "Make dough with flour and ghee. Fill with spiced potatoes and peas. Shape into triangles and deep fry until golden brown." 
    },
    { 
        name: "Vegetable Upma", 
        ingredients: ["Semolina", "Mixed Vegetables", "Mustard Seeds", "Curry Leaves", "Green Chilies", "Ginger", "Spices"], 
        method: "Saute semolina with mustard seeds, curry leaves, onions, and vegetables. Serve hot with chutney or sambar." 
    },
    { 
        name: "Mixed Veg Curry", 
        ingredients: ["Mixed Vegetables", "Onion", "Tomato", "Ginger", "Garlic", "Spices", "Coriander Leaves"], 
        method: "Saute onions, tomatoes, and spices. Add mixed vegetables. Simmer until vegetables are tender. Serve hot with rice or roti." 
    },
    { 
        name: "Vegetable Hakka Noodles", 
        ingredients: ["Noodles", "Mixed Vegetables", "Soy Sauce", "Ginger", "Garlic", "Spices", "Spring Onions"], 
        method: "Boil noodles. Saute mixed vegetables with garlic, ginger, soy sauce, and spices. Toss with noodles. Serve hot." 
    },
    { 
        name: "Mushroom Masala", 
        ingredients: ["Mushrooms", "Onion", "Tomato", "Ginger", "Garlic", "Spices", "Cream", "Coriander Leaves"], 
        method: "Saute mushrooms with onions, tomatoes, and spices. Finish with cream and cilantro. Serve hot with rice or naan." 
    },
    { 
        name: "Vegetable Cutlet", 
        ingredients: ["Potatoes", "Mixed Vegetables", "Breadcrumbs", "Spices", "Oil"], 
        method: "Mash boiled potatoes with mixed vegetables, spices, and breadcrumbs. Shape into patties and shallow fry until golden brown. Serve hot with ketchup or chutney." 
    },
    { 
        name: "Vegetable Jalfrezi", 
        ingredients: ["Mixed Vegetables", "Onion", "Bell Peppers", "Tomato", "Ginger", "Garlic", "Spices", "Coriander Leaves"], 
        method: "Saute onions, bell peppers, and tomatoes. Add mixed vegetables and spices. Stir-fry until vegetables are tender. Serve hot with rice or naan." 
    },
    { 
        name: "Vegetable Kofta Curry", 
        ingredients: ["Mixed Vegetables", "Paneer", "Breadcrumbs", "Onion", "Tomato", "Ginger", "Garlic", "Spices", "Cream", "Coriander Leaves"], 
        method: "Shape mixed vegetable balls. Fry until golden brown. Simmer in creamy tomato gravy. Serve hot with rice or roti." 
    },
    { 
        name: "Vegetable Fried Rice", 
        ingredients: ["Cooked Rice", "Mixed Vegetables", "Soy Sauce", "Ginger", "Garlic", "Spices", "Spring Onions"], 
        method: "Saute mixed vegetables with garlic, ginger, soy sauce, and spices. Toss with cooked rice. Serve hot." 
    }
];
// Function to generate a random recipe
function generateRandomRecipe() {
    // Get a random index within the range of the recipes array length
    const randomIndex = Math.floor(Math.random() * recipes.length);
    const randomRecipe = recipes[randomIndex]; // Get the random recipe object

    // Create a recipe card
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');

    // Populate the recipe card with recipe details
    recipeCard.innerHTML = `
        <h2>${randomRecipe.name}</h2>
        <p><strong>Ingredients:</strong> ${randomRecipe.ingredients.join(", ")}</p>
        <p><strong>Method:</strong> ${randomRecipe.method}</p>
    `;

    // Clear previous recipe cards
    const recipeContainer = document.getElementById('recipe-container');
    recipeContainer.innerHTML = '';

    // Append the recipe card to the recipe container
    recipeContainer.appendChild(recipeCard);
}

// Event listener for the "Generate Recipe" button
const generateBtn = document.getElementById('generateBtn');
generateBtn.addEventListener('click', generateRandomRecipe);
  