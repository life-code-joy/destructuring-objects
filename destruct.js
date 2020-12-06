'use strict';
//Extremely awesome for getting data from API calls - a lot less code

const restaurant = {
  name: 'clasic Italiano',
  location: '123 Pizza street',
  categories: ['pizza', 'chicken wings', 'wings'],
  starterMenu: ['Focassia', 'garlic bread', 'Caprese salad'],
  mainMenu: ['pizza', 'pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const { name, openingHours, categories } = restaurant;

//re-asign variable names
const {
  name: resNames = CI,
  openingHours: businessHours = BH,
  categories: foodStuff,
  prices,
} = restaurant;

console.log(resNames, businessHours, foodStuff, prices);
