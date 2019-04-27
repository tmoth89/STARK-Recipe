Scratch Project - House of Stark
Project name: Feast in the North

# STARK-Recipe

[] TO START

\*run npm install

[Backend Todo]

    1. Handle CORS

    2. Set up express server routes
        - Get: Login / Signup / Cookies
        - Get: Main page
        - Post: Search
        - Post: Add user's own recipes
        - Post: Save recipes under user's account
        - Post: Add ingredients to shopping list
        - Delete: Remove saved recipes & user's own recipes from DB
        - Delete: Remove shopping list

    3. DB
        - Connect to DB
        - Delete from DB
        - Add to DB
        - Get DB
        - Parse API data
        - Specific API data

[Frontend Todo]

    1. React Skeleton + Redux
        - '/' page
            : HTML
        - '/main' page
            : 3 components - search, favorite, shoppinglist
        - '/recipe' page
            : TBD

    2. Set up React Router


dburl: postgres://drcropgq:uTKPGV_PGuQgG-Bskbm51J-PZ-rGmNEm@isilo.db.elephantsql.com:5432/drcropgq
    3. [x] Data
        - hits > recipe > label, image, source, url, shareAs, yield, ingredientLines, calories
        - hits > recipe > digest> Fat, Carbs, Protein
