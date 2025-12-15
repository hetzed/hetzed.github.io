// ============================================
// RECIPE WORLD - JAVASCRIPT FUNCTIONALITY
// Author: Felipe D Quiñones
// ============================================

// Wait for DOM to fully load before running scripts
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== HOME PAGE FUNCTIONALITY =====
    
    // Featured image click - Navigate to recipe detail
    const featuredImage = document.getElementById('featuredImage');
    if (featuredImage) {
        featuredImage.addEventListener('click', function() {
            window.location.href = 'recipe-detail.html?recipe=magic-cake';
        });
    }

    // Home button navigation
    const homeButton = document.getElementById('homeButton');
    if (homeButton) {
        homeButton.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'index.html';
        });
    }

    // Recipe list link navigation
    const recipeListLink = document.getElementById('recipeListLink');
    if (recipeListLink) {
        recipeListLink.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'recipe-list.html';
        });
    }

    // Suggest link navigation
    const suggestLink = document.getElementById('suggestLink');
    if (suggestLink) {
        suggestLink.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'suggest.html';
        });
    }


    // ===== RECIPE LIST PAGE FUNCTIONALITY =====
    
    // Add click handlers to recipe images
    const recipeImages = document.querySelectorAll('.recipe-image');
    recipeImages.forEach(function(image) {
        image.addEventListener('click', function() {
            const recipeName = this.getAttribute('data-recipe');
            window.location.href = 'recipe-detail.html?recipe=' + recipeName;
        });
    });


    // ===== RECIPE DETAIL PAGE FUNCTIONALITY =====
    
    // Get recipe name from URL
    const urlParams = new URLSearchParams(window.location.search);
    const recipeName = urlParams.get('recipe');
    
    // Recipe database (in real app, this would come from a server/database)
    const recipes = {
        'magic-cake': {
            title: 'MAGIC CAKE',
            image: 'images/magic-cake.jpg',
            ingredients: [
                '4 eggs (at room temperature)',
                '3/4 cup sugar',
                '8 tablespoon butter (unsalted and melted)',
                '1 teaspoon vanilla extract',
                '3/4 cup all-purpose flour',
                '2 cups milk (lukewarm)',
                'powdered sugar (for dusting)'
            ],
            directions: [
                'Preheat the oven to 325°F (160°C). Grease and line an 8x8 inch baking pan.',
                'Separate the egg whites from the yolks. Beat the egg whites until stiff peaks form, then set aside.',
                'In a large bowl, beat the egg yolks with sugar until light and fluffy.',
                'Add melted butter and vanilla extract to the yolk mixture and combine well.',
                'Gradually add flour and mix until smooth.',
                'Slowly add lukewarm milk while continuously stirring. The mixture will be very liquid.',
                'Gently fold in the beaten egg whites using a spatula. Mix carefully to maintain airiness.',
                'Pour the batter into the prepared pan and bake for 40-60 minutes until the top is golden brown.',
                'Let cool completely before cutting. Dust with powdered sugar before serving.'
            ]
        },
        'korean-chicken': {
            title: 'KOREAN FRIED CHICKEN',
            image: 'images/korean-chicken.jpg',
            ingredients: [
                '2 lbs chicken wings or drumsticks',
                '1 cup all-purpose flour',
                '1/2 cup cornstarch',
                '1 teaspoon salt',
                '1/2 teaspoon black pepper',
                '1/4 cup gochujang (Korean chili paste)',
                '3 tablespoons soy sauce',
                '2 tablespoons honey',
                '2 tablespoons rice vinegar',
                '4 cloves garlic, minced',
                'Vegetable oil for frying',
                'Sesame seeds and green onions for garnish'
            ],
            directions: [
                'Pat chicken pieces dry with paper towels.',
                'Mix flour, cornstarch, salt, and pepper in a large bowl.',
                'Coat chicken pieces thoroughly in the flour mixture.',
                'Heat oil to 350°F (175°C) in a deep fryer or large pot.',
                'Fry chicken in batches for 10-12 minutes until golden and crispy. Drain on paper towels.',
                'Let chicken rest for 5 minutes, then fry again for 5-7 minutes for extra crispiness.',
                'While chicken is resting, make sauce: combine gochujang, soy sauce, honey, vinegar, and garlic in a pan.',
                'Heat sauce over medium heat until it thickens slightly.',
                'Toss fried chicken in sauce until well coated.',
                'Garnish with sesame seeds and sliced green onions. Serve immediately.'
            ]
        },
        'vegetarian-pasta': {
            title: 'EASY VEGETARIAN PASTA',
            image: 'images/vegetarian-pasta.jpg',
            ingredients: [
                '1 lb pasta (spaghetti or linguine)',
                '3 tablespoons olive oil',
                '4 cloves garlic, minced',
                '1 cup cherry tomatoes, halved',
                '1 zucchini, sliced',
                '1 bell pepper, diced',
                '1 cup spinach',
                '1/4 cup fresh basil, chopped',
                'Salt and pepper to taste',
                'Parmesan cheese for serving',
                'Red pepper flakes (optional)'
            ],
            directions: [
                'Bring a large pot of salted water to boil and cook pasta according to package directions.',
                'While pasta cooks, heat olive oil in a large skillet over medium heat.',
                'Add minced garlic and sauté for 1 minute until fragrant.',
                'Add cherry tomatoes, zucchini, and bell pepper. Cook for 5-7 minutes until vegetables soften.',
                'Add spinach and cook until wilted, about 2 minutes.',
                'Drain pasta, reserving 1 cup of pasta water.',
                'Add pasta to the skillet with vegetables. Toss to combine.',
                'Add pasta water as needed to create a light sauce.',
                'Season with salt, pepper, and red pepper flakes if using.',
                'Remove from heat, stir in fresh basil, and serve with Parmesan cheese.'
            ]
        },
        'chocolate-cookies': {
            title: 'CHOCOLATE CHIP COOKIES',
            image: 'images/chocolate-cookies.jpg',
            ingredients: [
                '2 1/4 cups all-purpose flour',
                '1 teaspoon baking soda',
                '1 teaspoon salt',
                '1 cup butter, softened',
                '3/4 cup granulated sugar',
                '3/4 cup packed brown sugar',
                '2 large eggs',
                '2 teaspoons vanilla extract',
                '2 cups chocolate chips',
                '1 cup chopped walnuts (optional)'
            ],
            directions: [
                'Preheat oven to 375°F (190°C).',
                'Mix flour, baking soda, and salt in a bowl. Set aside.',
                'In a large bowl, cream together butter and both sugars until fluffy.',
                'Beat in eggs one at a time, then add vanilla extract.',
                'Gradually blend in the flour mixture.',
                'Stir in chocolate chips and walnuts if using.',
                'Drop rounded tablespoons of dough onto ungreased baking sheets.',
                'Bake for 9-11 minutes or until golden brown around edges.',
                'Cool on baking sheet for 2 minutes, then transfer to wire rack.',
                'Store in airtight container for up to one week.'
            ]
        },
        'fruit-tart': {
            title: 'FRESH FRUIT TART',
            image: 'images/fruit-tart.jpg',
            ingredients: [
                '1 1/2 cups all-purpose flour',
                '1/2 cup butter, cold and cubed',
                '1/4 cup sugar',
                '1 egg yolk',
                '2 tablespoons cold water',
                '2 cups vanilla custard or pastry cream',
                'Assorted fresh fruits (berries, kiwi, mango, etc.)',
                '1/4 cup apricot jam for glaze',
                '2 tablespoons water for glaze'
            ],
            directions: [
                'Make pastry: Combine flour and sugar. Cut in cold butter until mixture resembles breadcrumbs.',
                'Add egg yolk and water. Mix until dough comes together.',
                'Wrap dough and refrigerate for 30 minutes.',
                'Roll out dough and press into a 9-inch tart pan. Prick bottom with fork.',
                'Bake at 375°F (190°C) for 15-18 minutes until golden. Cool completely.',
                'Spread vanilla custard evenly over cooled crust.',
                'Arrange fresh fruit in decorative pattern on top of custard.',
                'Heat apricot jam with water until melted.',
                'Brush jam glaze gently over fruit for shine.',
                'Refrigerate for at least 1 hour before serving.'
            ]
        }
    };
    
    // Update recipe detail page if on that page
    if (recipeName && recipes[recipeName]) {
        const recipe = recipes[recipeName];
        
        // Update title
        const recipeTitle = document.getElementById('recipeTitle');
        if (recipeTitle) {
            recipeTitle.textContent = recipe.title;
        }
        
        // Update main image
        const recipeMainImage = document.getElementById('recipeMainImage');
        if (recipeMainImage) {
            recipeMainImage.src = recipe.image;
            recipeMainImage.alt = recipe.title;
        }
        
        // Update ingredients list
        const ingredientsList = document.getElementById('ingredientsList');
        if (ingredientsList) {
            ingredientsList.innerHTML = '';
            recipe.ingredients.forEach(function(ingredient) {
                const li = document.createElement('li');
                li.className = 'list-group-item';
                li.textContent = ingredient;
                ingredientsList.appendChild(li);
            });
        }
        
        // Update directions list
        const directionsList = document.getElementById('directionsList');
        if (directionsList) {
            directionsList.innerHTML = '';
            recipe.directions.forEach(function(direction) {
                const li = document.createElement('li');
                li.className = 'mb-3';
                li.textContent = direction;
                directionsList.appendChild(li);
            });
        }
    }


    // ===== SUGGESTIONS PAGE FUNCTIONALITY =====
    
    // Get form elements
    const suggestionForm = document.getElementById('suggestionForm');
    const submitButton = document.getElementById('submitButton');
    const agreeTerms = document.getElementById('agreeTerms');
    
    // Enable/disable submit button based on checkbox
    if (agreeTerms && submitButton) {
        agreeTerms.addEventListener('change', function() {
            if (this.checked) {
                submitButton.disabled = false;
            } else {
                submitButton.disabled = true;
            }
        });
    }
    
    // Handle form submission
    if (suggestionForm) {
        suggestionForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Validate form
            if (!suggestionForm.checkValidity()) {
                event.stopPropagation();
                suggestionForm.classList.add('was-validated');
                return;
            }
            
            // Get form data
            const recipeName = document.getElementById('recipeName').value;
            const ingredients = document.getElementById('ingredients').value;
            const yourName = document.getElementById('yourName').value;
            const yourEmail = document.getElementById('yourEmail').value;
            
            // Create mailto link
            const subject = encodeURIComponent('Recipe Suggestion: ' + recipeName);
            const body = encodeURIComponent(
                'Recipe Name: ' + recipeName + '\n\n' +
                'Ingredients:\n' + ingredients + '\n\n' +
                'Submitted by: ' + yourName + '\n' +
                'Email: ' + yourEmail
            );
            
            // Open email client
            window.location.href = 'mailto:your-email@example.com?subject=' + subject + '&body=' + body;
            
            // Show success message
            alert('Thank you for your recipe suggestion! Your email client should open now.');
            
            // Reset form
            suggestionForm.reset();
            submitButton.disabled = true;
        });
    }

});