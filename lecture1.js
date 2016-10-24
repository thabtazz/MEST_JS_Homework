/*
 * 1. Are the following variable valid? If it is not please explain it and correct them using the est practise
 */

var 1stCar = 'Doge';
//Invalid because the variable should not start with number
var firstCar = 'Doge';

var var = 'variable';
//Invalid because the keyword var is reserved 
var = 'variable';

var first name = 'Jerry';
//Invalid because there shouldn't be space in the variable
var firstName = 'Jerry';

var Sch00lName = 'MEST';
//Invalid because the variable should be in lower case
var schoolName = 'MEST';

var totalnumber = 100;
//Invalid because the N on the totalnumber should be in uppercase
var totalNumber = 100; 

/*
 * 2. Are the following variable valid? If it is not please explain it and correct them by using the best practise
 */
var greeting  =  'It's nice to me you today!';
//Invalid because variable shouldn't be in single quotation
var greeting = "It's nice to me you today!"; 

var response = "Ashwin said, "Yes Sir!"";
//Invalid because there is too many quotation
var response = "Ashwin said, Yes Sir!";


/*
 * 3. Try 0.3 + 0.1 === 0.4, explain what happen here
 It returns true
 */

/*
 * 4. Build a pizza object by using all three object creation method, it must has at least 4 properties
 */
  var pizza = new Object();
  pizza.size = "medium"
  pizza.flavor = "beef"
  pizza.ingredients = "baking flower"
  pizza.price = "60 cedis"


  var pizza = {
  	size: "medium",
  	flavor: "beef",
  	ingredients: "baking flower",
  	price: "60 cedis"
  }
function Pizza (size, flavor, ingredients, price) {
	this.size = size;
	this.flavor = flavor;
	this.incredients = ingredients;
	this.price = price;


}
var pizza = new Pizza("medium","beef","baking flower","60 cedis", true); 

/*
 *  5. Build a Animal object by using object constructor function, and add at least two method to prototype,
 *     create two animals from it.
 */
 var animal = new object(); 
 animal.dog = "wolf"
 animal.bird = "stork"
 

function Animal (height,size, spicey,) {
	this.height = height + "cm"; 
	this. size = size + "kg"; 
	this.spicey = spicey;  
}
var wolf = new Animal(60, 38, "dog")
var stork = new Animal(45, 12.1, "bird")

/*
 * 6. Write a small menu selection function by using if-else and switch, input number, output name of your order
 */
function menuSelection (orderNumber) {
	switch (orderNumber) {
		case 1: 
		return "Pizza order"; 
		break;
		case 2:
		return "Burger order"
		break; 
		case 3:
		return "Cool drinks order"
		break; 
		default:
		return "Please input a number between 1 an 3"
		break; 
	}
}

/*
 * 7. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array ,for loop and conditions.
 */
var scores = [50, 67, 80, 90, 100, 30, 88, 68]; 
function studentScores (array) {
	for(i = 0; i <= array.length; i++){
		var value = array[i];
		var passMark = 50; 
		count = 0
		if (value < passMark){
			count +=value

		}
	} return count + "out of " + array.length + "Students failed the Test"
}
console.log(studentScores(scores))

/*
 * 8. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array , array.forEach and conditions.
 */
 function studentScores (array) {
 	array.forEach(function(score) {
 		console.log(score);

 	});
 }