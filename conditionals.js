const temperature = 101;
const raining = false;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
} if (temperature > 100) {
  console.log("HELLFIRE APOCALYPSE!!!");
} if (!raining) {
  console.log("Leave your umbrella at home!");
} else {
  console.log("Short sleeves are fine.");
}