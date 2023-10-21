// Simulate real-time temperature updates
function updateTemperature() {
  setInterval(function () {
    // Simulate temperature values between 20 and 30 degrees Celsius
    let sensor1Value = Math.random() * 10 + 20;
    let sensor2Value = Math.random() * 10 + 20;
    let sensor3Value = Math.random() * 10 + 20;
    let sensor4Value = Math.random() * 10 + 20;
    let sensor5Value = Math.random() * 10 + 20;
    let sensor6Value = Math.random() * 10 + 20;

    // Update the circular progress bar and text for each sensor
    updateCircularProgressBar("sensor1Progress", sensor1Value, "1");
    updateCircularProgressBar("sensor2Progress", sensor2Value, "2");
    updateCircularProgressBar("sensor3Progress", sensor3Value, "3");
    updateCircularProgressBar("sensor4Progress", sensor4Value, "4");
    updateCircularProgressBar("sensor5Progress", sensor5Value, "5");
    updateCircularProgressBar("sensor6Progress", sensor6Value, "6");
  }, 2000); // Update every 2 seconds
}

// Update the circular progress bar based on temperature value
function updateCircularProgressBar(elementId, temperature, textElementId) {
  let progress = ((temperature - 20) / 10) * 360; // Map temperature to degrees
  $("#" + elementId).text(temperature.toFixed(2) + " °C");
  $("#" + textElementId).text(
    "Sensor " + textElementId + ": " + temperature.toFixed(2) + " °C"
  );
}

// Start updating temperature values
$(document).ready(function () {
  updateTemperature();
});
