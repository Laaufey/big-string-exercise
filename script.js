"use strict";

document.querySelector("button").addEventListener("click", results);

function results() {
  console.log("results");
  const input = document.querySelector("#input").value;
  const value = document.querySelector("#select");
  const output = document.querySelector("#output");
  const space = " ";

  // Value 1 First name - Make the first character uppercase, teh rest lowercase
  if ((input.includes(space) === false, value.value === "1")) {
    const firstChar = input.substring(0, 1).toUpperCase();
    const finalChar = input.substring(1).toLowerCase();

    document.querySelector(".output").innerHTML = firstChar + finalChar;
  }

  // Value 2 Full name - Find the first name
  // Value 3 Full name - Find the length of the first name
  // Value 4 Full name - Find middle name
  // Value 5 Filename - Check if it is .png or .jpg
  // Value 6 Password - Hide the password with the correct number of *s
  // Value 7 Any input - Make the third character in a name uppercase
  // Value 8 Any input - Make a character uppercase, if it follows a space or a hyphen
}
