const dishName = 'Kacchi Biriyani';
const price = 250;

function printOrderLine(dish, cost) {
  console.log(`${dish} - $${cost}`);
}

// dish/cost are this function's own parameter names — they don't auto-fill
// from the same-shaped outer consts, so the actual values must be passed in
// explicitly or the call throws ReferenceError.
printOrderLine(dishName, price);
