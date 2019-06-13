console.log('I'm awesome');
/*In this case, the output will be:
  SyntaxError missing ) after argument list 
  A typo error caused by single quotations
  To prevent this situation*/

console.log("I'm awesome"); // Output will be --> I'm awesome 
/* We can play safe and make to string with double quotes. So that's an approach.
   But instead of doing this.. */

console.log('I\'m awesome'); // Output will be --> I'm awesome
// Or we can use Template Literals	
	
console.log(`I'm awesome`); //Still the output will be -> I'm awesome

