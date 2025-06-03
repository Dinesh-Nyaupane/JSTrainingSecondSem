# 📚 Real-Life Simulation Problems Using Boolean, Number, and Math Objects

---

## 1. 🟢 Area of Circle Calculator  
**Problem:**  
Create a function that prompts the user for the radius of a circle, validates the input as a finite positive number, then calculates and returns the area of the circle rounded to 2 decimal places.

**Hint:**  
Use `Number()`, `isFinite()`, `Math.PI`, `Math.pow()`, and `toFixed()`.

**Sample Input:**  
`7`

**Sample Output:**  
`Area of circle with radius 7 is 153.94`  
*The area is calculated using π × 7², rounded to 2 decimals.*

**What to Use:**  
`Number()`, `isFinite()`, `Math.PI`, `Math.pow()`, `toFixed()`

---

## 2. 🔐 OTP Generator (6-digit, No Leading Zeros)  
**Problem:**  
Create a function that generates a 6-digit OTP as a number, ensuring no leading zeros.

**Hint:**  
Use `Math.random()` scaled between 100000 and 999999, then `Math.floor()`.

**Sample Output:**  
`Generated OTP is 567834`  
*6-digit OTP without leading zeros for secure verification.*

**What to Use:**  
`Math.random()`, `Math.floor()`

---

## 3. 🎲 Dice Roll Simulator  
**Problem:**  
Create a function that simulates rolling a 6-sided dice returning a random integer from 1 to 6.

**Hint:**  
Use `Math.random()`, scaled and rounded appropriately.

**Sample Output:**  
`Dice roll result: 4`  
*Simulates fair dice roll generating number between 1 and 6.*

**What to Use:**  
`Math.random()`, `Math.ceil()`

---

## 4. ⛽ Fuel Consumption Calculator  
**Problem:**  
Calculate fuel consumption in km/l given distance traveled and fuel used.

**Hint:**  
Validate inputs as finite numbers.

**Sample Input:**  
Distance: `450`, Fuel: `35.5`

**Sample Output:**  
`Fuel consumption is 12.68 km/l`  
*Vehicle runs 12.68 km per liter of fuel.*

**What to Use:**  
`Number()`, `isFinite()`, `toFixed()`

---

## 5. 💰 Loan EMI Calculator  
**Problem:**  
Calculate monthly EMI based on principal, annual interest rate, and tenure (years).

**Hint:**  
Use `parseFloat()`, `Math.pow()`, and `Math.round()`.

**Sample Input:**  
Principal: 500000, Rate: 8.5%, Tenure: 20 years

**Sample Output:**  
`Monthly EMI is 4339`  
*Monthly payment calculated from compound interest formula.*

**What to Use:**  
`parseFloat()`, `Math.pow()`, `Math.round()`

---

## 6. 🌡️ Temperature Converter with Validation  
**Problem:**  
Convert Celsius temperature to Fahrenheit with input validation.

**Hint:**  
Use `Number()`, `isFinite()`, `toFixed()` and return `false` on invalid input.

**Sample Input:**  
`37.5`

**Sample Output:**  
`37.5°C equals 99.5°F`  
*Valid Celsius converted accurately.*

**Invalid Input:**  
`"abc"`

**Sample Output:**  
`false`

**What to Use:**  
`Number()`, `isFinite()`, `toFixed()`

---

## 7. 🎫 Random Coupon Code Generator (6-digit)  
**Problem:**  
Generate a random 6-digit coupon code number without leading zeros.

**Sample Output:**  
`Coupon code generated: 345678`

**What to Use:**  
`Math.random()`, `Math.floor()`

---

## 8. 💡 Electricity Bill Calculator  
**Problem:**  
Calculate bill based on slab rates:

| Units Consumed | Rate per Unit |
|----------------|--------------|
| 0 - 100        | 5            |
| 101 - 200      | 7            |
| > 200          | 10           |

**Sample Input:**  
`150`

**Sample Output:**  
`Electricity bill for 150 units is 950`  
*Charges: (100×5) + (50×7) = 500 + 350 = 850*

