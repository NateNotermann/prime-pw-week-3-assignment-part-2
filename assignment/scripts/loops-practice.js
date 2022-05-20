console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {  
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this?
console.log('count from 0 to 5');
for (let i=0; i<6; i++) {
  console.log(i);
}
//------------------------------1.a DONE -------------------------------
console.log( '--------1.a DONE ---------' );

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this? 
console.log('count from 3 to 5');

for (let i=3; i<6; i++ ) { // changed i=0 to i=3.
  console.log(i); 
}
//------------------------------1.b DONE -------------------------------
console.log( '--------1.b DONE ---------' );

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');

for ( let i = 1; i<11; i++ ) {   //start at 1, as long as i is less than 11(10), i increment 1
  if ( i % 2 == 0 ) {  //if i's remainder of 2 is equal to 0, than -->
  console.log( i );}  //console.log i
}
//------------------------------1.c STRECH DONE -------------------------------
console.log( '--------1.c STRECH DONE---------' );

//-----------COME BACK TO 1.C STRRETCH GOAL!!!!----!+!+!+!+!+!+!+!+!+!+!+!+!+!+!+!+!+!+!+!+!+!!++!-------

// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');

for (let i=5; i>-1; i-- ){
  console.log(i);
}
//------------------------------1.d STRETCH DONE -------------------------------
console.log( '--------1.d  STRETCH DONE ---------' );

// 2. For of loops  
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array //FOR OF 2
console.log('Some stars:');

for ( let star of stars ) { //"OF" cycles threw all of the items in the array until it gets to the end.
  console.log('for OF stars:', star); // learned "OF" give you the actual index item VALUE
}

for(i in stars) {  //  --- just added an "FOR IN" loops for practice 
  //not answer to question, becuase it asked or a "FOR OF" loop
  // LEARNED "IN" just give you the INDEX of the item -----------
  console.log( 'for IN stars:', stars[ i ] );  //you need to add the BRACKET to the current index or STARS to console.log each item
} //just practice

//------------------------------2.a DONE -------------------------------
console.log( '//--------2.a DONE ---------' );
// 3. While loops  
console.log('---- 3. While loop ----');
// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');

//attempt 1 -----  // it does console log each star, only because it console.logs the entire array
// while (stars) {
//   console.log( stars );
//   stars++;
// }

// i = 0;
// while ( stars[i]; ) {
//   console.log( stars[i] );
//   i++;
// }

//---------3.a ANWERS 1 - START--------------
console.log(' ---3.a ANWERS 1 - START---- ');
newLength = stars.length; // make new variable, assigns it the value of the number of items in the stars array
{ // "LET i" only works if i seperate this entire block of code with another set of curly brackets
let i = 0; // cannont create a varaible that already exsists (in theis docuemnt) 
//maybe i already created an i cariable in previously in thei document. YEP - THAT WAS WHY IT DIDN't WORK

// i = 0; // only worked when i just wroke i = 0. 
console.log( '"newLength" variable is:', newLength ); //console.log that value. Stars arrays has 5 items, newLength should equal stars
while ( i < newLength ) {
  console.log( 'listing stars items v1:', stars[i] );
  i++;
}
} // "LET i" only works if i seperate this entire block of code with another set of curly brackets
//---------3.a ANWERS 1 - STOP--------------

//---------3.a ANWERS 2 - START--------------
console.log(' ---3.a ANWERS 2 - START---- ');
i = 0; // just ASSIGNING new VALUE to i, not creating a new variable
console.log( '"newLength" variable is:', newLength ); //console.log that value. Stars arrays has 5 items, newLength should equal stars
while ( i < newLength ) {
  console.log( 'listing stars items v2:', stars[i] );
  i++;
} 
//---------3.a ANWERS 2 - STOP--------------
console.log( '//--------3.a DONE ---------' );

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log( '---3.b ----');
console.log('count from 0 to 5');
//answer 1
console.log( '--3.b answer 1--');
i = 0;
while ( i<6 ) {
  console.log( i );
  i++;
}

console.log( '--3.b answer 2--');
i = 0;
while ( i<=5 ) { // same as answer 1, just uses different math. 
  //instead of LESS THAN 6, uses LESS or EQUAL TO 5. 
  console.log( i );
  i++;
}
console.log( '//--------3.b DONE ---------' );

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');
