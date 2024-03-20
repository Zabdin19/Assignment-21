// // Prompting user for first and last names
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");

// // Merging first and last names
// var fullName = firstName + " " + lastName;

// // Greeting the user using their full name
// alert("Hello, " + fullName + "! Welcome!");

// Prompting user for favorite mobile phone model
// var phoneModel = prompt("Enter your favorite mobile phone model:");

// Calculating the length of user input
// var inputLength = phoneModel.length;

// Displaying the length in the browser
// document.write(
//   "<h2>My fovorite phone is: " + inputLength + " length of string:"+" </h2>"
// );

// The word
// var word = "Pakistani";

// // Finding the index of letter "n"
// var indexOfN = word.indexOf("n");

// // Displaying the result in the browser
// document.write("<h2>The index of the letter 'n' in the word 'Pakistani' is: " + indexOfN + "</h2>");

// The word
//    var word = "Hello World";

// Finding the last index of letter "l"
//    var lastIndex = word.lastIndexOf("l");

// Displaying the result in the browser
//    document.write("<h2>The last index of the letter 'l' in the word 'Hello World' is: " + lastIndex + "</h2>");

// The word
// var word = "Pakistani";

// Finding the character at the 3rd index
// var charAtThirdIndex = word.charAt(3);

// Displaying the result in the browser
// document.write("<h2>The character at the 3rd index in the word 'Pakistani' is: " + charAtThirdIndex + "</h2>");

// Prompting user for first and last names
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");

// Merging first and last names using concat() method
// var fullName = firstName.concat(" ", lastName);

// Greeting the user using their full name
// alert("Hello, " + fullName + "! Welcome!")

// var word = "Hyderabad";

// Replacing "Hyder" with "Islam"
// var newWord = word.replace("Hyder", "Islam");

// Displaying the result in the browser
// document.write("<h2>Original word: " + word + "</h2>");
// document.write("<h2>After replacement: " + newWord + "</h2>");

// The original string
//   var message = "Ali and Sami are best friends. They play cricket and football together.";

// Replacing all occurrences of "and" with "&"
//   var newMessage = message.replace(/and/g, "&");

// Displaying the result in the browser
//   document.write("<h2>Original message: " + message + "</h2>");
//   document.write("<h2>After replacement: " + newMessage + "</h2>");

// Original string
// var originalString = "472";

// Converting string to number
// var convertedNumber = Number(originalString);

// Displaying values and types
// document.write("<h2>Original string value: " + originalString + "</h2>");
// document.write("<h2>Original string type: " + typeof originalString + "</h2>");
// document.write("<h2>Converted number value: " + convertedNumber + "</h2>");
// document.write("<h2>Converted number type: " + typeof convertedNumber + "</h2>");

// Prompting user for input
// var userInput = prompt("Enter some text:");

// Converting input to capital letters
// var capitalizedInput = userInput.toUpperCase();

// Displaying the capitalized input
// document.write("<h2>Original input: " + userInput + "</h2>");
// document.write("<h2>Capitalized input: " + capitalizedInput + "</h2>");

// Function to convert string to title case
function toTitleCase(str) {
  return str.replace(/\b\w/g, function (txt) {
    return txt.toUpperCase();
  });
}

// Prompting user for input
//   var userInput = prompt("Enter some text:");

// Converting input to title case
//   var titleCaseInput = toTitleCase(userInput);

// Displaying the title case input
//   document.write("<h2>Original input: " + userInput + "</h2>");
//   document.write("<h2>Title case input: " + titleCaseInput + "</h2>");

// The original number
//   var num = 35.36;

// Converting number to string and removing dot
//   var numAsString = num.toString().replace(".", "");

// Displaying the result in the browser
//   document.write("<h2>Original number: " + num + "</h2>");
//   document.write("<h2>Number as string without dot: " + numAsString + "</h2>");

// Function to check if username contains special symbols
//  function isValidUsername(username) {
//     for (var i = 0; i < username.length; i++) {
//       var charCode = username.charCodeAt(i);
//       if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
//         return false;
//       }
//     }
//     return true;
//   }

// Prompting user for username
//   var username = prompt("Enter your username:");

// Validating the username
//   while (!isValidUsername(username)) {
//     username = prompt("Please enter a valid username without special symbols like '@', '.', ',', '!':");
//   }

// Displaying the validated username
//   alert("Valid username: " + username);

// Array of items
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// Function to perform case-insensitive search
// function searchItem(item) {
//     for (var i = 0; i < A.length; i++) {
//         if (A[i].toLowerCase() === item.toLowerCase()) {
//             return true;
//         }
//     }
//     return false;
// }

// Prompting user for input
// var userInput = prompt("Enter an item to search:");

// Checking if the item is found
// var isFound = searchItem(userInput);

// Displaying the result
// if (isFound) {
//     alert("Yes, '" + userInput + "' is found in the list.");
// } else {
//     alert("No, '" + userInput + "' is not found in the list.");
// }

