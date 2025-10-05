// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy': return 0.5; break;
    case 'Energizer': return 1.5; break;
    case 'Green Garden': return 1.5; break;
    case 'Tropical Island': return 3; break;
    case 'All or Nothing': return 5; break;
    default: return 2.5; break;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
    if (wedgesNeeded === 0) return 0;
    let wedgesCut = 0;
    let limesCut = 0;
    for (let size of limes) {
      if (size === 'small') {
        wedgesCut += 6;        
      } else if (size === 'medium') {
        wedgesCut += 8;        
      } else if (size === 'large') {
        wedgesCut += 10;
      }
      limesCut++;
      if (wedgesCut >= wedgesNeeded) break;
    }
  return limesCut;  
}


/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  if (orders === '') return [];
  let timePrep = 0;
  while (timePrep < timeLeft) {
    switch (orders[0]) {
      case 'Pure Strawberry Joy': timePrep += 0.5; break;
      case 'Energizer': timePrep += 1.5; break;
      case 'Green Garden': timePrep += 1.5; break;
      case 'Tropical Island': timePrep += 3; break;
      case 'All or Nothing': timePrep += 5; break;
      default: timePrep += 2.5; break;
    }
    orders.shift();
  }
  return orders;
}
