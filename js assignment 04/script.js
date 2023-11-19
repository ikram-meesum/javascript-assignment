document.getElementById("hours").innerHTML = "00";
document.getElementById("minutes").innerHTML = "00";
document.getElementById("ampm").innerHTML = "00";
document.getElementById("date").innerHTML = "00/00/0000";

function getTime() {
  const today = new Date();

  const finalDate = today.toLocaleDateString();
  const dateArray = finalDate.split("/");
  document.getElementById("date").innerHTML =
    dateArray[1] + "/" + dateArray[0] + "/" + dateArray[2];

  console.log(dateArray);

  let finalTime = today.toLocaleTimeString();

  timeArray = finalTime.split(":");
  console.log(timeArray);
  console.log("sdsd", timeArray[0]);
  console.log("len", timeArray[0].length);

  if (timeArray[0].length == 1) {
    timeArray[0] = 0 + timeArray[0];
  }
  document.getElementById("hours").innerHTML = timeArray[0];
  document.getElementById("minutes").innerHTML = timeArray[1];

  let ampm = finalTime.substring(finalTime.length - 2);
  document.getElementById("ampm").innerHTML = ampm;
}