**What to Use:**  
`parseInt()`, `isNaN()`, `Math.round()`

---

## 9. 🎲 Dice Game with Re-roll  
**Problem:**  
Roll a dice once; if 1, roll again and return second result; else return first.

**Sample Output:**  
`First roll: 4`  
or  
`First roll: 1, re-roll: 5`

**What to Use:**  
`Math.random()`, `Math.ceil()`

---

## 10. 🏅 Grade Calculator  
**Problem:**  
Return grade (A-F) based on score 0-100; false for invalid.

**Grade Mapping:**  
- 80–100: A  
- 60–79: B  
- 40–59: C  
- 20–39: D  
- 0–19: F  

**Sample Input:**  
`85`

**Sample Output:**  
`Score 85 corresponds to grade A`

**Invalid Input:**  
`120`

**Sample Output:**  
`false`

**What to Use:**  
`isFinite()`, Boolean primitive

---

## 11. 📈 Bank Interest Calculator  
**Problem:**  
Calculate compound interest final amount.

**Sample Input:**  
P=10000, r=5, n=3

**Sample Output:**  
`Final amount after 3 years at 5% is 11576.25`

**What to Use:**  
`parseFloat()`, `Math.pow()`, `toFixed()`

---

## 12. ⚖️ BMI Calculator with Validation  
**Problem:**  
Calculate BMI from weight (kg) and height (m).

**Sample Input:**  
Weight = 70, Height = 1.75

**Sample Output:**  
`BMI calculated as 22.9`

**Invalid Input:**  
`weight = "abc"`

**Sample Output:**  
`false`

**What to Use:**  
`Number()`, `isFinite()`, `toFixed()`

---

## 13. 💳 Maximum Transaction Finder  
**Problem:**  
Input 3 transaction amounts, find max ignoring invalid.

**Sample Input:**  
`1000`, `"abc"`, `1200.50`

**Sample Output:**  
`Maximum valid transaction amount is 1200.5`

**What to Use:**  
`Math.max()`, `isNaN()`

---

## 14. √ Square Root Checker  
**Problem:**  
Return square root if input non-negative, else false.

**Sample Input:**  
`16`

**Sample Output:**  
`Square root of 16 is 4`

**Invalid Input:**  
`-9`

**Sample Output:**  
`false`

**What to Use:**  
`Math.sqrt()`, Boolean primitive

---

## 15. ↔️ Absolute Temperature Difference  
**Problem:**  
Return absolute difference of two temps.

**Sample Input:**  
`25.4`, `30.9`

**Sample Output:**  
`Temperature difference is 5.5`

**What to Use:**  
`Math.abs()`, `toFixed()`

---

## 16. 🔢 Random Password Length Generator  
**Problem:**  
Generate random integer between 8 and 16 inclusive.

**Sample Output:**  
`Generated password length is 12`

**What to Use:**  
`Math.random()`, `Math.floor()`

---

## 17. 👶 Age Validator  
**Problem:**  
Validate age between 0 and 120 inclusive.

**Sample Input:**  
`25`

**Sample Output:**  
`true`

**Invalid Input:**  
`150`

**Sample Output:**  
`false`

**What to Use:**  
`isFinite()`, Boolean primitive

---

## 18. 💱 Currency Converter  
**Problem:**  
Convert USD to EUR at fixed rate (e.g., 0.915).

**Sample Input:**  
`100`

**Sample Output:**  
`100 USD equals 91.50 EUR`

**What to Use:**  
`Number()`, `toFixed()`

---

## 19. 🎨 Random Hex Color Generator  
**Problem:**  
Generate random 6-digit hex color code string with `#`.

**Sample Output:**  
`Generated color code: #3a5fcd`

**What to Use:**  
`Math.random()`, `toString(16)`

---

## 20. 💼 Loan Eligibility Checker  
**Problem:**  
Check if income > 3×expenses.

**Sample Input:**  
Income = 9000, Expenses = 2500

**Sample Output:**  
`Loan eligibility: true`

**What to Use:**  
`Number()`, Boolean primitive

---

