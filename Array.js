// In the following shopping cart add, remove, edit items
// => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// - add 'Meat' in the beginning of your shopping cart if it has not been already added
// - add Sugar at the end of your shopping cart if it has not been already added
// - remove 'Honey'
// - modify Tea to 'Green Tea'

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.includes('Meat') ? null : shoppingCart.unshift('Meat');
shoppingCart.includes('Sugar') ? null : shoppingCart.push('Sugar');
shoppingCart.indexOf('Honey') !== -1 ? shoppingCart.splice(shoppingCart.indexOf('Honey'), 1) : null;
shoppingCart.indexOf('Tea') !== -1 ? shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea' : null;
console.log(shoppingCart); 
