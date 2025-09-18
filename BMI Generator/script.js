const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");
  const message = document.querySelector("#message");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = "Please give a valid height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = "Please give a valid weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;

    const bmivalue = parseFloat(bmi);
    if (bmivalue < 18.6) {
      message.innerHTML = "Your BMI is under Weight!";
    } else if (bmivalue > 24.9) {
      message.innerHTML = "Your BMI is over Weight!";
    } else {
      message.innerHTML = "Great! Your BMI is average...";
    }
  }
});
