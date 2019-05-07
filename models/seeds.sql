USE cocktailsdb;
-- populates the database with preset cocktails

-- Screwdriver
INSERT INTO cocktails
    (boozeType, drinkName, ingredients, instructions)
VALUES 
    ("vodka", "Screwdriver", "2 oz. Vodka, Orange Juice to taste", "Mix in a highball glass with ice.  Garnish and serve.");
-- Old Fashioned
INSERT INTO cocktails
    (boozeType, drinkName, ingredients, instructions)
VALUES 
    ("bourbon", "Old Fashioned", "1 1/2 oz. Bourbon, 2 dashes Angostura bitters, 1 cube sugar, dash of water", "Place sugar cube in old fashioned glass and saturate with bitters, with dash of water.  FIll the glass with ice cubes and bourbon.  Garnish with orange twist and a cocktail cherry.");
-- Mojito
INSERT INTO cocktails
    (boozeType, drinkName, ingredients, instructions)
VALUES 
    ("rum", "Mojito", "3 oz. Rum, 2 tsp sugar, soda water, mint leaves, lime juice", "Muddle mint leaves with sugar and lime juice.  Add a splash of soda water and fill the glass with cracked ice.  Pour the rum and top with soda water.  Garnish and serve with straw.");
-- Whiskey Sour
INSERT INTO cocktails
    (boozeType, drinkName, ingredients, instructions)
VALUES 
    ("whiskey", "Whiskey Sour", "2 oz. blended whiskey, 1/2 lemon juice, 1/2 lemon slice, 1/2 tsp powdered sugar", "Shake whiskey, lemon juice, sugar with ice, and strain into a chilled glass.");
-- Dry Martini
INSERT INTO cocktails
    (boozeType, drinkName, ingredients, instructions)
VALUES 
    ("Gin", "Dry Martini", "1 2/3 oz. gin, 1/3 oz dry vermouth, 1 olive", "Pour gin and vermouth into mixing glass with ice cubes, and stir well.  Strain in chilled martini cocktail glass and garnish with olive.");
-- Daiquiri
INSERT INTO cocktails
    (boozeType, drinkName, ingredients, instructions)
VALUES 
    ("Rum", "Daiquiri", "1 1/2 oz. light rum, 1/2 lime juice, 1 tsp powdered sugar", "Pour all ingredients into shaker with ice cubes.  Shake well.  Strain in chilled cocktail glass.");
-- Margarita
INSERT INTO cocktails
    (boozeType, drinkName, ingredients, instructions)
VALUES 
    ("Tequila", "Margarita", "1 1/2 oz. tequila, 1/2 oz triple sec, 1 oz lime juice, salt", "Rub the rim of the glass with a slice of lime and sprinkle with salt.  Shake the other ingredients with ice, then pour into glass, avoiding contact with the salted rim.");
-- Manhattan
INSERT INTO cocktails
    (boozeType, drinkName, ingredients, instructions)
VALUES 
    ("Bourbon", "Manhattan", "2 1/2 oz. blended bourbon, 3/4 oz. sweet vermouth, dash of angostura bitters", "Stir ingredients over ice, strain into a chilled cocktail glass.  Add a twist of orange peel and garnish with cherry.");
-- Moscow Mule
INSERT INTO cocktails
    (boozeType, drinkName, ingredients, instructions)
VALUES 
    ("Vodka", "Moscow Mule", "2 oz. vodka, 2 oz. lime juice, 8 oz. ginger ale or beer", "Combine vodka, ginger beer in a highball glass filled with ice.  Stir gently.  Serve in copper mug, garnish with slice of lime.");
-- Long Island Iced Tea
INSERT INTO cocktails
    (boozeType, drinkName, ingredients, instructions)
VALUES 
    ("Vodka", "Long Island Tea", "1/2 oz. vodka, 1/2 oz. light rum, 1/2 oz. gin, 1/2 oz. tequila, 1/2 lemon juice, 1 splash cola", "Combine all ingredients except cola, pour over ice into a highball glass.  Add splash of cola to taste, and for color.  Garnish with lemon slice.");