module.exports = {
	succeed,
	fail,
	repair,
	get,
};

function succeed(item) {
	return {
		...item,
		enhancement:
			item.enhancement !== 20 ? item.enhancement + 1 : item.enhancement,
	};
}

function fail(item) {
	return {
		...item,
		enhancement:
			item.enhancement !== 20 ? item.enhancement - 1 : item.enhancement,
		durability:
			item.enhancement <= 15 ? item.durability - 5 : item.durability - 10,
	};
}

function repair(item) {
	return {
		...item,
		durability: 100,
	};
}

function get(item) {
	return { ...item };
}

function chanceGenerator(enchantNum) {
	const min = enchantNum;
	const max = 20;
	return Math.floor(Math.random() * (min - max + 1)) + min;
}
