console.log('We can store multiple data types in an array. They can be in the same array, or may be a part of different nested arrays.');
var myArr = [['Hasan'],[23],['Hasan', 23]];
console.log(myArr);

if(Array.isArray(myArr)){
	console.log(myArr);}
	else{
		console.log('This is not an array.');}

console.log(myArr[0]);
console.log(myArr[1]);
console.log(myArr[2]);




console.log('Let\'s look at our two infinite value and compare them in a basic way first.');
var myInfinite1 = 6 / 0; 
var myInfinite2 = 10 / 0;

if(myInfinite1 === myInfinite2){
	console.log('This comparison is true.');} //Output will be this one.
	else{console.log('This comparison is false');}

console.log('Now let\'s print our two values');
console.log(myInfinite1 && myInfinite2);
console.log('The infinite values are not enumerable, writeable or configurable.\n If a variables value is equal to \'infinity\', it will be executed just like that.\nEvery number divided to 0 will be Infinity.');

function division(x){
	if(Number.isFinite(36472/x))
		return 'Number is Infinity!';
		return 'Number is NOT Infinity!';
}

console.log(division(0));
console.log(division(2));
console.log('So from before, our two values myInfinite1 and myInfinite2 are completely equal.\n They cannot have a visible result.\n So both of their ouput will always be equal to \'infinity\'')





