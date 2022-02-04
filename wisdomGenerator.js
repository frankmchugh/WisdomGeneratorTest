function generateWisdom (name, day) {
	

	function getDayQuote (day) {
	function genRandNum () {
		return Math.floor(Math.random() * 4);
	};
	let dayQuote = "";
	
	if (day === "Monday"|| day === "monday") {
		switch (genRandNum()) {

			case 0:
			dayQuote = "Everything has beauty, but not everyone sees it.";
			break;

			case 1:
			dayQuote = " "
			break;

			case 2:
			dayQuote = "  "
			break;

			case 3:
			dayQuote = " ";
			break;

		}
	}

	else if (day === "Tuesday"|| day === "tuesday") {
		switch (genRandNum()) {

			case 0:
			dayQuote = "They must often change who would be constant in happiness or wisdom.";
			break;

			case 1:
			dayQuote = "  ";
			break;

			case 2:
			dayQuote = "  ";
			break;

			case 3: 
			dayQuote = "  ";
			break;		
		}
	}
	else if (day === "Wednesday" || day === "wednesday") {
		switch (genRandNum()) {

			case 0:
			dayQuote = "When anger rises, think of the consequences.";
			break;

			case 1:
			dayQuote = "  ";
			break;

			case 2:
			dayQuote = "  ";
			break;

			case 3: 
			dayQuote = "  ";
			break;	

		}
	}
	else if (day === "Thursday" || day === "thursday") {
		switch (genRandNum()) {

			case 0:
			dayQuote = "When it is obvious that the goals cannot be reached, don't adjust the goals; adjust the action steps.";
			break;

			case 1:
			dayQuote = "  ";
			break;

			case 2:
			dayQuote = "  ";
			break;

			case 3: 
			dayQuote = "  ";
			break;	

		}
	}
	else if (day === "Friday" || day === "friday") {
		switch (genRandNum()) {

			case 0:
			dayQuote = "When it is obvious that the goals cannot be reached, don't adjust the goals; adjust the action steps.";
			break;

			case 1:
			dayQuote = "  ";
			break;

			case 2:
			dayQuote = "  ";
			break;

			case 3: 
			dayQuote = "  ";
			break;	

		}
	}
	else if (day === "Saturday" || day === "saturday") {
		switch (genRandNum()) {

			case 0:
			dayQuote = "When it is obvious that the goals cannot be reached, don't adjust the goals; adjust the action steps.";
			break;

			case 1:
			dayQuote = "  ";
			break;

			case 2:
			dayQuote = "  ";
			break;

			case 3: 
			dayQuote = "  ";
			break;	

		}
	}
	else if (day === "Sunday" || day === "sunday") {
		switch (genRandNum()) {

			case 0:
			dayQuote = "When it is obvious that the goals cannot be reached, don't adjust the goals; adjust the action steps.";
			break;

			case 1:
			dayQuote = "  ";
			break;

			case 2:
			dayQuote = "  ";
			break;

			case 3: 
			dayQuote = "  ";
			break;	

		}
	} 
	else {
		dayQuote = "That is not a day of the week, but here is something that is always relevant... knowing yourself is the key to all wisdom...";
	}
	return dayQuote;
	};



	function getNameQuote (name) {

		function genRandNum2 () {
			return Math.floor(Math.random() * 4);
		};

		let nameQuote = "";

	if (name[0] === "a" || name[0] === "A" || name[0] === "b" || name[0] === "B" ||name[0] === "c" || name[0] === "C" || name[0] === "d"|| name[0] === "D" || name[0] === "e" || name[0] === "E" || name[0] === "F" || name[0] === "f" || name[0] === "g" || name[0] === "G" || name[0] === "H" || name[0] === "h" || name[0] === "I" || name[0] === "i" || name[0] === "J" || name[0] === "j" || name[0] === "K" || name[0] === "k" || name[0] === "L" || name[0] === "l") {
		switch (genRandNum2()) {

		case 0:
		nameQuote = "What the superior man seeks is in himself; what the small seeks is in others.";
		break;

		case 1:
		nameQuote = " ";
		break;
		
		case 2:
		nameQuote = " ";
		break;
		
		case 3:
		nameQuote = " ";
		break;
		}

	}
	else if (name[0] === "M" || name[0] === "m" || name[0] === "N" || name[0] === "n"|| name[0] === "O" || name[0] === "o" || name[0] === "P" || name[0] === "p"|| name[0] === "Q" || name[0] === "q" || name[0] === "R" || name[0] === "r" || name[0] === "S" || name[0] === "s" || name[0] === "T" || name[0] === "t" || name[0] === "U" || name[0] === "u" || name[0] === "V" || name[0] === "v" || name[0] === "W" || name[0] === "w" || name[0] === "X" || name[0] === "x" || name[0] === "Y" || name[0] === "y" || name[0] === "Z" || name [0] === "z") {
		switch (genRandNum2()) {

		case 0:
		nameQuote = "Man is least himself when he talks in his own person. Give him a mask and he will tell you the truth.";
		break;

		case 1:
		nameQuote = " ";
		break;

		case 2:
		nameQuote = "  ";
		break;

		case 3:
		nameQuote = " ";
		break;
		}
	}
	else {
		nameQuote = "I do not recognise that name. No matter. I have this for you... True friends stab you in the front.";
	}
	return nameQuote;
	};

	let nameQuote = getNameQuote(name);
	let dayQuote = getDayQuote(day);

	return `Your name is ${name}. Hmmm... ${nameQuote} And you have said that today is ${day}, ${dayQuote} May these quotes guide you on your path...`;

};
console.log(generateWisdom('Frank', "Wednesday"));
console.log(generateWisdom("20", "poo"));


