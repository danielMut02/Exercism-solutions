/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(time) {
  if (time === 0) {
    return 'Lasagna is done.';
  } else if (time === undefined) {
    return 'You forgot to set the timer.';
  } else {
    return 'Not done, please wait.';
}
}  
  

export function preparationTime(layers, minutesPerLayer) {
  if (minutesPerLayer === undefined) {
    return layers.length * 2;
  } else {
    return layers.length * minutesPerLayer;
  }
}

export function quantities(layers) {
  let noodleCount = 0;
  let sauceCount = 0;
  for (let i = 0; i < layers.length; i++) {
    switch (layers[i]) {
      case 'noodles':
        noodleCount += 50;
        break;
      case 'sauce':
        sauceCount += 0.2;
        break;
    }
  }
  const obj = {noodles: noodleCount, sauce: sauceCount};
  return obj;
}

export function addSecretIngredient(friendsRecipe, myRecipe) {
  let secretIngredient = friendsRecipe[friendsRecipe.length - 1];
  myRecipe.push(secretIngredient);
}

export function scaleRecipe(recipe, numberOfPortions) {
  const newRecipe = { ...recipe };
  for (let key in newRecipe) {
    newRecipe[key] *= numberOfPortions/2;
  }
  return newRecipe;
}
  
