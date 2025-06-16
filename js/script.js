// Copyright (c) 2025 Isaaq Simon All rights reserved
//
// Created by: Isaaq Simon
// Created on: June 2025
// This file contains the JS functions for index.html
function multiplyByAddition() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const output = document.getElementById("output");
  
    const n1 = Number(num1);
    const n2 = Number(num2);
  
    // Input validation
    if (!Number.isInteger(n1) || !Number.isInteger(n2)) {
      output.innerHTML = "Please only enter whole numbers.";
      return;
    }
  
    if (n1 <= 0 || n2 <= 0) {
      output.innerHTML = "Please only enter positive numbers.";
      return;
    }
  
    // Multiply using addition
    let sum = 0;
    let repeatedString = "";
  
    for (let i = 0; i < n2; i++) {
      sum += n1;
      repeatedString += n1;
      if (i < n2 - 1) {
        repeatedString += " + ";
      }
    }
  
    output.innerHTML = `${repeatedString} = ${sum}`;
  }