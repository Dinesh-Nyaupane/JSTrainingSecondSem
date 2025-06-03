// 1. Area of Circle Calculator
function calculateCircleArea(radius) {
  const numRadius = Number(radius);
  if (!isFinite(numRadius)) return false;
  if (numRadius <= 0) return false;

  const area = Math.PI * Math.pow(numRadius, 2);
  return "Area of circle with radius " + numRadius + " is " + area.toFixed(2);
}

console.log(calculateCircleArea(7)); // Radius > 0, valid -> should return area as 153.94

// 2. OTP Generator (6-digit, No Leading Zeros)
function generateOTP() {
  const otp = Math.floor(100000 + Math.random() * 900000);
  return "Generated OTP is " + otp;
}

console.log(generateOTP()); // OTP must be a 6-digit number from 100000 to 999999

// 3. Dice Roll Simulator
function rollDice() {
  const result = Math.ceil(Math.random() * 6);
  return "Dice roll result: " + result;
}

console.log(rollDice()); // Result should be between 1 and 6

// 4. Fuel Consumption Calculator
function calculateFuelConsumption(distance, fuel) {
  const numDistance = Number(distance);
  const numFuel = Number(fuel);

  if (!isFinite(numDistance)) return false;
  if (!isFinite(numFuel) || numFuel <= 0) return false;

  const consumption = numDistance / numFuel;
  return "Fuel consumption is " + consumption.toFixed(2) + " km/l";
}

console.log(calculateFuelConsumption(450, 35.5)); // Distance and fuel must be positive numbers

// 5. Loan EMI Calculator
function calculateEMI(principal, rate, years) {
  const P = parseFloat(principal);
  const r = parseFloat(rate) / 100 / 12;
  const n = parseFloat(years) * 12;

  const emi = P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
  return "Monthly EMI is " + Math.round(emi);
}

console.log(calculateEMI(500000, 8.5, 20)); // Should return an integer EMI (e.g., 4207)

// 6. Temperature Converter with Validation
function celsiusToFahrenheit(celsius) {
  const numCelsius = Number(celsius);
  if (!isFinite(numCelsius)) return false;

  const fahrenheit = (numCelsius * 9 / 5) + 32;
  return numCelsius + "°C equals " + fahrenheit.toFixed(1) + "°F";
}

console.log(celsiusToFahrenheit(37.5)); // Should return 37.5°C equals 99.5°F

// 7. Random Coupon Code Generator (6-digit)
function generateCouponCode() {
  const code = Math.floor(100000 + Math.random() * 900000);
  return "Coupon code generated: " + code;
}

console.log(generateCouponCode()); // Code must be between 100000 and 999999

// 8. Electricity Bill Calculator
function calculateElectricityBill(units) {
  const consumed = parseInt(units);
  if (isNaN(consumed) || consumed < 0) return false;

  let bill = 0;
  if (consumed <= 100) {
    bill = consumed * 5;
  } else if (consumed <= 200) {
    bill = 100 * 5 + (consumed - 100) * 7;
  } else {
    bill = 100 * 5 + 100 * 7 + (consumed - 200) * 10;
  }

  return "Electricity bill for " + consumed + " units is " + Math.round(bill);
}

console.log(calculateElectricityBill(150)); // For 150 units: 100*5 + 50*7 = 1000

// 9. Dice Game with Re-roll
function diceGame() {
  const firstRoll = Math.ceil(Math.random() * 6);
  if (firstRoll !== 1) return "First roll: " + firstRoll;

  const secondRoll = Math.ceil(Math.random() * 6);
  return "First roll: 1, re-roll: " + secondRoll;
}

console.log(diceGame()); // If first roll is 1, show second roll; else just first roll

// 10. Grade Calculator
function calculateGrade(score) {
  const numScore = Number(score);
  if (!isFinite(numScore) || numScore < 0 || numScore > 100) return false;

  if (numScore >= 80) return "Score " + numScore + " corresponds to grade A";
  if (numScore >= 60) return "Score " + numScore + " corresponds to grade B";
  if (numScore >= 40) return "Score " + numScore + " corresponds to grade C";
  if (numScore >= 20) return "Score " + numScore + " corresponds to grade D";
  return "Score " + numScore + " corresponds to grade F";
}

