const btnConvert = document.getElementById("btn-convert");
const inputBox = document.getElementById("input-box");
inputBox.value = 20;

const dspLength = document.getElementById("dsp-length");
const dspVolume = document.getElementById("dsp-volume");
const dspMass = document.getElementById("dsp-mass");

btnConvert.addEventListener("click", function () {
  console.log("Button clicked!");
  const x = inputBox.value;

  dspLength.textContent = `
        ${x} meters = ${getLengthMetricToImperial(x)} feet 
        | 
        ${x} feet = ${getLengthImperialToMetric(x)} meters
    `;

  dspVolume.textContent = `
    ${x} liters = ${getVolumeMetricToImperial(x)} gallons
    |
    ${x} gallons = ${getVolumeImperialToMetric(x)} liters
`;

  dspMass.textContent = `
    ${x} kilos = ${getMassMetricToImperial(x)} pounds
    |
    ${x} pounds = ${getMassImperialToMetric(x)} kilos
`;

  //   console.log(inputNumber);
  //   console.log(getLengthMetricToImperial(x));
  //   console.log(getLengthImperialToMetric(x));
  //   console.log(getVolumeMetricToImperial(x));
  //   console.log(getVolumeImperialToMetric(x));
  //   console.log(getMassMetricToImperial(x));
  //   console.log(getMassImperialToMetric(x));
});

function getLengthMetricToImperial(meters) {
  return (meters * 3.28084).toFixed(3);
}

function getLengthImperialToMetric(feet) {
  return (feet / 3.28084).toFixed(3);
}

function getVolumeMetricToImperial(liters) {
  return (liters / 3.785411784).toFixed(3);
}

function getVolumeImperialToMetric(gallons) {
  return (gallons * 3.785411784).toFixed(3);
}

function getMassMetricToImperial(kilos) {
  return (kilos * 2.204622621848776).toFixed(3);
}

function getMassImperialToMetric(pounds) {
  return (pounds / 2.204622621848776).toFixed(3);
}
