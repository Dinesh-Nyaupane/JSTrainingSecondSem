# JS Function Practice Problems — Intermediate Numeric Functions

---

### 1. Nested Functions: Car Trip Time Estimator  
**Problem:**  
Write a function `tripTime(distance, speed)` that calculates time (in hours) to cover `distance` km at `speed` km/h.  
Inside it, define a nested function `convertToMinutes(hours)` that converts hours to minutes and returns it.  
`tripTime` should return total time in minutes.

**Sample Input:**  
`tripTime(120, 60)`

**Sample Output:**  
`120`

**Hint:**  
Use division to get hours, nested function to convert to minutes.

---

### 2. Recursion: Sum of Digits  
**Problem:**  
Write a **recursive** function `sumDigitsRecursive(num)` that returns the sum of digits of `num`.

**Sample Input:**  
`sumDigitsRecursive(1234)`

**Sample Output:**  
`10`

**Hint:**  
Sum last digit plus recursive call on `num // 10`, base case when `num` is 0.

---

### 3. Nested Function with Conditions: Exam Result  
**Problem:**  
Write a function `examResult(marks1, marks2)` that returns `"Passed"` if total marks ≥ 50 else `"Failed"`.  
Inside it, define a nested function `totalMarks()` that sums `marks1` and `marks2`.

**Sample Input:**  
`examResult(30, 25)`  
`examResult(20, 15)`

**Sample Output:**  
`"Passed"`  
`"Failed"`

**Hint:**  
Use the nested function to calculate total marks, then use if-else to decide pass or fail.

---

### 4. Recursive Factorial  
**Problem:**  
Write a **recursive** function `factorialRecursive(n)` to compute factorial of `n`.

**Sample Input:**  
`factorialRecursive(5)`

**Sample Output:**  
`120`

**Hint:**  
Base case is when `n` equals 0 or 1; recursive case multiplies `n` by factorial of `n-1`.

---

### 5. Nested Function: Salary Calculator  
**Problem:**  
Write a function `calculateSalary(hoursWorked)` that calculates salary based on:  
- First 40 hours paid at $10/hour  
- Hours beyond 40 paid at $15/hour  

Inside it, define a nested function `overtimePay(hours)` that calculates pay for overtime hours.

**Sample Input:**  
`calculateSalary(45)`

**Sample Output:**  
`475`

**Hint:**  
Use conditionals to check if hoursWorked is more than 40 and calculate salary accordingly.

---

### 6. Nested Functions & Conditions: Speed Check  
**Problem:**  
Write a function `speedCheck(speed)` that returns `"Slow"` if speed < 30, `"Average"` if speed between 30-60, `"Fast"` if speed > 60.  
Inside it, define a nested function `speedCategory()` that returns the category string based on `speed`.

**Sample Input:**  
`speedCheck(25)`  
`speedCheck(45)`  
`speedCheck(75)`

**Sample Output:**  
`"Slow"`  
`"Average"`  
`"Fast"`

**Hint:**  
Use nested function to decide the category, then return it.

---

### What to Use:  
- Nested functions  
- Recursion  
- Conditionals and loops  
- Basic math operations  
- Type of function that we have studied any.  

### What NOT to Use:  
- Arrays  
- Strings or string operations  
- Objects  
