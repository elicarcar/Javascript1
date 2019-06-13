const myName = 'Elisabetta';
const myAge = 23;
const isCute = true;
var endOfTheWord;
console.log('The value of my variable myName is: ' + myName);
console.log('The value of my variable myAge is: ' + myAge);
console.log('The value of my variable isCute is: ' + isCute);
console.log('The value of my variable endOfTheWord is: ' + endOfTheWord);
console.log('My first variable\'s type is \'string\'');
console.log('My second variable\'s type is \'number\'');
console.log('My third variable\'s type is \'boolean\'');
console.log('My fourth variable\'s type is \'undefined\'');
console.log(typeof myName);
console.log(typeof myAge);
console.log(typeof isCute);
console.log(typeof endOfTheWord);
if(myAge !== myName){
	console.log('myName is a \'string\' and myAge is a \'number\'. They are not equal.')}
	else{
		console.log('myName and myAge are equal. They\'re both the same type.')};
if(myName === isCute){
	console.log('myName and isCute share the same data type.')}
	else{
		console.log('These two variable\'s type is totally different. One of them is a \'string\', the other one is a Boolean.')}; 
if(endOfTheWord == isCute){
	console.log(`${endOfTheWord} and ${isCute} are equal.`);}
	else{
		console.log(endOfTheWord + isCute + 'are two different variables.');}
if(isCute != myAge){
	console.log('They are not equal');}
	else{
		console.log('These two variables are equal')};

