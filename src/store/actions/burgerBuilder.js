import * as actionTypes from "./actionactionTypes";

export const addIngredient = (name) => {
     return{
          type: actionTypes.ADD_INGREDIENT,
          ingredientName: name
     };
};

export const removeIngredient = (name) => {
     return{
          type: actionTypes.REMOVE_INGREDIENT,
          ingredientName: name
     };
};