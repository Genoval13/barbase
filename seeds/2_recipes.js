
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { //Manhattan
          ing1: "Sweet Vermouth",
          ing2: "Bourbon",
          ing3: "Angostura bitters",
          ing4: "Ice",
          ing5: "Maraschino cherry",
          ing6: "Orange peel",
          ing7: "",
          ing8: "",
          amt1: "3\/4 oz ",
          amt2: "2 1\/2 oz Blended ",
          amt3: "dash ",
          amt4: "2 or 3 ",
          amt5: "1 ",
          amt6: "1 twist of ",
          amt7: "",
          amt8: ""
        },
        { //Martini
          ing1: "Gin",
          ing2: "Dry Vermouth",
          ing3: "Olive",
          ing4: "",
          ing5: "",
          ing6: "",
          ing7: "",
          ing8: "",
          amt1: "1 2\/3 oz ",
          amt2: "1\/3 oz ",
          amt3: "1 ",
          amt4: " ",
          amt5: " ",
          amt6: " ",
          amt7: " ",
          amt8: ""
        },
        { //Margarita
        ing1: "Tequila",
        ing2: "Triple sec",
        ing3: "Lime juice",
        ing4: "Salt",
        ing5:"",
        ing6:"",
        ing7:"",
        ing8:"",
        amt1:"1 1\/2 oz ",
        amt2:"1\/2 oz ",
        amt3:"1 oz ",
        amt4:"",
        amt5:"",
        amt6:"",
        amt7:"",
        amt8:""
      },
      { //Moscow Mule
        ing1: "Vodka",
        ing2: "Lime juice",
        ing3: "Ginger ale",
        ing4: "",
        ing5: "",
        ing6: "",
        ing7: "",
        ing8: "",
        amt1: "2 oz ",
        amt2: "2 oz ",
        amt3: "8 oz ",
        amt4: " ",
        amt5: " ",
        amt6: " ",
        amt7: " ",
        amt8: " "
      },
      { //Vampiro
        ing1: "Tequila",
        ing2: "Tomato Juice",
        ing3: "Orange Juice",
        ing4: "Lime Juice",
        ing5: "Sugar Syrup",
        ing6: "Salt",
        ing7: "",
        ing8: "",
        amt1: "6 cl",
        amt2: "3 cl",
        amt3: "3 cl",
        amt4: "1.5 cl",
        amt5: "1 dash",
        amt6: "1 pinch",
        amt7: " ",
        amt8: ""
      }
      ]);
    });
};
