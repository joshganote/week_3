// REQUIRED FEATURES
console.log('scripts/assignment');
// 1. Create a variable with a value of an array with the following (number) values: 3, 6, 7, 10
let moms_spaghetti=['3','6','7','10'];
// 2. Create a variable called 'myValue' with a value of the number 0
let myValue=0;
// 3. Console log the value of the array at index 2
console.log(moms_spaghetti[2]);
// 4. Remove the last item in the array, then console log the array
moms_spaghetti.pop()
console.log(moms_spaghetti);
// 5. Add the value of number 15 to the end of the array
moms_spaghetti.push('15')
// 6. Write a `for` loop that console logs each value in the array
for (let i=0; i<moms_spaghetti.length; i++){
  console.log('for loop', moms_spaghetti[i]);
}

// STRETCH GOALS

// 7. Write a `while` loop that will increase the value of 'myValue' by 1 until its value is 10
while(myValue<10){
  console.log('while loop. myValue:', myValue);
  myValue++;
}
// 8. Change the second value in the array from 6 to 20, then console log the array
moms_spaghetti[1]= '20'
console.log(moms_spaghetti);
// 9. Below, rewrite the `for` loop from question 6 to a `for of` loop
for(number of moms_spaghetti){
  console.log('for loop', number);
}
// 10. Reassign the value of `myValue` to 3. Then, write a `for` loop that console logs each value in the array,
// and if the index of the array matches the value of 'myValue', also console log 'Hurray!'

for(i in moms_spaghetti){
  myValue=3;
  console.log('for loop', moms_spaghetti[i]);
  if(moms_spaghetti[i]==='3'){
  console.log('Hurray!');
  }
}
