```javascript

Describe: cryptoSquare()

Test: "It should count the number of characters in a string."
Code:
  cryptoSquare("test string for fun");
Expected Output: 19

Test: "It should ignore spaces in a string."
Code:
  cryptoSquare("test string for fun");
Expected Output: 16

Test: "It should find the square root of the number of characters in the modified string."
Code: 
  cryptoSquare("test string for fun");
Expected Output: 4

Test: "It should round the square root up if counter is not an integer."
Code:
  cryptoSquare("test strings for fun);
Expected Output: 5

Test: "It should push every 4th letter to a new array."
Code:
Expected Output: tion

test
stri
ngfo
rfun

if our modified message is "teststringforfun", then we write a function to shift off the first letter of the string, in this case "t", then we take that mutated string: "eststringforfun" and write a loop that iterates through, grabbing every 4th letter (this would be informed by finalCounter), and creating a new string. Then we'd have to add that shifted first letter back to the beginning. "Unshift it," if you will.

tsnre tgfsr futio n



4



```