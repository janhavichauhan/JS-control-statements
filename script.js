// Challenge 1: Create a for loop to print all the even numbers till 100 in the console.
for (let even_number = 2; even_number <= 100; even_number += 2) {
  console.log(even_number);
}

// Challenge 2: Create a while loop to print all the odd numbers till 100 in the console.
let odd_number = 1;

while (odd_number <= 100) {
    console.log(odd_number);
    odd_number += 2;
}

// Challenge 3: Create a do while loop to print all the multiples of 3 till 100 in the console.
let multiple3 = 3;

do {
    console.log(multiple3);
    multiple3 += 3;
} while (multiple3 <= 100);

// Challenge 4: Create a for loop to print all the prime numbers till 100 in the console.
for (let prime = 2; prime <= 100; prime++) {
  let isPrime = true;

  for (let divisor = 2; divisor <= Math.sqrt(prime); divisor++) {
      if (prime % divisor === 0) {
          isPrime = false;
          break;
      }
  }
  if (isPrime) {
    console.log(prime);
}

}
