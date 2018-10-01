
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('drinks').del()
    .then(function () {
      // Inserts seed entries
      return knex('drinks').insert([
        {
          drinkName: 'Manhattan',
          favorites: 55,
          glassType: 'Cocktail',
          img: 'https://www.thecocktaildb.com\/images\/media\/drink\/ec2jtz1504350429.jpg',
          instructions: 'Combine the vermouth, whiskey, bitters and ice in a mixing glass. Stir gently, don\'t bruise the spirits and cloud the drink. Place the cherry in a chilled cocktail glass and strain the whiskey mixture over the cherry. Rub the cut edge of the orange peel over the rim of the glass and twist it over the drink to release the oils but don\'t drop it in.',
          postedBy: 5,
          recipeId: 1
        },
        {
          drinkName: 'Martini',
          favorites: 34,
          glassType: 'Martini',
          img: 'https://www.thecocktaildb.com\/images\/media\/drink\/71t8581504353095.jpg',
          instructions: 'Straight: Pour all ingredients into mixing glass with ice cubes. Stir well. Strain in chilled martini cocktail glass. Squeeze oil from lemon peel onto the drink, or garnish with olive.',
          postedBy: 3,
          recipeId: 2
        },
        {
          drinkName: 'Margarita',
          favorites: 391,
          glassType: 'Cocktail',
          img: 'https://www.thecocktaildb.com\/images\/media\/drink\/wpxpvu1439905379.jpg',
          instructions: 'Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.',
          postedBy: 1,
          recipeId: 3
        },
        {
          drinkName: 'Moscow Mule',
          favorites: 184,
          glassType: "Copper Mug",
          img: 'https://www.thecocktaildb.com\/images\/media\/drink\/3pylqc1504370988.jpg',
          instructions: 'Combine vodka and ginger beer in a copper mug filled with ice. Add lime juice. Stir gently. Garnish.',
          postedBy: 4, 
          recipeId: 4
        },
        {
          drinkName: 'Vampiro',
          favorites: 42,
          glassType: 'Rocks',
          img: 'https://www.thecocktaildb.com\/images\/media\/drink\/yfhn371504374246.jpg',
          instructions: 'Vampiros may be made in a tall glass or an old fashioned glass. Bartenders may first \"rim\" the glass with Kosher Salt, which is done by placing a layer of Kosher Salt on a chopping board, moistening the glass\' rim with lime juice or water, and then placing the upside down glass rim onto the Kosher Salt, so that the salt sticks to the moistened rim. The second step is to fill half the glass with ice and add one or two shooter glasses full of high quality Tequila. The next stage is to add the flavouring elements. This is done by squeezing a fresh lime into the glass, adding a few grains of salt, adding citrus-flavoured soda pop, until the glass is 4\/5 full, and then adding spicy Viuda de Sanchez (or orange juice, lime juice and pico de gallo). The final step is to stir the ingredients so that the flavours are properly blended.',
          postedBy: 2,
          recipeId: 5
        }
      ]);
    });
};
