function calcAverageCalories(days) {
  if (days.length === 0) {
    return 0;
  }
  let totalCalories = 0;
  for (const day of days) {
    totalCalories += day.calories;
  }
  return totalCalories / days.length;
}

console.log(
  calcAverageCalories([
    { day: "Monday", calories: 3100 },
    { day: "Tuesday", calories: 3200 },
    { day: "Wednesday", calories: 3120 },
    { day: "Thursday", calories: 2900 },
    { day: "Friday", calories: 3450 },
    { day: "Saturday", calories: 3280 },
    { day: "Sunday", calories: 3300 },
  ]),
); // 3180

console.log(
  calcAverageCalories([
    { day: "Monday", calories: 2040 },
    { day: "Tuesday", calories: 2270 },
    { day: "Wednesday", calories: 2420 },
    { day: "Thursday", calories: 1900 },
    { day: "Friday", calories: 2370 },
    { day: "Saturday", calories: 2280 },
    { day: "Sunday", calories: 2610 },
  ]),
); // 2270

console.log(calcAverageCalories([])); // 0