// Function to check if password meets requirements
// function isValidPassword(password) {
//     // Check if password contains alphabets and numbers
//     var containsAlphabets = false;
//     var containsNumbers = false;
//     for (var i = 0; i < password.length; i++) {
//         var charCode = password.charCodeAt(i);
//         if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
//             containsAlphabets = true;
//         } else if (charCode >= 48 && charCode <= 57) {
//             containsNumbers = true;
//         }
//     }

//     // Check if password doesn't start with a number and is at least 6 characters long
//     return !containsNumbers || !containsAlphabets || password.length < 6 || !isNaN(password[0]);
// }

// // Prompting user for password
// var password = prompt("Enter your password:");

// // Checking if the password meets requirements
// while (isValidPassword(password)) {
//     password = prompt("Please enter a valid password that contains alphabets and numbers, does not start with a number, and is at least 6 characters long:");
// }

// // Displaying the validated password
// alert("Your password is valid: " + password);

// Original string
// var university = "University of Karachi";

// // Splitting the string into an array
// var universityArray = university.split(" ");

// // Displaying the elements of the array in the browser
// document.write("<h2>Elements of the array:</h2>");
// document.write("<ul>");
// for (var i = 0; i < universityArray.length; i++) {
//     document.write("<li>" + universityArray[i] + "</li>");
// }
// document.write("</ul>");

// // Prompting the user for input
// var userInput = prompt("Enter a string:");

// // Getting the last character of the input
// var lastCharacter = userInput.charAt(userInput.length - 1);

// // Displaying the last character
// alert("The last character of your input is: " + lastCharacter);

// Given string
// var sentence = "The quick brown fox jumps over the lazy dog";

// // Convert the sentence to lowercase to perform case-insensitive search
// sentence = sentence.toLowerCase();

// // Split the sentence into an array of words
// var words = sentence.split(" ");

// // Counter to store the number of occurrences of "the"
// var count = 0;

// // Loop through each word in the array and count occurrences of "the"
// for (var i = 0; i < words.length; i++) {
//     if (words[i] === "the") {
//         count++;
//     }
// }

// // Display the count of occurrences of "the"
// alert("Number of occurrences of 'the' in the given string: " + count);

// Q1 : var allLower = userInput.toLowerCase();

// Q2: x = x.toLowerCase();

// Q3: y = y.toUpperCase();

// Q4: var lowerCaseVariable = originalVariable.toLowerCase();

// Q5: var lowerCaseVariable = arr[index].toLowerCase();

// var cityName = prompt("Enter the city name:");
// var lowercaseCityName = cityName.toLowerCase();

// alert("Lowercase version of the city name: " + lowercaseCityName);

// ------------------CHAPTER 22 - 25 (STRING)----------------------

// Q1:
//  var sameWords = "captain";
// var slicedPart = sameWords.slice(1, 3);

// alert("Sliced part: " + slicedPart);

// Q2:
// var sameWords = "captain";
// var numberOfCharacters = sameWords.length;

// alert("Number of characters: " + numberOfCharacters);

// Q3:
// var animal = "elephant";
// var middleIndex = Math.floor(animal.length / 2); // Calculate the middle index
// var seg = animal.slice(middleIndex - 2, middleIndex + 2); // Slice the four middle characters

// alert("Sliced middle characters: " + seg);

// Q4:
// var str = "example";
// var numberOfCharacters = str.length;

// alert("Number of characters in the string: " + numberOfCharacters);

// Q5:
// Assuming 'str' is the variable representing the string
// var str = "example"; // Example string

// // Measure the number of characters in the string
// var numberOfCharacters = str.length;

// // Slice all but the first character and last 3 characters of the string
// var slicedString = str.slice(1, -3);

// // Displaying the results
// console.log("Number of characters in the string: " + numberOfCharacters);
// console.log("Sliced string: " + slicedString);

// Q6:
// var text = "To be or not to be.";
// var indx = text.indexOf("be");

// Q7:
// var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");

// Q8:
// var text = "Let's go and then go again";
// var searchString = "go";
// var lastIndex = text.lastIndexOf(searchString);
// var indx = lastIndex !== -1 ? lastIndex : -1;

// if (indx !== -1) {
//     indx = lastIndex;
// }

// console.log("Index of the first character of the last instance of 'go': " + indx);

// Q9:
// if (str.charAt(indexNum) !== "") {
// }

// Q10:
// var text = "This is a sample text.";
// var cha = text.charAt(9);

// console.log("10th character in the string: " + cha);

// Q11:
// 12. Find the last character in the string represented by str and assign it to x
// var str = "Hello World!";
// var x = str.charAt(str.length - 1); // Index of the last character is length - 1

// console.log("Last character in the string: " + x);

// // 13. Find the 5th character in a string represented by input and assign it to cha
// var input = "OpenAI";
// var cha = input.charAt(4); // Indexing starts from 0, so the 5th character is at index 4

// console.log("5th character in the string: " + cha);
