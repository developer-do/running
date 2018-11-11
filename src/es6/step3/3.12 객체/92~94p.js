const obj = {};

obj.color = "yellow";
obj["not an identifier"] = 3;

const SIZE = Symbol();
obj[SIZE] = 8;

const sam1 = {
	name: 'Sam',
	age: 4,
};

const sam2 = { name: 'Sam', age: 4 };
const sam3 = {
	name: 'Sam',
	classification: { // 프로퍼티 값도 객체가 될 수 있습니다.
		kingdom: 'Anamalia',
		phylum: 'Chordata',
		class: 'Mamalia',
		order: 'Carnivoria',
		family: 'Felidae',
		sunfamily: 'Felinae',
		genus: 'Felis',
		species: 'catus',
	},
};

sam3.speak = function () {
	return "meow!";
};

delete sam3.classification;
delete sam3.speak;