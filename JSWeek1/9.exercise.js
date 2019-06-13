var x = 7;
x = x % 3;
console.log(x); //The output will be 1;
console.log('The output of x will always be the remainder of the divided number. This is why we use % operator for.');
console.log('We can actually demonstrate it with the example below.');

var x = 6;
do{x = x + 1;
   x % 3;
   console.log(`The remainder of ${x} % 3 is ${x % 3}`);
} while (x < 15);


