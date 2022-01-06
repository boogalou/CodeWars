// Some new cashiers started to work at your restaurant.
// They are good at taking orders, but they don't know how to capitalize words, or use a space bar!
// All the orders they create look something like this:
// "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"
// The kitchen staff are threatening to quit, because of how difficult it is to read the orders.
// Their preference is to get the orders as a nice clean string with spaces and capitals like so:
// "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"
// The kitchen staff expect the items to be in the same order as they appear in the menu.
// The menu items are fairly simple, there is no overlap in the names of the items:

// 1. Burger
// 2. Fries
// 3. Chicken
// 4. Pizza
// 5. Sandwich
// 6. Onionrings
// 7. Milkshake
// 8. Coke

const str = 'pizzachickenfriesburgercokemilkshakefriessandwich'

function getOrder(input) {
	const dic = ['burger', 'fries', 'chicken', 'pizza', 'sandwich', 'onionrings', 'milkshake', 'coke'];
	const order = [];
	for (let i = 0; i < dic.length; i++) {
		order.push(input.match(new RegExp(`${dic[i]}`, 'gi')));
	}
	return [].concat(...order).filter(item => item)
		.map(item => item.slice(0, 1).toLocaleUpperCase() + item.slice(1)).join(' ');
};

const result = getOrder(str);
console.log(result);
