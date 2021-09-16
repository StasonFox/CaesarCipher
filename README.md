# CaesarCipher
#### Description: Third JavaScript Algorithms and Data Structures project from FreeCodeCamp: Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

This project is a Caesar cipher. I created an accumulator and an array holding all uppercase letters of the alphabet. I iterate through the string and, if characters from str are found in the array, all letters in the array are looped over and an index is acquired for each given character. Then 13 is either added or subtracted from each index and added to the accumulator. If characters from str are not found in the array, those characters are added to the accumulator. Finally, I return the accumulator.