console.log(calculateGrade(85)); // Score between 80–100 returns grade A

// 11. Bank Interest Calculator
function calculateCompoundInterest(principal, rate, years) {
  const p = parseFloat(principal);
  const r = parseFloat(rate) / 100;
  const n = parseFloat(years);

  const amount = p * Math.pow(1 + r, n);
  return "Final amount after " + n + " years at " + rate + "% is " + amount.toFixed(2);
}

console.log(calculateCompoundInterest(10000, 5, 3)); // Formula: A = P(1 + r)^n

// 12. BMI Calculator with Validation
function calculateBMI(weight, height) {
  const numWeight = Number(weight);
  const numHeight = Number(height);

  if (!isFinite(numWeight) || !isFinite(numHeight) || numWeight <= 0 || numHeight <= 0) return false;

  const bmi = numWeight / Math.pow(numHeight, 2);
  return "BMI calculated as " + bmi.toFixed(1);
}

console.log(calculateBMI(70, 1.75)); // BMI = 70 / (1.75^2) = 22.9

// 13. Maximum Transaction Finder
function findMaxTransaction(amount1, amount2, amount3) {
  const validAmounts = [amount1, amount2, amount3]
    .map(Number)
    .filter(amount => !isNaN(amount) && isFinite(amount));

  if (validAmounts.length === 0) return false;

  const maxAmount = Math.max(...validAmounts);
  return "Maximum valid transaction amount is " + maxAmount;
}

console.log(findMaxTransaction(1000, "abc", 1200.5)); // Should return 1200.5

// 14. Square Root Checker
function calculateSquareRoot(number) {
  const num = Number(number);
  if (isNaN(num) || num < 0) return false;

  const sqrt = Math.sqrt(num);
  return "Square root of " + num + " is " + sqrt;
}

console.log(calculateSquareRoot(16)); // sqrt(16) = 4

// 15. Absolute Temperature Difference
function calculateTempDifference(temp1, temp2) {
  const num1 = Number(temp1);
  const num2 = Number(temp2);

  if (!isFinite(num1) || !isFinite(num2)) return false;

  const diff = Math.abs(num1 - num2);
  return "Temperature difference is " + diff.toFixed(1);
}

console.log(calculateTempDifference(25.4, 30.9)); // Diff = 5.5

// 16. Random Password Length Generator
function generatePasswordLength() {
  const length = Math.floor(8 + Math.random() * 9);
  return "Generated password length is " + length;
}

console.log(generatePasswordLength()); // Should return a number between 8 and 16

// 17. Age Validator
function validateAge(age) {
  const numAge = Number(age);
  return isFinite(numAge) && numAge >= 0 && numAge <= 120;
}

console.log(validateAge(25)); // Valid if age is between 0 and 120 inclusive

// 18. Currency Converter
function convertUSDToEUR(usd) {
  const rate = 0.915;
  const numUSD = Number(usd);
  if (!isFinite(numUSD) || numUSD < 0) return false;

  const eur = numUSD * rate;
  return numUSD + " USD equals " + eur.toFixed(2) + " EUR";
}

console.log(convertUSDToEUR(100)); // 100 * 0.915 = 91.50 EUR

// 19. Random Hex Color Generator
function generateHexColor() {
  const color = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  return "Generated color code: #" + color;
}

console.log(generateHexColor()); // Should return a valid hex code like #a1b2c3

// 20. Loan Eligibility Checker
function checkLoanEligibility(income, expenses) {
  const numIncome = Number(income);
  const numExpenses = Number(expenses);

  if (!isFinite(numIncome) || !isFinite(numExpenses) || numIncome < 0 || numExpenses < 0) return false;

  return numIncome > (3 * numExpenses);
}

console.log(checkLoanEligibility(9000, 2500)); // Eligible if income > 3 * expenses -> 9000 > 7500 → true
