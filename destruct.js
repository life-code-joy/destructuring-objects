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
  orderDelivery: function({starterIndex,mainIndex,time,address}){
    console.log(`Order received ${this.starterMenu[starter.starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  }
};

restaurant.orderDelivery({time: '20:30', address:'20 Raviolli Ave', mainIndex:2, starterIndex: 2} );

const { name, openingHours, categories } = restaurant;

//re-asign variable names
const {
  name: resNames = CI,
  openingHours: businessHours,
  categories: foodStuff,
  prices,
} = restaurant;

console.log(businessHours);

// console.log(resNames, businessHours, foodStuff, prices);

//mutating variables
let a = 111;
let b = 999;
let c = 231;

const obj = {a:23, b:45, c:33};

// you must wrap in brackets or you wull get an error
({a,b} = obj);

console.log(a, b, c);

// nested items 
const {fri: {open,  close}} = businessHours;
console.log(open, close);

//nested + resign
const {fri: {open: o,  close: cl}} = businessHours;
console.log(o, cl);


